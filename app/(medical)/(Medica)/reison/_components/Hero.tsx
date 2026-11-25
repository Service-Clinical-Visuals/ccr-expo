"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

/**
 * Hero Section - Reison Medical
 *
 * STRICT HERO RULE IMPLEMENTATION:
 * - NO colored overlays, dark tint layers, gradient overlays, or semi-transparent colour layers.
 * - Dynamic video/banner is placed directly with full clarity.
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Viewport clearance: Responsive top padding offset (`pt-[85px]` to `min-[3800px]:pt-[250px]`)
 *    clearing floating pill navigation.
 * 2. Banner container: Rounded corners (`rounded-[30px]`) with smooth drop-shadow.
 * 3. Text & Content Constraints: Constrained to `w-full max-w-full xl:max-w-[70%]` for optimal line length.
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen min-h-screen min-h-[100dvh] flex flex-col pt-[85px] sm:pt-[94px] md:pt-[102px] lg:pt-[110px] min-[2500px]:pt-[160px] min-[3800px]:pt-[240px] pb-4 sm:pb-6 bg-white overflow-hidden"
    >
      <div className="custom-container h-full flex flex-col">
        {/* Full-Height Rounded Hero Banner Card */}
        <div
          className="relative w-full h-full flex-1 rounded-[30px] overflow-hidden shadow-2xl flex flex-col justify-end pt-6 sm:pt-10 lg:pt-14 px-6 sm:px-10 lg:px-14 min-[2500px]:px-20 min-[3800px]:px-28 pb-[15vh] bg-[#0D1522]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Background Video using DynamicVideoPlayer - NO overlay layer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
              type="banner"
            />
          </div>

          {/* Bottom Content Area: Elevated 15% above the bottom of the screen */}
          <div
            className="relative z-10 w-full max-w-full xl:max-w-[70%] text-left space-y-4 pointer-events-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Typography
              variant="h1"
              color="white"
              className="leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-[2500px]:text-6xl min-[3800px]:text-8xl font-bold max-w-2xl font-primary"
            >
              Medical equipment and accessories for operating tables
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

