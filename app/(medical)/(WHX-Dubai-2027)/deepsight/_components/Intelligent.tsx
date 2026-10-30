"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Intelligent() {
  return (
    <section
      id="solutions"
      className="w-full bg-[#E9F8FF] bg-[url('/medical/deepsight/bg.webp')] bg-cover bg-bottom bg-no-repeat py-12 sm:py-16 lg:py-[60px] 2xl:py-[64px] min-[2500px]:py-28 min-[3800px]:py-40 overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center mb-8 sm:mb-10 2xl:mb-10 min-[2500px]:mb-14 min-[3800px]:mb-20"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4 mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 min-[3800px]:w-3 min-[3800px]:h-3 rounded-full bg-secondary" />
            <Typography variant="h6" color="secondary" className="uppercase">
              Engineered for Clinical Excellence
            </Typography>
          </div>
          <Typography variant="h2" color="primary" className="mb-4 sm:mb-5 2xl:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
            Intelligent Technology. Seamless Integration.
          </Typography>
          <Typography variant="p" color="primary" className="max-w-[1100px] 2xl:max-w-[1300px] min-[2500px]:max-w-[1820px] min-[3800px]:max-w-[2500px]">
            Discover how the NeedleVue Lite Cart brings advanced ultrasound imaging and intelligent instrument
            visualization together in a streamlined clinical setup. Explore its integrated technology, intuitive
            interface, and thoughtfully designed configuration, developed to support ultrasound-guided procedures
            across a range of clinical applications.
          </Typography>
        </div>

        {/* Video */}
        <div
          className="relative w-full lg:w-[85%] xl:w-[80%] aspect-video lg:aspect-[870/490] overflow-hidden bg-[#EBEBEB]"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
