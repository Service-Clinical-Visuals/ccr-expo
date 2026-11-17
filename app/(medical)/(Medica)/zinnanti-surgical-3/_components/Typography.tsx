/**
 * Typography Component - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 *
 * 1. Semantic Mapping:
 *    - Renders native HTML heading elements (h1-h6), paragraphs (p), spans, or custom variants
 *      (e.g., 'footer-heading' maps to <h3> with '.footer-heading' class, 'footer-body' maps to <p>).
 * 2. Fluid REM Scaling:
 *    - Base typography styles (font-size in rem, line-height, font-weight) are defined globally in `globals.css`
 *      and scale across breakpoints (Mobile, Tablet, Desktop, 2K, Ultra-wide, 4K).
 * 3. Color & Weight Abstraction:
 *    - Uses project design tokens (`primary`, `accent`, `dark`, `white`, `muted`).
 */
import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'footer-heading' | 'footer-body';
type Color = 'primary' | 'accent' | 'dark' | 'white' | 'muted' | 'none';
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
  let fontClass = '';

  if (variant === 'footer-heading') {
    Component = 'h3';
    fontClass = 'footer-heading';
  } else if (variant === 'footer-body') {
    Component = 'p';
    fontClass = 'footer-body';
  }

  const colorClasses: Record<Color, string> = {
    primary: 'text-[var(--color-primary)]',
    accent: 'text-[var(--color-accent)]',
    dark: 'text-[#333333]',
    white: 'text-white',
    muted: 'text-[#555555]',
    none: '',
  };

  const weightClasses: Record<Weight, string> = {
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

