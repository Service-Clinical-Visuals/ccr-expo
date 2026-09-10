"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section
      id="360-experience"
      className="relative w-full py-16 md:py-24 bg overflow-hidden"
    >

      <div className="custom-container relative z-10 flex flex-col">

        {/* Top Header Row */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-white/20"
          data-aos="fade-up"
        >
          {/* Left Text */}
          <div className="max-w-3xl flex flex-col gap-2.5">
            <Typography
              variant="h2"
              color="white"
              className="font-semibold text-2xl sm:text-3xl lg:text-[34px] tracking-tight text-white font-outfit"
            >
              Explore Urology Solutions In 360°
            </Typography>
            <Typography
              variant="p"
              color="none"
              className="text-white/85 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-outfit"
            >
              Explore our range of catheters, drainage bags, and urology solutions through an interactive 360° experience, highlighting their design, features, functionality, quality, reliability, and patient-focused care.
            </Typography>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0">
            <Button text="View in 360°" href="#explore" variant="white" />
          </div>
        </div>

        {/* 360 Video Player Container */}
        <div
          className="w-full mt-8 sm:mt-10 max-w-7xl mx-auto overflow-hidden rounded-tl-[3.5rem] lg:rounded-tl-[4.5rem] rounded-br-[3.5rem] lg:rounded-br-[4.5rem] rounded-tr-none rounded-bl-none border border-white/15"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="relative w-full aspect-video bg-[#121c22]">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Deg360;

