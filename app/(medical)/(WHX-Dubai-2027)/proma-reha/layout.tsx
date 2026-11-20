import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "PROMA REHA - Medical & Nursing Beds",
  description:
    "Established manufacturer of medical and nursing beds, recognized worldwide for quality products, dedicated craftsmanship and professional healthcare equipment.",
};

export default function PromaRehaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="font-secondary min-h-screen bg-white antialiased overflow-x-hidden relative w-full"
      style={{
        ["--font-montserrat" as any]: "'Montserrat', sans-serif",
        ["--font-dm-sans" as any]: "'DM Sans', sans-serif",
      }}
    >
      <SmoothAOS />
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
