import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SERAG WIESSNER - 160 Years Of Experience. Forward-Looking By Nature.",
  description:
    "Serag-Wiessner is an established German manufacturer of high quality surgical sutures, textile implants, and medical irrigation solutions with 160 years of experience.",
};

export default function SeragWiessnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="medpro">
      <div
        className={`${dmSans.variable} ${inter.variable} font-inter min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0287DC] selection:text-white`}
      >
        {children}
      </div>
    </VideoProvider>
  );
}
