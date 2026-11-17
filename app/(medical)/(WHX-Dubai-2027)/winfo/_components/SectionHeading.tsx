import React from "react";

/**
 * Centered heading: blue eyebrow, title, blue underline bar, intro text.
 * Used by the products, video and expertise sections.
 */
export function CenteredHeading({
  eyebrow,
  title,
  text,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`text-center mx-auto max-w-[1420px] min-[1921px]:max-w-[78%] ${className}`} data-aos="fade-up">
      <p className="eyebrow font-body font-medium text-[var(--accent)] mb-3 xl:mb-4">{eyebrow}</p>
      <h2 className={`section-title font-head font-semibold ${light ? "text-white" : "text-[var(--heading)]"}`}>
        {title}
      </h2>
      <span
        aria-hidden
        className="block mx-auto mt-6 xl:mt-7 mb-7 xl:mb-9 w-[clamp(120px,9.3vw,360px)] h-[clamp(4px,0.26vw,10px)] rounded-full bg-[var(--accent)]"
      />
      {text && (
        <p className={`section-text font-body ${light ? "text-white/95" : "text-[var(--body)]"}`}>{text}</p>
      )}
    </div>
  );
}

/** Left-aligned heading with a blue bar spanning the eyebrow and title. */
export function BarHeading({
  eyebrow,
  title,
  light = false,
  as: Tag = "h2",
  titleClassName = "section-title",
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  light?: boolean;
  as?: "h1" | "h2";
  titleClassName?: string;
  className?: string;
}) {
  return (
    <div className={`border-l-[clamp(3px,0.21vw,8px)] border-[var(--accent)] pl-[clamp(14px,1vw,40px)] ${className}`}>
      <p
        className={`font-body font-medium mb-1 xl:mb-2 ${
          Tag === "h1" ? "banner-eyebrow" : "eyebrow"
        } ${light ? "text-white" : "text-[var(--accent)]"}`}
      >
        {eyebrow}
      </p>
      <Tag className={`${titleClassName} font-head font-semibold ${light ? "text-white" : "text-[var(--heading)]"}`}>
        {title}
      </Tag>
    </div>
  );
}
