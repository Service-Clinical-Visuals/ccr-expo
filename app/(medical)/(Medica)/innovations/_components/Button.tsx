"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

const CustomArrow = ({ className }: { className?: string }) => (
  <svg className={className} width="1.1em" height="0.8em" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6 4.7V6H14C12.9 6 11.9 6.5 11.1 7.2C10.3 8 9.9 9 9.9 10.1V10.7H8.6V10.1C8.6 8.7 9.2 7.4 10.2 6.4C10.3 6.3 10.5 6.2 10.6 6H0V4.7H10.6C10.5 4.6 10.3 4.5 10.2 4.3C9.2 3.3 8.6 2 8.6 0.6V0H9.9V0.6C9.9 1.7 10.4 2.7 11.1 3.5C11.9 4.3 12.9 4.7 14 4.7H14.6Z" fill="currentColor" />
  </svg>
);

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = false,
  icon,
  variant = "primary",
}: ButtonProps) => {

  const variantStyles =
    variant === "primary"
      ? "bg-[var(--color-primary)] text-white hover:brightness-95 shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
      : "bg-white text-[var(--color-secondary)] hover:bg-gray-50 shadow-[0_4px_10px_rgba(0,0,0,0.15)]";

  const content = (
    <div className={`button flex items-center justify-center gap-[0.5em] px-[1.5em] py-[0.6em] rounded-[0.8em] transition-all duration-300 ${variantStyles} ${className}`}>
      <span className="whitespace-nowrap">{text}</span>
      {icon ? (
        <span className="shrink-0">{icon}</span>
      ) : showIcon ? (
        <CustomArrow className="group-hover:translate-x-[0.3em] transition-transform duration-300 shrink-0" />
      ) : null}
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
