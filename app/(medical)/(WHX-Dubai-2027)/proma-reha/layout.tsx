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
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
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
    </>
  );
}
