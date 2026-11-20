/**
 * Hero Section - OrthoGet
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Background Video Integration:
 *    - Uses exact Inogen video pattern with `DynamicVideoPlayer` (`type="banner"`),
 *      filling the container absolutely (`inset-0 w-full h-full object-cover`).
 * 2. Visual Layering:
 *    - Subtle gradient overlay ensures high legibility of hero text.
 * 3. Content Constraints & Measure:
 *    - Text positioned in lower third of banner, matching Figma layout.
 *    - Font: 'Exo 2', bold 700, responsive sizing scaling up to 4K.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[550px] sm:min-h-[650px] lg:min-h-[750px] xl:min-h-[850px] min-[2500px]:min-h-[1100px] min-[3800px]:min-h-[1400px] h-screen flex flex-col justify-end pt-[80px] sm:pt-[90px] lg:pt-[100px] pb-12 sm:pb-16 lg:pb-24 min-[2500px]:pb-36 min-[3800px]:pb-52 overflow-hidden bg-[#111111]"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-20 pointer-events-auto">
        <div
          className="w-full max-w-[90%] xl:max-w-[70%] text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Typography
            variant="h1"
            color="white"
            className="leading-tight sm:leading-snug drop-shadow-lg"
          >
            Advancing Bone Lengthening Through Innovative Orthopedic Technology.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Hero;

