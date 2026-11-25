import type { Metadata } from "next";
import { Palanquin, DM_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const palanquin = Palanquin({
  subsets: ["latin"],
  variable: "--font-palanquin",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunoptic Surgical - Advanced Surgical Illumination",
  description: "Clarity That Empowers Every Surgical Moment. Advanced surgical headlights, light sources, and visualization systems engineered for peak surgical performance.",
};

export default function SunopticLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${palanquin.variable} ${dmSans.variable} sunoptic-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
      style={{
        fontFamily: 'var(--font-dmsans), "DM Sans", sans-serif',
      }}
    >
      <SmoothAOS />
      <VideoProvider website="sunoptic-surgical">
        {children}
      </VideoProvider>
    </div>
  );
}

