import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

export const metadata: Metadata = {
  title: "Farmac-Zabban - Medical Devices Sector",
  description: "Leading company in the medical devices sector since 1895.",
};

export default function FarmacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="farmac">
      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#24559c] selection:text-white">
        {children}
      </div>
    </VideoProvider>
  );
}
