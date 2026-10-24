import type { Metadata } from "next";
import { Palanquin, DM_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const palanquin = Palanquin({
  subsets: ["latin"],
  variable: "--font-palanquin",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALSA Apparecchi Medicali",
  description:
    "Advanced electrosurgical units, precision engineering, and innovative medical technology since 1932.",
};

export default function AlsaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${palanquin.variable} ${dmSans.variable} font-secondary min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
      style={{
        fontFamily: 'var(--font-dm-sans), "DM Sans", sans-serif',
      }}
    >
      <SmoothAOS />
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
