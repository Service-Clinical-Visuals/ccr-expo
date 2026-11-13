import type { Metadata } from "next";
import { VideoProvider } from "@/app/_context/VideoContext";
import "./global.css";

export const metadata: Metadata = {
  title: "Apollo Healthcare Technologies - Advancing Patient Care",
  description:
    "Apollo Healthcare Technologies is a UK-based medical equipment manufacturer specialising in pressure care, dynamic and hybrid mattress systems, cushions and patient support solutions.",
};

export default function ApolloLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoProvider website="apollo">
      <div className="font-inter bg-white text-[var(--body)] antialiased selection:bg-[#6BA644] selection:text-white">
        {children}
      </div>
    </VideoProvider>
  );
}
