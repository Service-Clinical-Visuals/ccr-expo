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
  title: "Will Pharma | Quality Healthcare Solutions",
  description:
    "Since 1924, Will Pharma has been dedicated to improving patient well-being through quality healthcare solutions, local expertise, and innovation for a healthier future.",
};

export default function WillPharmaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${dmSans.variable} ${dmSans.className} min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
      style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
    >
      <SmoothAOS />
      <VideoProvider website="will-pharma">{children}</VideoProvider>
    </div>
  );
}
