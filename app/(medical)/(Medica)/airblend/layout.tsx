/**
 * Airblend Route Layout
 *
 * ARCHITECTURAL REFERENCE (from Inogen master):
 * 1. Font Configuration:
 *    - Injects scoped `globals.css` with fluid REM scaling and responsive container rules.
 * 2. Scoped Video Context:
 *    - Wraps children in `<VideoProvider website="airblend">`.
 * 3. Smooth Scrolling:
 *    - Mounts `<SmoothAOS />` to synchronize Lenis and AOS animation triggers.
 */
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Airblend - Innovative Healthcare & Medical Solutions",
  description: "Global technology company delivering innovative healthcare, sanitation, and sustainable energy solutions driven by Swiss quality, precision, and excellence.",
};

export default function AirblendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${outfit.variable} ${outfit.className} airblend-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider website="airblend">
        {children}
      </VideoProvider>
    </div>
  );
}
