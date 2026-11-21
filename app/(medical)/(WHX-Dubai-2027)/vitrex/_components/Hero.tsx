"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

/**
 * Hero Section - Vitrex Medical Group
 *
 * ARCHITECTURAL REFERENCE (Inogen):
 * 1. Viewport Sizing & Header Clearance:
 *    - Full height container offset dynamically for the navigation header.
 * 2. Background Video Integration:
 *    - Uses `DynamicVideoPlayer` with `type="banner"`, filling the container absolutely (`inset-0 w-full h-full object-cover pointer-events-none z-0`).
 * 3. Text & Content Constraints:
 *    - Headline is positioned at the lower-left corner with high legibility on top of the subtle video overlay.
 * 4. Ultra-wide & 4K Responsiveness:
 *    - Dynamic font scaling and proportional vertical clearances across all breakpoints.
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-screen min-h-[100dvh] flex flex-col justify-end bg-black overflow-hidden"
    >
      {/* Background Video using DynamicVideoPlayer matching Inogen exact pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Hero Content Container - matching Deleo xl:max-w-[70%] concept */}
      <div className="custom-container relative z-20 pb-12 sm:pb-16 lg:pb-20 min-[2500px]:pb-28 min-[3800px]:pb-40">
        <div
          className="w-full max-w-full xl:max-w-[70%] text-left space-y-4 sm:space-y-6 pointer-events-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-md text-[1.4375rem] sm:text-[1.8125rem] md:text-[2.1875rem] lg:text-[1.8125rem] xl:text-[2.0625rem] min-[2500px]:text-[3.1875rem] min-[3800px]:text-[4.4375rem] !font-bold w-full max-w-full xl:max-w-[70%]"
          >
            Advancing Medical Innovation Through Precision, Quality and Care.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Hero;

