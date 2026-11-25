/**
 * Typography Component - Reison Medical
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Semantic Mapping:
 *    - Renders native HTML heading elements (h1-h6), paragraphs (p), spans, or custom variants
 *      ('footer-heading' -> <h3> with '.footer-heading', 'footer-body' -> <p> with '.footer-body').
 * 2. Fluid REM Scaling:
 *    - Base typography styles (font-size in rem, line-height, font-weight) are defined globally in `globals.css`
 *      and scale smoothly across all 7 breakpoints (Small Mobile through 4K).
 * 3. Color & Weight Abstraction:
 *    - Design tokens: 'primary' (#2F3F5A), 'accent' (#E53B14), 'dark' (#2A2A2A), 'muted' (#4A4A4A), 'white' (#FFFFFF).
 */
import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'footer-heading' | 'footer-body';
type Color = 'primary' | 'accent' | 'dark' | 'muted' | 'white' | 'none';
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
  outline = false,
  ...props
}: TypographyProps & { outline?: boolean } & React.HTMLAttributes<HTMLElement>) {
  let Component: any = variant;
  let fontClass = '';

  if (variant === 'footer-heading') {
    Component = 'h3';
    fontClass = 'footer-heading font-primary';
  } else if (variant === 'footer-body') {
    Component = 'p';
    fontClass = 'footer-body font-secondary';
  } else if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant)) {
    fontClass = 'font-primary';
  } else {
    fontClass = 'font-secondary';
  }

  const colorClasses = {
    primary: 'text-[var(--color-primary)]',
    accent: 'text-[var(--color-accent)]',
    dark: 'text-[var(--color-dark)]',
    muted: 'text-[var(--color-muted)]',
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

  const outlineClass = outline ? (color === 'dark' || color === 'primary' ? 'text-outline-dark' : 'text-outline') : '';
  const finalClassName = `${fontClass} ${colorClasses[color]} ${weight ? weightClasses[weight] : ''} ${outlineClass} ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}

