/**
 * Button Component
 * Master Reference: Zinnanti Surgical & Inogen Standards
 * - Scales padding, typography, and child icons across small, desktop, 2K, and 4K viewports.
 */
"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  children?: React.ReactNode;
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  variant = "primary",
  children,
}: ButtonProps) => {
  const variantStyles =
    variant === "primary"
      ? "bg-[#E62730] hover:bg-[#c91f27] text-white shadow-md hover:shadow-lg hover:shadow-[#E62730]/25"
      : variant === "outline"
      ? "bg-transparent border border-[#E62730] text-[#E62730] hover:bg-[#E62730] hover:text-white"
      : "bg-white text-[#1E1E1E] hover:bg-gray-100 shadow-sm";

  const content = (
    <div
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ease-in-out px-5.5 py-2.5 sm:px-6 sm:py-2.5 2k:px-10 2k:py-4 4k:px-15 4k:py-5.5 text-sm sm:text-base 2k:text-2xl 4k:text-4xl ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {children}
    </div>
  );

  const wrapperStyles =
    "inline-block cursor-pointer outline-none hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-in-out select-none group";

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
