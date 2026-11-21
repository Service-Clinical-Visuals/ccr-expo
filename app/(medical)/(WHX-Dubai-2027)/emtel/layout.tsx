/**
 * EMTEL Route Layout
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Font Configuration:
 *    - Uses Google Fonts "Exo 2" and "DM Sans" imported via `globals.css`.
 * 2. Scoped CSS & Video Context:
 *    - Injects scoped `globals.css` containing breakpoint REM scales and container definitions.
 *    - Wraps children in `<VideoProvider website="emtel">` for dynamic media lookup.
 * 3. Smooth Scrolling:
 *    - Mounts `<SmoothAOS />` to manage Lenis smooth scrolling and AOS animation triggers.
 */
import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "EMTEL - Advancing Patient Care Through Innovative Medical Technology",
  description: "Polish medical equipment manufacturer specializing in advanced patient monitoring systems and defibrillators since 1992.",
};

export default function EmtelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="emtel-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full">
      <SmoothAOS />
      <VideoProvider website="emtel">
        {children}
      </VideoProvider>
    </div>
  );
}

