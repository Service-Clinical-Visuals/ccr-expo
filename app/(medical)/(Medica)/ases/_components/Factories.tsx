"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Factories() {
  return (
    <section id="factories" className="w-full py-16 md:py-24 bg-[#E5E5E5] bg-[url('/medical/ases/bg2.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">

      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center lg:items-stretch">

          {/* Left Column: Video */}
          <div className="w-full relative lg:col-span-8 flex flex-col h-full" data-aos="fade-right">
            <div className="w-full aspect-video lg:aspect-auto flex-grow rounded-md relative overflow-hidden flex flex-col justify-center items-center group min-h-[300px]">
              {/* Video Placeholder/Player */}
              <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col lg:col-span-4" data-aos="fade-left" data-aos-delay="200">
            <div className="flex flex-col mb-4">
              <span className="text-[#BA0A28] font-[Inter] font-bold text-[16px] md:text-[18px]">
                360° Experience
              </span>
              <h2 className="text-[#333333] font-[Manrope] text-[24px] md:text-[28px] font-bold leading-tight">
                Multi-Axis Fixator
              </h2>
              <div className="w-[100px] h-[2px] bg-[#BA0A28] mt-2 rounded-sm" />
            </div>

            <p className="text-[#555555] font-[Inter] text-[17px] md:text-[17px] leading-[1.8] mb-6">

              The PFNA Short system offers a range of configurations to meet different sizing requirements, with Ø10, Ø11, Ø12, and Ø13 diameter options. This range provides flexibility in selecting the appropriate nail configuration for different applications. Each diameter is available in 170 mm, 200 mm lengths.            </p>

            <div className="flex flex-col gap-6">
              {/* Feature 1 */}
              <div className="bg-white rounded-[6px] p-4 lg:p-5 flex gap-5 shadow-sm items-start">
                <span className="text-[#BA0A28] font-[Manrope] font-semibold leading-none mt-1" style={{ fontSize: 'clamp(36px, 8vw, 36px)' }}>01</span>
                <div className="flex flex-col gap-1 pt-2">
                  <h4 className="text-[#333333] font-[Inter] font-semibold text-[18px] md:text-[20px] leading-tight">Multiple Size Options</h4>
                  <p className="text-[#666666] font-[Inter] text-[15px] md:text-[17px] leading-relaxed">
                    Available in 170 mm, 200 mm, and 240 mm lengths across multiple diameters.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-[6px] p-4 lg:p-5 flex gap-5 shadow-sm items-start">
                <span className="text-[#BA0A28] font-[Manrope] font-semibold leading-none mt-1" style={{ fontSize: 'clamp(36px, 8vw, 36px)' }}>02</span>
                <div className="flex flex-col gap-1 pt-2">
                  <h4 className="text-[#333333] font-[Inter] font-semibold text-[18px] md:text-[20px] leading-tight">Precision Product Selection</h4>
                  <p className="text-[#666666] font-[Inter] text-[15px] md:text-[17px] leading-relaxed">
                    Each nail configuration has a specific reference number for easy identification
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button type="button" className="bg-[#BA0A28] text-white px-8 py-2.5 rounded-[4px] font-[Inter] font-medium text-[17px] hover:bg-[#900820] transition-colors shadow-sm">
                Explore
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
