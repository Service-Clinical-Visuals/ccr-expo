"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

/**
 * Experience360 Section - Airblend
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Dark Charcoal Section Background (#707070).
 * 2. Centered Section Header:
 *    - Constrained to `xl:max-w-[70%]` for optimal line length.
 * 3. 360° Interactive Video Container:
 *    - Constrained to `w-full lg:max-w-[75%] mx-auto`.
 *    - Uses `aspect-video` (16:9 ratio) without layout shift.
 *    - Clean rounded frame (`rounded-[16px]`), subtle border, shadow-2xl.
 */
const Experience360 = () => {
  return (
    <section
      id="experience-360"
      className="w-full py-16 xl:py-24 bg-[#707070] text-white overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center gap-10 sm:gap-12">
        {/* Centered Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl lg:text-[30px] min-[2500px]:text-[48px] min-[3800px]:text-[64px] font-semibold tracking-tight text-white"
          >
            Explore Healthtime OC10 From Every Angle
          </Typography>
          <Typography
            variant="p"
            color="white"
            className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-white/90"
          >
            Explore the design and functionality of the Healthtime OC10 through an interactive 360° view, highlighting its digital display, ergonomic handle, wheeled housing, and thoughtfully designed features for convenient operation and mobility in various healthcare environments, ensuring accessibility, practicality, and ease of everyday use for healthcare professionals.
          </Typography>
        </div>

        {/* 360 Video Player Container: 16:9 aspect-video */}
        <div
          className="w-full lg:max-w-[75%] mx-auto aspect-video relative overflow-hidden rounded-[16px] shadow-2xl bg-black"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <DynamicVideoPlayer
            type="360"
            className="w-full h-full object-contain aspect-video"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience360;
