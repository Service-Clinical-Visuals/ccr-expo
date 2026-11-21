/**
 * Typography Component - EMTEL
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Semantic Mapping:
 *    - Renders native HTML heading elements (h1-h6), paragraphs (p), spans, or custom variants
 *      (e.g., 'footer-heading' maps to <h3> with '.footer-heading' class, 'footer-body' maps to <p>).
 * 2. Fluid REM Scaling:
 *    - Base typography styles (font-size in rem, line-height, font-weight) are defined globally in `globals.css`
 *      and scale across breakpoints (Mobile, Tablet, Desktop, 2K, Ultra-wide, 4K).
 * 3. Color & Weight Abstraction:
 *    - Uses project design tokens (`primary`: #0F78AF, `secondary`: #0F2744, `dark`: #111111, `white`, `muted`).
 */
import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'footer-heading' | 'footer-body';
type Color = 'primary' | 'secondary' | 'dark' | 'white' | 'muted' | 'none';
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
  color = 'secondary',
  weight,
  className = '',
  children,
  outline = false,
  ...props
}: TypographyProps & { outline?: boolean } & React.HTMLAttributes<HTMLElement>) {

  let Component: any = variant;
  let fontClass = '';

  if (variant === 'footer-heading') {
    Component = 'h3';
    fontClass = 'footer-heading';
  } else if (variant === 'footer-body') {
    Component = 'p';
    fontClass = 'footer-body';
  }

  const colorClasses = {
    primary: 'text-[var(--color-primary)]',
    secondary: 'text-[var(--color-secondary)]',
    dark: 'text-[#111111]',
    white: 'text-white',
    muted: 'text-[#64748B]',
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

  const outlineClass = outline ? (color === 'dark' || color === 'primary' ? 'text-outline-dark' : 'text-outline') : '';

  const finalClassName = `${fontClass} ${colorClasses[color]} ${weight ? weightClasses[weight] : ''} ${outlineClass} ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}

