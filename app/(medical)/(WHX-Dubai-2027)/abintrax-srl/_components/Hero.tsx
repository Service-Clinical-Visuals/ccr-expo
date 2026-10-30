"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen h-[100dvh] min-h-[580px] pt-[86px] sm:pt-[102px] lg:pt-[112px] min-[2500px]:pt-[153px] min-[3800px]:pt-[210px] pb-3 sm:pb-4 min-[2500px]:pb-6 min-[3800px]:pb-8 relative overflow-hidden flex flex-col justify-end"
    >
      <div className="custom-container h-full flex flex-col flex-1">
        {/* Hero Card Container with rounded corners - Covers screen height */}
        <div className="w-full h-full relative rounded-2xl overflow-hidden flex flex-col justify-end p-6 sm:p-10 lg:p-14 min-[2500px]:p-22 min-[3800px]:p-28 shadow-2xl">
          {/* Background Video using DynamicVideoPlayer - Exact Deleo pattern */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-[#030616]">
            <DynamicVideoPlayer
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
              type="banner"
            />
            {/* Ambient overlay for high text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
          </div>

          {/* Content Container positioned at bottom-left with Deleo max-w-[90%] xl:max-w-[70%] */}
          <div className="relative z-20 w-full flex flex-col gap-6 sm:gap-8 max-w-[90%] xl:max-w-[70%] pointer-events-auto">
            {/* Header Title */}
            <Typography
              variant="h1"
              color="white"
              className="leading-tight drop-shadow-md text-2xl sm:text-3xl lg:text-[36px] min-[2500px]:text-[54px] min-[3800px]:text-[72px] font-bold"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Technology That Connects.
              <br />
              Innovation That Cares.
            </Typography>

            {/* Division Selector Card - Figma Group 1000004016 */}
            <div
              className="bg-white rounded-xl shadow-2xl p-2 sm:p-2.5 max-w-full sm:max-w-[470px] min-[2500px]:max-w-[640px] min-[3800px]:max-w-[820px] flex items-center justify-between gap-2 sm:gap-3 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Teaching Division */}
              <a
                href="#divisions"
                className="flex-1 flex items-center justify-between p-2.5 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs min-[2500px]:text-sm min-[3800px]:text-base font-bold text-[#333333]/85 uppercase tracking-wide font-secondary">
                    TEACHING DIVISION
                  </span>
                  <div className="flex items-center gap-2 mt-0.5 sm:mt-1">
                    <span className="w-2.5 h-2.5 min-[2500px]:w-3.5 min-[2500px]:h-3.5 rounded-full bg-[#3AA5DD] shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg min-[2500px]:text-2xl font-medium text-[#333333]/85 font-primary">
                      Didact
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 text-[#3AA5DD] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  strokeWidth={2.5}
                />
              </a>

              {/* Vertical divider */}
              <div className="w-px h-10 bg-gray-200 shrink-0" />

              {/* Health Division */}
              <a
                href="#divisions"
                className="flex-1 flex items-center justify-between p-2.5 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors group cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs min-[2500px]:text-sm min-[3800px]:text-base font-bold text-[#333333]/85 uppercase tracking-wide font-secondary">
                    HEALTH DIVISION
                  </span>
                  <div className="flex items-center gap-2 mt-0.5 sm:mt-1">
                    <span className="w-2.5 h-2.5 min-[2500px]:w-3.5 min-[2500px]:h-3.5 rounded-full bg-[#DC64A1] shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg min-[2500px]:text-2xl font-medium text-[#333333]/85 font-primary">
                      Health
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 text-[#DC64A1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
