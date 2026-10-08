import type { Metadata } from "next";
import { Raleway, Inter } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-raleway", // Keeping variable name to apply globally to existing classes
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FENTEX - 160 Years Of Experience. Forward-Looking By Nature.",
  description:
    "FENTEX is an established German manufacturer of high quality surgical sutures, textile implants, and medical irrigation solutions with 160 years of experience.",
};

export default function SeragWiessnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="medpro">
      <div
        className={`${raleway.variable} ${inter.variable} font-inter min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0287DC] selection:text-white`}
      >
        {children}
      </div>
    </VideoProvider>
  );
}
