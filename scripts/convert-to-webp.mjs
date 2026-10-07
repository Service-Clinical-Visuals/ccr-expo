// Converts every .png/.jpg/.jpeg in /public to .webp and updates references in app/.
//
//   node scripts/convert-to-webp.mjs            dry run: report only, writes nothing
//   node scripts/convert-to-webp.mjs --write    convert + rewrite references (keeps originals)
//   node scripts/convert-to-webp.mjs --write --delete   also delete the originals
//   node scripts/convert-to-webp.mjs --check    dry run, exits 1 if anything is left (used by the pre-commit hook)
//
// Options: --quality=80 (lossy quality for all images)
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const SOURCE_DIRS = ["app"].map((d) => path.join(ROOT, d));
const SOURCE_EXT = /\.(tsx?|jsx?|mjs|css|scss|json|mdx?)$/;
const IMAGE_EXT = /\.(png|jpe?g)$/i;

const args = process.argv.slice(2).map((a) => a.trim()); // trim: CRLF hooks pass "--check\r"
const WRITE = args.includes("--write");
const DELETE = args.includes("--delete");
const CHECK = args.includes("--check") && !WRITE;
// Only needed for converting, so --check works without sharp installed
const sharp = WRITE ? (await import("sharp")).default : null;
const QUALITY = Number(args.find((a) => a.startsWith("--quality="))?.split("=")[1] ?? 80);

async function walk(dir, filter) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full, filter)));
    else if (filter(entry.name)) out.push(full);
  }
  return out;
}

const toWebp = (p) => p.replace(IMAGE_EXT, ".webp");

// 1. Convert images
const images = await walk(PUBLIC_DIR, (n) => IMAGE_EXT.test(n));
let before = 0;
let after = 0;
let failed = 0;

for (const [i, file] of images.entries()) {
  const target = toWebp(file);
  const { size } = await fs.stat(file);
  before += size;
  if (!WRITE) continue;
  try {
    await sharp(file).webp({ quality: QUALITY, effort: 5 }).toFile(target);
    after += (await fs.stat(target)).size;
    if (DELETE) await fs.unlink(file);
  } catch (err) {
    failed++;
    console.error(`  ✗ ${path.relative(ROOT, file)}: ${err.message}`);
  }
  if ((i + 1) % 100 === 0) console.log(`  converted ${i + 1}/${images.length}`);
}

// 2. Rewrite references. A reference is only changed when its .webp version matches the
//    tail of a /public .webp file (converted now or in an earlier run), so remote URLs and
//    missing files are left alone (this also covers short paths like /ahg/x.png -> public/moto/ahg/x.webp).
const toPublicPath = (f) => "/" + path.relative(PUBLIC_DIR, f).split(path.sep).join("/");
const webpPaths = [
  ...new Set([
    ...images.map((f) => toWebp(toPublicPath(f))),
    ...(await walk(PUBLIC_DIR, (n) => /\.webp$/i.test(n))).map(toPublicPath),
  ]),
];
const TEMPLATE_EXPR = /\$\{[^{}]*\}/g;
const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const isConverted = (ref) => {
  let decoded = ref;
  try { decoded = decodeURI(ref); } catch {}
  const tail = toWebp("/" + decoded.replace(/^\.?\//, ""));
  if (!tail.includes("${")) return webpPaths.some((p) => p === tail || p.endsWith(tail));
  // Template literal like /moto/x/icon${num}.png: each ${...} matches one path segment part
  const re = new RegExp(tail.split(TEMPLATE_EXPR).map(escapeRegex).join("[^/]*") + "$");
  return webpPaths.some((p) => re.test(p));
};

// Also matches template literals with ${...} inside, e.g. `/moto/airstal/icon${num}.png`,
// and filenames with spaces/parentheses, e.g. "/moto/emka/logo 1 (1).png"
const REF = /(?:[^"'`()\s{}$]|\$\{[^{}`]*\}|\([^"'`()\s]*\)| (?=[^"'`\s]))*\.(?:png|jpe?g)(?=["'`)\s?#])/gi;
const sources = (await Promise.all(SOURCE_DIRS.map((d) => walk(d, (n) => SOURCE_EXT.test(n))))).flat();
let refsChanged = 0;
const unmatched = new Set();

for (const file of sources) {
  const text = await fs.readFile(file, "utf8");
  let count = 0;
  const next = text.replace(REF, (ref) => {
    if (/^https?:/.test(ref) || !isConverted(ref)) {
      unmatched.add(ref);
      return ref;
    }
    count++;
    return toWebp(ref);
  });
  if (count) {
    refsChanged += count;
    console.log(`  ${count.toString().padStart(4)}  ${path.relative(ROOT, file)}`);
    if (WRITE) await fs.writeFile(file, next);
  }
}

const mb = (b) => (b / 1024 / 1024).toFixed(1) + " MB";
console.log(`\n${WRITE ? "Done" : "Dry run"}: ${images.length} images (${mb(before)})`);
if (WRITE) console.log(`  webp total: ${mb(after)}, failed: ${failed}`);
console.log(`  references ${WRITE ? "updated" : "to update"}: ${refsChanged}`);
if (unmatched.size) {
  console.log(`\n  ${unmatched.size} references left unchanged (remote or not found in /public — check manually):`);
  for (const r of [...unmatched].slice(0, 30)) console.log(`    ${r}`);
}

// Terminal colors (set NO_COLOR=1 to turn off)
const color = (code) => (s) => (process.env.NO_COLOR ? s : `\x1b[${code}m${s}\x1b[0m`);
const red = color("1;31");
const green = color("32");
const yellow = color("33");
const cyan = color("36");
const bold = color("1");
const gray = color("90");

if (CHECK && (images.length || refsChanged)) {
  // [command, why it's needed]
  const steps = [
    ["git restore --staged .", "unstage everything so the converted files can be re-added"],
    ["node scripts/convert-to-webp.mjs --write --delete", "convert png/jpg → webp, update code references, delete the originals"],
    ["git add .", "stage the new .webp images and the updated code"],
    ['git commit -m "your message"', "commit again — the check will pass now"],
  ];
  const width = Math.max(...steps.map(([cmd]) => cmd.length));
  console.error(
    "\n" + red(`✗ ${images.length} png/jpg images in /public and ${refsChanged} references still to convert.`) +
      "\n" + gray("  Commits must use .webp images (smaller files, faster page loads).") +
      "\n\n" + bold("Commands to run") + gray(" (converts the images, then commits again):") +
      steps.map(([cmd, why], i) => `\n  ${i + 1}. ${cyan(cmd.padEnd(width))}  ${gray("# " + why)}`).join("") +
      "\n"
  );
  // Warning: how to commit anyway without converting
  console.error(
    yellow(`⚠ Warning: if you don't want to convert to webp, skip this check with:`) +
      `\n  ${cyan('git commit -n -m "your message"')}\n`
  );
  process.exit(1);
}

// Separate the check output from git's own output
if (CHECK) console.log("\n" + green("✓ webp check passed") + `\n${"─".repeat(60)}\n`);

// How to Run

// node scripts/convert-to-webp.mjs                      # dry run (no changes)
// node scripts/convert-to-webp.mjs --write              # convert + update code, keep originals
// node scripts/convert-to-webp.mjs --write --delete     # also delete the .png/.jpg originals
// node scripts/convert-to-webp.mjs --write --quality=85 # change the quality
