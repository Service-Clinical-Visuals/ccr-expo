import type { Metadata } from "next";
import { Baloo_Thambi_2, Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const baloo = Baloo_Thambi_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neurosoft | Power of Integration — Medical & Diagnostic Solutions",
  description:
    "Neurosoft develops and manufactures advanced medical equipment for neurophysiology, neuromodulation, rehabilitation, and cardiology.",
};

export default function NeurosoftLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${baloo.variable} ${outfit.variable} min-h-screen bg-white text-[#2A2A2A] antialiased overflow-x-hidden relative w-full`}
      style={{ fontFamily: "var(--font-baloo), 'Baloo Thambi 2', sans-serif" }}
    >
      <SmoothAOS />
      <VideoProvider website="neurosoft">{children}</VideoProvider>
    </div>
  );
}
