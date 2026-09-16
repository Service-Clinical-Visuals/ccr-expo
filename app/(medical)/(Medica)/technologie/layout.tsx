import type { Metadata } from "next";
import { DM_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";


export const metadata: Metadata = {
  title: "Revance",
  description: "Revance is a global biopharmaceutical company dedicated to developing innovative aesthetic and medical products that enhance the lives of patients. With a strong focus on scientific excellence and patient outcomes, Revance is committed to pushing the boundaries of what's possible in aesthetic and medical treatments.",
};

export default function RevanceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider >
        {children}
      </VideoProvider>
    </div>
  );
}
