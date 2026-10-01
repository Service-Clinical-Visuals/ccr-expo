"use client";

import React from "react";
import Link from "next/link";
import { Check, Droplet, HeartPulse, type LucideIcon } from "lucide-react";
import Typography from "./Typography";
import SectionBadge from "./SectionBadge";

interface Area {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  theme: {
    bar: string;
    iconBox: string;
    accent: string;
    check: string;
  };
}

const areas: Area[] = [
  {
    id: "hemodialysis",
    title: "Hemodialysis Solutions",
    subtitle: "Renal Access Systems",
    description:
      "Hemodialysis catheter solutions designed with different tip configurations to meet both short-term and long-term needs.",
    points: [
      "High-flow dual lumen architecture optimized for arterial & venous balance",
      "Biocompatible, thermosensitive polyurethane minimizing vessel trauma",
      "Kink-resistant body with curved or straight extension variants",
    ],
    icon: Droplet,
    theme: {
      bar: "from-[#38BDF8] to-[#818CF8]",
      iconBox: "bg-[#F0F9FF] border-[#E0F2FE] text-[#0369A1]",
      accent: "text-[#0369A1]",
      check: "bg-[#E0F2FE] text-[#0284C7]",
    },
  },
  {
    id: "urology",
    title: "Urology Solutions",
    subtitle: "Endourological Stenting",
    description:
      "A Double J stent designed with a focus on patient comfort to support urinary drainage.",
    points: [
      "Ultra-smooth hydrophilic coating for low insertion resistance",
      "Tapered tip geometry reducing mucosal irritation & reflux",
      "Full-length radiopaque markers for precision fluoroscopic positioning",
    ],
    icon: HeartPulse,
    theme: {
      bar: "from-[#2DD4BF] to-[#22D3EE]",
      iconBox: "bg-[#F0FDFA] border-[#CCFBF1] text-[#0F766E]",
      accent: "text-[#0F766E]",
      check: "bg-[#CCFBF1] text-[#0D9488]",
    },
  },
];

export default function Areas() {
  return (
    <section
      id="expertise"
      className="w-full py-12 md:py-16 lg:py-20 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden"
    >
      <div className="custom-container">
        {/* Header */}
        <div className="flex flex-col items-center text-center" data-aos="fade-up">
          <SectionBadge text="Clinical Excellence & Innovation" />
          <Typography
            variant="h2"
            weight="bold"
            color="dark"
            className="mt-4 min-[2500px]:mt-6 min-[3800px]:mt-8 tracking-[-0.02em] text-center"
          >
            Our Areas of Expertise
          </Typography>
          <Typography
            variant="p"
            color="none"
            className="mt-3 min-[2500px]:mt-5 min-[3800px]:mt-7 text-[#475569] text-center xl:max-w-[85%]"
          >
            Advanced engineering, innovative technology, and quality-focused
            expertise in hemodialysis and urology, delivering reliable, safe, and
            high-performance medical solutions.
          </Typography>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-9 min-[2500px]:gap-14 min-[3800px]:gap-20 mt-10 md:mt-12 min-[2500px]:mt-16 min-[3800px]:mt-24 xl:px-[1%]">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <article
                key={area.id}
                className="group relative flex flex-col bg-white rounded-[16px] min-[2500px]:rounded-[24px] min-[3800px]:rounded-[32px] border border-[#E5E7EB] shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_10px_32px_rgba(15,23,42,0.1)] transition-shadow duration-300 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={100 + idx * 100}
              >
                {/* Top gradient accent */}
                <div className={`h-1 min-[2500px]:h-1.5 min-[3800px]:h-2 w-full bg-linear-to-r ${area.theme.bar}`} />

                {/* Decorative watermark */}
                <HeartPulse
                  aria-hidden="true"
                  className="absolute -right-6 -bottom-10 w-[45%] h-auto text-[#F1F5F9] pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  strokeWidth={2.2}
                />

                <div className="relative z-10 flex flex-col flex-1 px-6 pt-8 pb-6 sm:px-8 md:px-7 lg:px-12 lg:pt-11 lg:pb-8 min-[2500px]:px-16 min-[2500px]:pt-16 min-[2500px]:pb-12 min-[3800px]:px-24 min-[3800px]:pt-24 min-[3800px]:pb-16">
                  {/* Title Row */}
                  <div className="flex items-center gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8">
                    <span
                      className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-[12px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[24px] border shrink-0 ${area.theme.iconBox}`}
                    >
                      <Icon className="w-6 h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12" strokeWidth={2} />
                    </span>
                    <div className="flex flex-col gap-1 min-[2500px]:gap-2">
                      <Typography variant="h1" color="dark" weight="bold" className="leading-tight !font-semibold">
                        {area.title}
                      </Typography>
                      <Typography variant="span" color="none" weight="medium" className={`uppercase tracking-[0.08em] ${area.theme.accent}`}>
                        {area.subtitle}
                      </Typography>
                    </div>
                  </div>

                  <Typography
                    variant="p"
                    color="none"
                    className="mt-6 min-[2500px]:mt-9 min-[3800px]:mt-12 text-[#475569] max-w-[440px] min-[2500px]:max-w-[660px] min-[3800px]:max-w-[880px]"
                  >
                    {area.description}
                  </Typography>

                  <div className="h-px min-[2500px]:h-[2px] bg-[#F1F5F9] my-5 min-[2500px]:my-8 min-[3800px]:my-10" />

                  {/* Points */}
                  <ul className="flex flex-col gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                    {area.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6">
                        <span
                          className={`flex items-center justify-center w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 mt-[0.3em] rounded-full shrink-0 ${area.theme.check}`}
                        >
                          <Check className="w-2.5 h-2.5 min-[2500px]:w-4 min-[2500px]:h-4 min-[3800px]:w-5 min-[3800px]:h-5" strokeWidth={3} />
                        </span>
                        <Typography variant="p" color="none" className="text-[#334155]">
                          {point}
                        </Typography>
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="mt-auto pt-8 min-[2500px]:pt-12 min-[3800px]:pt-16">
                    <div className="h-px min-[2500px]:h-[2px] bg-[#F1F5F9] mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12" />
                    <Link href="#products" className="inline-block text-[#0F172A] hover:text-[var(--color-primary)] transition-colors">
                      <Typography variant="h5" color="none">
                        Learn More
                      </Typography>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
