/**
 * 360 Video Section - OrthoGet
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Background Pattern:
 *    - Subtle wave graphic background (`/medical/orthoget/bg.webp`) with clean spacing.
 * 2. Centered Section Header:
 *    - Optimal measure limit (`w-full max-w-full xl:max-w-[75%] mx-auto`) to ensure comfortable reading length.
 * 3. Video Embed & Aspect Ratio:
 *    - Exact Inogen video pattern using `DynamicVideoPlayer` with `type="360"`.
 *    - 16:9 aspect-video ratio to prevent any layout shift across breakpoints.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Experience360 = () => {
  return (
    <section
      id="technology"
      className="w-full py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white bg-[url('/medical/orthoget/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative"
    >
      <div className="custom-container flex flex-col items-center">
        
        {/* Centered Header */}
        <div
          className="text-center w-full max-w-[90%] xl:max-w-[70%] mx-auto space-y-3 sm:space-y-4"
          data-aos="fade-up"
        >
          <Typography variant="tag" color="primary">
            _ Advanced Orthopedic Implant
          </Typography>

          <Typography
            variant="h2"
            color="secondary"
            className="text-[#202020]"
          >
            Precision Bone Lengthening Through Innovative Implant Technology
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="font-dmsans leading-relaxed text-[#404040] w-full xl:max-w-[70%] mx-auto"
          >
            OrthoNail is an innovative intramedullary implant featuring a patented hybrid magneto-mechanical mechanism, designed to support precise lower-limb bone lengthening with advanced engineering and reliable performance.
          </Typography>
        </div>

        {/* 360 Video Player Container (Deleo Technique: lg:max-w-[70%] aspect-video) */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-[10px] min-[2500px]:rounded-[20px] min-[3800px]:rounded-[30px] shadow-xl border border-gray-200 mt-10 sm:mt-14 min-[2500px]:mt-20 min-[3800px]:mt-28 bg-gray-100"
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

