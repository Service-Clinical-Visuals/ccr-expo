import type { Metadata } from "next";
import { Exo_2, Outfit } from "next/font/google";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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
        className={`${exo2.variable} ${outfit.variable} font-outfit min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0287DC] selection:text-white`}
      >
        {children}
      </div>
    </VideoProvider>
  );
}
