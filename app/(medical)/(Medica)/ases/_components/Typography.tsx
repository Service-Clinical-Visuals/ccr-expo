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
type Color = "primary" | "secondary" | "accent" | "dark" | "white" | "muted" | "none";
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
    fontClass = "footer-heading";
  } else if (variant === "footer-body") {
    Component = "p";
    fontClass = "footer-body";
  }

  const colorClasses: Record<Color, string> = {
    primary: "text-[var(--color-primary)]",
    secondary: "text-[var(--color-secondary)]",
    accent: "text-[var(--color-accent)]",
    dark: "text-[#121C22]",
    white: "text-white",
    muted: "text-[var(--color-muted)]",
    none: "",
  };

  const weightClasses: Record<Weight, string> = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const finalClassName = `${fontClass} ${colorClasses[color]} ${
    weight ? weightClasses[weight] : ""
  } ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}
