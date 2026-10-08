import type { Metadata } from "next";
import { Exo_2, Outfit, Overpass } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Boz Tıbbi Malzeme | Medical Textile & Surgical Consumables",
  description: "Boz Tıbbi Malzeme A.Ş. manufactures surgical sutures, absorbable hemostats, surgical meshes, and medical consumables.",
};

export default function BozTibbiMalzemeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${exo2.variable} ${outfit.variable} ${overpass.variable} font-outfit min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}
