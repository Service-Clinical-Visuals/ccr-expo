"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section id="explore360" className="w-full py-20 bg-[#192B6C] overflow-hidden">
      <div className="custom-container flex flex-col gap-8 items-center text-center">
        {/* Content (Heading + Text) */}
        <div className="flex flex-col gap-4 items-center w-full xl:max-w-[70%]" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold">
            Explore Primacath® In 360°
          </Typography>

          <Typography variant="p" color="white" className="leading-relaxed font-normal text-sm lg:text-base">
            Take a closer look at the Primacath® catheter through an interactive 360° experience. Explore its rounded tip, ring application, and practical design for intermittent catheterization.
          </Typography>
        </div>

        {/* Video */}
        <div
          className="w-full xl:max-w-[85%] aspect-video relative overflow-hidden mt-2"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Deg360;
