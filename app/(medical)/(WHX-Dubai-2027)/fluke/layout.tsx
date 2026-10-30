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
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@100..900&family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <div
        className="fluke-fonts min-h-screen bg-white text-[#2A2A2A] antialiased overflow-x-hidden relative w-full"
      >
        <SmoothAOS />
        <VideoProvider website="hermann">{children}</VideoProvider>
      </div>
    </>
  );
}
