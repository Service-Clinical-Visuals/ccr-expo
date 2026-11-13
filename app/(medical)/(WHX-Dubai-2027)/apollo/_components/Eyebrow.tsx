import React from "react";

/** Green label with a left accent bar, shown above every section title. */
export default function Eyebrow({
  children,
  className = "",
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      className={`eyebrow inline-flex items-center font-inter font-medium border-l-2 pl-[0.6em] ${
        light ? "text-white border-white" : "text-[var(--primary)] border-[var(--primary)]"
      } ${className}`}
    >
      {children}
    </span>
  );
}
