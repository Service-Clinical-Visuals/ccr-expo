/**
 * Flexibility Section
 *
 * ARCHITECTURAL REFERENCE (from Inogen + Figma Specs):
 * 1. Section Container: Full-width clean white wrapper with responsive padding.
 * 2. Section Header:
 *    - Title: "Flexibility in creation of medical innovation" (`h2`, Cal Sans).
 *    - Subtitle copy constrained to `xl:max-w-[75%]` for optimal line measure.
 * 3. Asymmetric Image Pair:
 *    - Left Image (f1.webp): Doctor examining spine X-ray (~42% width on desktop).
 *    - Right Image (f2.webp): Doctor examining pelvis / orthopedic model (~58% width on desktop).
 *    - Border, subtle shadow, and group hover zoom transition.
 */
"use client";

import React from "react";
import Typography from "./Typography";

export default function Flexibility() {
  return (
    <section id="competences" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[75%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="secondary"
            className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide text-[#2A2A2A]"
          >
            Flexibility in creation of medical innovation
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#4A4A4A]"
          >
            At ChM, we combine engineering expertise and medical collaboration to develop innovative orthopedic solutions that meet clinical needs, improve anatomical fit, and enhance comfort in the operating room.
          </Typography>
        </div>

        {/* Two Images Side by Side: Asymmetric Width Split (42% | 58%) */}
        <div
          className="w-full mt-10 sm:mt-14 flex flex-col md:flex-row gap-6 sm:gap-8 items-stretch"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* Left Image: f1.png - Flat sharp corners (rounded-none) */}
          <div className="w-full md:w-[42%] aspect-[4/3] md:aspect-auto overflow-hidden rounded-none border border-gray-300/80 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] group cursor-pointer bg-gray-50">
            <img
              src="/medical/chm/f1.webp"
              alt="Surgeon reviewing orthopedic X-ray scan"
              className="w-full h-full object-cover rounded-none transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Right Image: f2.png - Flat sharp corners (rounded-none) */}
          <div className="w-full md:w-[58%] aspect-[4/3] md:aspect-auto overflow-hidden rounded-none border border-gray-300/80 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] group cursor-pointer bg-gray-50">
            <img
              src="/medical/chm/f2.webp"
              alt="Medical doctor examining anatomical pelvis bone model"
              className="w-full h-full object-cover rounded-none transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

