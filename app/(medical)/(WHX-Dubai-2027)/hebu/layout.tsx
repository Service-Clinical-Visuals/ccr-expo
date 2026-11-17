import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

export const metadata: Metadata = {
  title: "HEBUmedical - Precision Surgical Instruments & Medical Technology",
  description:
    "HEBUmedical is a Germany-based medical technology manufacturer specializing in precision-engineered surgical instruments, HF surgery and endoscopy solutions.",
};

export default function HebuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="hebu">
      <div className="font-body bg-white text-[var(--body)] antialiased selection:bg-[#FFD500] selection:text-[#121212]">
        {children}
      </div>
    </VideoProvider>
  );
}
