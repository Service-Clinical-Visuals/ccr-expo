"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Experience360() {
  return (
    <section
      id="experience-360"
      className="w-full py-16 xl:py-24 bg-[#414047] bg-[url('/medical/yushu/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative text-white"
    >
      <div className="custom-container flex flex-col items-center text-center gap-8 min-[3800px]:gap-12">
        {/* Top Content: Eyebrow, Heading, Description */}
        <div
          className="flex flex-col gap-3 w-full items-center xl:max-w-[70%] max-w-[90%] mx-auto"
          data-aos="fade-up"
        >
          {/* Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-[2px] bg-white rounded-full"></div>
            <Typography
              variant="h4"
              color="white"
              className="uppercase !font-semibold tracking-wider text-sm sm:text-base"
            >
              360° EXPERIENCE
            </Typography>
          </div>

          {/* Heading */}
          <Typography variant="h2" color="white" className="drop-shadow-sm text-center">
            Sterile Performance for Clear ENT Visualization
          </Typography>

          {/* Subtext */}
          <Typography
            variant="p"
            color="white"
            className="leading-relaxed text-gray-200 font-normal xl:max-w-[70%] max-w-[90%] mx-auto text-center"
          >
            The Cover-ENT® is a sterile disposable sheath for rigid endoscopes, featuring a
            transparent distal lens for clear ENT visualization. It is available in multiple
            sizes and viewing angles and is compatible with Storz, Henke Sass, Wolf, and Xion
            connectors.
          </Typography>
        </div>

        {/* 360-Degree Video Player */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-xl shadow-2xl"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
