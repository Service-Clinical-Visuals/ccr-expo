import type { Metadata } from "next";
import { Raleway, Inter } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "STR Biotechnologies — Regenerative Medicine & Orthopedic Implant Manufacturer",
  description:
    "STR Biotechnologies is a research-driven manufacturer specializing in regenerative medicine, biotechnology, and advanced medical devices.",
};

export default function STRLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${raleway.variable} ${inter.variable} min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="str">{children}</VideoProvider>
    </div>
  );
}
