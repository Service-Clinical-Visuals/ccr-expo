"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const solutionsData = [
  {
    id: "icu",
    title: "Anesthesiology, ICU",
    image: "/medical/emtel/s1.webp",
    link: "#products",
  },
  {
    id: "or",
    title: "Operating room",
    image: "/medical/emtel/s2.webp",
    link: "#products",
  },
  {
    id: "surgery",
    title: "One-day surgery",
    image: "/medical/emtel/s3.webp",
    link: "#products",
  },
];

/**
 * Solutions Section (s1, s2, s3) - EMTEL
 *
 * EXACT FIGMA CARD ARCHITECTURE:
 * 1. Stepped Shoulder Design:
 *    - Bottom Blue Box (Group 275 / Rectangle 10): 533px width, 159px height, background rgba(15, 120, 175, 0.8),
 *      rounded-[10px] with exact Figma shadow: `0px 1px 2px rgba(60, 64, 67, 0.3), 0px 2px 6px 2px rgba(60, 64, 67, 0.15)`.
 *    - Top Image (Image 8): 466px width (centered at 87.4% of the 533px card), 308px height (aspect-[466/308]),
 *      rounded-t-[10px] top corners, sitting flush on top of the blue box.
 * 2. Typography & Button:
 *    - Title: 'Exo 2', 24px, font-weight 600, color #FFFFFF.
 *    - Button (Frame 5): exactly 163px × 48px, border 1px solid #FFFFFF, rounded-[20px], 'DM Sans' 16px, text-white.
 * 3. Grid Spacing:
 *    - 3 cards matching Group 276, 277, 278 across 1683px container with 42px inter-card gap.
 */
const Solutions = () => {
  return (
    <section id="solutions" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Section Header */}
        <div
          className="text-center w-full space-y-3"
          data-aos="fade-up"
        >
          {/* Eyebrow / Tag: 70% max-width on xl */}
          <p className="text-[#0F78AF] text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase font-primary w-full max-w-full xl:max-w-[70%] mx-auto">
            OUR SOLUTIONS
          </p>

          {/* Section Heading: 70% max-width on xl */}
          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827] w-full max-w-full xl:max-w-[70%] mx-auto"
          >
            Complete Monitoring Solutions for Every Clinical Environment
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="p"
            color="secondary"
            className="text-sm sm:text-base leading-relaxed text-[#0F2744]/80 max-w-4xl mx-auto"
          >
            EMTEL provides advanced medical monitoring and resuscitation solutions designed to support healthcare professionals in delivering reliable patient care. Our technologies combine accurate monitoring, efficient data management and dependable performance across diverse clinical settings.
          </Typography>
        </div>

        {/* 3 Solutions Cards Grid (Figma Group 279: 1683px width, 42px gap) */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-[42px] mt-12 sm:mt-16 items-end"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {solutionsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center w-full max-w-[533px] mx-auto group cursor-pointer"
            >
              {/* Top Image: exact Figma 466px width inside 533px card (87.43%), 308px height, rounded-t-[10px] */}
              <div className="w-[87.43%] max-w-[466px] aspect-[466/308] overflow-hidden rounded-t-[10px] relative bg-gray-100 shadow-xs">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Bottom Blue Box: exact Figma 533px width, 159px height, rounded-[10px], shadow & rgba background */}
              <div className="w-full h-[159px] bg-[rgba(15,120,175,0.85)] rounded-[10px] shadow-[0px_1px_2px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] flex flex-col items-center justify-center p-4 gap-3 text-center transition-all duration-300 group-hover:bg-[#0F78AF]">
                {/* Title: 'Exo 2', 24px, font-weight 600, color #FFFFFF */}
                <h3 className="font-primary font-semibold text-xl sm:text-2xl text-white tracking-normal leading-snug">
                  {item.title}
                </h3>

                {/* Button (Frame 5): exact 163px × 48px, border 1px solid #FFFFFF, rounded-[20px], 'DM Sans' 16px */}
                <Link
                  href={item.link}
                  className="w-[163px] h-[48px] rounded-[20px] border border-white flex items-center justify-center font-secondary text-base text-white hover:bg-white hover:text-[#0F78AF] transition-all duration-300 active:scale-95 shadow-xs"
                >
                  <span>View More</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Right "View All Solutions" Link */}
        <div className="w-full flex justify-end mt-8 sm:mt-10">
          <Link
            href="#solutions"
            className="text-[#0F78AF] hover:text-[#0C6492] font-semibold text-sm sm:text-base underline underline-offset-4 transition-colors inline-flex items-center gap-1 group"
          >
            <span>View All Solutions</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
