import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EMED — Advancing Electrosurgery with Precision",
  description:
    "EMED develops high-quality electrosurgical solutions designed to support surgical precision, patient safety, and reliable clinical performance.",
};

export default function EmedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${outfit.className} ${outfit.variable} ${inter.variable} min-h-screen bg-white text-[#2A2A2A] antialiased overflow-x-hidden relative w-full`}
      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
    >
      <SmoothAOS />
      <VideoProvider website="emed">{children}</VideoProvider>
    </div>
  );
}
