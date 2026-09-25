import type { Metadata } from "next";
import { Exo_2, DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-exo-2",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ERETNA — Advancing Healthcare Through Intelligent Medical Technology",
  description:
    "Eretna Medical Devices was established to develop innovative and reliable solutions in the field of healthcare technologies, patient monitoring systems, ventilators, and portable healthcare technologies.",
};

export default function EretnaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <div
        className={`${exo2.variable} ${dmSans.variable} ${outfit.variable} min-h-screen bg-white text-[#111111] antialiased overflow-x-hidden relative w-full`}
        style={
          {
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            "--font-exo": "var(--font-exo-2)",
            "--font-dmsans": "var(--font-dm-sans)",
          } as React.CSSProperties
        }
      >
        <SmoothAOS />
        <VideoProvider website="eretna">{children}</VideoProvider>
      </div>
    </>
  );
}
