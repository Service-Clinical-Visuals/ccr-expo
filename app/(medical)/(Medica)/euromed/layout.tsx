import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Euromed - Advancing Healthcare Through Trusted Medical Solutions",
  description:
    "Euromed is a trusted partner for medical industries, delivering advanced healthcare and precision medical solutions.",
};

export default function EuromedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="euromed">
      <div
        className={`${outfit.variable} font-outfit min-h-screen bg-white text-slate-900 antialiased selection:bg-[#d40708] selection:text-white`}
      >
        {children}
      </div>
    </VideoProvider>
  );
}
