"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Deg360() {
  return (
    <section
      id="experience-360"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#003F77] bg-[url('/medical/rebstock/bg.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden relative"
    >
      <div className="custom-container flex flex-col items-center text-center gap-8 sm:gap-10 min-[3800px]:gap-16">
        <div
          className="flex flex-col gap-3 sm:gap-4 w-full items-center xl:max-w-[70%] max-w-[90%] mx-auto"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center flex-wrap gap-3">
            <Typography
              variant="h2"
              color="white"
              className="!font-semibold capitalize leading-snug"
            >
              Explore Facial Implant In 360°
            </Typography>
            <span className="inline-block w-10 sm:w-11 h-1 sm:h-1.5 bg-white shrink-0" />
          </div>

          <Typography
            variant="p"
            color="white"
            className="leading-relaxed text-white/90"
          >
            Take a closer look at the Facial Implant and its precision-engineered design. Explore the implant from every angle and discover the details that support accurate positioning, secure fixation, and efficient surgical handling.
          </Typography>
        </div>

        <div
          className="w-full xl:max-w-[70%] lg:max-w-[80%] mx-auto aspect-video relative overflow-hidden rounded-none shadow-[0px_4px_20px_rgba(0,0,0,0.35)] bg-black"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
