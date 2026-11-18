"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Eyebrow from "./Eyebrow";

const SmokeEvacuator = () => {
  return (
    <section
      id="smoke-evacuator"
      className="w-full bg-white py-12 sm:py-14 xl:py-16 min-[2500px]:py-28 min-[3800px]:py-40 overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center gap-6 xl:gap-8 min-[2500px]:gap-14">
        {/* Centered Header */}
        <div
          className="flex flex-col items-center text-center gap-2 sm:gap-3 min-[2500px]:gap-5 max-w-4xl xl:max-w-[82%]"
          data-aos="fade-up"
        >
          <Eyebrow text="Smoke Evacuator Unit" />
          <Typography variant="h2" color="dark" className="leading-tight">
            Cleaner Surgical Smoke Management
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed font-normal">
            Experience the Smoke Evacuator Unit with a 35-hour filter, designed to
            capture surgical smoke and support a cleaner procedural environment.
            Featuring a compact design, convenient operation, and 100–120V
            compatibility, it provides a practical solution for effective smoke
            management in clinical settings.
          </Typography>
        </div>

        {/* Video — wide frame, large top-left + bottom-right corners */}
        <div
          className="w-full xl:max-w-[82%] aspect-video xl:aspect-[2.08/1] relative overflow-hidden bg-gray-100 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-sm rounded-bl-sm xl:rounded-tl-[2.5rem] xl:rounded-br-[2.5rem] min-[2500px]:rounded-tl-[4rem] min-[2500px]:rounded-br-[4rem]"
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

export default SmokeEvacuator;
