"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

interface SisterCompany {
  name: string;
  image: string;
  description: string;
  link: string;
}

const sisterCompanies: SisterCompany[] = [
  {
    name: "MediPlac",
    image: "/medical/reison/g1.webp",
    description: "MediPlac specializes in the development, production, and distribution of premium patient positioning materials, with an ability to quickly adapt to specialized customer requirements.",
    link: "#",
  },
  {
    name: "Richardsons Healthcare",
    image: "/medical/reison/g2.webp",
    description: "Richardsons Healthcare specializes in developing high-quality operating table mattresses and a wide range of patient support accessories designed to enhance comfort and safety.",
    link: "#",
  },
  {
    name: "MTT",
    image: "/medical/reison/g3.webp",
    description: "MTT specializes in medical technology solutions, focusing on advanced holding and positioning systems for applications such as transrectal ultrasound procedures and prostate biopsies.",
    link: "#",
  },
];

/**
 * NinexGroup Section - Reison Medical
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Background Theme:
 *    - Soft grey background (`#F4F4F4`).
 * 2. Section Header:
 *    - Constrained to `w-full max-w-full xl:max-w-[70%] mx-auto` for readable typography measure.
 * 3. 3-Column Responsive Grid:
 *    - Single column on mobile, 2 columns on tablet (768px-1035px), 3 columns on desktop (>=1036px).
 *    - Navy logo card floating at top containing the official sister company logos (g1, g2, g3).
 */
const NinexGroup = () => {
  return (
    <section id="ninex-group" className="w-full py-16 xl:py-24 bg-[#F4F4F4] overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-12 sm:gap-16">

        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#2A2A2A] font-primary capitalize"
          >
            Part of Ninex Group
          </Typography>
          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#4A4A4A]"
          >
            Reison Medical is part of the Ninex Group, an investment company specializing in small to medium-sized MedTech companies. Ninex’s portfolio companies specialize in the development and production of premium medical equipment, delivering quality, innovation, and reliable healthcare solutions that support better patient care worldwide. Read more about our sister companies below.
          </Typography>
        </div>

        {/* 3 Company Cards Grid: Tablet 2 cols (768px-1035px), Desktop 3 cols (>=1036px) */}
        {/* pt-8/pt-10 accommodates the floating navy box protruding 30px above the white card */}
        <div className="reison-ninex-grid w-full pt-8 sm:pt-10 min-[2500px]:pt-14" data-aos="fade-up" data-aos-delay="150">
          {sisterCompanies.map((company, idx) => (
            <div
              key={idx}
              className="relative w-full flex flex-col items-center group cursor-pointer"
            >
              {/* Floating Navy Logo Box - Sticks out ~30px above the white card & horizontally centered */}
              <div className="absolute -top-7 sm:-top-8 min-[2500px]:-top-12 min-[3800px]:-top-16 left-1/2 -translate-x-1/2 w-[72.6%] max-w-[387px] min-[2500px]:max-w-[580px] min-[3800px]:max-w-[780px] h-[135px] sm:h-[158px] min-[2500px]:h-[235px] min-[3800px]:h-[320px] bg-[#2F3F5A] group-hover:bg-[#1e2a3d] rounded-[20px] min-[2500px]:rounded-[30px] min-[3800px]:rounded-[40px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex items-center justify-center p-4 sm:p-5 min-[2500px]:p-8 min-[3800px]:p-12 z-20 transition-all duration-300">
                <img
                  src={company.image}
                  alt={company.name}
                  className="max-h-[85%] max-w-[85%] w-auto aspect-[324/123] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Elevated White Card Container with U-shaped Notch (Small Gap around Navy Box) */}
              <div className="relative w-full min-h-[380px] sm:min-h-[415px] min-[2500px]:min-h-[600px] min-[3800px]:min-h-[820px] pt-[140px] sm:pt-[160px] min-[2500px]:pt-[240px] min-[3800px]:pt-[320px] pb-8 sm:pb-10 min-[2500px]:pb-14 px-6 sm:px-8 min-[2500px]:px-12 flex flex-col items-center text-center justify-between transition-all duration-300">
                {/* SVG Notched Card Background creating visible gap around the navy box */}
                <svg
                  className="absolute inset-0 w-full h-full -z-10 drop-shadow-[0_3px_8px_rgba(0,0,0,0.20)] group-hover:drop-shadow-[0_10px_25px_rgba(0,0,0,0.22)] transition-all duration-300"
                  viewBox="0 0 533 415"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M 10 0 H 52 A 4 4 0 0 1 56 4 V 120 A 24 24 0 0 0 80 144 H 453 A 24 24 0 0 0 477 120 V 4 A 4 4 0 0 1 481 0 H 523 A 10 10 0 0 1 533 10 V 405 A 10 10 0 0 1 523 415 H 10 A 10 10 0 0 1 0 405 V 10 A 10 10 0 0 1 10 0 Z"
                    fill="#FFFFFF"
                  />
                </svg>

                {/* Title */}
                <h3 className="font-primary text-xl sm:text-2xl min-[2500px]:text-3xl font-bold text-[#2A2A2A] mb-3">
                  {company.name}
                </h3>

                {/* Description */}
                <p className="font-secondary text-xs sm:text-sm min-[2500px]:text-lg text-[#4A4A4A] leading-relaxed mb-6 max-w-[92%]">
                  {company.description}
                </p>

                {/* Read More Link */}
                <Link
                  href={company.link}
                  className="font-primary text-base min-[2500px]:text-xl font-semibold text-[#2F3F5A] group-hover:text-[#E53B14] underline underline-offset-4 decoration-current transition-colors mt-auto"
                >
                  Read More &gt;&gt;
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NinexGroup;

