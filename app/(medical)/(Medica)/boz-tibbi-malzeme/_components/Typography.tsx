import React from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "footer-heading"
  | "footer-body";
type Color = "primary" | "secondary" | "dark" | "white" | "muted" | "none";
type Weight = "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";

interface TypographyProps {
  variant?: Variant;
  color?: Color;
  weight?: Weight;
  className?: string;
  children: React.ReactNode;
}

export default function Typography({
  variant = "p",
  color = "dark",
  weight,
  className = "",
  children,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  let Component: any = variant;
  let fontClass = "";

  if (variant === "footer-heading") {
    Component = "h3";
    fontClass = "footer-heading font-exo";
  } else if (variant === "footer-body") {
    Component = "p";
    fontClass = "footer-body font-outfit";
  } else if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(variant)) {
    fontClass = "font-exo";
  } else if (variant === "p" || variant === "span") {
    fontClass = "font-outfit";
  }

  const colorClasses = {
    primary: "text-[var(--color-primary)]",
    secondary: "text-[var(--color-secondary)]",
    dark: "text-[#2A2A2A]",
    white: "text-white",
    muted: "text-[#5E5E5E]",
    none: "",
  };

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const effectiveWeight =
    weight ||
    (["h1", "h2", "h3", "h4", "h5", "h6", "footer-heading"].includes(variant)
      ? "semibold"
      : undefined);

  const finalClassName = `${fontClass} ${colorClasses[color]} ${
    effectiveWeight ? weightClasses[effectiveWeight] : ""
  } ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}
