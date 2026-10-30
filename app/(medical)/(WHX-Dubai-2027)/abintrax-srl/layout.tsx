import type { Metadata } from "next";
import "./globals.css";
import { VideoProvider } from "@/app/_context/VideoContext";
import SmoothAOS from "./_components/SmoothAOS";

export const metadata: Metadata = {
  title: "Abintrax srl",
  description:
    "Technology That Connects. Innovation That Cares. Innovative technology solutions for education and healthcare.",
};

export default function AbintraxLayout({
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
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@100..900&family=Sora:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <div
        className="font-secondary min-h-screen bg-white antialiased overflow-x-hidden relative w-full"
        style={{
          ["--font-dm-sans" as any]: "'DM Sans', sans-serif",
          ["--font-outfit" as any]: "'Outfit', sans-serif",
          ["--font-sora" as any]: "'Sora', sans-serif",
        }}
      >
        <SmoothAOS />
        <VideoProvider>{children}</VideoProvider>
      </div>
    </>
  );
}
