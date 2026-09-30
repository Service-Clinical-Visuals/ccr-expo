import type { Metadata } from "next";
import { Exo_2, Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rebstock Instruments | Precision Made in Germany since 1995",
  description:
    "Rebstock develops high-quality medical solutions for micro-, neuro-, spine, and cranio-maxillofacial surgery—supporting surgeons with innovation, precision, and expertise.",
};

export default function RebstockLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${exo2.variable} ${outfit.variable} rebstock-root font-secondary min-h-screen bg-white text-[var(--color-foreground)] antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="rebstock">{children}</VideoProvider>
    </div>
  );
}
