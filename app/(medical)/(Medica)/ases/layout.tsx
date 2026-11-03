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
  title: "ASES Medikal — Orthopedic & Trauma Surgery Solutions",
  description:
    "ASES Medikal manufactures innovative orthopedic fixation systems, trauma implants, and surgical instruments.",
};

export default function AsesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${manrope.variable} ${inter.variable} min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="ases">{children}</VideoProvider>
    </div>
  );
}
