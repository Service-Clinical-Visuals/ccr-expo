/**
 * Hero Section
 * Master Reference: Inogen & Zinnanti Surgical Development Standards
 *
 * 1. Viewport Sizing:
 *    - Fills the screen height across all viewports (`w-full h-screen min-h-screen min-h-[100dvh]`).
 * 2. Positioning Requirement:
 *    - Text headline, paragraph, and CTA button are positioned exactly 15% above the bottom of the screen (`bottom-[15%]`).
 * 3. Video Background:
 *    - Background video running via `DynamicVideoPlayer` with `type="banner"`.
 *    - STRICTLY NO OVERLAY COLOURS. Completely unobstructed.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-screen min-h-[100dvh] overflow-hidden bg-black"
    >
      {/* Background Video using DynamicVideoPlayer (banner type) - STRICTLY NO OVERLAYS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />
      </div>

      {/* Hero Content: Positioned exactly 15% above the bottom of the screen */}
      <div className="custom-container absolute left-0 right-0 bottom-[15%] z-10">
        <div
          className="w-full max-w-full md:max-w-[620px] lg:max-w-[680px] xl:max-w-[720px] 2k:max-w-[1100px] 4k:max-w-[1500px] text-left space-y-4 sm:space-y-5 2k:space-y-8 4k:space-y-10"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {/* Main Hero Headline (70% concept on headings) */}
          <Typography
            variant="h1"
            color="white"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.1875rem] xl:text-[2.4375rem] 2k:text-5xl 4k:text-7xl font-bold leading-[1.25] tracking-normal drop-shadow-md w-full max-w-full xl:max-w-[70%]"
          >
            Saving Lives Through Advanced Bleeding Control
          </Typography>

          {/* Subtitle / Lead text */}
          <Typography
            variant="p"
            color="white"
            className="text-white/90 text-sm sm:text-base md:text-lg lg:text-[1.0625rem] 2k:text-2xl 4k:text-4xl font-normal leading-relaxed drop-shadow-sm"
          >
            We develop innovative mineral-based solutions for rapid bleeding control, combining advanced technology and expertise to save lives in emergencies.
          </Typography>

          {/* CTA Action Button */}
          <div className="pt-2 sm:pt-3 2k:pt-5 4k:pt-7">
            <Button
              text="Explore Products"
              variant="primary"
              href="#solutions"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
