"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import { Check, ArrowRight } from "lucide-react";

const Performance = () => {
  return (
    <section id="performance" className="w-full py-12 sm:py-16 xl:py-24 bg-white overflow-hidden relative">
      <div className="relative w-full">
        
        {/* Blue Background: Left edge (left: 0), 10% taller than the video card, overlapping into right column with rounded-r-[20px] from 1301px */}
        <div className="absolute left-0 max-[1300px]:top-0 max-[1300px]:bottom-0 min-[1301px]:top-1/2 min-[1301px]:-translate-y-1/2 w-full min-[1301px]:w-[calc(35vw+240px)] xl:w-[calc(35vw+260px)] 2xl:w-[calc(35vw+300px)] min-[2500px]:w-[calc(35vw+450px)] min-[3800px]:w-[calc(35vw+650px)] min-[1301px]:h-[110%] bg-[#082755] rounded-[20px] min-[1301px]:rounded-l-none min-[1301px]:rounded-r-[20px] z-0 shadow-md" />

        <div className="custom-container relative z-10">
          {/* Tablet layout up to 1300px (flex-col), 35% | 65% Split from 1301px (flex-row) */}
          <div className="flex flex-col min-[1301px]:flex-row items-center py-6 sm:py-8 min-[1301px]:py-6 gap-8 min-[1301px]:gap-8 xl:gap-10">
            
            {/* Left Text Column: Full width on tablet up to 1300px, 35% from 1301px */}
            <div
              className="w-full min-[1301px]:w-[35%] flex flex-col justify-center gap-4 sm:gap-5 text-white py-4 min-[1301px]:py-2 min-[1301px]:pr-2 shrink-0"
              data-aos="fade-right"
            >
              <Typography variant="h2" color="white" className="!font-bold leading-tight xl:max-w-[90%]">
                Versatile Electrosurgical Performance
              </Typography>

              <Typography variant="p" color="white" className="text-gray-200 text-sm leading-relaxed xl:max-w-[95%]">
                The Bovie® Specialist | PRO is a multipurpose electrosurgical generator designed to meet the needs of physician offices and specialty facilities with reliable performance and convenient everyday operation across various surgical environments.
              </Typography>

              {/* Feature Checklist */}
              <div className="flex flex-col gap-2.5 sm:gap-3 my-0.5 xl:max-w-[95%]">
                <div className="flex items-start gap-3 min-[1920px]:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 min-[1920px]:w-8 min-[1920px]:h-8 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[#00A3E0] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 min-[1920px]:w-5.5 min-[1920px]:h-5.5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-white" strokeWidth={3} />
                  </div>
                  <Typography variant="p" color="white" className="text-sm min-[1920px]:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-snug">
                    <strong className="text-white">Five Energy Modes</strong> – Includes Cut, Blend, Coagulation, Fulguration, and Standard Bipolar.
                  </Typography>
                </div>

                <div className="flex items-start gap-3 min-[1920px]:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 min-[1920px]:w-8 min-[1920px]:h-8 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-[#00A3E0] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 min-[1920px]:w-5.5 min-[1920px]:h-5.5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-white" strokeWidth={3} />
                  </div>
                  <Typography variant="p" color="white" className="text-sm min-[1920px]:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-snug">
                    <strong className="text-white">Bipolar Capability</strong> – Provides dedicated output for standard bipolar applications.
                  </Typography>
                </div>
              </div>

              <Typography variant="p" color="white" className="text-gray-200 text-sm leading-relaxed xl:max-w-[95%]">
                With five energy output modes and up to 120 watts of power, it supports a variety of monopolar and bipolar surgical procedures with enhanced operational flexibility.
              </Typography>

              {/* CTA Button */}
              <div className="pt-1">
                <a
                  href="#safety"
                  className="inline-flex items-center gap-2 min-[1920px]:gap-3 min-[2500px]:gap-4 bg-white text-[#082755] font-semibold text-sm min-[1920px]:text-base min-[2500px]:text-xl min-[3800px]:text-2xl px-6 min-[1920px]:px-8 min-[2500px]:px-10 min-[3800px]:px-14 py-2.5 min-[1920px]:py-3.5 min-[2500px]:py-4.5 min-[3800px]:py-6 rounded-full hover:bg-gray-100 transition-all active:scale-95 shadow-md group w-fit"
                >
                  <span>Explore Safety Features</span>
                  <ArrowRight className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-[#082755] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Video Column: Full width up to 1300px, 65% from 1301px */}
            <div
              className="w-full min-[1301px]:w-[65%] flex justify-center min-[1301px]:justify-end"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="w-full aspect-video rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-2xl relative">
                <DynamicVideoPlayer
                  type="short-1"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Performance;
