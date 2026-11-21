"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

/**
 * SurgicalMeshVideo (360 Video) Section - Vitrex Medical Group
 *
 * ARCHITECTURAL REFERENCE (Inogen):
 * 1. Thematic Background:
 *    - Vibrant cyan/teal `#70CDE3` background with geometric hexagon overlay `bg.webp`.
 * 2. Section Header:
 *    - Constrained to `w-full max-w-full xl:max-w-[70%] mx-auto` for readability.
 * 3. Video Embed & Aspect Ratio:
 *    - Uses standard `aspect-video` (16:9 ratio) for responsive video scaling without layout shift.
 *    - Width constrained to `w-full lg:max-w-[70%] mx-auto`.
 *    - Uses Inogen's exact `DynamicVideoPlayer` implementation with `type="360"` and `absolute inset-0 w-full h-full object-cover`.
 */
const SurgicalMeshVideo = () => {
  return (
    <section
      id="cdmo"
      className="relative w-full py-16 xl:py-24 bg-[#70CDE3] overflow-hidden text-white"
    >
      {/* Abstract Hexagon Background Overlay */}
      <div
        className="absolute inset-0 bg-[url('/medical/vitrex/bg.webp')] bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay pointer-events-none"
      />

      <div className="custom-container relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3 sm:space-y-4"
          data-aos="fade-up"
        >
          <Typography
            variant="h4"
            color="white"
            className="text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.0625rem] min-[2500px]:text-[1.5625rem] min-[3800px]:text-[2.1875rem] font-bold tracking-wide"
          >
            Advanced Surgical Mesh
          </Typography>

          <Typography
            variant="h2"
            color="white"
            className="text-[1.4375rem] sm:text-[1.8125rem] lg:text-[1.4375rem] xl:text-[1.6875rem] min-[2500px]:text-[2.4375rem] min-[3800px]:text-[3.4375rem] font-bold tracking-tight text-white"
          >
            Innovative Mesh for Reliable Abdominal Wall Reinforcement
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1.0625rem] min-[2500px]:text-[1.4375rem] min-[3800px]:text-[2.0625rem] leading-relaxed text-white/95 text-center"
          >
            Capromesh combines absorbable and non-absorbable materials for reliable reinforcement, reduced inflammation risk, and improved patient comfort.
          </Typography>
        </div>

        {/* 360 Video Player Container: matching Deleo aspect-video and lg:max-w-[70%] */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden mt-10 sm:mt-14"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default SurgicalMeshVideo;

