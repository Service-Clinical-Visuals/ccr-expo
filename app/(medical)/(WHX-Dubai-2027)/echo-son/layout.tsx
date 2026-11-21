import type { Metadata } from "next";
import { Exo_2, Outfit } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

// Headings, buttons and header links
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo2",
  display: "swap",
});

// Paragraphs
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ECHOSON | Ultrasound Technology Designed And Manufactured In Poland",
  description:
    "ECHOSON designs and manufactures ultrasound scanners in Poland.",
};

export default function EchoSonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${exo2.variable} ${outfit.variable} echoson-fonts min-h-screen bg-white text-[var(--foreground)] antialiased overflow-x-clip relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="echo-son">{children}</VideoProvider>
    </div>
  );
}
