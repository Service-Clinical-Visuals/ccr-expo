"use client";

import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "body" | "lead" | "small";
  as?: React.ElementType;
  className?: string;
  color?: "primary" | "dark" | "body" | "white" | "muted" | "secondary" | "none";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  align?: "left" | "center" | "right" | "justify";
}

export default function Typography({
  children,
  variant = "body",
  as,
  className = "",
  color = "body",
  weight,
  align,
  ...rest
}: TypographyProps) {
  // Determine which HTML tag to render
  const defaultTags: Record<string, React.ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    h7: "span",
    body: "p",
    lead: "p",
    small: "span",
  };

  const Component = as || defaultTags[variant] || "p";

  // Sizing from Lumed template, matched to Veedol
  const variantStyles = {
    h1: "text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px] xl:text-[38px] leading-[1.1] tracking-tight ",
    h2: "text-[26px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[38px] leading-[1.15] tracking-tight ",
    h3: "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] leading-[1.2] ",
    h4: "text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[32px] leading-[1.3] ",
    h5: "text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[1.4] ",
    h6: "text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[19px] leading-[1.5] ",
    h7: "text-[11px] sm:text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14px] leading-[1.5] ",
    body: "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] leading-[1.65]",
    lead: "text-[16px] sm:text-[17px] md:text-[19px] lg:text-[20px] xl:text-[21px] leading-[1.6]",
    small: "text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[13px] leading-[1.5]",
  };

  // Brand color overrides
  const colorStyles = {
    primary: "text-primary",
    dark: "text-dark",
    body: "text-[#555555]",
    white: "text-[#FFFFFF]",
    muted: "text-gray-500",
    secondary: "text-primary", // Red
    none: "",
  };

  // Weight classes
  const weightStyles = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  // Alignment classes
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  const isHeading = ["h1", "h2", "h3", "h4", "h5", "h6", "h7"].includes(variant);
  const fontClass = isHeading ? "font-bigshoulder" : "font-dm";

  // Dynamic default weights
  const defaultWeights: Record<string, "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold"> = {
    h1: "normal",
    h2: "normal",
    h3: "normal",
    h4: "normal",
    h5: "normal",
    h6: "normal",
    h7: "normal",
    body: "normal",
    lead: "normal",
    small: "normal",
  };

  const activeWeight = weight || defaultWeights[variant] || "normal";

  const combinedClasses = `
    ${fontClass}
    ${variantStyles[variant]}
    ${colorStyles[color]}
    ${weightStyles[activeWeight]}
    ${align ? alignStyles[align] : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <Component className={combinedClasses} {...rest}>
      {children}
    </Component>
  );
}
