import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "Hermann Medizintechnik | Solutions for Modern Medical Applications",
  description:
    "Hermann Medizintechnik stands for absolute quality standards, innovative medical instruments and systems for laparoscopy, endoscopy, electrosurgery, and arthroscopy.",
};

export default function HermannLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="fluke-fonts min-h-screen bg-white text-[#2A2A2A] antialiased overflow-x-hidden relative w-full"
    >
      <SmoothAOS />
      <VideoProvider website="hermann">{children}</VideoProvider>
    </div>
  );
}
