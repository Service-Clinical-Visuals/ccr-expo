"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

/**
 * SmartMonitoringVideo Section (Video Clip 02) - EMTEL
 *
 * IMPLEMENTATION PATTERN REFERENCED FROM FLUKE PROJECT (short-1 / Versatile section):
 * 1. Top dark/blue area contains headings and the video player.
 * 2. Video container uses `w-full xl:w-[69%] aspect-[1024/565] -mb-[46%] xl:-mb-[31.9%] rounded-[5px]`
 *    so the top part sits in the blue area and the lower part hangs down into the light section below.
 * 3. Bottom light area contains matching spacer `<div className="w-full pt-[46%] xl:pt-[35.9%]" />` inside `.custom-container`
 *    to preserve exact responsive height without layout shift.
 * 4. Typography uses `xl:max-w-[70%]` on headings and text blocks.
 */
export default function SmartMonitoringVideo() {
  return (
    <section id="smart-monitoring" className="w-full bg-[#F8F8F8] overflow-hidden">
      {/* Dark/Blue top: heading and the video, whose lower part hangs into the white/gray area below */}
      <div className="w-full bg-[#0F78AF] bg-[url('/medical/emtel/bg.webp')] bg-cover bg-center bg-no-repeat pt-12 sm:pt-16 xl:pt-[68px] min-[2500px]:pt-28 min-[3800px]:pt-40">
        <div className="custom-container flex flex-col items-center">
          <div
            className="flex flex-col items-center text-center mb-8 sm:mb-10 min-[2500px]:mb-14 min-[3800px]:mb-20"
            data-aos="fade-up"
          >
            {/* Tag / Eyebrow */}
            <Typography
              variant="h5"
              color="white"
              weight="medium"
              className="uppercase mb-3 sm:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8 tracking-wider"
            >
              SMART MONITORING TECHNOLOGY
            </Typography>

            {/* Section Heading */}
            <Typography
              variant="h2"
              color="white"
              className="mb-5 sm:mb-7 min-[2500px]:mb-10 min-[3800px]:mb-14 xl:max-w-[70%]"
            >
              Connected Monitoring for Smarter Clinical Care
            </Typography>

            {/* Paragraph Description */}
            <Typography
              variant="p"
              color="white"
              className="xl:max-w-[70%]"
            >
              Explore how EMTEL patient monitoring systems support efficient clinical observation through advanced
              connectivity and centralized monitoring capabilities. Designed to provide healthcare professionals with access to patient
              information, these solutions help streamline monitoring workflows and support informed clinical decisions.
            </Typography>
          </div>

          {/* Only the top part of the video sits on the blue band; the negative margin pulls the gray area up */}
          <div
            className="relative z-10 w-full xl:w-[69%] aspect-[1024/565] -mb-[46%] xl:-mb-[31.9%] rounded-[5px] overflow-hidden bg-[#EBEBEB]"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Gray lower area: spacer matches the video overhang */}
      <div className="custom-container">
        <div className="w-full pt-[46%] xl:pt-[35.9%]" />
      </div>
    </section>
  );
}
