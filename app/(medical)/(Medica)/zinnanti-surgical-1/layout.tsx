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
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Outfit:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <div
        className="font-primary min-h-screen bg-white antialiased overflow-x-hidden relative w-full"
        style={{ fontFamily: "'DM Sans', var(--font-primary), sans-serif" }}
      >
        <SmoothAOS />
        <VideoProvider website="zinnanti-surgical-1">{children}</VideoProvider>
      </div>
    </>
  );
}
