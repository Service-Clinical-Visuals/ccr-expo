"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

/**
 * TechnologyVideo Section
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Section Container: Full-width wrapper with responsive vertical padding (`py-16 xl:py-24`).
 * 2. Content Constraints:
 *    - Container uses `.custom-container` with percentage-based responsive max-width.
 *    - Section Header applies `w-full max-w-full xl:max-w-[70%] mx-auto` to ensure comfortable
 *      reading measure (optimal line-length) on large screens.
 * 3. Video Embed & Aspect Ratio:
 *    - Uses standard `aspect-video` (16:9 ratio) for responsive video scaling without layout shift.
 *    - Video width is constrained to `w-full lg:max-w-[70%] mx-auto` to maintain visual harmony.
 *    - DynamicVideoPlayer fills the container absolutely (`w-full h-full object-cover`).
 * 4. Corner Geometry:
 *    - Asymmetrical corner rounding pattern: `rounded-tl-[48px] sm:rounded-tl-[64px]` and
 *      `rounded-br-[48px] sm:rounded-br-[64px]` with sharp `rounded-tr-none rounded-bl-none`.
 */
const TechnologyVideo = () => {
  return (
    <section id="technology-video" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Standard Section Header: Centered with xl:max-w-[70%] desktop width limit for optimal line length and readability */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827]"
          >
            Portable Oxygen Technology For Everyday Independence
          </Typography>
          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#555555]"
          >
            The Inogen Rove 4 is designed to make oxygen therapy more convenient by combining portable performance, flexible power options, and a compact design. Delivering pulse dose oxygen across four settings, it offers patients a practical solution for managing their prescribed oxygen therapy while moving through everyday activities. Weighing as little as 1.3 kg with the standard battery, the Rove 4 is easy to carry and designed to support greater mobility beyond the home.
          </Typography>
        </div>

        {/* Video Player Container: Constrained to 70% on large screens, 16:9 aspect-video ratio, asymmetrical rounded corners */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-tl-[48px] sm:rounded-tl-[64px] rounded-br-[48px] sm:rounded-br-[64px] rounded-tr-none rounded-bl-none shadow-lg border border-gray-200/80 mt-10 sm:mt-14"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          {/* DynamicVideoPlayer: Rendered via project video context, absolute fill with object-cover */}
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default TechnologyVideo;
