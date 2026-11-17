import React from "react";

interface BadgeProps {
  text: string;
  /** "light" = dark text on light backgrounds, "dark" = white outline on dark backgrounds */
  tone?: "light" | "dark";
  className?: string;
}

/** Small pill eyebrow label with a leading dot, e.g. "• WHO WE ARE". */
export default function Badge({ text, tone = "light", className = "" }: BadgeProps) {
  const toneCls =
    tone === "dark"
      ? "border-white/80 text-white"
      : "border-[#d5d9de] text-[#3a3f45] bg-white";
  const dotCls = tone === "dark" ? "bg-white" : "bg-[var(--color-primary-dark)]";

  return (
    <div
      className={`inline-flex items-center gap-2 2k:gap-3 rounded-full border px-4 py-1.5 2k:px-7 2k:py-3 ${toneCls} ${className}`}
    >
      <span className={`w-1.5 h-1.5 2k:w-2.5 2k:h-2.5 rounded-full shrink-0 ${dotCls}`} />
      <span className="badge-text uppercase leading-none">{text}</span>
    </div>
  );
}
