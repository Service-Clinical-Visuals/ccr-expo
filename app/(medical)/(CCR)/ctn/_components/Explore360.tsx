"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Explore360() {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 md:py-24 ">
      <div className="custom-container px-2 md:px-10 ">

        {/* Top Header Row */}
        <div
          className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >

          {/* Left: Heading & Description */}
          <div className="max-w-5xl">
            <h2 className="section-title tracking-tight font-semibold">
              <span className="text-[#2b7ab7]">Explore </span>
              <span className="text-slate-900">E°COMPRESSION™ </span>
              <span className="text-[#2b7ab7]">From Every </span>
              <span className="text-slate-900">Angle</span>
            </h2>

            <p className="section-text text-slate-600 mt-3 sm:mt-4 max-w-5xl">
              Take a closer look at the CTN e°COMPRESSION™ and explore its portable,
              professional-grade design. Discover the advanced compression boots, lightweight
              control unit, intuitive features, and smart technology engineered for
              comfortable and efficient recovery wherever you need it.
            </p>
          </div>

          {/* Right: View in 360° CTA Button */}
          <div className="flex items-center flex-shrink-0">
            <Button href="#view-360" variant="primary">
              View in 360°
            </Button>
          </div>

        </div>

        {/* Subtle Horizontal Divider */}
        <div className="w-full h-px bg-slate-200/90 mt-6 sm:mt-8 mb-6 sm:mb-8" />

        {/* 360 Video Player Box */}
        <div
          className="relative w-full max-w-7xl mx-auto rounded-4xl aspect-video overflow-hidden flex items-center justify-center"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="150"
        >

          {/* Dynamic 360 Video Player */}
          <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
