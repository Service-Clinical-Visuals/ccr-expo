"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Deg360 = () => {
  return (
    <section
      id="360"
      className="w-full py-16 sm:py-20 xl:py-24 bg-[#082551] bg-[url('/medical/aspen/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative text-white"
    >
      <div className="custom-container flex flex-col items-center text-center gap-8 min-[3800px]:gap-12">
        
        {/* Top Content: Heading and Text with Deleo's xl:max-w-[70%] mx-auto */}
        <div
          className="flex flex-col gap-3 w-full items-center xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <Typography variant="h2" color="white" className="!font-bold">
            Explore Bovie® Specialist | PRO In 360°
          </Typography>
          <Typography
            variant="p"
            color="white"
            className="text-gray-200 text-sm sm:text-base leading-relaxed"
          >
            Discover the Bovie® Specialist | PRO through an immersive 360° product experience. Explore its modern design, intuitive push-button controls, and versatile electrosurgical capabilities, developed to support a wide range of monopolar and bipolar procedures.
          </Typography>
        </div>

        {/* Video Block using Deleo's exact w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-[20px] sm:rounded-[30px] shadow-2xl"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Deg360;
