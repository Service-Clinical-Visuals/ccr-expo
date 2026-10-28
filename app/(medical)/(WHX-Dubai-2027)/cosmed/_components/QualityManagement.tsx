"use client";

import React from "react";

const SPECIALTIES = [
  {
    id: "pulmonology",
    title: "Pulmonology",
    image: "/medical/cosmed/s1.webp",
  },
  {
    id: "cardiology",
    title: "Cardiology",
    image: "/medical/cosmed/s2.webp",
  },
  {
    id: "paediatric",
    title: "Paediatric",
    image: "/medical/cosmed/s3.webp",
  },
  {
    id: "neonatology",
    title: "Neonatology",
    image: "/medical/cosmed/s4.webp",
  },
  {
    id: "sports-science",
    title: "Sports Science",
    image: "/medical/cosmed/s5.webp",
  },
  {
    id: "nutrition",
    title: "Nutrition",
    image: "/medical/cosmed/s6.webp",
  },
  {
    id: "critical-care",
    title: "Critical Care",
    image: "/medical/cosmed/s7.webp",
  },
  {
    id: "rehab",
    title: "Rehab",
    image: "/medical/cosmed/s8.webp",
  },
  {
    id: "human-performance",
    title: "Human Performance",
    image: "/medical/cosmed/s9.webp",
  },
  {
    id: "well-being",
    title: "Well Being",
    image: "/medical/cosmed/s10.webp",
  },
];

export default function QualityManagement() {
  return (
    <section
      id="specialties"
      className="relative w-full bg-white py-16 sm:py-20 md:py-20 overflow-hidden"
    >
      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-24">
        {/* Header Section */}
        <div className="text-center max-w-7xl mx-auto mb-12 sm:mb-14">
          {/* Subtitle with vertical blue bar */}
          <div
            className="flex items-center justify-center gap-2 mb-3.5"
            data-aos="fade-up"
          >
            <span className="w-1 h-5 bg-[#0066B2] rounded-full inline-block"></span>
            <span className="text-[#0066B2] section-text font-semibold font-plus-jakarta tracking-wide">
              Our Core Specialities
            </span>
          </div>

          {/* Section Title */}
          <h2
            className="section-title font-bold text-[#1E293B] font-plus-jakarta leading-snug mb-4 sm:mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Expertise in Measurement Technologies
          </h2>

          {/* Description Paragraph */}
          <p
            className="section-text text-[#64748B] font-inter leading-relaxed max-w-7xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            COSMED's dedicated focus on cardiopulmonary, metabolic, and body composition measurement technologies has established the company as a leading innovator in diagnostic and assessment solutions worldwide.
          </p>
        </div>

        {/* 10 Specialties Grid (2 columns on mobile, 5 columns on tablet & desktop) */}
        <div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-5 lg:gap-5 xl:gap-6 min-[2500px]:gap-8 min-[3800px]:gap-10"
        >
          {SPECIALTIES.map((item, idx) => (
            <div
              key={item.id}
              className="relative w-full aspect-[6/5] rounded-[10px] overflow-hidden group cursor-pointer select-none bg-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={idx * 60}
            >
              {/* Base Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Blue Overlay on Hover with Centered Title from Figma */}
              <div className="absolute inset-0 bg-[#0066B2]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 sm:p-4">
                <p className="font-plus-jakarta font-bold text-white text-center text-xs sm:text-base lg:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl tracking-wide drop-shadow-sm select-none">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
