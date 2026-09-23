import type { Metadata } from "next";
import { Exo_2, Alexandria, Inter, Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-exo2",
  display: "swap",
});

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-alexandria",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HUM — Company for Homecare and Medical Technology",
  description:
    "HUM Company for Homecare and Medical Technology. Quality solutions for medical technology, homecare, and technical textile systems.",
};

export default function HumLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${exo2.variable} ${alexandria.variable} ${inter.variable} ${outfit.variable} min-h-screen bg-white text-[#212121] antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="hum-gmbh">{children}</VideoProvider>
    </div>
  );
}
