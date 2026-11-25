"use client";

import React from "react";
import Typography from "./Typography";
import { Accessibility, Flag, Asterisk, Sun } from "lucide-react";

/**
 * QualityPerformance Section - Sunoptic Surgical
 * Matches Figma specifications:
 * - Light Background: #F9FDFF.
 * - Centered Header with max-w-[70%].
 * - 4 Feature Cards (Ergonomic Designs, Made in the USA, Integrated Solutions, Brightest Technologies).
 * - Exact vector curve accent at bottom right of each card (#EEF8FE).
 * - Top-left icon container in #EEF8FE with responsive icon scaling up to 4K.
 * - Badges at bottom of cards: ERGONOMICS FIRST, 100% US MANUFACTURING, SINGLE-FACILITY PRECISION, PURE PHOTONIC OUTPUT.
 * - Responsive: Tablet (768px-1035px) 2 columns, Desktop (>=1036px) strictly 4 columns in 1 single row.
 */
const QualityPerformance = () => {
  const cards = [
    {
      title: "Ergonomic Designs",
      desc: "With more than 40 years of experience, we know what physicians need to perform at their peak. All products are designed with the comfort and performance of surgeons and physicians in mind.",
      badge: "ERGONOMICS FIRST",
      icon: <Accessibility className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 text-[#409BBD]" />,
    },
    {
      title: "Made in the USA",
      desc: "All products are designed, developed and produced in the United States of America. Everything we make goes through an extensive quality assurance protocol to insure the quality meets our high standards.",
      badge: "100% US MANUFACTURING",
      icon: <Flag className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 text-[#409BBD]" />,
    },
    {
      title: "Integrated Solutions",
      desc: "Headquartered in Jacksonville, Florida, all of our products are designed and manufactured at one facility to ensure cutting-edge technology and superior quality control from source to fiber.",
      badge: "SINGLE-FACILITY PRECISION",
      icon: <Asterisk className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 text-[#409BBD]" />,
    },
    {
      title: "Brightest Technologies",
      desc: "Our light sources are outshining the competition and illuminating surgical cases across the globe. We go beyond the basic concept of what a light source should do with ongoing research and development.",
      badge: "PURE PHOTONIC OUTPUT",
      icon: <Sun className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 text-[#409BBD]" />,
    },
  ];

  return (
    <section id="quality" className="w-full py-16 xl:py-24 2k:py-32 4k:py-48 bg-[#F9FDFF] overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Section Header: Centered with xl:max-w-[70%] line measure */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="eyebrow"
            className="!text-[#409BBD] font-semibold text-sm sm:text-base tracking-wider"
          >
            UNCOMPROMISED QUALITY SINCE 1978
          </Typography>

          <Typography
            variant="h2"
            color="secondary"
            className="text-2xl sm:text-3xl lg:text-4xl 2k:text-5xl 4k:text-6xl font-bold font-['Palanquin',sans-serif] text-[#0A192F]"
          >
            Engineered for Peak Surgical Performance
          </Typography>
        </div>

        {/* 4 Feature Cards Grid: Tablet (768px-1035px) strictly 2 columns, Desktop (>=1036px) strictly 4 columns */}
        <div
          className="w-full sunoptic-4-col-grid grid grid-cols-1 md:grid-cols-2 min-[1036px]:grid-cols-4 gap-6 sm:gap-7 2k:gap-10 4k:gap-14 mt-12 sm:mt-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl 2k:rounded-2xl 4k:rounded-3xl p-6 sm:p-7 2k:p-10 4k:p-14 border border-[#EBF5FB] shadow-[0_2px_12px_rgba(10,25,47,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Decorative Vector Curve in Bottom-Right Corner (#EEF8FE) */}
              <div className="absolute bottom-0 right-0 w-3/4 max-w-[292px] pointer-events-none z-0">
                <svg
                  viewBox="0 0 292 93"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 93C85 93 185 70 292 0V93H0Z"
                    fill="#EEF8FE"
                  />
                </svg>
              </div>

              {/* Card Main Content */}
              <div className="relative z-10 flex flex-col flex-1">
                {/* Top Icon Box in #EEF8FE with 2k & 4k scaling */}
                <div className="w-12 h-12 2k:w-18 2k:h-18 4k:w-26 4k:h-26 rounded-[6px] 2k:rounded-[10px] 4k:rounded-[16px] bg-[#EEF8FE] flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-['Palanquin',sans-serif] font-bold text-xl sm:text-2xl 2k:text-3xl 4k:text-4xl text-[#0A192F] mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-['DM_Sans',sans-serif] text-sm sm:text-[15px] 2k:text-lg 4k:text-xl leading-relaxed text-[#111111]/80 mb-6">
                  {card.desc}
                </p>
              </div>

              {/* Bottom Badge: No divider border, clean position matching Figma */}
              <div className="relative z-10 pt-2">
                <span className="font-['DM_Sans',sans-serif] font-semibold text-xs sm:text-[13px] 2k:text-base 4k:text-lg tracking-wider uppercase text-[#409BBD]">
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default QualityPerformance;
