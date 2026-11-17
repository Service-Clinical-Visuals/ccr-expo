import React from "react";

/** HEBU hand icon with the "HEBU / medical" wordmark beneath it. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo-text inline-flex flex-col items-center leading-none text-white ${className}`}>
      <img src="/medical/hebu/h-logo.webp" alt="" aria-hidden className="h-[2.1em] w-auto object-contain -mb-[0.2em]" />
      <span className="font-head font-bold tracking-[0.02em]">HEBU</span>
      <span className="font-head font-normal text-[0.42em] tracking-[0.32em] mt-[0.08em] pl-[0.32em]">medical</span>
    </span>
  );
}
