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
  | "navbar"
  | "footer-heading"
  | "footer-body"
  | "watermark";

type Color =
  | "primary"
  | "secondary"
  | "dark"
  | "white"
  | "muted"
  | "yellow"
  | "watermark"
  | "none";

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
  color = "white",
  weight,
  className = "",
  children,
  outline = false,
  ...props
}: TypographyProps & { outline?: boolean } & React.HTMLAttributes<HTMLElement>) {
  let Component: any = variant;
  let fontClass = "";

  if (variant === "footer-heading") {
    Component = "h3";
    fontClass = "footer-heading font-primary";
  } else if (variant === "footer-body") {
    Component = "p";
    fontClass = "footer-body font-secondary";
  } else if (variant === "navbar") {
    Component = "span";
    fontClass = "navbar font-primary";
  } else if (variant === "watermark") {
    Component = "div";
    fontClass = "watermark font-primary select-none pointer-events-none";
  } else if (variant === "h1" || variant === "h2" || variant === "h3") {
    fontClass = "font-primary";
  } else if (variant === "h4" || variant === "h5" || variant === "h6" || variant === "p" || variant === "span") {
    fontClass = "font-secondary";
  }

  const colorClasses: Record<Color, string> = {
    primary: "text-[var(--color-primary)]",
    yellow: "text-[#F8EA17]",
    secondary: "text-[var(--color-secondary)]",
    dark: "text-[#121111]",
    white: "text-white",
    muted: "text-gray-300",
    watermark: "text-white/5",
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

  const outlineClass = outline
    ? color === "dark" || color === "primary"
      ? "text-outline-dark"
      : "text-outline"
    : "";

  const finalClassName = `${fontClass} ${colorClasses[color] || ""} ${
    weight ? weightClasses[weight] : ""
  } ${outlineClass} ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}
