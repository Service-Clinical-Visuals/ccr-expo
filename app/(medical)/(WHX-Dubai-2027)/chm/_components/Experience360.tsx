/**
 * Experience360 Section (360° Video Clip)
 *
 * ARCHITECTURAL REFERENCE (from Inogen + Figma Specs):
 * 1. Dark Theme with Wavy Pattern:
 *    - `bg-[#5F6467] bg-[url('/medical/chm/bg.webp')] bg-cover`.
 * 2. Header Row:
 *    - Left: Title & description.
 *    - Right: Action button "Explore 360° View" (ChM signature white pill).
 * 3. Horizontal Divider:
 *    - 1px white/25 border across container.
 * 4. 360° Video Player:
 *    - Centered large container: `w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-[16px] sm:rounded-[24px] shadow-2xl border border-white/20 bg-black/40`.
 *    - Uses `DynamicVideoPlayer type="360"`.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Experience360() {
  return (
    <section
      id="experience-360"
      className="w-full py-16 xl:py-24 bg-[#5F6467] bg-[url('/medical/chm/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative text-white"
    >
      <div className="custom-container flex flex-col gap-8 sm:gap-10">
        {/* Header Row */}
        <div
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-full xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide"
            >
              Explore CHARFIX Femoral Nail In 360°
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="text-white/85 text-sm sm:text-base leading-relaxed"
            >
              Explore the CHARFIX Femoral Nail through an interactive 360° experience. Discover its advanced design, versatile locking options, and adaptable fixation methods developed to address different femoral fracture requirements.
            </Typography>
          </div>

          <div className="shrink-0 self-start lg:self-center">
            <Button
              text="Explore 360° View"
              href="#experience-360"
              variant="white"
            />
          </div>
        </div>

        {/* 360 Video Player Container - Flat sharp corners (rounded-none) */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-none shadow-2xl border border-white/20 bg-black/40 mt-2 sm:mt-4"
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
}

