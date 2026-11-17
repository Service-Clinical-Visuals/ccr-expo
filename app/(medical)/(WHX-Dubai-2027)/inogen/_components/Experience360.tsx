"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Link from "next/link";

/**
 * Experience360 Section
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Dark Theme Section with Background Image overlay (bg-[#05172E] with bg-cover).
 * 2. Responsive Header Row:
 *    - Left Content: Constrained to `w-full max-w-full xl:max-w-[70%]` for comfortable line length.
 *    - Right Content: Direct Call-To-Action button with responsive scaling.
 * 3. 360° Interactive Video Container:
 *    - Constrained to `w-full lg:max-w-[70%] mx-auto` on larger viewports.
 *    - Uses `aspect-video` (16:9 ratio) for responsive scaling without shift.
 *    - Asymmetrical corner rounding: `rounded-tl-[48px] sm:rounded-tl-[64px] rounded-br-[48px] sm:rounded-br-[64px]`.
 */
const Experience360 = () => {
  return (
    <section
      id="experience-360"
      className="w-full py-16 xl:py-24 bg-[#05172E] bg-[url('/medical/inogen/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative text-white"
    >
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        
        {/* Top Header Row: Split layout with xl:max-w-[70%] content width and CTA button */}
        <div
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-full xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
            >
              Explore The Inogen Rove 4 In 360°
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="text-white/80 text-sm sm:text-base leading-relaxed"
            >
              Discover the Inogen Rove 4 Portable Oxygen Concentrator through an immersive 360° experience. Explore its lightweight design, intuitive controls, and advanced oxygen delivery system, designed to support mobility and everyday convenience for oxygen therapy patients.
            </Typography>
          </div>

          <div className="shrink-0 self-start lg:self-center">
            <Link
              href="#experience-360"
              className="inline-flex items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 bg-white text-[#0B3090] hover:bg-gray-100 hover:text-[#082470] hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 font-semibold px-6 py-3 min-[2500px]:px-9 min-[2500px]:py-4 min-[3800px]:px-14 min-[3800px]:py-6 rounded-lg min-[2500px]:rounded-xl min-[3800px]:rounded-2xl shadow-md transition-all duration-300 ease-in-out text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl group cursor-pointer"
            >
              <span>View in 360°</span>
              <img
                src="/medical/inogen/ba.webp"
                alt="arrow"
                className="w-[14px] h-[10px] min-[2500px]:w-[22px] min-[2500px]:h-[16px] min-[3800px]:w-[32px] min-[3800px]:h-[24px] group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0 object-contain"
              />
            </Link>
          </div>
        </div>

        {/* 360 Video Player Container: Rounded only top-left & bottom-right */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-tl-[48px] sm:rounded-tl-[64px] rounded-br-[48px] sm:rounded-br-[64px] rounded-tr-none rounded-bl-none shadow-2xl border border-white/10"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Experience360;
