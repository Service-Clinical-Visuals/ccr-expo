"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "../Typography";
import Button from "../Button";

/**
 * Hero Section - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 * - Full viewport height across all screen sizes (100vh / 100dvh)
 * - Removed rounded corners for edge-to-edge coverage
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-screen min-h-[100dvh] flex flex-col justify-end pt-[90px] sm:pt-[105px] md:pt-[115px] lg:pt-[125px] min-[2500px]:pt-[160px] min-[3800px]:pt-[220px] pb-12 sm:pb-16 lg:pb-20 min-[2500px]:pb-28 min-[3800px]:pb-36 bg-[#001D33] overflow-hidden rounded-none"
    >
      {/* Dynamic Video Player covering edge-to-edge */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          type="banner"
        />
      </div>

      {/* Dark Overlay for optimal text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25 z-10 pointer-events-none" />

      {/* Content Area bounded by .custom-container */}
      <div className="custom-container relative z-20 w-full">
        <div
          className="w-full max-w-full xl:max-w-[70%] text-left space-y-5 sm:space-y-7 pointer-events-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Typography
            variant="h1"
            color="white"
            className="leading-tight drop-shadow-md text-3xl sm:text-4xl md:text-5xl lg:text-6xl min-[2500px]:text-7xl min-[3800px]:text-9xl !font-bold"
          >
            Innovative Surgical Technology
          </Typography>

          <div className="pt-1">
            <Button
              text="Request Samples"
              variant="white"
              href="#contact"
              className="bg-[#F9F9F9] hover:bg-white text-[#00578E] shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
