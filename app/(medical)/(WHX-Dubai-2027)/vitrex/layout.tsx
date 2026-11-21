/**
 * Vitrex Route Layout
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Font Configuration:
 *    - Uses Google Fonts "Open Sans" and "Inter" injected in globals.css and styled via CSS variables.
 * 2. Scoped CSS & Video Context:
 *    - Injects scoped `globals.css` containing breakpoint REM scales and container definitions.
 *    - Wraps children in `<VideoProvider website="vitrex">` for dynamic media lookup.
 * 3. Smooth Scrolling:
 *    - Mounts `<SmoothAOS />` to manage Lenis smooth scrolling and AOS animation triggers.
 */
import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "Vitrex Medical Group - Advancing Medical Innovation",
  description: "Advancing Medical Innovation Through Precision, Quality and Care. Delivering reliable medical devices and customised healthcare solutions worldwide.",
};

export default function VitrexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="vitrex-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full">
      <SmoothAOS />
      <VideoProvider website="vitrex">
        {children}
      </VideoProvider>
    </div>
  );
}

