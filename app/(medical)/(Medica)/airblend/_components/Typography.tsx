/**
 * Typography Component - Airblend
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Semantic Mapping:
 *    - Renders native HTML heading elements (h1-h6), paragraphs (p), spans, or custom variants
 *      (e.g., 'footer-heading' maps to <h3> with '.footer-heading' class, 'footer-body' maps to <p>).
 * 2. Fluid REM Scaling:
 *    - Base typography styles (font-size in rem, line-height, font-weight) are defined globally in `globals.css`
 *      and scale across breakpoints (Small Mobile, Mobile Landscape, Tablet up to 1035px, Laptop from 1036px, Desktop, Ultra-wide, 4K).
 * 3. Color & Weight Abstraction:
 *    - Uses Airblend design tokens (primary: #7BC142, secondary: #2A2A2A, muted: #4A4A4A, dark: #121212, white: #FFFFFF).
 */
import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'footer-heading' | 'footer-body';
type Color = 'primary' | 'secondary' | 'muted' | 'dark' | 'white' | 'none';
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

  const colorClasses = {
    primary: 'text-[var(--color-primary)]',
    secondary: 'text-[#2A2A2A]',
    muted: 'text-[#4A4A4A]',
    dark: 'text-[#121212]',
    white: 'text-white',
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
