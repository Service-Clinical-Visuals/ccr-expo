"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "white" | "outline";
  bgColor?: string;
  textColor?: string;
  className?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  text,
  onClick,
  variant = "primary",
  bgColor,
  textColor,
  className = "",
  showIcon = true,
  icon,
  disabled = false,
  type = "button",
}: ButtonProps) {
  // Base variant classes
  const variantStyles = {
    primary: "bg-[#468A28] hover:bg-[#3d7923] text-white",
    white: "bg-white hover:bg-[#f7faf5] text-[#468A28]",
    outline: "bg-transparent border border-[#468A28] text-[#468A28] hover:bg-[#468A28] hover:text-white",
  };

  // Inline custom styles if explicit colors are passed
  const customStyle: React.CSSProperties = {
    ...(bgColor ? { backgroundColor: bgColor } : {}),
    ...(textColor ? { color: textColor } : {}),
  };

  const defaultArrow = (
    <svg
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0"
    >
      <path
        d="M9.5 1.5L13.5 6M13.5 6L9.5 10.5M13.5 6H1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={customStyle}
      className={`
        group relative inline-flex items-center justify-center gap-2.5
        h-[43px] px-5 sm:px-6 py-2.5 rounded-[47px]
        font-baloo font-medium text-[16px] sm:text-[17px] leading-none whitespace-nowrap
        shadow-[0px_3px_8px_rgba(0,0,0,0.24)] hover:shadow-[0px_5px_12px_rgba(0,0,0,0.28)]
        active:scale-95 transition-all duration-300 select-none cursor-pointer
        disabled:opacity-60 disabled:pointer-events-none
        ${!bgColor && !textColor ? variantStyles[variant] : ""}
        ${className}
      `}
    >
      <span>{text}</span>
      {showIcon && (icon || defaultArrow)}
    </button>
  );
}
