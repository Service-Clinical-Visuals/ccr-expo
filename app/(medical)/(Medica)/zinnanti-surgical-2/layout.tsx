import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zinnanti Surgical Design Group | Innovative Surgical Technology",
  description:
    "Zinnanti Surgical develops innovative smoke and fluid evacuation solutions designed to improve surgical visibility, reduce smoke exposure, and support safer operating environments.",
};

export default function ZinnantiSurgicalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${manrope.variable} min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
      style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}
    >
      <SmoothAOS />
      <VideoProvider website="zinnanti-surgical-2">{children}</VideoProvider>
    </div>
  );
}
