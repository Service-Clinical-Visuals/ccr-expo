import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

export const metadata: Metadata = {
  title: "LUX Sutures - Precision in Every Suture",
  description:
    "LUX Sutures delivers precision surgical sutures for confidence in every procedure.",
};

export default function LuxSuturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="lux-sutures">
      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0071ce] selection:text-white">
        {children}
      </div>
    </VideoProvider>
  );
}
