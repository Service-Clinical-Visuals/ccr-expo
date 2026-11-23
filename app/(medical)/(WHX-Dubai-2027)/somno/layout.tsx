/**
 * Somno Route Layout
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Font Configuration:
 *    - Uses Google Fonts "Squada One" & "League Spartan" imported via globals.css.
 * 2. Scoped CSS & Video Context:
 *    - Injects scoped `globals.css` with fluid breakpoint REM scales and `.custom-container`.
 *    - Wraps children in `<VideoProvider website="somno">` for dynamic media lookup.
 * 3. Smooth Scrolling:
 *    - Mounts `<SmoothAOS />` to manage Lenis smooth scrolling and AOS animation triggers.
 */
import type { Metadata } from "next";
import { League_Spartan, Squada_One } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const squadaOne = Squada_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-squada",
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SOMNOmedics AG - Medical Technology for Innovative Diagnostics",
  description: "Innovative solutions for sleep medicine, polysomnography, polygraphy screening, cardiology, and neurology.",
};

export default function SomnoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Squada+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className={`${squadaOne.variable} ${leagueSpartan.variable} somno-fonts min-h-screen bg-white antialiased overflow-x-hidden relative w-full`}>
        <SmoothAOS />
        <VideoProvider website="somno">
          {children}
        </VideoProvider>
      </div>
    </>
  );
}

