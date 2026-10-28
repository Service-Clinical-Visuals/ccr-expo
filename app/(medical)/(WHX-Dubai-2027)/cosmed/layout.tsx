import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "COSMED - The Metabolic Company | Diagnostic Solutions",
  description:
    "COSMED designs, manufactures, and sells worldwide innovative diagnostic medical devices to assess Lung Function, Metabolic, and Body Composition.",
};

export default function CosmedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="cosmed">
      <div
        className={`${plusJakartaSans.variable} ${inter.variable} font-inter min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0066B2] selection:text-white`}
      >
        {children}
      </div>
    </VideoProvider>
  );
}
