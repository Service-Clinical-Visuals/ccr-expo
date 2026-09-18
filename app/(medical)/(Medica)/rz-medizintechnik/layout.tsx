import type { Metadata } from "next";
import { DM_Sans, Open_Sans, Sora } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "RZ Medizintechnik — Advancing Surgery Through Precision & Innovation",
  description:
    "RZ Medizintechnik is a family-owned medical technology company based in Tuttlingen, Germany, developing high-quality surgical instruments, endoscopy systems, and visualization solutions.",
};

export default function RZMedizintechnikLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${dmSans.variable} ${openSans.variable} ${sora.variable} min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="rz-medizintechnik">{children}</VideoProvider>
    </div>
  );
}
