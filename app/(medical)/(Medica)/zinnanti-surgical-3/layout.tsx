/**
 * Zinnanti Surgical Route Layout
 * Master Reference: Inogen Development Standards
 *
 * 1. Font Configuration & Scoped Styles:
 *    - Injects scoped `globals.css` with fluid REM scales and container definitions.
 * 2. Smooth Scrolling & AOS:
 *    - Mounts `<SmoothAOS />` to manage Lenis smooth scrolling and AOS animation triggers.
 * 3. Video Context:
 *    - Wraps children in `<VideoProvider website="zinnanti-surgical-3">` for dynamic media lookup.
 * 4. Fixed Header & Footer:
 *    - Persistent across both Home and About pages.
 */
import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Zinnanti Surgical Design Group - Innovative Surgical Technology",
  description:
    "Advancing surgical care through innovative smoke evacuation technology and specialized medical solutions.",
};

export default function ZinnantiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="zinnanti-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full flex flex-col justify-between">
      <SmoothAOS />
      <VideoProvider website="zinnanti-surgical-3">
        <Header />
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </VideoProvider>
    </div>
  );
}
