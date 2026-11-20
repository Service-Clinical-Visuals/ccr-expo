/**
 * Inogen Route Layout
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Font Configuration:
 *    - Uses Next.js font optimization with Google Font "Outfit", injected as a CSS variable (`--font-outfit`).
 * 2. Scoped CSS & Video Context:
 *    - Injects scoped `globals.css` containing breakpoint REM scales and container definitions.
 *    - Wraps children in `<VideoProvider website="inogen">` for dynamic media lookup.
 * 3. Smooth Scrolling:
 *    - Mounts `<SmoothAOS />` to manage Lenis smooth scrolling and AOS animation triggers.
 */
import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "Inogen - Innovative Oxygen Solutions",
  description: "Pioneers in the development of portable oxygen technology, helping businesses reduce overhead, increase profitability and provide a superior product.",
};

export default function InogenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="inogen-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full">
      <SmoothAOS />
      <VideoProvider website="inogen">
        {children}
      </VideoProvider>
    </div>
  );
}

