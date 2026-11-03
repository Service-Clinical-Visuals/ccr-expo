import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

export const metadata: Metadata = {
  title: "Altaylar Medikal - Precision Surgical Solutions & Healthcare Manufacturing",
  description:
    "Altaylar Medikal delivers high-precision medical devices, oxidized regenerated cellulose hemostats, and advanced hernia meshes.",
};

export default function AltaylarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="altaylar">
      <div
        className="font-inter min-h-screen bg-white text-slate-900 antialiased selection:bg-[#07A1A8] selection:text-white"
      >
        {children}
      </div>
    </VideoProvider>
  );
}
