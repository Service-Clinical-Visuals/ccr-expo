import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

export const metadata: Metadata = {
  title: "WINFO Europa - Precision Orthopaedic & Spinal Instruments",
  description:
    "WINFO Med specialises in orthopaedic and spinal surgical instruments, delivering precision-engineered products focused on quality, reliability and innovation for modern surgical applications.",
};

export default function WinfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="winfo">
      <div className="font-body bg-white text-[var(--body)] antialiased selection:bg-[#A3004F] selection:text-white">
        {children}
      </div>
    </VideoProvider>
  );
}
