"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section id="experience-360" className="w-full py-16 xl:py-24 bg-[#1C1C1C] overflow-hidden relative">
      <div className="custom-container flex flex-col items-center text-center gap-8 md:gap-10 min-[3800px]:gap-16">

        <div
          className="flex flex-col items-center gap-3 md:gap-4 w-full xl:max-w-[70%] mx-auto text-center"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="white"
            className="!font-semibold tracking-[0.8px] text-center"
          >
            360° Product Experience
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="leading-relaxed text-gray-200"
          >
            Experience Racing Oil's premium Engine Oil from every angle with our interactive 360° product view. Discover the exceptional quality, advanced formulation, precision engineering, and premium packaging behind every lubricant, designed to deliv
          </Typography>
        </div>

        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-[20px] md:rounded-[30px] border border-white/20 shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
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
