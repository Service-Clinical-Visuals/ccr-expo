"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "../Typography";

/**
 * SpecializedTechnology Section (Video 02) - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 * - Stacks cleanly up to 1500px: heading comes first (order-1), then video (order-2)
 * - 2-column on >=1500px: video on left (min-[1500px]:order-1), heading on right (min-[1500px]:order-2)
 * - DynamicVideoPlayer type="short-2" in 16:9 aspect-video
 * - Diamond-shaped number badges (01 and 02)
 */
const SpecializedTechnology = () => {
  return (
    <section id="specialized-technology" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1500px]:flex-row items-center gap-10 xl:gap-14 w-full">
          
          {/* Content Column: order-1 on screens up to 1500px, order-2 on >=1500px */}
          <div
            className="w-full min-[1500px]:w-1/2 flex flex-col gap-5 sm:gap-6 order-1 min-[1500px]:order-2"
            data-aos="fade-left"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 sm:w-8 h-1 bg-[#01ADEF] rounded-full inline-block shrink-0" />
              <span className="heading-blue text-[#00578E]">
                Specialized Technology
              </span>
            </div>

            {/* Heading */}
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-[#333333] leading-snug"
            >
              Engineered for Cleaner, More Controlled Surgical Procedures
            </Typography>

            {/* Description */}
            <Typography
              variant="p"
              color="dark"
              className="leading-relaxed text-[#333333] text-justify"
            >
              The Zinnanti Surgical Smoke Evacuator Unit combines advanced smoke evacuation technology with specialized functionality to support modern surgical environments. Designed for effective smoke management during procedures, it helps healthcare professionals maintain visibility, improve procedural conditions, and focus on delivering quality patient care.
            </Typography>

            {/* Numbered Feature Card 01 with Diamond Badge */}
            <div className="w-full bg-white border border-[#00578E] rounded-[16px] min-[3800px]:rounded-[28px] p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 sm:w-12 sm:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-22 min-[3800px]:h-22 rotate-45 rounded-[5px] bg-[#00578E] text-white flex items-center justify-center shrink-0 shadow-sm my-1 mx-2">
                <span className="-rotate-45 font-bold text-base sm:text-lg min-[2500px]:text-xl min-[3800px]:text-3xl">
                  01
                </span>
              </div>
              <div className="flex flex-col gap-1 pl-1">
                <h4 className="text-base sm:text-lg min-[2500px]:text-xl min-[3800px]:text-3xl font-bold text-[#000000]">
                  High-Flow Smoke Evacuation
                </h4>
                <p className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl text-[#333333] leading-relaxed">
                  Designed to efficiently remove surgical smoke and support a cleaner procedural environment.
                </p>
              </div>
            </div>

            {/* Numbered Feature Card 02 with Diamond Badge */}
            <div className="w-full bg-white border border-[#00578E] rounded-[16px] min-[3800px]:rounded-[28px] p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 sm:w-12 sm:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-22 min-[3800px]:h-22 rotate-45 rounded-[5px] bg-[#00578E] text-white flex items-center justify-center shrink-0 shadow-sm my-1 mx-2">
                <span className="-rotate-45 font-bold text-base sm:text-lg min-[2500px]:text-xl min-[3800px]:text-3xl">
                  02
                </span>
              </div>
              <div className="flex flex-col gap-1 pl-1">
                <h4 className="text-base sm:text-lg min-[2500px]:text-xl min-[3800px]:text-3xl font-bold text-[#000000]">
                  High-Flow Smoke Evacuation
                </h4>
                <p className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl text-[#333333] leading-relaxed">
                  Designed to efficiently remove surgical smoke and support a cleaner procedural environment.
                </p>
              </div>
            </div>

          </div>

          {/* Video Column: order-2 on screens up to 1500px, order-1 on >=1500px */}
          <div
            className="w-full min-[1500px]:w-1/2 aspect-video relative overflow-hidden rounded-[24px] min-[3800px]:rounded-[48px] shadow-2xl border border-gray-200 bg-[#001D33] order-2 min-[1500px]:order-1"
            data-aos="fade-right"
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

export default SpecializedTechnology;
