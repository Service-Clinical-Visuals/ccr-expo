import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ergon Sutramed | Advanced Solutions for Modern Surgical Care",
  description:
    "Ergon Sutramed S.r.l. creates cutting-edge medical devices, surgical sutures, surgical meshes, and hemostats to improve the lives of patients worldwide.",
};

export default function ErgonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${outfit.variable} ${outfit.className} ergon-root min-h-screen bg-white text-[#2A2A2A] antialiased overflow-x-hidden relative w-full`}
      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
    >
      <SmoothAOS />
      <VideoProvider website="ergon">{children}</VideoProvider>
    </div>
  );
}
