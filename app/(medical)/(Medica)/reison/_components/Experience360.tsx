"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

/**
 * Experience360 Section - Reison Medical
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Dark Wave Theme:
 *    - Deep Navy background (`bg-[#2F3F5A]`) with abstract wave overlay (`/medical/reison/bg.webp`).
 * 2. Split Header Row:
 *    - Title & subtext on left (`xl:max-w-[70%]`), CTA on right.
 * 3. 360 Showcase Image Frame:
 *    - Centered container constrained to `w-full lg:max-w-[75%] mx-auto` on larger viewports.
 *    - Uses standard `aspect-video` (16:9 ratio), rounded corners (`rounded-[23px]`),
 *      solid white border (`border-[3px] border-white`), and drop shadow.
 */
const Experience360 = () => {
  return (
    <section
      id="experience-360"
      className="w-full relative bg-white overflow-hidden pb-16 xl:pb-24"
    >
      {/* Top Navy Band (covers ~354px / ~25-35% of section height) */}
      <div className="absolute top-0 left-0 right-0 w-full h-[280px] sm:h-[320px] md:h-[354px] min-[2500px]:h-[480px] min-[3800px]:h-[650px] bg-[#2F3F5A] bg-[url('/medical/reison/bg.webp')] bg-cover bg-center bg-no-repeat z-0" />

      {/* Section Content: Header in Navy Band, 360 Image Overlapping onto White Background */}
      <div className="custom-container relative z-10 flex flex-col pt-10 sm:pt-14 gap-8 sm:gap-12">

        {/* Top Header Row (Inside Navy Band) */}
        <div
          className="flex flex-col min-[1036px]:flex-row min-[1036px]:items-center justify-between gap-6 text-white"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-full xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-primary capitalize text-white"
            >
              Explore Every Angle of the Arm &amp; Hand Surgery Table
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="text-white/80 text-sm sm:text-base leading-relaxed"
            >
              Explore the design, durable construction, and adjustable features of our Arm &amp; Hand Surgery Table through an interactive 360° view.
            </Typography>
          </div>

          <div className="shrink-0 self-start min-[1036px]:self-center">
            <Button
              text="Explore 360° View"
              variant="white"
              href="#experience-360"
              showIcon={true}
            />
          </div>
        </div>

        {/* 360 Showcase Image Frame - Overlaps Navy Band and Extends down into White Background */}
        <div
          className="w-full lg:max-w-[75%] mx-auto aspect-video relative overflow-hidden rounded-[23px] shadow-[0px_10px_30px_rgba(0,0,0,0.25)] border-[3px] border-white group cursor-pointer z-20"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <img
            src="/medical/reison/360.webp"
            alt="Explore Every Angle of the Arm & Hand Surgery Table in 360°"
            className="w-full h-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

      </div>
    </section>
  );
};

export default Experience360;
