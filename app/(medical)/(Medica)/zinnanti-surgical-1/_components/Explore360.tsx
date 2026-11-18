"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Badge from "./Badge";
import Typography from "./Typography";

export default function Explore360() {
  return (
    <section
      id="experience-360"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#f4f6f8] to-[#fafbfc] pb-12 sm:pb-16 xl:pb-20 2k:pb-32 4k:pb-44"
    >
      {/* Blue photo backdrop covering the top part of the section */}
      <div
        className="absolute inset-x-0 top-0 h-[300px] sm:h-[360px] lg:h-[400px] xl:h-[46%] 2k:h-[46%] bg-[#4F6744] bg-[url('/medical/zinnanti-surgical-1/360-bg.webp')] bg-cover bg-center"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#4F6744]/55" />
      </div>

      <div className="custom-container relative z-10 flex flex-col items-center text-center pt-10 sm:pt-12 xl:pt-14 2k:pt-20 4k:pt-28 gap-4 2k:gap-6 4k:gap-8">
        <div data-aos="fade-up" className="flex flex-col items-center gap-3 xl:gap-4 2k:gap-6 4k:gap-8">
          <Badge text="360° Experience" tone="dark" />
          <Typography variant="h2" color="white">
            Explore the Smoke Evacuator Unit in 360°
          </Typography>
          <Typography variant="p" color="white" className="max-w-[880px] 2k:max-w-[1400px] 4k:max-w-[1900px] text-white/95">
            Get a closer look at the Bovie ZSE01 Smoke Evacuator Unit. Explore its design and
            features from every angle to understand the equipment used in High-Resolution
            Anoscopy (HRA) procedures.
          </Typography>
        </div>

        <div
          className="w-full lg:w-[62%] mt-2 2k:mt-4 aspect-video relative overflow-hidden rounded-lg 2k:rounded-2xl 4k:rounded-3xl bg-white shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
