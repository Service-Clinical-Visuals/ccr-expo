"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

/**
 * Hero Section - Airblend
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Strict Hero Overlay Rule:
 *    - NO coloured overlays, dark tint layers, or gradients over the hero media.
 * 2. Viewport Sizing & Clearance:
 *    - Full-viewport height (`w-full h-screen min-h-screen min-h-[100dvh]`)
 *    - Responsive top padding offset (`pt-[94px]` to `min-[3800px]:pt-[265px]`) for the floating header.
 * 3. Media & Rounded Frame:
 *    - Uses `DynamicVideoPlayer` with `type="banner"`, filling the container cleanly (`object-cover`).
 *    - Container has `rounded-[16px] sm:rounded-[20px]`, subtle border `border border-white/30`.
 * 4. Content Constraints:
 *    - Bottom-left content block strictly constrained for comfortable readability.
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen min-h-screen min-h-[100dvh] flex flex-col pt-[86px] sm:pt-[96px] md:pt-[104px] lg:pt-[110px] xl:pt-[116px] 2xl:pt-[120px] min-[2500px]:pt-[160px] min-[3800px]:pt-[240px] pb-3 sm:pb-4 lg:pb-5 min-[2500px]:pb-6 min-[3800px]:pb-10 bg-white overflow-hidden"
    >
      <div className="custom-container h-full flex flex-col">
        {/* Hero Card Container with rounded corners and border */}
        <div
          className="relative w-full h-full flex-1 rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-xl flex flex-col justify-end p-6 sm:p-10 lg:p-14 min-[2500px]:p-20 min-[3800px]:p-28 bg-[#1A1A1A]"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Background Video (NO OVERLAY COLOURS) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
              type="banner"
            />
          </div>

          {/* Bottom Left Content Area */}
          <div
            className="relative z-20 w-full max-w-full xl:max-w-[55%] 2xl:max-w-[50%] text-left space-y-4 pointer-events-auto pb-4 sm:pb-6 lg:pb-8 min-[2500px]:pb-14 min-[3800px]:pb-20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Typography
              variant="h1"
              color="white"
              className="leading-[1.25] text-2xl sm:text-3xl md:text-4xl lg:text-[34px] min-[2500px]:text-[52px] min-[3800px]:text-[72px] !font-semibold text-white drop-shadow-md"
            >
              Contributing To Global Competence For Healthy, Sustainable And Comfortable Living
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
