"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const TechnicalFeatures = () => {
  return (
    <section id="services" className="w-full py-16 xl:py-24 min-[3500px]:py-32 min-[3800px]:py-36 bg-black overflow-hidden relative">

      <div
        className="hidden min-[1301px]:block absolute left-0 top-1/2 -translate-y-1/2 w-[58%] 2xl:w-[57%] min-[2500px]:w-[58%] h-[92%] 2xl:h-[90%] bg-[#1C1C1C] rounded-r-[20px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] border-y border-r border-white/10 z-0 pointer-events-none"
      />

      <div className="custom-container relative z-10">
        <div className="flex flex-col min-[1301px]:flex-row items-center justify-between gap-10 min-[1301px]:gap-8 2xl:gap-12 w-full relative">

          <div
            className="w-full min-[1301px]:w-[40%] bg-[#1C1C1C] min-[1301px]:bg-transparent rounded-[20px] min-[1301px]:rounded-none p-6 sm:p-10 min-[1301px]:p-0 shadow-2xl min-[1301px]:shadow-none border border-white/10 min-[1301px]:border-0 z-10 flex flex-col justify-between shrink-0"
            data-aos="fade-right"
          >

            <Typography
              variant="h2"
              color="white"
              className="!font-semibold tracking-tight leading-[1.3]"
            >
              Optimised Structure & Mechanical Performance
            </Typography>

            <div className="w-full h-px bg-white/25 my-4 sm:my-5 min-[2500px]:my-8" />

            <Typography
              variant="p"
              color="white"
              className="leading-relaxed text-gray-200 mb-5 min-[2500px]:mb-8"
            >
              Swing-Mesh® combines a controlled porous structure with semi-rigid construction and multidirectional mechanical properties to support abdominal wall reinforcement.
            </Typography>

            <div className="flex flex-col gap-3.5 sm:gap-4 min-[2500px]:gap-6 mb-5 min-[2500px]:mb-8">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-8.5 md:h-8.5 min-[1920px]:w-10 min-[1920px]:h-10 min-[2500px]:w-13 min-[2500px]:h-13 min-[3500px]:w-16 min-[3500px]:h-16 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-[#155EEF] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 min-[1920px]:w-6 min-[1920px]:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3500px]:w-9 min-[3500px]:h-9 min-[3800px]:w-10 min-[3800px]:h-10 text-white stroke-[3]" />
                </div>
                <p className="text-white leading-relaxed">
                  <span className="font-semibold text-white">80 g/m² Weight</span>
                  <span className="text-gray-200"> – Provides a defined mesh weight suitable for abdominal wall reinforcement and surgical applications.</span>
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-8.5 md:h-8.5 min-[1920px]:w-10 min-[1920px]:h-10 min-[2500px]:w-13 min-[2500px]:h-13 min-[3500px]:w-16 min-[3500px]:h-16 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-[#155EEF] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 min-[1920px]:w-6 min-[1920px]:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3500px]:w-9 min-[3500px]:h-9 min-[3800px]:w-10 min-[3800px]:h-10 text-white stroke-[3]" />
                </div>
                <p className="text-white leading-relaxed">
                  <span className="font-semibold text-white">High Tensile Resistance</span>
                  <span className="text-gray-200"> – Provides tensile resistance ranging from 129 to 514 N for reliable mechanical performance.</span>
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-white/25 my-4 sm:my-5 min-[2500px]:my-8" />

            <Typography
              variant="p"
              color="white"
              className="leading-relaxed text-gray-300 mb-5 min-[2500px]:mb-8"
            >
              With a weight of 80 g/m², thickness of 0.56 mm, and tensile resistance of 129/514 N, the mesh provides a balanced design for different hernia repair applications.
            </Typography>

            <div>
              <Button
                text="View Product Details"
                href="#services"
                variant="primary"
                showIcon={true}
              />
            </div>
          </div>

          <div
            className="w-full min-[1301px]:w-[60%] aspect-video relative rounded-[24px] sm:rounded-[30px] overflow-hidden border border-white/20 shadow-2xl z-20 shrink-0"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalFeatures;
