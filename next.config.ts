import os from "os";
import type { NextConfig } from "next";

import fs from "fs";
import path from "path";

const localIps = Object.values(os.networkInterfaces())
  .flat()
  .filter((details) => details?.family === "IPv4")
  .map((details) => details?.address)
  .filter((address): address is string => !!address);

// Helper to get directories in public/medical and public/moto
const getPublicSubfolders = (subfolder: string) => {
  const dirPath = path.join(process.cwd(), "public", subfolder);
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

const nextConfig: NextConfig = {
  // Ship only traced files in .next/standalone instead of the full node_modules
  output: "standalone",
  allowedDevOrigins: [...localIps, "localhost", "127.0.0.1"],

  // Source maps are only for debugging; they make up most of .next/server
  productionBrowserSourceMaps: false,
  enablePrerenderSourceMaps: false,

  experimental: {
    serverSourceMaps: false,
    turbopackSourceMaps: false,
  },

  images: {
    // Public images aren't content-hashed, so keep optimized copies for 7 days
    minimumCacheTTL: 60 * 60 * 24 * 7,
    // Cap the on-disk optimized image cache (.next/cache/images)
    maximumDiskCacheSize: 200_000_000,
  },

  async headers() {
    return [
      {
        source: "/:path*.:ext(webp|png|jpg|jpeg|svg|ico|mp4|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  async rewrites() {
    const medicalFolders = getPublicSubfolders("medical");
    const motoFolders = getPublicSubfolders("moto");

    return [
      ...medicalFolders.map((folder) => ({
        source: `/${folder}/:path*`,
        destination: `/medical/${folder}/:path*`,
      })),
      ...motoFolders.map((folder) => ({
        source: `/${folder}/:path*`,
        destination: `/moto/${folder}/:path*`,
      })),
    ];
  },
};

export default nextConfig;
