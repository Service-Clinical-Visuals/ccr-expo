"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const CryotherapyVideo = () => {
  return (
    <section id="cryotherapy-video" className="w-full py-12 sm:py-16 lg:py-24 min-[3800px]:py-32 bg-[var(--color-secondary)] overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        {/* Header */}
        <div
          className="flex flex-col items-center text-center gap-4 sm:gap-6 mb-8 sm:mb-12 xl:max-w-[70%] w-full mx-auto"
          data-aos="fade-up"
        >
          <Typography variant="h2" color="white" className="capitalize !font-semibold">
            Advanced Contact-Free Cryotherapy
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="leading-relaxed sm:leading-[1.6] text-white/90 text-center"
          >
            The TUR CRYOTUR STREAM introduces an innovative approach to cryotherapy by delivering cooled
            air directly to affected tissues without skin contact. Its advanced compressor-based
            cooling technology reaches temperatures down to -35°C, while intelligent temperature
            monitoring helps provide controlled and flexible therapy applications.
          </Typography>
        </div>

        {/* Video Player matching Deleo aspect-video & 70% concept */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-2xl lg:rounded-[30px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-white"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer
            type="short-1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CryotherapyVideo;

