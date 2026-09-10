"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Typography from "./Typography";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  iconVariant?: "dark" | "white";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  iconVariant = "white"
}: ButtonProps) => {

  const iconBg = iconVariant === "dark" ? "bg-[#2A2421]" : "bg-white";
  const iconColor = iconVariant === "dark" ? "text-white" : "text-[#171717]";

  const content = (
    <div className={`flex items-center w-max group ${className}`}>
      <div className={`flex items-center justify-center bg-[var(--color-primary)] hover:brightness-95 transition-colors rounded-full pl-6 py-2.5 shadow-sm z-0 relative ${showIcon ? 'pr-6 -mr-0' : 'pr-6'}`}>
        <Typography variant="span" color="dark" className="button whitespace-nowrap">{text}</Typography>
      </div>
      {showIcon && (
        <div className={`flex items-center justify-center ${iconBg} rounded-full w-12 h-12 min-[2000px]:w-14 min-[2000px]:h-14 shrink-0 z-10 shadow-md relative group-hover:scale-105 transition-transform duration-300`}>
          <ArrowUpRight className={`w-6 h-6 min-[2000px]:w-8 min-[2000px]:h-8 ${iconColor} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300`} strokeWidth={2.5} />
        </div>
      )}
    </div>
  );

  const wrapperStyles = "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group";

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
