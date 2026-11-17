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
      className={`flex items-center gap-3 sm:gap-4 min-[2500px]:gap-6 pl-5 sm:pl-6 min-[2500px]:pl-10 pr-1.5 min-[2500px]:pr-2.5 py-1.5 min-[2500px]:py-2.5 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-md transition-colors duration-300 ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-white text-[#0b1a3a] shrink-0">
        <ArrowUpRight
          className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 transition-transform duration-300 group-hover:rotate-45"
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
