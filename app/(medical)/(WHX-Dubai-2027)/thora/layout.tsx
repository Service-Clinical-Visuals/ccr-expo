import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

export const metadata: Metadata = {
  title: "Thora Tech GmbH - Advancing Medical Technology, Improving Lives",
  description:
    "Thora Tech GmbH develops innovative medical technologies for respiratory and cardiovascular care, including the Monsoon 4 high-frequency jet ventilation system.",
};

export default function ThoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="thora">
      <div className="font-inter bg-white text-[var(--body)] antialiased selection:bg-[#38BDF8] selection:text-white">
        {children}
      </div>
    </VideoProvider>
  );
}
