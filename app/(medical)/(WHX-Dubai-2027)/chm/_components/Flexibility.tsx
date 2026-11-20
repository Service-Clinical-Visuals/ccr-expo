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

        {/* Two Images Side by Side: Asymmetric Width Split (42% | 58%) - Slightly reduced height */}
        <div
          className="w-full mt-10 sm:mt-14 flex flex-col md:flex-row gap-6 sm:gap-8 items-stretch"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* Left Image: f1.png - Flat sharp corners (rounded-none) - Slightly reduced height */}
          <div className="relative w-full md:w-[42%] h-[320px] sm:h-[400px] md:h-[460px] lg:h-[500px] xl:h-[530px] min-[1920px]:h-[580px] 2k:h-[780px] 4k:h-[1100px] overflow-hidden rounded-none border border-gray-300/80 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] group cursor-pointer bg-gray-50">
            <img
              src="/medical/chm/f1.webp"
              alt="Surgeon reviewing orthopedic X-ray scan"
              className="w-full h-full object-cover rounded-none transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Hover State: Red gradient overlay with heading & text matching Figma Component 1 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#A41E27] via-[#A41E27]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-5 sm:p-6 md:p-6 lg:p-8 xl:p-9 2k:p-12 4k:p-16">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-2 sm:gap-2.5 2k:gap-4">
                <h3 className="font-primary text-white text-lg sm:text-xl lg:text-2xl 2k:text-3xl 4k:text-5xl font-bold leading-snug">
                  Innovation Driven By Clinical Needs
                </h3>
                <p className="font-secondary text-white/95 text-xs sm:text-sm lg:text-[15px] 2k:text-xl 4k:text-2xl font-normal leading-relaxed">
                  Trauma interventions are mostly unplanned procedures with very high demands from the medical sector.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image: f2.png - Flat sharp corners (rounded-none) - Slightly reduced height */}
          <div className="relative w-full md:w-[58%] h-[320px] sm:h-[400px] md:h-[460px] lg:h-[500px] xl:h-[530px] min-[1920px]:h-[580px] 2k:h-[780px] 4k:h-[1100px] overflow-hidden rounded-none border border-gray-300/80 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] group cursor-pointer bg-gray-50">
            <img
              src="/medical/chm/f2.webp"
              alt="Medical doctor examining anatomical pelvis bone model"
              className="w-full h-full object-cover rounded-none transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Hover State: Red gradient overlay with heading & text matching Figma Component 2 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#A41E27] via-[#A41E27]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-5 sm:p-6 md:p-6 lg:p-8 xl:p-9 2k:p-12 4k:p-16">
              <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-2 sm:gap-2.5 2k:gap-4 max-w-[95%]">
                <h3 className="font-primary text-white text-lg sm:text-xl lg:text-2xl 2k:text-3xl 4k:text-5xl font-bold leading-snug">
                  Improving Surgical Precision And Patient Care
                </h3>
                <p className="font-secondary text-white/95 text-xs sm:text-sm lg:text-[15px] 2k:text-xl 4k:text-2xl font-normal leading-relaxed">
                  At every stage of our products&apos; development, we carefully listen to the needs of surgeons and distributors. We improve our products to best fit the patient anatomy and to make the ergonomics of the surgeons work better and better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

