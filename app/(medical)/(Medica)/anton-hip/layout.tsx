import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anton Hipp GmbH — Surgical Instruments & Medical Technology",
  description:
    "Anton Hipp GmbH is a manufacturer of high-quality surgical instruments, implant systems, and specialized medical technology.",
};

export default function AntonHippLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${exo2.variable} ${inter.variable} min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="anton-hip">{children}</VideoProvider>
    </div>
  );
}
