import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "Fisioline | Advanced Surgical Laser Technology",
  description:
    "Fisioline is an Italian manufacturer of electromedical and electroaesthetic equipment established in 1985. Discover LUMIX® SURGERY laser technology.",
};

export default function FisiolineLayout({
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
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div
        className="fisioline-root min-h-screen bg-white antialiased overflow-x-hidden relative w-full"
        style={{
          ["--font-poppins" as string]: "'Poppins', sans-serif",
          fontFamily: "var(--font-poppins), 'Poppins', sans-serif",
        }}
      >
        <SmoothAOS />
        <VideoProvider website="fisioline">{children}</VideoProvider>
      </div>
    </>
  );
}
