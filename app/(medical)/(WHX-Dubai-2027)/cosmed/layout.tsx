import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

export const metadata: Metadata = {
  title: "COSMED - The Metabolic Company | Diagnostic Solutions",
  description:
    "COSMED designs, manufactures, and sells worldwide innovative diagnostic medical devices to assess Lung Function, Metabolic, and Body Composition.",
};

export default function CosmedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="cosmed">
      <div
        className="font-inter min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0066B2] selection:text-white"
        style={{
          ["--font-plus-jakarta" as string]: "'Plus Jakarta Sans', sans-serif",
          ["--font-inter" as string]: "'Inter', sans-serif",
        }}
      >
        {children}
      </div>
    </VideoProvider>
  );
}
