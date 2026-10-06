import type { Metadata } from "next";
import { Orbitron, Baloo_Thambi_2 } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const baloo = Baloo_Thambi_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RMS Remake Soil | Flowable Fill & Soil Recycling",
  description:
    "RMS Remake Soil GmbH combines innovative technology, practical expertise, and sustainable thinking to transform excavated soil and construction materials into valuable resources.",
};

export default function RemakeSoilLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${orbitron.variable} ${baloo.variable} ${orbitron.className} ${baloo.className} remake-soil-root min-h-screen bg-[#1C1C1C] text-white antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
