"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section id="explore360" className="w-full py-20 lg:py-24 bg-[#10253D] overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Text Content */}
        <div className="text-center xl:max-w-[60%] mb-12" data-aos="fade-up">
          <Typography variant="h2" color="white" className="mb-4">
            Explore The H-Series In 360°
          </Typography>
          <Typography variant="p" className="text-white/90 leading-relaxed mx-auto">
            Take a closer look at the H-Series Electrosurgical Unit through an interactive 360° experience. Explore its advanced design, dual output system, operating modes, and features developed for precise cutting and coagulation.
          </Typography>
        </div>

        {/* Video Player */}
        <div
          className="w-full xl:max-w-[80%] aspect-video relative overflow-hidden rounded-md border border-white/10 bg-white/5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Deg360;
