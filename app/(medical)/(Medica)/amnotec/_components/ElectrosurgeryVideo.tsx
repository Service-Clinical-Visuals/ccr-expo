"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

/**
 * AMNOTEC Electrosurgery Video Section
 * Master Reference: Inogen Methodology
 *
 * Requirements:
 * - Background: #E2ECF3 with subtle pattern texture
 * - Centered header constrained to xl:max-w-[70%]
 * - Video container with standard aspect-video (16:9), constrained to lg:max-w-[70%]
 * - Uses DynamicVideoPlayer type="short-2"
 */
const ElectrosurgeryVideo = () => {
  return (
    <section
      id="electrosurgery"
      className="w-full py-16 xl:py-24 bg-[#E2ECF3] bg-[url('/medical/amnotec/bg1.webp')] bg-blend-multiply bg-cover bg-center bg-no-repeat overflow-hidden relative"
      style={{ backgroundColor: "#E2ECF3" }}
    >
      <div className="custom-container flex flex-col items-center">
        
        {/* Centered Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="eyebrow"
            className="text-[#134093] font-semibold text-sm sm:text-base tracking-wider uppercase"
          >
            ADVANCED ELECTROSURGICAL TECHNOLOGY
          </Typography>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#000000] leading-tight"
          >
            Powering Precision in Every Surgical Procedure
          </Typography>

          <Typography
            variant="p"
            color="secondary"
            className="text-sm sm:text-base leading-relaxed text-[#111111]"
          >
            Discover the advanced capabilities of AMNOTEC&apos;s electrosurgical technology, designed to support precise tissue cutting and effective coagulation. Combining controlled energy delivery with intuitive operation, it helps healthcare professionals perform surgical procedures with accuracy.
          </Typography>
        </div>

        {/* Video Player Container - Zero borders, clean rounded-[5px] */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-[5px] shadow-xl mt-10 sm:mt-14"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ElectrosurgeryVideo;
