/**
 * Nonin Route Layout
 * Master Reference: Inogen Development Standards
 * Fonts: Plus Jakarta Sans (Headings/Brand) & DM Sans (Body/Content)
 */
import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nonin - Precision Monitoring. Better Patient Care.",
  description: "Delivering reliable, noninvasive patient monitoring solutions through innovative technologies designed to support confident clinical decisions and better patient outcomes.",
};

export default function NoninLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${plusJakartaSans.variable} ${dmSans.variable} nonin-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="nonin">
        {children}
      </VideoProvider>
    </div>
  );
}


