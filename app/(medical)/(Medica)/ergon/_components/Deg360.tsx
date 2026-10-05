"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section
      id="experience-360"
      className="w-full py-12 sm:py-16 xl:py-24 bg-[#004D7C] bg-[url('/medical/ergon/bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden relative"
    >
      <div className="custom-container flex flex-col gap-6 sm:gap-8 min-[3800px]:gap-12">
        {/* Top Header Row */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          {/* Left: Heading & Subtitle */}
          <div className="flex flex-col gap-3 w-full xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="white"
              className="capitalize !font-semibold text-2xl sm:text-3xl md:text-[28px] min-[2500px]:text-[42px] min-[3800px]:text-[64px]"
            >
              Explore Ergomesh® High Density In 360°
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="leading-relaxed text-sm sm:text-base min-[2500px]:text-lg min-[3800px]:text-2xl text-white/90"
            >
              Take a closer look at the Ergomesh® High Density through an interactive 360° experience. Explore its monofilament polypropylene construction, mesh design, and features developed for abdominal and thoracic wall defect repair.
            </Typography>
          </div>

          {/* Right: Action Button */}
          <div className="shrink-0">
            <Button
              text="View in 360°"
              href="#experience-360"
              variant="secondary"
              className="text-sm sm:text-base min-[3800px]:text-3xl min-[3800px]:!py-5 min-[3800px]:!px-10"
            />
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/25 my-1 sm:my-2" />

        {/* 360 Interactive Video Player */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative rounded-[20px] md:rounded-[25px] min-[3800px]:rounded-[40px] overflow-hidden shadow-2xl bg-black/10"
          data-aos="zoom-in"
          data-aos-delay="100"
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

export default Deg360;
