"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "white" | "secondary" | "outline";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "white",
}: ButtonProps) => {
  const variantStyles = {
    white: "bg-white text-[#2A2A2A] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] hover:bg-gray-100",
    primary: "bg-[var(--color-primary)] text-white shadow-[0px_3px_8px_rgba(0,0,0,0.24)] hover:bg-[var(--color-primary-hover)]",
    secondary: "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-hover)]",
    outline: "bg-transparent border border-white text-white hover:bg-white/10",
  }[variant];

  const arrowImgSrc =
    variant === "white"
      ? "/medical/rebstock/dark_arr.png"
      : "/medical/rebstock/white_arr.png";

  const content = (
    <div
      className={`flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-none transition-all duration-300 ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <img
          src={arrowImgSrc}
          alt="Arrow"
          className="w-3.5 h-auto sm:w-4 min-[1920px]:w-4.5 min-[2500px]:w-6 min-[3800px]:w-8 object-contain ml-2 sm:ml-3 min-[3800px]:ml-6 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
        />
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
};

export default Button;
