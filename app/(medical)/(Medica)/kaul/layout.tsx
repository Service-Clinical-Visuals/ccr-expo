import type { Metadata } from "next";
import "./global.css";
import { VideoProvider } from "@/app/_context/VideoContext";

export const metadata: Metadata = {
  title: "AMECATH - Innovative Catheter Manufacturing & Healthcare Solutions",
  description:
    "AMECATH is a leading manufacturer of innovative catheters and advanced medical healthcare solutions worldwide.",
};

export default function AmecathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="amecath">
      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#155184] selection:text-white">
        {children}
      </div>
    </VideoProvider>
  );
}
