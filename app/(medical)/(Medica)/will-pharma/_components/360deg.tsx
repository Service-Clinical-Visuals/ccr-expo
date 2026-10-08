"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section
      id="experience-360"
      className="w-full py-16 sm:py-20 xl:py-28 bg-[#698A7F] bg-[url('/medical/will-pharma/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative"
    >
      <div className="custom-container flex flex-col items-center text-center gap-8 sm:gap-10 min-[3800px]:gap-16">
        {/* Header */}
        <div
          className="flex flex-col items-center gap-3 sm:gap-4 w-full mx-auto"
          data-aos="fade-up"
        >
          <Typography
            variant="h4"
            color="white"
            className="uppercase !font-semibold tracking-wider text-white/95"
          >
            360° SECTION
          </Typography>

          <Typography
            variant="h2"
            color="white"
            className="uppercase !font-bold text-white"
          >
            ADVANCED SURGICAL SUPPORT
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="leading-relaxed text-white/90 w-full xl:max-w-[70%] mx-auto font-normal"
          >
            Willomesh® is a sterile, high-quality polypropylene surgical mesh used for hernia repair and chest wall reconstruction. It is intended for inguinal hernia repair, traumatic or surgical wounds, and other fascial procedures requiring non-absorbable reinforcement.
          </Typography>
        </div>

        {/* 360 Video Player */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative rounded-[10px] md:rounded-[14px] min-[3800px]:rounded-[24px] overflow-hidden shadow-2xl bg-black/10"
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
