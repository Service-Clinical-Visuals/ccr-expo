import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Katsan Medical Devices | Synthetic Surgical Sutures & Medical Solutions",
  description:
    "Founded in 1976, Katsan Medical Devices is a leading synthetic surgical suture manufacturer in Turkey, producing surgical threads, laparoscopic surgery supplies, sports medicine, hemostats, and surgical meshes.",
};

export default function KatsanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${outfit.variable} ${outfit.className} katsan-root min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="katsan">{children}</VideoProvider>
    </div>
  );
}
