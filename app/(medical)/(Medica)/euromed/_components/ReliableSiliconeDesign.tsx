"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function ReliableSiliconeDesign() {
  return (
    <section className="w-full bg-[#7d0506] py-14 sm:py-20 md:py-24 text-white">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Top Header Row with Title, Description, and CTA Button */}
        <div
          className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Left: Heading & Description */}
          <div className="max-w-4xl">
            <h2 className="section-title font-semibold text-white tracking-tight font-outfit">
              Reliable Silicone Design
            </h2>
            <p className="section-text mt-2 sm:mt-3 leading-relaxed font-outfit">
              The Euro All Silicone Foley Catheter is designed for effective urinary drainage
              with a thin, flexible construction. Made from silicone, it is suitable for
              single-use applications and provides dependable performance during bladder
              drainage.
            </p>
          </div>

          {/* Right: View Specifications CTA Button */}
          <div className="flex-shrink-0">
            <Button
              href="#specifications"
              variant="primary"
              rounded="sm"
              className="!bg-[#d40708] hover:!bg-[#b00506]"
            >
              View Specifications
            </Button>
          </div>
        </div>

        {/* Subtle White Divider Line */}
        <div className="w-full h-px bg-white/20 my-6 sm:my-8" />

        {/* Large Centered Video Box */}
        <div
          className="relative w-full max-w-7xl mx-auto overflow-hidden aspect-video rounded-2xl bg-[#7d0506] "
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          {/* Dynamic Video Player */}
          <div className="absolute inset-0 w-full h-full z-10">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
