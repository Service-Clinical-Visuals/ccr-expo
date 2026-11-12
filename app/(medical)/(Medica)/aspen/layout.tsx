import type { Metadata } from "next";
import { Exo_2, Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aspen Surgical | Advancing Healthcare Through Purpose & Innovation",
  description:
    "Aspen Surgical is a trusted provider of surgical essentials with a unique balance of portfolio scale and partnership flexibility.",
};

export default function AspenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div
        className={`${exo2.variable} ${outfit.variable} min-h-screen bg-white text-[var(--color-foreground)] font-secondary antialiased overflow-x-hidden relative w-full`}
      >
        <SmoothAOS />
        <VideoProvider website="aspen">{children}</VideoProvider>
      </div>
    </>
  );
}
