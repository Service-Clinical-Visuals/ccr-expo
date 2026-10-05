import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

export const metadata: Metadata = {
  title: "SMI - Global Supplier Of High-Quality Surgical Sutures",
  description:
    "SMI is recognized as a global supplier of high-quality surgical sutures.",
};

export default function SmiSuturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="smi-sutures">
      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#3a5da8] selection:text-white">
        {children}
      </div>
    </VideoProvider>
  );
}
