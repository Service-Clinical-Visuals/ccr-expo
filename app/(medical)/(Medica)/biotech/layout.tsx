import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Biotech GmbH — Advancing Medical Care Through Innovation",
  description:
    "Biotech Group is a leading German manufacturer and distributor of medical products, orthopedics joint reconstruction, and pharmaceuticals.",
};

export default function BiotechLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${manrope.variable} ${inter.variable} min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="biotech">{children}</VideoProvider>
    </div>
  );
}
