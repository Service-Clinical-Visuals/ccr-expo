"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const SmartScopeVideo = () => {
  return (
    <section
      id="smartscope-video"
      className="w-full py-16 xl:py-24 bg-[#005EAC] text-white overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-10 lg:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24 items-center text-center">
        {/* Header (Deleo xl:max-w-[80%] pattern) */}
        <div className="flex flex-col items-center gap-4 w-full xl:max-w-[80%] mx-auto" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3">
            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-semibold leading-tight drop-shadow-sm"
            >
              SMARTSCOPE LV PRO For Smart Airway Management
            </Typography>
            <div className="w-8 sm:w-10 min-[2500px]:w-14 min-[3800px]:w-20 h-1 sm:h-1.5 min-[2500px]:h-2.5 min-[3800px]:h-4 bg-white rounded-full shrink-0" />
          </div>

          <Typography
            variant="p"
            color="white"
            className="leading-relaxed text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-white/90 w-full xl:max-w-[80%] mx-auto"
          >
            The Tecme SMARTSCOPE LV PRO Video Laryngoscope integrates advanced visualization,
            ergonomic functionality, and flexible blade configurations to support airway management
            across a wide range of clinical environments. Its 720P HD camera, active anti-fog system,
            and high-power LED illumination help provide clear anatomical views during intubation
            procedures.
          </Typography>
        </div>

        {/* Video Card Container (Exact Deleo pattern: w-full lg:max-w-[80%] mx-auto aspect-video relative overflow-hidden) */}
        <div
          className="w-full lg:max-w-[80%] mx-auto relative aspect-video rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-2xl bg-[#EAEAEA]"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {/* Dynamic Video Player (Exact Deleo short-2 specification) */}
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Fallback Label if video is loading or fallback */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
            <span className="text-[#33363F]/40 font-bold text-xl sm:text-3xl md:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl tracking-wider uppercase select-none">
              Video Clip - 02
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartScopeVideo;
