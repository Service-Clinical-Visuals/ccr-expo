import type { Metadata } from "next";
import {Inter, Poppins } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "../../_context/VideoContext";
import AosInit from "./_components/AosInit";

const fontHeading = Poppins({
  subsets: ["latin"],
  weight: ["300" ,"400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  adjustFontFallback: false,
});

const fontBody = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300" ,"400", "500", "600", "700"],
  display: "swap",
});



export default function EurolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fontHeading.variable} ${fontBody.variable} antialiased bg-white`}>
      <AosInit />
      <VideoProvider >
        <div className=" overflow-x-hidden relative w-full min-h-screen">
          {children}
        </div>
      </VideoProvider>
    </div>
  );
}
