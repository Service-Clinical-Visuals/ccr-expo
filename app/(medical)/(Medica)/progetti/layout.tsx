import type { Metadata } from "next";
import { DM_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";


const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Euromed Implants",
  description: "Euromed Implants develops high-quality implant systems and surgical instruments for modern orthopaedic care.",
};

export default function MeyleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${dmSans.variable} ${openSans.variable} font-primary min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
