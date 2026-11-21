"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type ButtonVariant = "primary" | "white";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  showIcon?: boolean;
  variant?: ButtonVariant;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, { pill: string; circle: string }> = {
  // Teal pill + light-teal circle (default — header "Get In Touch", banner CTA)
  primary: {
    pill: "bg-primary text-white group-hover:bg-primary-hover",
    circle: "bg-primary-light text-white group-hover:bg-primary",
  },
  // White pill + white circle with teal arrow (for use on teal / coloured backgrounds)
  white: {
    pill: "bg-white text-[#1A1A1A] group-hover:bg-[#EAF6F8]",
    circle: "bg-white text-primary group-hover:bg-[#EAF6F8]",
  },
};

/**
 * Common ECHOSON button: a rounded pill holding the Exo 2 label, followed by a
 * separate circle with an up-right arrow, joined by a hairline gap.
 * Renders a Next.js <Link> when `href` is given, otherwise a <button>.
 * Label font size comes from the `.button` class in global.css.
 */
const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary",
  type = "button",
}: ButtonProps) => {
  const styles = variantStyles[variant];

  const classes = `group inline-flex items-center gap-[3px] min-[2500px]:gap-[5px] min-[3800px]:gap-[7px] cursor-pointer select-none whitespace-nowrap active:scale-95 transition-transform duration-300 ${className}`;

  const size =
    "h-9 sm:h-10 xl:h-9 2xl:h-11 min-[1920px]:h-12 min-[2500px]:h-[72px] min-[3800px]:h-[100px]";

  const content = (
    <>
      <span
        className={`button flex items-center ${size} px-4 sm:px-5 2xl:px-6 min-[2500px]:px-9 min-[3800px]:px-12 rounded-full transition-colors duration-300 ${styles.pill}`}
      >
        {text}
      </span>
      {showIcon && (
        <span
          aria-hidden
          className={`flex items-center justify-center shrink-0 aspect-square ${size} rounded-full transition-colors duration-300 ${styles.circle}`}
        >
          <FiArrowUpRight
            strokeWidth={2.5}
            className="w-[18px] h-[18px] 2xl:w-5 2xl:h-5 min-[1920px]:w-[22px] min-[1920px]:h-[22px] min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
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
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;
