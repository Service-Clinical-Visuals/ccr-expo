/**
 * Typography Component
 *
 * ARCHITECTURAL REFERENCE: Inogen Development Standards
 * 1. Semantic Mapping:
 *    - Renders native HTML heading elements (h1-h6), paragraphs (p), spans, or custom variants
 *      (e.g., 'footer-heading' maps to <h3> with '.footer-heading' class, 'footer-body' maps to <p>).
 * 2. Fluid REM Scaling:
 *    - Base typography styles (font-size in rem, line-height, font-weight) are defined globally in `globals.css`
 *      and scale across breakpoints (Mobile, Tablet, Desktop, Laptop, Ultra-wide, 4K).
 * 3. Color & Weight Abstraction:
 *    - Uses project design tokens (`primary`, `secondary`, `dark`, `white`, `muted`, `gray`).
 */
import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'footer-heading' | 'footer-body';
type Color = 'primary' | 'secondary' | 'dark' | 'white' | 'muted' | 'gray' | 'none';
type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';

interface TypographyProps {
  variant?: Variant;
  color?: Color;
  weight?: Weight;
  className?: string;
  children: React.ReactNode;
}

export default function Typography({
  variant = 'p',
  color = 'dark',
  weight,
  className = '',
  children,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  
  let Component: any = variant;
  const isHeading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'footer-heading'].includes(variant);
  let fontClass = isHeading ? 'font-heading' : 'font-body';

  if (variant === 'footer-heading') {
    Component = 'h3';
    fontClass = 'footer-heading font-heading';
  } else if (variant === 'footer-body') {
    Component = 'p';
    fontClass = 'footer-body font-body';
  }

  const colorClasses = {
    primary: 'text-[var(--color-primary)]',
    secondary: 'text-[var(--color-secondary)]',
    dark: 'text-[#1E1E1E]',
    white: 'text-white',
    muted: 'text-[#4B5563]',
    gray: 'text-[#333333]',
    none: '',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };

  const finalClassName = `${fontClass} ${colorClasses[color]} ${weight ? weightClasses[weight] : ''} ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}

