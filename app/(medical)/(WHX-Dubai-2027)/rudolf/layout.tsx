import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hermann Medizintechnik | Solutions for Modern Medical Applications",
  description:
    "Hermann Medizintechnik stands for absolute quality standards, innovative medical instruments and systems for laparoscopy, endoscopy, electrosurgery, and arthroscopy.",
};

export default function HermannLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${dmSans.variable} ${outfit.variable} rudolf-fonts min-h-screen bg-white text-[#2A2A2A] antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="hermann">{children}</VideoProvider>
    </div>
  );
}
