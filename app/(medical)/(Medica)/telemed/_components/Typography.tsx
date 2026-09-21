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
  | "footer-body";

type Color = "primary" | "dark" | "body" | "muted" | "white" | "none";
type Weight = "light" | "normal" | "medium" | "semibold" | "bold";

interface TypographyProps {
  variant?: Variant;
  color?: Color;
  weight?: Weight;
  className?: string;
  children: React.ReactNode;
}

export default function Typography({
  variant = "p",
  color = "body",
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
  } else if (variant === "navbar") {
    Component = "span";
    fontClass = "navbar";
  }

  let defaultFont = "";
  if (["h1", "h2", "h3", "h4", "h5", "h6", "footer-heading", "navbar"].includes(variant)) {
    defaultFont = "font-['Exo_2']";
  } else {
    defaultFont = "font-['Outfit']";
  }

  const colorClasses: Record<Color, string> = {
    primary: "text-[#0F3E7B]",
    dark: "text-[#2A2A2A]",
    body: "text-[#4A4A4A]",
    muted: "text-[#727272]",
    white: "text-white",
    none: "",
  };

  const weightClasses: Record<Weight, string> = {
    light: "font-[300]",
    normal: "font-[400]",
    medium: "font-[500]",
    semibold: "font-[600]",
    bold: "font-[700]",
  };

  const finalClassName = `${defaultFont} ${fontClass} ${colorClasses[color]} ${
    weight ? weightClasses[weight] : ""
  } ${className}`.trim();

  return React.createElement(
    Component,
    { className: finalClassName, ...props },
    children
  );
}
