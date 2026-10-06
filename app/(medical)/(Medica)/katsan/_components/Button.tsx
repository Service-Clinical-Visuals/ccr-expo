"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  iconType?: "arrow-right" | "arrow-up-right";
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "default" | "compact";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  iconType = "arrow-up-right",
  variant = "primary",
  size = "default",
}: ButtonProps) => {
  let pillStyles = "";
  let circleStyles = "";
  let iconColor = "";

  if (variant === "white") {
    pillStyles = "bg-white text-[#33363F] hover:bg-gray-50";
    circleStyles = "bg-white text-[#00425E] shadow-[0px_2px_6px_rgba(0,0,0,0.14)] border border-black/[0.06] group-hover:scale-105";
    iconColor = "text-[#00425E]";
  } else if (variant === "primary") {
    pillStyles = "bg-[#00425E] text-white hover:bg-[#003147]";
    circleStyles = "bg-white text-[#2A2421] shadow-[0px_2px_6px_rgba(0,0,0,0.16)] border border-black/[0.06] group-hover:scale-105";
    iconColor = "text-[#2A2421]";
  } else if (variant === "secondary") {
    pillStyles = "bg-[#33363F] text-white hover:bg-[#222]";
    circleStyles = "bg-white text-[#33363F] shadow-[0px_2px_6px_rgba(0,0,0,0.16)] border border-black/[0.06] group-hover:scale-105";
    iconColor = "text-[#33363F]";
  } else {
    pillStyles = "bg-transparent border border-white text-white hover:bg-white/10";
    circleStyles = "bg-white text-[#00425E] shadow-[0px_2px_6px_rgba(0,0,0,0.16)] border border-black/[0.06] group-hover:scale-105";
    iconColor = "text-[#00425E]";
  }

  const IconComponent = iconType === "arrow-right" ? ArrowRight : ArrowUpRight;
  const isCompact = size === "compact";

  const content = (
    <div
      className={`inline-flex items-center gap-[2px] select-none group transition-transform duration-200 active:scale-95 ${
        isCompact ? "katsan-btn-compact" : ""
      } ${className}`}
    >

      <div
        className={`katsan-btn-pill rounded-full flex items-center justify-center transition-colors duration-200 z-0 ${pillStyles}`}
      >
        <span className={`button whitespace-nowrap ${isCompact ? "katsan-compact-btn-text" : "katsan-main-btn-text"}`}>
          {text}
        </span>
      </div>

      {showIcon && (
        <div
          className={`katsan-btn-circle rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 z-10 ${circleStyles}`}
        >
          <IconComponent
            className={`katsan-btn-icon ${iconColor}`}
            strokeWidth={2.5}
          />
        </div>
      )}
    </div>
  );

  const wrapperStyles = "inline-block cursor-pointer outline-none";

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
