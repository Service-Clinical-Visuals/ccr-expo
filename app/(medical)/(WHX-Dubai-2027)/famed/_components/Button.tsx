"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "white";
}

/** Overpass-font button: top-right and bottom-left corners rounded (3xl), with an up-right arrow. */
const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary",
}: ButtonProps) => {
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-[0_4px_10px_rgba(16,129,212,0.35)]",
    white: "bg-white text-primary hover:bg-[#EEF6FD] shadow-[0_4px_10px_rgba(0,0,0,0.12)]",
  }[variant];

  const classes = `group inline-flex items-center justify-center gap-2 2xl:gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-5 px-6 py-2.5 sm:px-7 sm:py-3 2xl:px-8 2xl:py-3.5 min-[2500px]:px-12 min-[2500px]:py-5 min-[3800px]:px-16 min-[3800px]:py-7 rounded-tr-3xl rounded-bl-3xl min-[2500px]:rounded-tr-[36px] min-[2500px]:rounded-bl-[36px] min-[3800px]:rounded-tr-[48px] min-[3800px]:rounded-bl-[48px] cursor-pointer select-none whitespace-nowrap transition-all duration-300 active:scale-95 ${variantStyles} ${className}`;

  const content = (
    <>
      <span className="button">{text}</span>
      {showIcon && (
        <FiArrowUpRight
          aria-hidden
          strokeWidth={2.25}
          className="w-4 h-4 2xl:w-[18px] 2xl:h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;
