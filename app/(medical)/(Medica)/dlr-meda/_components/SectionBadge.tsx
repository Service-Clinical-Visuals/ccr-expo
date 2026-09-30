import React from "react";
import Typography from "./Typography";

interface SectionBadgeProps {
  text: string;
  className?: string;
}

// Shared subtitle pill shown above every section title.
export default function SectionBadge({ text, className = "" }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4 px-3 py-1.5 min-[2500px]:px-5 min-[2500px]:py-2.5 min-[3800px]:px-7 min-[3800px]:py-3.5 rounded-full border border-[#BAE6FDCC] bg-[#F0F9FF] ${className}`}
    >
      <span className="block w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 min-[3800px]:w-3.5 min-[3800px]:h-3.5 rounded-full bg-[#0EA5E9] shrink-0" />
      <Typography variant="span" color="none" className="text-[#075985] uppercase tracking-[0.06em] leading-none">
        {text}
      </Typography>
    </div>
  );
}
