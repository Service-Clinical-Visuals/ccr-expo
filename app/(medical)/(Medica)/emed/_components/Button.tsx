"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "white" | "dark";
  className?: string;
  showIcon?: boolean;
}

export default function Button({
  text,
  href,
  onClick,
  variant = "primary",
  className = "",
  showIcon = true,
}: ButtonProps) {
  const variantStyles =
    variant === "primary"
      ? "bg-[#006B96] text-white hover:bg-[#00567a]"
      : variant === "white"
      ? "bg-white text-[#006B96] hover:bg-neutral-100"
      : "bg-[#0A4A64] text-white hover:bg-[#083a4f]";

  const arrowColor = variant === "primary" ? "#FFFFFF" : "#006B96";

  const content = (
    <div
      className={`inline-flex items-center justify-center gap-2.5 min-[2500px]:gap-3.5 min-[3800px]:gap-5 px-5 py-2.5 min-[2500px]:px-8 min-[3800px]:px-10 h-[43px] min-[2500px]:h-[62px] min-[3800px]:h-[80px] rounded-[10px] min-[2500px]:rounded-[14px] min-[3800px]:rounded-[18px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] transition-all duration-200 ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <svg
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14.6px] h-[10.7px] min-[2500px]:w-[22px] min-[2500px]:h-[16px] min-[3800px]:w-[28px] min-[3800px]:h-[20px] transition-transform duration-200 group-hover:translate-x-1 shrink-0"
        >
          <path
            d="M9.5 1L14 5.5M14 5.5L9.5 10M14 5.5H1"
            stroke={arrowColor}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );

  const wrapperStyles =
    "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group";

  if (href) {
    return (
      <Link href={href} className={wrapperStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={wrapperStyles}>
      {content}
    </button>
  );
}
