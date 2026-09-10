import type { Metadata } from "next";
import { Baloo_Thambi_2, Outfit } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import AOSInit from "./_components/AOSInit";

const baloo = Baloo_Thambi_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GEOTEK Medikal | Innovative Healthcare Solutions & Medical Equipment",
  description:
    "Since 2003, GEOTEK produces high quality medical equipment, biopsy needles, ureteral stents, and specialized healthcare solutions.",
  icons: {
    icon: "/medical/geotek/images/logo.png",
  },
};

export default function GeotekLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`geotek-root ${baloo.variable} ${outfit.variable} min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}
    >
      <AOSInit />
      <VideoProvider website="geotek">
        {children}
      </VideoProvider>
    </div>
  );
}
