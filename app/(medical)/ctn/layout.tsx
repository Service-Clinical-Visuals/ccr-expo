import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

export const metadata: Metadata = {
  title: "CTN - Advanced Wellness & Cryotherapy Devices",
  description: "Explore advanced wellness and cryotherapy devices with CTN.",
};

export default function CTNLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="ctn">
      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#3d57a5] selection:text-white">
        {children}
      </div>
    </VideoProvider>
  );
}
