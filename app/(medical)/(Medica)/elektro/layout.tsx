import type { Metadata } from "next";
import { Exo_2, Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ELEKTRO-MAG A.S. — Electrosurgical & Laboratory Equipment",
  description:
    "ELEKTRO-MAG A.S. is a manufacturer of electrosurgical units, medical devices, and laboratory equipment.",
};

export default function ElektroMagLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${outfit.variable} font-primary min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider website="elektro">
        {children}
      </VideoProvider>
    </div>
  );
}
