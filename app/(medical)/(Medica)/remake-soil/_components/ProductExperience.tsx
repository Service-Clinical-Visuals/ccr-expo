"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import { Check } from "lucide-react";

const ProductExperience = () => {
  const points = [
    "Premium Engine Oils Engineered for Maximum Performance, Protection, and Long-Term Engine Reliability",
    "Manufactured to Meet International OEM Specifications and Strict Quality Standards with Proven Reliability",
    "Advanced Lubricant Technology for Consistent Performance, Extended Engine Service Life, and Maximum Protection",
    "Suitable for Modern Petrol, Diesel, Hybrid, and Turbocharged Engine Applications Across Multiple Vehicle Types",
  ];

  return (
    <section className="w-full py-16 xl:py-24 bg-[#1C1C1C] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-12">

        <div
          className="flex flex-col items-center gap-3 md:gap-4 w-full xl:max-w-[70%] mx-auto text-center"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="white"
            className="!font-semibold tracking-[0.8px] text-center"
          >
            360° Product Experience
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="leading-relaxed text-gray-200"
          >
            Experience Racing Oil's premium Engine Oil from every angle with our interactive 360° product view. Discover the exceptional quality, advanced formulation, precision engineering, and premium packaging behind every lubricant, designed to deliv
          </Typography>
        </div>

        <div className="flex flex-col min-[1301px]:flex-row items-center w-full gap-8 min-[1301px]:gap-0 relative">

          <div
            className="w-full min-[1301px]:w-[60%] aspect-video relative rounded-[24px] sm:rounded-[30px] overflow-hidden border border-white/20 shadow-2xl z-20 shrink-0"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div
            className="w-full min-[1301px]:w-[44%] min-[1301px]:-ml-6 2xl:-ml-8 flex flex-col gap-3.5 sm:gap-4 min-[1920px]:gap-5 min-[2500px]:gap-6 min-[3500px]:gap-7 min-[3800px]:gap-8 justify-center z-10"
            data-aos="fade-left"
          >
            {points.map((text, index) => (
              <div
                key={index}
                className="bg-[#050505] border border-white/50 rounded-[39px] p-4 sm:p-5 min-[1301px]:pl-14 2xl:pl-16 min-[2500px]:pl-20 min-[3500px]:pl-24 min-[3800px]:pl-28 flex items-center gap-4 sm:gap-5 min-[2500px]:gap-6 min-[3500px]:gap-7 min-[3800px]:gap-8 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] hover:border-white transition-colors duration-300"
              >

                <div className="w-7 h-7 sm:w-8 sm:h-8 min-[2000px]:w-10 min-[2000px]:h-10 min-[2500px]:w-12 min-[2500px]:h-12 min-[3500px]:w-14 min-[3500px]:h-14 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[#155EEF] flex items-center justify-center shrink-0">
                  <Check
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 min-[2000px]:w-5.5 min-[2000px]:h-5.5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3500px]:w-7 min-[3500px]:h-7 min-[3800px]:w-8 min-[3800px]:h-8 text-white stroke-[3]"
                  />
                </div>

                <p className="flex-1 min-w-0 text-white text-xs sm:text-sm md:text-[14px] min-[2000px]:text-[17px] min-[2500px]:text-[20px] min-[3500px]:text-[24px] min-[3800px]:text-[28px] leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProductExperience;
