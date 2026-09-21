"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "white" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  showArrow = true,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 min-[3800px]:gap-5 px-6 py-2.5 sm:px-7 sm:py-3 min-[3800px]:px-14 min-[3800px]:py-6 rounded-full font-['Exo_2'] text-[15px] sm:text-[16px] min-[3800px]:text-2xl font-[300] tracking-wide transition-all duration-300 active:scale-[0.98] select-none shadow-[0px_3px_8px_rgba(0,0,0,0.24)] group";

  const variantClasses = {
    primary:
      "bg-[#0F3E7B] text-white hover:bg-[#0a2d59] border border-transparent",
    white:
      "bg-white text-[#0F3E7B] hover:bg-gray-50 border border-transparent",
    outline:
      "bg-transparent text-[#0F3E7B] hover:bg-[#0F3E7B] hover:text-white border border-[#0F3E7B]",
  };

  const arrowFilterClasses = {
    primary: "brightness-0 invert group-hover:translate-x-0.5 transition-transform duration-200",
    white: "group-hover:translate-x-0.5 transition-transform duration-200",
    outline: "group-hover:brightness-0 group-hover:invert group-hover:translate-x-0.5 transition-all duration-200",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <img
          src="/medical/telemed/arrow.png"
          alt="Arrow"
          className={`w-3.5 sm:w-4 min-[3800px]:w-8 h-auto shrink-0 object-contain ${arrowFilterClasses[variant]}`}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
}
