"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "../Typography";

/**
 * Experience360 Section - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 * - Centered header with xl:max-w-[70%] limit
 * - Standard 16:9 aspect-video container with DynamicVideoPlayer type="360"
 */
const Experience360 = () => {
  return (
    <section id="experience-360" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Section Header: Centered */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-8 h-1 bg-[#00578E] rounded-full inline-block" />
            <span className="heading-blue text-[#00578E]">
              Experience in Every Angle
            </span>
          </div>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-[#333333]"
          >
            Experience Innovation from Every Angle
          </Typography>

          <Typography
            variant="p"
            color="dark"
            className="leading-relaxed text-[#333333] text-center"
          >
            The ZSE01 Smoke Evacuator Unit is engineered to deliver high-flow, high-efficiency smoke evacuation for High-Resolution Anoscopy (HRA) procedures. Its specialized design supports effective surgical smoke management, helping healthcare professionals maintain a cleaner and more controlled procedural environment.
          </Typography>
        </div>

        {/* 360 Video Player Container: 16:9 aspect-video ratio */}
        <div
          className="w-full lg:max-w-[75%] xl:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-[24px] min-[3800px]:rounded-[48px] shadow-2xl border border-gray-200 mt-10 sm:mt-14"
          data-aos="zoom-in"
          data-aos-delay="150"
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

export default Experience360;

