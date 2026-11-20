import type { Metadata } from "next";
import { Exo_2, Outfit, Overpass } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

// Headings, nav links and links
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo2",
  display: "swap",
});

// Paragraphs
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

// Buttons
const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-overpass",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FAMED Żywiec | A Wealth of Experience and Quality",
  description:
    "FAMED Żywiec, a member of the Meinberg Group, designs and manufactures hospital and medical equipment built on decades of experience and quality.",
};

export default function FamedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${exo2.variable} ${outfit.variable} ${overpass.variable} famed-fonts min-h-screen bg-white text-[var(--foreground)] antialiased overflow-x-clip relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="famed">{children}</VideoProvider>
    </div>
  );
}
