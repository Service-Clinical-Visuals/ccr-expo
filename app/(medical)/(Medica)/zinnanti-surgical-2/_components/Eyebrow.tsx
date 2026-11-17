import React from "react";

interface EyebrowProps {
  text: string;
  tone?: "light" | "accent";
  className?: string;
}

/** Small uppercase label with a leading line, e.g. "—— OUR HERITAGE & MISSION". */
const Eyebrow = ({ text, tone = "accent", className = "" }: EyebrowProps) => {
  const color = tone === "light" ? "text-white" : "text-[var(--color-primary)]";
  const line = tone === "light" ? "bg-white" : "bg-[var(--color-primary)]";

  return (
    <div className={`flex items-center gap-2.5 min-[2500px]:gap-4 ${className}`}>
      <span className={`block w-6 sm:w-8 min-[2500px]:w-12 min-[3800px]:w-16 h-px shrink-0 ${line}`} />
      <span className={`uppercase tracking-wider font-medium ${color}`}>{text}</span>
    </div>
  );
};

export default Eyebrow;
