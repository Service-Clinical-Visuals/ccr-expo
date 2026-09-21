import type { Metadata } from "next";
import { Exo_2, Outfit, Anta } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-exo2",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const anta = Anta({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TELEMED — Driving Innovation Beyond Convention | Diagnostic Ultrasound",
  description:
    "Welcome to TELEMED, a pioneer in diagnostic ultrasound technology since 1992. Manufacturer of portable PC-based ultrasound scanners and OEM beamformers.",
};

export default function TelemedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${exo2.variable} ${outfit.variable} ${anta.variable} min-h-screen bg-white text-[#2A2A2A] antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="telemed">{children}</VideoProvider>
    </div>
  );
}
