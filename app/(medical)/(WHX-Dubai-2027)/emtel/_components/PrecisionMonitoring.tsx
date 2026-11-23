"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

/**
 * PrecisionMonitoring Section (Video Clip 01) - EMTEL
 *
 * ARCHITECTURAL REFERENCE:
 * 1. 70% Max-Width Strategy:
 *    - Applied specifically to the headings and subheadings text (`xl:max-w-[70%]`).
 * 2. Video Implementation (Deleo Origin pattern):
 *    - Uses exact Deleo video technique: `w-full xl:w-[60%] relative aspect-video overflow-hidden rounded-[16px]`.
 *    - Video player absolutely positioned with `DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover"`.
 */
const PrecisionMonitoring = () => {
  return (
    <section id="precision-monitoring" className="w-full py-16 xl:py-24 bg-[#F8F8F8] overflow-hidden">
      <div className="custom-container">
        {/* Tablet / Mobile Layout up to 1300px: Heading -> Video -> Copy. Above 1300px: Two-column layout */}
        <div className="flex flex-col min-[1301px]:flex-row items-center gap-8 lg:gap-12 xl:gap-16 w-full">
          
          {/* Mobile & Tablet Heading Block (visible up to 1300px screens) */}
          <div
            className="min-[1301px]:hidden w-full flex flex-col gap-3 text-left"
            data-aos="fade-up"
          >
            {/* Tag / Eyebrow */}
            <p className="text-[#0F78AF] text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase font-primary">
              ADVANCED PATIENT MONITORING
            </p>

            {/* Section Heading */}
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827]"
            >
              Precision Monitoring for Better Patient Care
            </Typography>
          </div>

          {/* Left Column (Desktop) / Second Item (Mobile & Tablet): Video Clip 01 Player */}
          <div
            className="w-full min-[1301px]:w-[60%] relative aspect-video overflow-hidden rounded-[16px] shadow-lg border border-gray-200/90 bg-white"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Copy & Actions */}
          <div
            className="w-full min-[1301px]:w-[40%] flex flex-col gap-5 sm:gap-6"
            data-aos="fade-left"
          >
            {/* Desktop Heading Block (hidden up to 1300px, visible on desktop min-[1301px]) */}
            <div className="hidden min-[1301px]:flex flex-col gap-3">
              {/* Tag / Eyebrow: 70% max-width on xl */}
              <p className="text-[#0F78AF] text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase font-primary w-full max-w-full xl:max-w-[70%]">
                ADVANCED PATIENT MONITORING
              </p>

              {/* Section Heading: 70% max-width on xl */}
              <Typography
                variant="h2"
                color="dark"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827] w-full max-w-full xl:max-w-[70%]"
              >
                Precision Monitoring for Better Patient Care
              </Typography>
            </div>

            {/* Paragraph 1: Full column width */}
            <Typography
              variant="p"
              color="secondary"
              className="text-sm sm:text-base leading-relaxed text-[#0F2744]/90 w-full"
            >
              Discover EMTEL's advanced patient monitoring systems, designed to provide healthcare professionals with clear and continuous insights into patients' vital signs. Combining innovative monitoring technology, intuitive interfaces and reliable performance, these systems support clinical observation across intensive care units, operating rooms and other healthcare environments.
            </Typography>

            {/* Paragraph 2: Full column width */}
            <Typography
              variant="p"
              color="secondary"
              className="text-sm sm:text-base leading-relaxed text-[#0F2744]/90 w-full"
            >
              EMTEL patient monitors deliver reliable vital signs monitoring with clear displays and intuitive controls. Designed for easy operation, they support healthcare professionals in monitoring patients across various clinical environments.
            </Typography>

            {/* Action Button */}
            <div className="pt-2">
              <Button
                text="Explore Product"
                variant="primary"
                href="#products"
                className="px-7 py-3 rounded-[20px] font-semibold text-sm sm:text-base"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrecisionMonitoring;
