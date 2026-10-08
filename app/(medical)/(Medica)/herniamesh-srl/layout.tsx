import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

export const metadata: Metadata = {
  title: "Herniamesh - The Future Arises From Changes In The Present",
  description:
    "Herniamesh designs and manufactures advanced mesh solutions for hernia repair.",
};

export default function HerniameshSrlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="herniamesh-srl">
      <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#0055A6] selection:text-white">
        {children}
      </div>
    </VideoProvider>
  );
}
