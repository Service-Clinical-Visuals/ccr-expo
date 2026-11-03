import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tecme | Advanced Respiratory Care Technology",
  description: "Over 60 years developing technology for respiratory care, mechanical ventilators, and airway management.",
};

export default function TecmeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${outfit.variable} ${outfit.className} tecme-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
      <SmoothAOS />
      <VideoProvider>
        {children}
      </VideoProvider>
    </div>
  );
}

