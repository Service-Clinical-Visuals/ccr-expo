import React from "react";

interface BadgeProps {
  text: string;
  tone?: "light" | "dark" | "translucent";
  className?: string;
}

/**
 * Eyebrow Pill Badge
 * Master Reference: Zinnanti Surgical & Inogen Standards
 * - Scales container padding, red circular dot, and font size from small screens to 4K.
 */
export default function Badge({ text, tone = "light", className = "" }: BadgeProps) {
  const toneCls =
    tone === "dark"
      ? "border-white/80 text-white bg-transparent"
      : tone === "translucent"
      ? "border-[#5C5C5C]/50 text-[#4B5563] bg-white/70"
      : "border-[#5C5C5C]/50 text-[#4B5563] bg-white";

  const dotCls = tone === "dark" ? "bg-white" : "bg-[#E62730]";

  return (
    <div
      className={`inline-flex items-center gap-2 sm:gap-2.5 2k:gap-4 4k:gap-6 rounded-full border px-4 py-1.5 2k:px-7 2k:py-3 4k:px-10 4k:py-4 shadow-xs ${toneCls} ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 2k:w-3 2k:h-3 4k:w-5 4k:h-5 rounded-full shrink-0 ${dotCls}`}
      />
      <span className="font-body text-xs sm:text-sm 2k:text-xl 4k:text-3xl uppercase tracking-wider leading-none">
        {text}
      </span>
    </div>
  );
}
