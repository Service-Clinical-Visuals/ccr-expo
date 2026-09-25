"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "navy" | "white" | "primary" | "outline";
}

export default function Button({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "navy",
}: ButtonProps) {
  const variantStyles = {
    navy: "bg-[#273644] text-white hover:bg-[#1C2C39] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] hover:shadow-[0px_6px_16px_rgba(39,54,68,0.35)]",
    white: "bg-white text-[#2A2A2A] hover:bg-slate-100 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] hover:shadow-[0px_6px_16px_rgba(0,0,0,0.2)]",
    primary: "bg-[#0AADF9] text-white hover:bg-[#0896d8] shadow-[0px_3px_8px_rgba(10,173,249,0.3)] hover:shadow-[0px_6px_16px_rgba(10,173,249,0.4)]",
    outline: "bg-transparent border border-[#273644] text-[#273644] hover:bg-[#273644] hover:text-white",
  }[variant];

  const content = (
    <div
      className={`inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-[47px] transition-all duration-300 ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap leading-none">{text}</span>
      {showIcon && (
        <svg
          className="w-4 h-3.5 ml-2.5 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
          viewBox="0 0 15 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 1L14 5.5M14 5.5L9.5 10M14 5.5H1"
            stroke="currentColor"
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
