/**
 * ChM Route Layout
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Font Configuration:
 *    - Loads Google Font 'Outfit' and 'Cal Sans'.
 * 2. Scoped CSS & Video Context:
 *    - Injects scoped `globals.css` with 8 breakpoint REM scales and container definitions.
 *    - Wraps children in `<VideoProvider website="chm">` for media streaming.
 * 3. Smooth Scrolling:
 *    - Mounts `<SmoothAOS />` to manage Lenis smooth scrolling and AOS animation triggers.
 */
import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "ChM - Precision Engineering. Medical Expertise. Better Patient Care.",
  description: "Established in 1981, ChM sp. z o.o. is a leading manufacturer of orthopedic and traumatology solutions, combining over 40 years of experience with advanced engineering and continuous innovation.",
};

export default function ChMLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="chm-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full">
      <SmoothAOS />
      <VideoProvider website="chm">
        {children}
      </VideoProvider>
    </div>
  );
}

