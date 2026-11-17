import React from "react";

interface LogoProps {
  className?: string;
}

/** Zinnanti Surgical Design Group wordmark. */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src="/medical/zinnanti-surgical-1/logo.webp"
      alt="Zinnanti Surgical Design Group, Inc."
      className={`object-contain ${className}`}
    />
  );
}
