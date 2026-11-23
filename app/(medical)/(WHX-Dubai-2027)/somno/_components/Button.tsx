/**
 * Button Component
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Dual Mode Rendering:
 *    - Renders as Next.js `<Link>` if `href` is supplied, or `<button>` for standard click handlers.
 * 2. Visual States & Transitions:
 *    - Standard hover lift: `hover:-translate-y-0.5 active:translate-y-0 active:scale-95`.
 * 3. Variant Styling:
 *    - Primary variant uses theme primary color (#005781).
 *    - Secondary variant uses light grey (#F9F9F9).
 *    - White variant uses pure white (#FFFFFF).
 */
"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "white" | "outline";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  variant = "primary",
}: ButtonProps) => {
  const variantStyles = {
    primary: "bg-[#005781] text-white hover:bg-[#004567] shadow-sm hover:shadow-md",
    secondary: "bg-[#F9F9F9] text-[#212121]/75 hover:text-[#212121] hover:bg-gray-100 shadow-sm",
    white: "bg-white text-[#005781] hover:bg-gray-50 shadow-sm hover:shadow-md",
    outline: "bg-transparent border border-[#005781] text-[#005781] hover:bg-[#005781] hover:text-white",
  }[variant];

  const content = (
    <div className={`flex items-center justify-center text-center px-6 py-3 rounded-full transition-all duration-300 ease-in-out ${variantStyles} ${className}`}>
      <span className="button whitespace-nowrap font-primary font-bold text-center leading-none">{text}</span>
    </div>
  );

  const wrapperStyles = "inline-block cursor-pointer outline-none hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-in-out select-none group";

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

