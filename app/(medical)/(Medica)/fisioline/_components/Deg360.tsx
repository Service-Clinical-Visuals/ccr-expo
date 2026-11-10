"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section id="experience-360" className="w-full py-16 xl:py-24 bg-[#222D83] overflow-hidden relative">
      <div className="custom-container flex flex-col items-center text-center gap-10">
        {/* Top Header - max-w-[90%] xl:max-w-[80%] */}
        <div
          className="flex flex-col gap-3 w-full items-center max-w-[90%] xl:max-w-[80%] mx-auto"
          data-aos="fade-up"
        >
          <Typography variant="h2" color="white" className="!font-bold text-center">
            Explore LUMIX® SURGERY In 360°
          </Typography>

          <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-center">
            Discover the LUMIX® SURGERY through an immersive 360° product experience. Explore its advanced design, precision cutting technology, and dual operating modes, developed to support a wide range of soft tissue surgical applications.
          </Typography>
        </div>

        {/* 360 Video Player - lg:max-w-[80%] aspect-video relative overflow-hidden */}
        <div
          className="w-full lg:max-w-[80%] mx-auto aspect-video relative overflow-hidden rounded-[20px] sm:rounded-[28px] shadow-2xl"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Deg360;
