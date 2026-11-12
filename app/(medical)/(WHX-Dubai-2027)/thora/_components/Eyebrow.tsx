import React from "react";

/** Cyan pill label shown above every section title. */
export default function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`eyebrow inline-flex items-center gap-[0.9em] rounded-full bg-[var(--primary)] text-white font-plex font-semibold px-[2.2em] py-[0.45em] ${className}`}
    >
      <span aria-hidden className="w-[0.35em] h-[0.35em] rounded-full bg-white flex-shrink-0" />
      {children}
    </span>
  );
}
