"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section
      id="experience-360"
      className="w-full py-16 xl:py-24 bg-[url('/medical/troge-medical/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative text-white"
    >
      <div className="custom-container flex flex-col gap-10 xl:gap-14">
        {/* Top Header Row */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 xl:max-w-[70%] max-w-3xl">
            <Typography variant="h2" color="white" className="!font-bold">
              Explore TRO-UROCATH In 360°
            </Typography>
            <Typography variant="p" color="white" className="text-white/90 leading-relaxed font-normal">
              Discover the TRO-UROCATH Foley Balloon Catheter through an immersive 360° product experience. Explore its smooth silicone-coated surface, precision-designed drainage eyes, and secure balloon system, developed to support reliable bladder drainage and patient comfort in clinical settings.
            </Typography>
          </div>

          <div className="shrink-0">
            <a
              href="#experience-360"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 min-[2500px]:px-7 min-[2500px]:py-3.5 min-[3800px]:px-10 min-[3800px]:py-5 rounded-md bg-white hover:bg-gray-100 text-[#A00566] font-semibold transition-all duration-200 group shadow-md"
            >
              <span className="button whitespace-nowrap">View in 360°</span>
              <img
                src="/medical/troge-medical/black_arrow.webp"
                alt=""
                className="w-[14px] h-[10px] min-[2500px]:w-[24px] min-[2500px]:h-[17px] min-[3800px]:w-[34px] min-[3800px]:h-[24px] object-contain group-hover:translate-x-1 transition-transform duration-300 shrink-0"
              />
            </a>
          </div>
        </div>

        {/* Video Block (Deleo Aspect Video Technique) */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl"
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

