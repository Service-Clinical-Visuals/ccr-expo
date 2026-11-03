import type { Metadata } from "next";
import { Exo_2, DM_Sans } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIARE ENGINEERING INTERNATIONAL GROUP S.p.A.",
  description:
    "Siare Engineering International Group is a leader in intensive care ventilation, anesthesia, and medical equipment.",
};

export default function SiareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="siare">
      <div
        className={`${exo2.variable} ${dmSans.variable} font-dm-sans min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0287DC] selection:text-white`}
      >
        {children}
      </div>
    </VideoProvider>
  );
}
