import React from "react";

/** Label with a small round dot, shown above every section title. */
export default function Eyebrow({
  children,
  className = "",
  light = false,
  dotClassName = "bg-[var(--primary)]",
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
  dotClassName?: string;
}) {
  return (
    <span
      className={`eyebrow inline-flex items-center gap-[0.55em] font-head font-medium ${
        light ? "text-white" : "text-[var(--heading)]"
      } ${className}`}
    >
      <span aria-hidden className={`w-[0.42em] h-[0.42em] rounded-full flex-shrink-0 ${dotClassName}`} />
      {children}
    </span>
  );
}
