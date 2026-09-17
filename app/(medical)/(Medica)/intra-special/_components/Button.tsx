"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "outline-white" | "outline-red" | "solid-red" | "outline-dark";
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  arrowCircle?: boolean;
}

export default function Button({
  children,
  variant = "outline-white",
  href,
  onClick,
  className = "",
  showArrow = true,
  arrowCircle = true,
}: ButtonProps) {
  let baseStyles =
    "button inline-flex items-center justify-center gap-2.5 px-6 py-2.5 min-[2500px]:px-8 min-[2500px]:py-3.5 min-[3800px]:px-10 min-[3800px]:py-4 rounded-[10px] transition-all duration-300 cursor-pointer select-none group min-h-[46px] min-[2500px]:min-h-[60px] min-[3800px]:min-h-[76px]";

  let variantStyles = "";

  switch (variant) {
    case "outline-white":
      variantStyles =
        "border border-white text-white hover:bg-white hover:text-[#D70826]";
      break;
    case "outline-red":
      variantStyles =
        "border border-[#EC1C24] text-[#EC1C24] hover:bg-[#EC1C24] hover:text-white";
      break;
    case "solid-red":
      variantStyles =
        "bg-[#EC1C24] border border-[#EC1C24] text-white hover:bg-[#b8061f] hover:border-[#b8061f]";
      break;
    case "outline-dark":
      variantStyles =
        "border border-[#404040] text-[#404040] hover:bg-[#404040] hover:text-white";
      break;
    default:
      variantStyles =
        "border border-white text-white hover:bg-white hover:text-[#D70826]";
  }

  const content = (
    <>
      <span className="leading-none">{children}</span>
      {showArrow &&
        (arrowCircle ? (
          <div className="w-6 h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 rounded-full border border-current flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
            <ArrowUpRight
              className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-6 min-[3800px]:h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </div>
        ) : (
          <ArrowUpRight
            className="w-4 h-4 min-[2500px]:w-6 min-[3800px]:w-7 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
          />
        ))}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${variantStyles} ${className}`.trim()}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`.trim()}
    >
      {content}
    </button>
  );
}
