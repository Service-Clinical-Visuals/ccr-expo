import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "International Biomedical | Infant Care Solutions",
  description:
    "International Biomedical – celebrating 50 years of excellence in neonatal and infant care solutions, every step of the way.",
};

export default function InternationalBiomedicalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${outfit.variable} ib-root min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
    >
      <VideoProvider website="international-biomedical">{children}</VideoProvider>
    </div>
  );
}
