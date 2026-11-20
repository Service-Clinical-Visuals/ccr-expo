/**
 * Hero Section for ChM
 *
 * ARCHITECTURAL REFERENCE (from Inogen + Figma Specs):
 * 1. Viewport Sizing & Header Clearance:
 *    - Full-viewport height: `w-full h-screen min-h-screen min-h-[100dvh]`.
 *    - Responsive top padding offset (`pt-[94px]` to `min-[3800px]:pt-[265px]`) dynamically accounts
 *      for the fixed/floating navigation header height.
 * 2. Background Video Integration:
 *    - Uses `DynamicVideoPlayer` with `type="banner"`, filling the container absolutely (`inset-0 w-full h-full object-cover`).
 * 3. Card Geometry:
 *    - Full-height rounded card: `rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl`.
 * 4. Content Block:
 *    - Positioned at bottom-left: "Precision Engineering. Medical Expertise. Better Patient Care."
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full h-screen min-h-screen min-h-[100dvh] flex flex-col pt-[86px] sm:pt-[94px] md:pt-[102px] lg:pt-[108px] xl:pt-[114px] 2k:pt-[173px] min-[2500px]:pt-[173px] 4k:pt-[272px] min-[3800px]:pt-[272px] pb-3 sm:pb-4 lg:pb-5 2k:pb-6 min-[2500px]:pb-6 4k:pb-8 min-[3800px]:pb-8 bg-white overflow-hidden"
    >
      <div className="custom-container h-full flex flex-col">
        {/* Full-Height Rounded Hero Banner Card */}
        <div
          className="relative w-full h-full flex-1 rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-2xl flex flex-col justify-end p-6 sm:p-10 lg:p-14 min-[2500px]:p-20 min-[3800px]:p-28 bg-[#0B1528] border border-white/20"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Background Video using DynamicVideoPlayer */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
              type="banner"
            />
          </div>

          {/* Bottom-Left Content Area */}
          <div
            className="relative z-20 w-full max-w-full xl:max-w-[70%] text-left space-y-4 pointer-events-auto pb-2 sm:pb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Typography
              variant="h1"
              color="white"
              className="drop-shadow-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl min-[2500px]:text-6xl min-[3800px]:text-8xl !font-normal capitalize leading-tight"
            >
              Precision Engineering. Medical Expertise. Better Patient Care.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

