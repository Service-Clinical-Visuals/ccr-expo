"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "../Typography";

/**
 * SmokeEvacuatorVideo Section (Video 01) - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 * - Stacks cleanly up to 1500px (tablet and mid-desktop viewports)
 * - 40% | 60% split on >=1500px
 * - DynamicVideoPlayer type="short-1" in 16:9 aspect-video
 */
const SmokeEvacuatorVideo = () => {
  return (
    <section id="evacuator-unit" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1500px]:flex-row items-center gap-10 xl:gap-14 w-full">
          
          {/* Content (40% on >=1500px) */}
          <div
            className="w-full min-[1500px]:w-[40%] flex flex-col gap-5 sm:gap-6"
            data-aos="fade-right"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 sm:w-8 h-1 bg-[#01ADEF] rounded-full inline-block shrink-0" />
              <span className="heading-blue text-[#00578E]">
                Zinnanti Surgical Smoke Evacuator Unit
              </span>
            </div>

            {/* Heading */}
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-[#333333] leading-snug"
            >
              Where Cutting-Edge Surgical Expertise Harmonizes with Innovative Design Solutions
            </Typography>

            {/* Narrative Paragraphs */}
            <Typography
              variant="p"
              color="dark"
              className="leading-relaxed text-[#333333] text-justify"
            >
              The Zinnanti Surgical Smoke Evacuator Unit (ZSE01) is a high-flow, high-efficiency smoke evacuation system specifically designed to support High-Resolution Anoscopy (HRA) procedures. Engineered to provide effective smoke management during surgical applications, this advanced unit helps maintain a cleaner procedural environment by efficiently removing surgical smoke generated during electrosurgical treatments. Its dedicated design supports healthcare professionals in maintaining visibility, improving procedural conditions, and focusing on precision throughout the procedure.
            </Typography>

            <Typography
              variant="p"
              color="dark"
              className="leading-relaxed text-[#333333] text-justify"
            >
              Equipped with a 35-hour filter and designed for 100–120V operation, the ZSE01 combines dependable performance with practical functionality for clinical environments. Its advanced smoke evacuation technology is supported by multiple granted patents and additional patents pending, reflecting Zinnanti Surgical's continued commitment to innovation and specialized surgical solutions.
            </Typography>
          </div>

          {/* Video Player Container (60% on >=1500px) */}
          <div
            className="w-full min-[1500px]:w-[60%] aspect-video relative overflow-hidden rounded-[20px] min-[3800px]:rounded-[40px] shadow-2xl border border-gray-200 bg-[#001D33]"
            data-aos="fade-left"
          >
            {/* <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            /> */}
            <img
              src="/medical/zinnanti-surgical-3/smoke.webp"
              alt="Smoke Evacuation Unit"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmokeEvacuatorVideo;
