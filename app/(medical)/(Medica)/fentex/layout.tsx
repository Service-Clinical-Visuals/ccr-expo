import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FENTEX medical GmbH — High Quality Surgical Instruments & Endoscopes",
  description:
    "FENTEX medical is a specialized German manufacturer of precision surgical instruments and endoscopy solutions for ENT, head and neck surgery.",
};

export default function FentexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="fentex">
      <div
        className={`${poppins.variable} ${inter.variable} font-inter min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0287DC] selection:text-white`}
      >
        {children}
      </div>
    </VideoProvider>
  );
}
