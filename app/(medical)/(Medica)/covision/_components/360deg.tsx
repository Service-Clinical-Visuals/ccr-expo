"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section
      id="experience-360"
      className="w-full py-16 xl:py-24 bg-[#164160] bg-[url('/medical/covision/bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden relative"
    >
      <div className="custom-container flex flex-col items-center text-center gap-8 min-[3800px]:gap-12">
        {/* Top Content: Heading and Description - xl:max-w-[70%] Deleo pattern */}
        <div
          className="flex flex-col gap-3 w-full items-center text-center"
          data-aos="fade-up"
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="w-[27px] h-[4px] bg-[#FB8021] rounded-full"></div>
            <Typography
              variant="h4"
              color="primary"
              className="!font-bold tracking-wider uppercase"
            >
              360° SECTION
            </Typography>
          </div>

          {/* Heading */}
          <Typography variant="h2" color="white" className="!font-bold">
            Comprehensive Solutions for Hip Replacement
          </Typography>

          {/* Paragraph */}
          <Typography
            variant="p"
            color="white"
            className="leading-relaxed text-gray-200 mt-2 w-full xl:max-w-[70%] mx-auto text-center"
          >
            Covision’s hip range includes cemented and cementless stems and cups in a variety of
            types. The cemented stems have different designs, while the various types of
            cementless stems are available with different coating options, including Ti plasma and
            HA, with partial, complete, single, and double coatings.
          </Typography>
        </div>

        {/* Video Block with Deleo's DynamicVideoPlayer - object-contain to avoid any cropping */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-lg shadow-2xl border border-white/10 bg-black/40"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Deg360;
