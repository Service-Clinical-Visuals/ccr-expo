"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type ButtonVariant =
  | "white-blue" // Dark background: White open circle -> Blue filled circle with white arrow, white text
  | "white-white" // Dark background: White open circle -> White filled circle with blue arrow, white text
  | "dark-blue" // Light background: Dark open circle -> Blue filled circle with white arrow, blue text
  | "primary"
  | "outline"
  | "white"
  | "white-outline";

export interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  ariaLabel?: string;
  showArrow?: boolean;
}

export default function Button({
  children,
  text,
  href,
  onClick,
  variant = "white-blue",
  className = "",
  type = "button",
  target,
  rel,
  ariaLabel,
  showArrow = true,
}: ButtonProps) {
  const label = text || children;

  // Resolve color scheme according to the Figma component specifications
  let openArcColor = "text-white";
  let filledBadgeStyles = "bg-[#0066B2] text-white";
  let arrowColor = "text-white";
  let textStyles = "text-white group-hover:text-white";

  if (variant === "white-white" || variant === "white") {
    openArcColor = "text-white";
    filledBadgeStyles = "bg-white text-[#0066B2]";
    arrowColor = "text-[#0066B2]";
    textStyles = "text-white group-hover:text-white";
  } else if (variant === "dark-blue" || variant === "outline") {
    openArcColor = "text-[#1E293B]";
    filledBadgeStyles = "bg-[#0066B2] text-white";
    arrowColor = "text-white";
    textStyles = "text-[#1E293B] group-hover:text-[#0066B2]";
  } else if (variant === "primary" || variant === "white-outline" || variant === "white-blue") {
    openArcColor = "text-white";
    filledBadgeStyles = "bg-[#0066B2] text-white";
    arrowColor = "text-white";
    textStyles = "text-white group-hover:text-white";
  }

  const content = (
    <div
      className={`group inline-flex items-center cursor-pointer select-none relative py-2 pr-6 sm:pr-8 lg:pr-10 min-[2500px]:pr-16 min-[3800px]:pr-32 ${className}`}
    >
      {/* Circle Icon Badge Container: Open arc outline in default state, filled badge on hover */}
      <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 2xl:w-[70px] 2xl:h-[70px] min-[1921px]:w-[80px] min-[1921px]:h-[80px] min-[2500px]:w-[96px] min-[2500px]:h-[96px] min-[3800px]:w-[180px] min-[3800px]:h-[180px] flex items-center justify-center">
        {/* Open Circle Outline Arc (Visible by default, fades out on hover) */}
        <svg
          viewBox="0 0 44 44"
          className={`absolute inset-0 w-full h-full transition-all duration-300 ease-out group-hover:opacity-0 group-hover:scale-75 ${openArcColor}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 37.4 10.8 A 19 19 0 1 0 37.4 33.2"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>

        {/* Filled Circle with Arrow Badge (Hidden by default, scales in on hover) */}
        <span
          className={`absolute inset-0 w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ease-out opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 shadow-md ${filledBadgeStyles}`}
        >
          {showArrow && (
            <ArrowRight
              className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8 min-[1921px]:w-9 min-[1921px]:h-9 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-20 min-[3800px]:h-20 transition-transform duration-300 ease-out group-hover:translate-x-0.5 ${arrowColor}`}
              strokeWidth={2.4}
            />
          )}
        </span>
      </div>

      {/* Button Text: Starts inside the circle opening in default state, slides to the right on hover */}
      <span
        className={`relative z-20 font-plus-jakarta font-medium btn-text tracking-wide transition-all duration-300 ease-out transform -translate-x-[24px] sm:-translate-x-[28px] lg:-translate-x-[32px] 2xl:-translate-x-[36px] min-[1921px]:-translate-x-[42px] min-[2500px]:-translate-x-[50px] min-[3800px]:-translate-x-[92px] group-hover:translate-x-3 sm:group-hover:translate-x-3.5 lg:group-hover:translate-x-4 2xl:group-hover:translate-x-5 min-[1921px]:group-hover:translate-x-6 min-[2500px]:group-hover:translate-x-7 min-[3800px]:group-hover:translate-x-14 whitespace-nowrap ${textStyles}`}
      >
        {label}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B2]/60 rounded-full"
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-block bg-transparent p-0 border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B2]/60 rounded-full cursor-pointer"
    >
      {content}
    </button>
  );
}
