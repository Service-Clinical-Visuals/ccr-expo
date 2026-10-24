"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

export default function Versatile() {
  return (
    <section
      id="laryngoscope"
      className="w-full bg-[#F4F8F9] bg-[url('/medical/rudolf/bg.webp')] bg-cover bg-center bg-no-repeat py-12 sm:py-16 lg:py-[70px] 2xl:py-20 min-[2500px]:py-28 min-[3800px]:py-40 overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center mb-8 sm:mb-9 2xl:mb-10 min-[2500px]:mb-14 min-[3800px]:mb-20"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-3 2xl:gap-4 min-[2500px]:gap-5 min-[3800px]:gap-7 mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-5 2xl:w-6 min-[2500px]:w-9 min-[3800px]:w-12 h-[3px] min-[2500px]:h-1 min-[3800px]:h-1.5 rounded-full bg-primary" />
            <Typography variant="h4" color="primary" className="uppercase">
              Laryngoscope Range
            </Typography>
          </div>
          <Typography variant="h2" color="dark" className="mb-4 sm:mb-5 2xl:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
            Versatile Solutions for Clinical Use
          </Typography>
          <Typography variant="p" color="muted" className="max-w-[720px] 2xl:max-w-[860px] min-[2500px]:max-w-[1200px] min-[3800px]:max-w-[1650px]">
            Riester offers fibre optic, standard, and disposable laryngoscopes with LED/Li-ion technology for diverse
            clinical applications. The range combines reliable illumination with practical solutions for healthcare
            professionals.
          </Typography>
        </div>

        {/* Video */}
        <div
          className="relative w-full lg:w-[68%] aspect-video lg:aspect-[870/463] overflow-hidden bg-[#EBEBEB]"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
