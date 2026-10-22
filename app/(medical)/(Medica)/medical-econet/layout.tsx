import type { Metadata } from "next";
import { Exo_2, Outfit, Overpass } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo2",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-overpass",
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
      className={`${exo2.variable} ${outfit.variable} ${overpass.variable} econet-fonts min-h-screen bg-white text-[#2A2A2A] antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="hermann">{children}</VideoProvider>
    </div>
  );
}
