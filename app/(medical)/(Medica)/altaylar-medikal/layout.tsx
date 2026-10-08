import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Altaylar Medikal | Quality Medical Solutions",
  description:
    "Advancing Healthcare Through Quality Medical Solutions. Reliable surgical products for Urology, Urogynecology, and Hernia Repair.",
};

export default function AltaylarMedikalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${dmSans.variable} ${dmSans.className} min-h-screen bg-white text-[var(--color-dark)] antialiased overflow-x-hidden relative w-full`}
      style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
    >
      <SmoothAOS />
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
