"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Explore360() {
  return (
    <section
      id="view-360"
      className="w-full bgimage py-14 sm:py-16 min-[64.0625rem]:py-20"
    >
      <div className="custom-container xl:px-6 2xl:px-8">
        {/* Top Header Row */}
        <div
          className="grid grid-cols-12 gap-6 items-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Left: Heading & Description */}
          <div className="col-span-12 min-[64.0625rem]:col-span-9 xl:col-span-8">
            <h2 className="section-title font-semibold text-white">
              Explore Hermesh 3 In 360°
            </h2>

            <p className="section-text text-white mt-3">
              Take a closer look at Hermesh 3 through an interactive 360° experience. Explore its
              non-absorbable polypropylene monofilament construction, flexible macroporous structure,
              and flat mesh design developed for hernia repair.
            </p>
          </div>

          {/* Right: View in 360° CTA */}
          <div className="col-span-12 min-[64.0625rem]:col-span-3 xl:col-span-4 flex min-[64.0625rem]:justify-end">
            <Button href="" variant="white">
              View in 360°
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mt-6 sm:mt-8 mb-6 sm:mb-8" />

        {/* 360 Video Player Box */}
        <div className="grid grid-cols-12">
          <div
            className="col-span-12 min-[64.0625rem]:col-start-2 min-[64.0625rem]:col-span-10 relative w-full aspect-video rounded-tl-[28px] rounded-br-[28px] sm:rounded-tl-[40px] sm:rounded-br-[40px] overflow-hidden bg-white/10"
            data-aos="zoom-in"
            data-aos-duration="900"
            data-aos-delay="150"
          >
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
