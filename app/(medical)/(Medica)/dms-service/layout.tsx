import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

export const metadata: Metadata = {
  title: "DMS-Service - Advanced Cardiac Monitoring & Holter Solutions",
  description:
    "DMS-Service provides advanced cardiac monitoring solutions, innovative ECG devices, MyPatch® Holter recorders and reliable Holter scanning services.",
};

export default function DmsServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="dms-service">
      <div className="font-inter bg-white text-[#333333] antialiased selection:bg-[#35C0E4] selection:text-white">
        {children}
      </div>
    </VideoProvider>
  );
}
