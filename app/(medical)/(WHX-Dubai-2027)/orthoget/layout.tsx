/**
 * OrthoGet Route Layout
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Font Configuration:
 *    - Uses Google Fonts: 'Exo 2' (headings/primary), 'DM Sans' (body/secondary), and 'Kaushan Script' (accent badge).
 * 2. Scoped CSS & Video Context:
 *    - Injects scoped `globals.css` containing breakpoint REM scales and container definitions.
 *    - Wraps children in `<VideoProvider website="orthoget">` for dynamic media lookup.
 * 3. Smooth Scrolling:
 *    - Mounts `<SmoothAOS />` to manage Lenis smooth scrolling and AOS animation triggers.
 */
import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "OrthoGet - Advancing Orthopedic Technology",
  description: "Advancing Bone Lengthening Through Innovative Orthopedic Technology.",
};

export default function OrthogetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="orthoget-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full">
      <SmoothAOS />
      <VideoProvider website="orthoget">
        {children}
      </VideoProvider>
    </div>
  );
}

