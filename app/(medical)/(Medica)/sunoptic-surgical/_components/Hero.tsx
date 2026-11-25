"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

/**
 * Hero Section - Sunoptic Surgical
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Viewport Sizing & Header Clearance:
 *    - Full-viewport height with responsive top clearance.
 * 2. Media Integration:
 *    - Clean hero image or video background with aspect ratio and object-cover.
 *    - STRICT REQUIREMENT: NO overlay colors, NO tinted layers, NO dark/colored overlays.
 * 3. Text Constraints:
 *    - Content block is constrained with `w-full max-w-full xl:max-w-[70%]` for optimal line measure.
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen min-h-[100dvh] flex flex-col justify-end pt-16 sm:pt-20 pb-12 sm:pb-16 lg:pb-20 2k:pb-28 4k:pb-40 overflow-hidden bg-white"
    >
      {/* Background Media - CLEAN WITHOUT ANY COLORED OVERLAYS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full aspect-video object-cover pointer-events-none z-0"
        />
        {/* Fallback image when video isn't loaded */}
        <img
          src="/medical/sunoptic-surgical/hero_bg.webp"
          alt="Sunoptic Surgical Headlight"
          className="absolute inset-0 w-full h-full aspect-video object-cover pointer-events-none z-0"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="custom-container relative z-20">
        <div
          className="w-full max-w-full xl:max-w-[70%] space-y-3 sm:space-y-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Eyebrow */}
          <Typography
            variant="eyebrow"
            className="!text-white tracking-widest text-xs sm:text-sm md:text-base font-semibold drop-shadow-sm font-['DM_Sans',sans-serif]"
          >
            ADVANCED SURGICAL ILLUMINATION
          </Typography>

          {/* Main Headline */}
          <Typography
            variant="h1"
            color="white"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2k:text-7xl 4k:text-8xl font-bold font-['Palanquin',sans-serif] leading-tight drop-shadow-md"
          >
            Clarity That Empowers Every Surgical Moment
          </Typography>

          {/* CTA Button */}
          <div className="pt-3 sm:pt-4">
            <Button
              text="Schedule Your Free Trial"
              variant="primary"
              href="#contact"
              className="px-6 py-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
