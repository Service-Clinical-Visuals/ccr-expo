import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "Troge Medical | Reliable Medical Devices & Pharmaceuticals",
  description:
    "Trusted global healthcare solutions provider operating in over 110 countries worldwide with high-quality, certified medical devices and pharmaceuticals.",
};

export default function TrogeLayout({
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
          href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <div
        className="min-h-screen bg-white antialiased overflow-x-hidden relative w-full"
        style={{
          ["--font-baloo" as string]: "'Baloo Thambi 2', sans-serif",
          fontFamily: "var(--font-baloo), 'Baloo Thambi 2', sans-serif",
        }}
      >
        <SmoothAOS />
        <VideoProvider website="troge-medical">{children}</VideoProvider>
      </div>
    </>
  );
}

