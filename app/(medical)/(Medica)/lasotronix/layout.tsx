import type { Metadata } from "next";
import { Anton, Oswald } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: ["400"],
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lasotronix | Advanced Laser Systems for Medicine & Dentistry",
  description:
    "Lasotronix develops and manufactures technologically advanced diode laser devices for dermatology, aesthetics, dentistry, surgery, and neurosurgery.",
};

export default function LasotronixLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${anton.variable} ${oswald.variable} lasotronix-root min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] antialiased overflow-x-hidden relative w-full`}
      style={{
        fontFamily: "var(--font-secondary), 'Oswald', sans-serif",
      }}
    >
      <SmoothAOS />
      <VideoProvider>{children}</VideoProvider>
    </div>
  );
}
