"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Factories() {
  return (
    <section
      id="factories"
      className="w-full py-16 lg:py-24 xl:py-28 bg-[#003470] bg-[url('/medical/biotech/images/bg.png')] bg-cover bg-center bg-no-repeat text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#003470]/75 pointer-events-none -z-0" />

      <div className="custom-container relative z-10 flex flex-col items-center text-center gap-8 lg:gap-10">
        {/* Header Block */}
        <div
          className="flex flex-col items-center gap-3.5 min-[2500px]:gap-6 min-[3800px]:gap-8 w-full xl:max-w-[70%] min-[2500px]:max-w-[80%] min-[3800px]:max-w-[85%] mx-auto"
          data-aos="fade-up"
        >
          <Typography variant="h2" color="white" className="text-center">
            Biotech Factories
          </Typography>
          <div className="w-[246px] min-[2500px]:w-[360px] min-[3800px]:w-[480px] h-[2px] min-[2500px]:h-[3px] min-[3800px]:h-[4px] bg-white rounded-[8px]" />

          <Typography variant="p" color="white" className="text-center mt-1">
            Biotech’s manufacturing and office sites include a full production
            line, logistic, education and development department. The facilities
            have high tech machines, clean rooms, packaging, stocking capability
            and well-trained staff.
          </Typography>
        </div>

        {/* Video Player Container */}
        <div
          className="w-full lg:max-w-[70%] min-[2500px]:max-w-[80%] min-[3800px]:max-w-[85%] mx-auto aspect-video relative rounded-[6px] min-[2500px]:rounded-[12px] overflow-hidden shadow-2xl bg-black/50 border border-white/20"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
