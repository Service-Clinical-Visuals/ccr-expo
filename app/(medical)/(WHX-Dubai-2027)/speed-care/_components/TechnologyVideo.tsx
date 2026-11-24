/**
 * Technology Video Section (Fast & Reliable Bleeding Control)
 * Master Reference: Zinnanti Surgical & Inogen Standards
 * - Video container: pure aspect-video with rounded corners only (no bg, no borders, no shadows).
 * - Video player: aspect-video with object-contain so video is not cropped or trimmed.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Badge from "./Badge";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function TechnologyVideo() {
  return (
    <section
      id="technology"
      className="w-full py-16 xl:py-24 2k:py-36 4k:py-48 bg-cover bg-center bg-no-repeat overflow-hidden relative"
      style={{
        backgroundImage: "url('/medical/speed-care/bg.webp')",
      }}
    >
      <div className="custom-container flex flex-col items-center relative z-10">

        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4 2k:space-y-6 4k:space-y-8"
          data-aos="fade-up"
        >
          {/* Tag Badge */}
          <Badge text="ADVANCED HEMOSTATIC TECHNOLOGY" tone="translucent" />

          <Typography
            variant="h2"
            color="gray"
            className="text-xl sm:text-2xl lg:text-[1.6875rem] 2k:text-4xl 4k:text-6xl font-bold tracking-tight text-[#333333] w-full max-w-full xl:max-w-[70%] mx-auto"
          >
            Fast &amp; Reliable Bleeding Control
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl leading-relaxed text-[#4B5563] max-w-4xl 2k:max-w-6xl 4k:max-w-7xl mx-auto"
          >
            SpeedM® combines a perforated nonwoven carrier with ultrafine halloysite minerals to support rapid bleeding control in critical emergency situations, when every second counts.
          </Typography>
        </div>

        {/* Video Player Container (No bg, no border, no shadow - pure aspect-video) */}
        <div
          className="w-full max-w-[1200px] 2k:max-w-[1800px] 4k:max-w-[2400px] aspect-video relative overflow-hidden rounded-2xl 2k:rounded-3xl 4k:rounded-[2.5rem] mt-10 sm:mt-12 2k:mt-20 4k:mt-28"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <DynamicVideoPlayer
            type="short-1"
            className="w-full h-full aspect-video object-contain"
          />
        </div>

      </div>
    </section>
  );
}
