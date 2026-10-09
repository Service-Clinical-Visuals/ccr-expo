import type { Metadata } from "next";
import { Anton, Oswald } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: ["400"],
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bardahl | Automotive Care & Lubrication Technology",
  description:
    "Since 1939, Bardahl has delivered trusted automotive care worldwide. Advanced engine protection, high-performance lubrication, and comprehensive automotive solutions.",
};

export default function BardahlLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${anton.variable} ${oswald.variable} font-secondary min-h-screen bg-[#121111] text-white antialiased overflow-x-hidden relative w-full`}
      style={{
        fontFamily: "var(--font-oswald), 'Oswald', sans-serif",
      }}
    >
      <SmoothAOS />
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
