/**
 * Reison Route Layout
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Font Configuration:
 *    - Cal Sans (headings, titles, CTA) & Outfit (body, descriptions) defined via `globals.css` and `.reison-fonts`.
 * 2. Scoped CSS & Video Context:
 *    - Injects scoped `globals.css` containing breakpoint REM scales and container definitions.
 *    - Wraps children in `<VideoProvider website="reison">` for dynamic media lookup.
 * 3. Smooth Scrolling:
 *    - Mounts `<SmoothAOS />` to manage Lenis smooth scrolling and AOS animation triggers.
 */
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const calSans = localFont({
  src: "./CalSans-SemiBold.woff2",
  variable: "--font-calsans",
  display: "swap",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Reison Medical - Premium Operating Room Accessories",
  description: "Reison specializes in designing, manufacturing, and supplying a comprehensive range of premium accessories for modern operating rooms.",
};

export default function ReisonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${calSans.variable} ${outfit.variable} reison-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider website="reison">
        {children}
      </VideoProvider>
    </div>
  );
}

