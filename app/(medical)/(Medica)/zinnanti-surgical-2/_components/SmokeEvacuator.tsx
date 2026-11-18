"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Eyebrow from "./Eyebrow";

const SmokeEvacuator = () => {
  return (
    <section
      id="smoke-evacuator"
      className="w-full bg-white py-16 xl:py-24 min-[2500px]:py-36 min-[3800px]:py-48 overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center gap-10 xl:gap-12 min-[2500px]:gap-20">
        {/* Centered Header */}
        <div
          className="flex flex-col items-center text-center gap-3 min-[2500px]:gap-5 max-w-4xl xl:max-w-[75%]"
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

        {/* Video */}
        <div
          className="w-full xl:max-w-[80%] aspect-video relative overflow-hidden rounded-2xl min-[2500px]:rounded-3xl shadow-lg bg-gray-100"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer
            type="short-0"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SmokeEvacuator;
