"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  iconType?: "arrow-up-right" | "arrow-right";
  variant?: "primary" | "secondary" | "outline" | "pill";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  iconType = "arrow-up-right",
  variant = "pill",
}: ButtonProps) => {
  let variantStyles = "";

  switch (variant) {
    case "pill":
      variantStyles =
        "bg-[#1E1E1E] border border-transparent text-white hover:bg-black shadow-[3px_4px_4px_rgba(0,0,0,0.25)] rounded-full";
      break;
    case "primary":
      variantStyles =
        "bg-[#3AA5DD] border border-transparent text-white hover:bg-[#298bbd] rounded-md";
      break;
    case "secondary":
      variantStyles =
        "bg-transparent border border-white text-white hover:bg-white/10 rounded-full";
      break;
    case "outline":
      variantStyles =
        "bg-transparent border border-[#1E1E1E] text-[#1E1E1E] hover:bg-[#1E1E1E]/5 rounded-full";
      break;
  }

  const IconComponent = iconType === "arrow-up-right" ? ArrowUpRight : ArrowRight;

  const content = (
    <div
      className={`inline-flex items-center justify-between gap-2.5 sm:gap-3 pl-4 sm:pl-5 pr-1 py-1 sm:py-1.5 min-[2500px]:pl-7 min-[2500px]:pr-2 min-[2500px]:py-2 min-[3800px]:pl-10 min-[3800px]:pr-3 min-[3800px]:py-2.5 transition-all duration-300 ${variantStyles} ${className}`}
    >
      <span className="button font-primary text-xs sm:text-sm lg:text-base min-[2500px]:text-xl min-[3800px]:text-2xl whitespace-nowrap">
        {text}
      </span>
      {showIcon && (
        <div className="w-6 h-6 sm:w-7 sm:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
          <IconComponent
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-[#1E1E1E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.5}
          />
        </div>
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
