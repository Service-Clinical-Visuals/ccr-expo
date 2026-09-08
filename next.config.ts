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
  /* config options here */
  // @ts-ignore - explicitly allowed by Next.js 16 version message
  // output: "standalone",
  allowedDevOrigins: [...localIps, "localhost", "127.0.0.1"],

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
