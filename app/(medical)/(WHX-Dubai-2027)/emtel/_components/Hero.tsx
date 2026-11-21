"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

/**
 * Hero Section - EMTEL
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Viewport Sizing & Header Clearance:
 *    - Full-viewport height: `w-full h-screen min-h-screen min-h-[100dvh]`.
 * 2. Background Video Integration:
 *    - Uses `DynamicVideoPlayer` with `type="banner"`, filling the container absolutely (`inset-0 w-full h-full object-cover`).
 * 3. 70% Max-Width Strategy:
 *    - Applied specifically to the headings and subheadings text (`xl:max-w-[70%]`).
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-screen min-h-[100dvh] flex flex-col justify-end pt-[80px] sm:pt-[90px] md:pt-[100px] lg:pt-[110px] pb-12 sm:pb-16 lg:pb-24 min-[2500px]:pb-32 min-[3800px]:pb-48 bg-[#0A192F] overflow-hidden"
    >
      {/* Background Video Player */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />
      </div>

      <div className="custom-container relative z-20 w-full">
        {/* Hero Content Area */}
        <div
          className="w-full space-y-4 sm:space-y-6 text-left"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Eyebrow / Tag: 70% max-width on xl */}
          <p className="text-white/85 text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase font-primary w-full max-w-full xl:max-w-[70%]">
            MEDICAL TECHNOLOGY · SINCE 1992
          </p>

          {/* Main Title (h1): 70% max-width on xl */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight sm:leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl min-[2500px]:text-7xl min-[3800px]:text-8xl !font-bold drop-shadow-md w-full max-w-full xl:max-w-[70%]"
          >
            Advancing Patient Care Through Innovative Medical Technology
          </Typography>

          {/* Action Button */}
          <div className="pt-2 sm:pt-4">
            <Button
              text="Explore More"
              variant="primary"
              href="#about"
              className="bg-[#0F78AF] hover:bg-[#0C6492] text-white px-7 py-3 rounded-[20px] font-semibold text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
