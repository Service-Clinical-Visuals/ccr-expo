"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

/**
 * AMNOTEC Hero Section
 * Master Reference: Inogen Methodology
 *
 * STRICT REQUIREMENT:
 * - DO NOT ADD OVERLAY COLOURS TO HERO SECTION.
 * - Zero dark overlays, coloured overlays, gradient overlays, or tinted layers.
 * - DynamicVideoPlayer banner filling the hero card cleanly.
 * - Bottom-left aligned text container.
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-screen min-h-[100dvh] flex flex-col bg-[#0a192f] overflow-hidden"
    >
      {/* Background Video using DynamicVideoPlayer - NO OVERLAYS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Content Area: Positioned strictly 15% above the bottom of the screen */}
      <div className="custom-container relative z-10 h-full w-full pointer-events-none">
        <div
          className="absolute bottom-[15%] left-0 z-20 w-full max-w-full xl:max-w-[70%] text-left space-y-3 sm:space-y-4 min-[2500px]:space-y-6 min-[3800px]:space-y-8 pointer-events-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Eyebrow */}
          <Typography
            variant="eyebrow"
            color="white"
            className="!text-white tracking-widest text-xs sm:text-sm md:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-semibold drop-shadow-md"
          >
            ADVANCED MEDICAL TECHNOLOGY
          </Typography>

          {/* Main Headline */}
          <Typography
            variant="h1"
            color="white"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.25rem] min-[2500px]:text-6xl min-[3800px]:text-8xl !font-bold leading-tight drop-shadow-md w-full max-w-full xl:max-w-[70%]"
          >
            Precision in Every Procedure. Excellence in Every Detail.
          </Typography>

          {/* CTA Button */}
          <div className="pt-2 sm:pt-4">
            <Button
              text="Explore More"
              variant="primary"
              href="#about"
              className="bg-[#134093] hover:bg-[#0e2f6d] text-white rounded-[5px] px-6 py-3 font-semibold text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl min-[2500px]:px-9 min-[2500px]:py-4 min-[3800px]:px-14 min-[3800px]:py-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
