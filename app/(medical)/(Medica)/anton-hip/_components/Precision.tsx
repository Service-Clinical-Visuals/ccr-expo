"use client";

import React from "react";
import Typography from "./Typography";

// Filled biotech/microscope icon matching the reference mockup
const MicroscopeIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62C6.28 8.13 5 9.92 5 12c0 2.76 2.24 5 5 5v2H7z" />
    <path d="M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.59 1.62.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.53-.94.34-.34-.94-1.88.68.34.94-.94.34.56 1.54z" />
    <circle cx="10.5" cy="8" r="1.5" />
  </svg>
);

// Ruler icon: outlined bar with gauge ticks hanging from the top edge
const PrecisionRulerIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z" />
  </svg>
);

// Filled group icon (three people) matching the reference mockup
const GlobalExpertNetworkIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
  </svg>
);

// Factory icon with chimney and window slots matching the reference mockup
const FactoryIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 22H2V10l7-3v2l5-2v3h3l1-8h3l1 8v12zM12 9.95l-5 2V10l-5 2.14V20h16v-8h-6V9.95zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z" />
  </svg>
);

const FEATURES = [
  {
    id: "additive-psi",
    title: "Additive PSI Implants",
    description:
      "Custom anatomy matching via high-resolution CT/DICOM data with porous trabecular titanium structure for accelerated osseointegration and vascularization.",
    icon: MicroscopeIcon,
    iconColor: "text-[#0A7E8C]",
  },
  {
    id: "micron-precision",
    title: "Micron-Level Precision",
    description:
      "Sub-millimetre manufacturing tolerances that meet the strictest maxillofacial surgical requirements, ensuring zero intraoperative plate bending.",
    icon: PrecisionRulerIcon,
    iconColor: "text-[#111111]",
  },
  {
    id: "global-network",
    title: "Global Expert Network",
    description:
      "Close clinical collaboration with leading cranio-maxillofacial surgeons, research institutes, and university clinics in over 50 countries worldwide.",
    icon: GlobalExpertNetworkIcon,
    iconColor: "text-[#0A7E8C]",
  },
  {
    id: "german-mfg",
    title: "End-to-End German Mfg",
    description:
      "Sustainable in-house production in Fridingen an der Donau ensuring uncompromising quality control, CE MDR compliance, and rapid trauma case delivery.",
    icon: FactoryIcon,
    iconColor: "text-[var(--color-primary)]",
  },
];

export default function Precision() {
  return (
    <section id="precision" className="w-full py-16 md:py-24 min-[2500px]:py-28 min-[3800px]:py-36 bg-white relative overflow-hidden">
      {/* Decorative Responsive Primary Diagonal Stripes (Scalable from Mobile to 4K Ultra-Wide) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <svg
          className="absolute right-0 top-0 w-full h-full pointer-events-none"
          viewBox="0 0 1920 800"
          preserveAspectRatio="xMaxYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1">
            {/* Wide diagonal bands confined to the right side, running down-left at ~48° */}
            <line x1="1810" y1="-40" x2="1010" y2="840" stroke="#DB8F1B" strokeWidth="44" />
            <line x1="1960" y1="-40" x2="1160" y2="840" stroke="#DB8F1B" strokeWidth="44" />
            <line x1="2110" y1="-40" x2="1310" y2="840" stroke="#DB8F1B" strokeWidth="44" />
            <line x1="2260" y1="-40" x2="1460" y2="840" stroke="#DB8F1B" strokeWidth="44" />
            <line x1="2410" y1="-40" x2="1610" y2="840" stroke="#DB8F1B" strokeWidth="44" />
            <line x1="2560" y1="-40" x2="1760" y2="840" stroke="#DB8F1B" strokeWidth="44" />
            <line x1="2710" y1="-40" x2="1910" y2="840" stroke="#DB8F1B" strokeWidth="44" />
          </g>
        </svg>
      </div>

      <div className="custom-container relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center max-w-6xl min-[3800px]:max-w-[2400px] mx-auto mb-9 sm:mb-10 min-[3800px]:mb-20"
          data-aos="fade-up"
        >
          <Typography variant="h2" color="dark" weight="bold" className="text-center tracking-tight">
            Precision, Innovation &amp; Expertise in Facial Implants
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-center mt-5 sm:mt-6 min-[3800px]:mt-10 leading-[1.75] text-[#333333] max-w-[1180px] min-[3800px]:max-w-[2400px]"
          >
            Anton Hipp combines advanced implant technology, micron-level manufacturing precision, and close collaboration with global surgical experts to develop patient-specific solutions. With in-house German production and rigorous quality standards, the company delivers carefully engineered implants designed to meet complex maxillofacial requirements.
          </Typography>
        </div>

        {/* 4 Feature Cards Grid: 4 in a single row from tablet width upward */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 min-[3800px]:gap-14 items-stretch">
          {FEATURES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-[8px] min-[3800px]:rounded-[16px] px-4 py-6 lg:px-5 lg:py-7 xl:px-[22px] xl:py-8 min-[3800px]:p-14 border border-[#ECECEC] shadow-[0_2px_10px_rgba(0,0,0,0.12)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)] transition-all duration-300 flex flex-col justify-start group hover:-translate-y-1 h-full relative z-10"
              >
                {/* Feature Icon */}
                <div className="mb-6 sm:mb-7 min-[3800px]:mb-12">
                  <IconComponent
                    className={`w-8 h-8 sm:w-9 sm:h-9 min-[3800px]:w-16 min-[3800px]:h-16 ${item.iconColor} shrink-0`}
                  />
                </div>

                {/* Card Title: wraps on narrower screens, single line on wide desktop */}
                <div className="mb-4 sm:mb-5 min-[3800px]:mb-8">
                  <Typography
                    variant="h4"
                    color="dark"
                    weight="semibold"
                    className="leading-snug whitespace-normal 2xl:whitespace-nowrap tracking-tight"
                  >
                    {item.title}
                  </Typography>
                </div>

                {/* Card Description */}
                <Typography
                  variant="p"
                  color="muted"
                  className="text-[#444444] leading-[1.75] min-[3800px]:leading-[1.8] flex-1 text-left"
                >
                  {item.description}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
