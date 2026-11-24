/**
 * Speed Care Route Layout
 *
 * ARCHITECTURAL REFERENCE: Inogen Development Standards
 * 1. Font Configuration:
 *    - Uses Google Fonts "DM Sans" and "Outfit" configured in globals.css.
 * 2. Scoped CSS & Video Context:
 *    - Injects scoped `globals.css` containing breakpoint REM scales and `.custom-container` definitions.
 *    - Wraps children in `<VideoProvider website="speed-care">` for dynamic media lookup.
 * 3. Smooth Scrolling:
 *    - Mounts `<SmoothAOS />` to manage Lenis smooth scrolling and AOS animation triggers.
 */
import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Speed Care Mineral - Advanced Bleeding Control",
  description: "Innovative mineral-based solutions for rapid bleeding control, combining advanced technology and expertise to save lives in emergencies.",
};

export default function SpeedCareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${dmSans.variable} ${outfit.variable} speedcare-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider website="speed-care">
        {children}
      </VideoProvider>
    </div>
  );
}

