import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function DiamondIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5h11l4 5L12 20.5 2.5 8.5z" />
      <path d="M2.5 8.5h19" />
      <path d="M8 8.5l4-5 4 5" />
      <path d="M8 8.5l4 12 4-12" />
    </svg>
  );
}

export function TrainingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 21v-3.6C4.6 15.9 3.5 13.6 3.5 11.2 3.5 6.7 7.1 3 11.6 3c3.9 0 7.1 2.6 7.8 6.2l1.6 3c.2.4 0 .8-.4 1l-1.2.5V16c0 1.1-.9 2-2 2h-1.9v3" />
      <circle cx="10.5" cy="10" r="2.8" />
      <circle cx="10.5" cy="10" r="1.5" />
    </svg>
  );
}

export function CertificateIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M18.5 12V6.5a3 3 0 0 0-3-3h-8a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h5.5" />
      <path d="M8.5 8h6" />
      <path d="M8.5 12h2.5" />
      <circle cx="17" cy="15" r="2.5" />
      <path d="M15.6 17.1l-.6 3.4 2-1 2 1-.6-3.4" />
    </svg>
  );
}

export function SupportIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 10a6.5 6.5 0 1 1 13 0" />
      <path d="M9.5 11.6A3.2 3.2 0 1 1 12.6 12.4" />
      <circle cx="11.5" cy="13.3" r="1.1" fill="currentColor" stroke="none" />
      <path d="M4.5 15.5v.5c0 2.5 3.4 4.5 7.5 4.5s7.5-2 7.5-4.5v-.5" />
    </svg>
  );
}
