"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

/** Pill button with a white circular arrow badge on the right (as in the hero). */
const Button = ({ text, href, onClick, className = "" }: ButtonProps) => {
  const content = (
    <div
      className={`flex items-center gap-3 sm:gap-4 2k:gap-6 pl-5 sm:pl-6 2k:pl-10 pr-1.5 2k:pr-2.5 py-1.5 2k:py-2.5 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-md transition-colors duration-300 ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 2k:w-14 2k:h-14 4k:w-20 4k:h-20 rounded-full bg-white text-[#0b1a3a] shrink-0">
        <ArrowUpRight
          className="w-4 h-4 sm:w-5 sm:h-5 2k:w-8 2k:h-8 4k:w-11 4k:h-11 transition-transform duration-300 group-hover:rotate-45"
          strokeWidth={2.5}
        />
      </span>
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
