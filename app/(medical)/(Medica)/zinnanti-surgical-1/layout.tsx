import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "Zinnanti Surgical - Innovative Surgical Technology",
  description:
    "Zinnanti Surgical combines medical expertise and engineering innovation to develop advanced surgical devices that improve safety, efficiency, and effectiveness.",
};

export default function ZinnantiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="font-primary min-h-screen bg-white antialiased overflow-x-hidden relative w-full"
      style={{ fontFamily: "'DM Sans', var(--font-primary), sans-serif" }}
    >
      <SmoothAOS />
      <VideoProvider website="zinnanti-surgical-1">{children}</VideoProvider>
    </div>
  );
}
