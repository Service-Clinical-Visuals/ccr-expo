"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "white";
  className?: string;
  showIcon?: boolean;
}

export default function Button({
  text,
  href,
  onClick,
  variant = "primary",
  className = "",
  showIcon = true,
}: ButtonProps) {
  const isPrimary = variant === "primary";

  const variantStyles = isPrimary
    ? "bg-[#A12624] text-white hover:bg-[#861e1c]"
    : "bg-white text-[#2A2A2A] hover:bg-neutral-100";

  const arrowSrc = isPrimary
    ? "/medical/hum-gmbh/white_arrow.png"
    : "/medical/hum-gmbh/black_arrow.png";

  const content = (
    <div
      className={`flex items-center justify-center gap-2.5 min-[2500px]:gap-3.5 min-[3800px]:gap-5 px-5 py-2.5 h-[43px] min-[2500px]:h-[62px] min-[3800px]:h-[80px] min-[2500px]:px-8 min-[3800px]:px-10 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] transition-colors duration-200 ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <img
          src={arrowSrc}
          alt=""
          className="w-[14.6px] h-[10.7px] min-[2500px]:w-[22px] min-[2500px]:h-[16px] min-[3800px]:w-[28px] min-[3800px]:h-[20px] object-contain transition-transform duration-200 group-hover:translate-x-1 shrink-0"
        />
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
}
