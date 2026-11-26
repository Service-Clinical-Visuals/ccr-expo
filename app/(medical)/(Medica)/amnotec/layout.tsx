import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AMNOTEC - Medical Technology from Tuttlingen",
  description: "Precision in Every Procedure. Excellence in Every Detail. Leading manufacturer and supplier of surgical and medical devices from Tuttlingen, Germany.",
};

export default function AmnotecLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${jakarta.variable} ${dmSans.variable} amnotec-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
      style={{
        fontFamily: 'var(--font-dmsans), "DM Sans", sans-serif',
      }}
    >
      <SmoothAOS />
      <VideoProvider website="amnotec">
        {children}
      </VideoProvider>
    </div>
  );
}
