/**
 * Hero Section - PAJUNK
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Viewport Sizing & Header Clearance:
 *    - Full-height hero with responsive header top offset (`pt-[80px]` to `min-[3800px]:pt-[180px]`).
 * 2. Background Video Integration:
 *    - Uses `DynamicVideoPlayer` with `type="banner"` covered by dark radial/linear gradient overlay
 *      to ensure optimal readability of the white typography.
 * 3. Text & Content Constraints:
 *    - Constrained to `w-full max-w-full xl:max-w-[70%]` for optimal line length.
 * 4. CTA Button:
 *    - Primary variant (#144835 background, #DCE64D lime text & arrow).
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
      className="relative w-full h-screen h-[100dvh] flex flex-col justify-end overflow-hidden bg-[#0A1F17]"
    >
      {/* Background Video with Dark Contrast Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <DynamicVideoPlayer
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          type="banner"
        />
      </div>

      {/* Hero Content: 25% above the bottom of the screen */}
      <div className="custom-container absolute bottom-[15%] left-0 right-0 z-10">
        <div
          className="w-full max-w-full xl:max-w-[70%] space-y-4 sm:space-y-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Typography
            variant="h1"
            color="white"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl min-[2500px]:text-7xl min-[3800px]:text-8xl font-bold tracking-tight leading-[1.15]"
          >
            Precision in Every Detail. Care in Every Innovation.
          </Typography>

          <div className="pt-2 sm:pt-4">
            <Button
              text="Explore More"
              variant="primary"
              href="#products"
              showIcon={true}
              className="!py-3 !px-7 font-semibold"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

