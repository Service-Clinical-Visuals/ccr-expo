/**
 * Pajunk Route Layout
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Font Configuration:
 *    - Next.js font optimization with Google Fonts:
 *      * "Bricolage Grotesque" (Primary: headings, badges, buttons)
 *      * "DM Sans" (Secondary: body copy, nav, footer, labels)
 *    - Injected via CSS variables `--font-bricolage` and `--font-dm-sans`.
 * 2. Scoped CSS & Video Context:
 *    - Injects scoped `globals.css` with fluid breakpoint REM scales and `.custom-container`.
 *    - Wraps children in `<VideoProvider website="pajunk">` for dynamic media lookup.
 * 3. Smooth Scrolling:
 *    - Mounts `<SmoothAOS />` to manage Lenis smooth scrolling and AOS animation triggers.
 */
import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PAJUNK® - Precision in Every Detail. Care in Every Innovation.",
  description: "PAJUNK® develops and manufactures needs-driven medical devices and solutions in close collaboration with healthcare professionals worldwide.",
};

export default function PajunkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${bricolageGrotesque.variable} ${dmSans.variable} font-secondary pajunk-fonts min-h-screen bg-white text-[#111111] antialiased overflow-x-hidden relative w-full`}
    >
      <SmoothAOS />
      <VideoProvider website="pajunk">
        {children}
      </VideoProvider>
    </div>
  );
}

