"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section id="explore360" className="w-full py-20 lg:py-28 bg-[#252525] overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Text Content */}
        <div className="text-center xl:max-w-[80%] mb-12" data-aos="fade-up">
          <Typography variant="h2" color="white" className="mb-4">
            Explore Colposcope Isis Gamma In 360°
          </Typography>
          <Typography variant="p" className="text-white text-sm  leading-relaxed xl:max-w-[70%] mx-auto">
            Take a closer look at the Colposcope Isis Gamma through an interactive 360° experience. Explore its ergonomic design, integrated imaging system, advanced controls, and key features developed to support efficient and precise videocolposcopy.
          </Typography>
        </div>

        {/* Video Player */}
        <div
          className="w-full xl:max-w-[75%] aspect-video relative overflow-hidden rounded-md border border-white/10 bg-white/5"
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
