import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "YŪSHŪ Healthcare - Innovative Medical Devices",
  description:
    "Innovative Medical Devices for Better Healthcare. Specialists for over 30 years in ENT, Urology, and Gynecology medical solutions.",
};

export default function YushuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <div
        className={`${dmSans.variable} ${outfit.variable} font-secondary min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
        style={{ fontFamily: "'Outfit', var(--font-secondary), sans-serif" }}
      >
        <SmoothAOS />
        <VideoProvider>
          {children}
        </VideoProvider>
      </div>
    </>
  );
}
