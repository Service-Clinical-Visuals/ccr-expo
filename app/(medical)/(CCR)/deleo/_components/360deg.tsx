"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section id="experience-360" className="w-full py-16 xl:py-24 bg-[#2BBEE2] bg-[url('/medical/deleo/bg.png')] bg-cover bg-center bg-no-repeat overflow-hidden relative">
      <div className="custom-container flex flex-col items-center text-center gap-8 min-[3800px]:gap-12">

        {/* Top Content: Heading and Text */}
        <div className="flex flex-col gap-2 w-full items-center  xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-white"></div>
            <Typography variant="h4" color="white">
              360° Experience
            </Typography>
          </div>

          <Typography variant="h2" color="white">
            Body - Layering
          </Typography>

          <Typography variant="p" color="white" className="leading-relaxed font-medium">
            In 2021, Deleo invented CRISTAL Body-Layering®, a comprehensive, non-invasive, and personalized treatment that<br className="hidden md:block" /> acts on the 3 layers (LAYER) of the body (BODY): the dermis, the hypodermis, and the muscle.
          </Typography>
        </div>

        {/* Video Block */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden "
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {/* We are placing the 360 video player here. */}
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Deg360;
