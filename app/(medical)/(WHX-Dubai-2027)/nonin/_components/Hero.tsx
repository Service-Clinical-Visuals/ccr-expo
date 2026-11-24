/**
 * Hero Section
 * Master Reference: Inogen Development Standards
 * Sizing: Fills full screen height across all screen types (h-screen min-h-screen min-h-[100dvh]).
 * Positioning: Text and Button block are positioned exactly 15% above the bottom of the screen (bottom-[15%]).
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen min-h-screen min-h-[100dvh] relative bg-[#0A1017] overflow-hidden"
    >
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Content wrapper: positioned exactly 15% above the bottom of the screen */}
      <div className="custom-container absolute left-0 right-0 bottom-[15%] z-20 pointer-events-none">

        {/* Content Area: Constrained with 70% desktop width limit */}
        <div
          className="w-full max-w-full xl:max-w-[70%] text-left space-y-3 sm:space-y-4 md:space-y-5 pointer-events-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Subheading / Tagline */}
          <div className="inline-block">
            <span className="text-[#2A96C2] font-heading font-bold text-xs sm:text-sm md:text-base min-[2500px]:text-xl min-[3800px]:text-3xl tracking-widest uppercase">
              40 YEARS OF MEDICAL INNOVATION
            </span>
          </div>

          {/* Main Headline */}
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-[2500px]:text-6xl min-[3800px]:text-8xl !font-bold"
          >
            Precision Monitoring. Better Patient Care.
          </Typography>

          {/* Lead Paragraph: Optimal line length */}
          <Typography
            variant="p"
            color="white"
            className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl font-normal w-full max-w-2xl min-[2500px]:max-w-4xl"
          >
            Delivering reliable, noninvasive patient monitoring solutions through innovative technologies designed to support confident clinical decisions and better patient outcomes.
          </Typography>

          {/* Call to Action Button */}
          <div className="pt-2 sm:pt-3">
            <Button
              text="Explore More"
              variant="primary"
              href="#about"
              showIcon={true}
              className="px-6 py-3 min-[2500px]:px-9 min-[2500px]:py-4 min-[3800px]:px-14 min-[3800px]:py-6"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
