"use client";

import React from "react";

const PILLARS = [
  {
    icon: "/medical/cosmed/icon1.webp",
    title: "Decades of Expertise",
    description: "Trusted expertise in respiratory, metabolic, and body composition assessment since 1980.",
  },
  {
    icon: "/medical/cosmed/icon2.webp",
    title: "GLOBAL PRESENCE",
    description: "Serving customers worldwide through our international offices.",
  },
  {
    icon: "/medical/cosmed/icon3.webp",
    title: "GLOBAL REACH",
    description: "Trusted solutions serving customers in 100+ countries worldwide.",
  },
  {
    icon: "/medical/cosmed/icon4.webp",
    title: "TRUSTED EXCELLENCE",
    description: "Proven global impact through trusted products and scientific research.",
  },
];

export default function ProductSolutions() {
  return (
    <section id="solutions" className="relative w-full bg-white py-16 sm:py-20 md:py-20 overflow-hidden">
      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-24">
        {/* Header Section */}
        <div className="text-center max-w-7xl mx-auto mb-12 sm:mb-16">
          {/* Subtitle with vertical blue bar */}
          <div className="flex items-center justify-center gap-2 mb-3.5" data-aos="fade-up">
            <span className="w-1 h-5 bg-[#0066B2] rounded-full inline-block"></span>
            <span className="text-[#0066B2] section-text font-bold font-plus-jakarta tracking-wide uppercase">
              INNOVATION SINCE 1980
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="section-title font-bold text-[#1E293B] font-plus-jakarta leading-snug mb-4 sm:mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Solutions for Lung Function, Metabolic, and Body Composition Assessment
          </h2>

          {/* Description */}
          <p
            className="section-text text-[#64748B] font-inter leading-relaxed max-w-7xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Since 1980, COSMED has been delivering innovative, high-quality solutions for lung function testing, metabolic assessment, and body composition analysis, empowering healthcare professionals and researchers with reliable technology for accurate measurements, clinical evaluations, and scientific research worldwide.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 xl:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-20">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={100 + idx * 100}
            >
              {/* Circular Icon with light-blue background */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 min-[2500px]:w-28 min-[2500px]:h-28 min-[3800px]:w-36 min-[3800px]:h-36 rounded-full bg-[#E5F3F8] flex items-center justify-center mb-6 min-[2500px]:mb-8 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={pillar.icon}
                  alt={pillar.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-20 min-[3800px]:h-20 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="card-title font-bold text-[#1E293B] font-plus-jakarta mb-3 tracking-tight">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="section-text text-[#64748B] font-inter leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
