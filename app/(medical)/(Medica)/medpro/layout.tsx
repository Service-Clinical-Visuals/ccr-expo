import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MED pro medical BV - Urology Solutions Built on Experience & Innovation",
  description:
    "MEDpro Medical has been manufacturing high-quality disposable urology products since 2010 with strong connections to medical specialists.",
};

export default function MedproLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="medpro">
      <div
        className={`${fraunces.variable} ${inter.variable} font-inter min-h-screen bg-white text-slate-900 antialiased selection:bg-[#3BB3C3] selection:text-white`}
      >
        {children}
      </div>
    </VideoProvider>
  );
}
