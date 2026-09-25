"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary" | "outline" | "white";
}

export default function Button({
  text,
  href,
  onClick,
  className = "",
  showIcon = false,
  variant = "primary",
}: ButtonProps) {
  const variantStyles = {
    primary: "bg-[#3452A7] border border-transparent text-white hover:bg-[#284189] shadow-sm hover:shadow-[#3452A7]/30",
    secondary: "bg-[#4C75D8] border border-transparent text-white hover:bg-[#3452A7]",
    outline: "bg-transparent border border-[#3452A7] text-[#3452A7] hover:bg-[#3452A7] hover:text-white",
    white: "bg-white text-[#3452A7] hover:bg-gray-100",
  }[variant];

  const content = (
    <div
      className={`inline-flex items-center justify-center px-7 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
