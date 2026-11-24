/**
 * Button Component
 * Master Reference: Inogen Development Standards
 * Styled to Nonin Figma specifications (#2A96C2 background, #FEBE11 arrow indicator)
 * Scaled dynamically across mobile, desktop, 2K and 4K displays.
 */
"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary",
}: ButtonProps) => {
  const variantStyles =
    variant === "primary"
      ? "bg-[#2A96C2] text-white"
      : "bg-transparent border border-white text-white";

  const content = (
    <div
      className={`flex items-center justify-center px-4 sm:px-5 min-[2500px]:px-8 min-[3800px]:px-12 py-2.5 sm:py-3 min-[2500px]:py-4.5 min-[3800px]:py-6 rounded-[5px] min-[2500px]:rounded-[8px] min-[3800px]:rounded-[12px] ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap font-bold text-sm sm:text-base min-[2500px]:text-2xl min-[3800px]:text-4xl text-white transition-transform duration-300 ease-out group-hover:-translate-x-1 min-[2500px]:group-hover:-translate-x-1.5 min-[3800px]:group-hover:-translate-x-2">
        {text}
      </span>
      {showIcon && (
        <span className="inline-flex items-center ml-2.5 sm:ml-3 min-[2500px]:ml-5 min-[3800px]:ml-8 transition-transform duration-300 ease-out group-hover:translate-x-1.5 min-[2500px]:group-hover:translate-x-2.5 min-[3800px]:group-hover:translate-x-3.5 shrink-0">
          <svg
            className="w-[18px] h-[12px] min-[2500px]:w-[32px] min-[2500px]:h-[20px] min-[3800px]:w-[48px] min-[3800px]:h-[30px]"
            viewBox="0 0 19 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6H17M17 6L12 1M17 6L12 11"
              stroke="#FEBE11"
              strokeWidth="2"
              className="min-[2500px]:stroke-[2.5] min-[3800px]:stroke-[3.5]"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </div>
  );

  const wrapperStyles =
    "inline-block cursor-pointer outline-none select-none group";

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
};

export default Button;
