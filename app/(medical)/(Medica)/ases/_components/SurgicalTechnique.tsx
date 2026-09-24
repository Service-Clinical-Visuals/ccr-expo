"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Link from "next/link";

export default function SurgicalTechnique() {
  return (
    <section id="surgical-technique" className="relative w-full py-20 overflow-hidden bg-[url('/medical/ases/bg1.png')] ">

      <div className="custom-container relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-down">
          <span className="text-white font-[Inter] font-semibold text-[16px] md:text-[18px]">
            PROXIMAL FEMUR NAIL
          </span>
          <h2 className="text-white font-[Manrope] text-[24px] md:text-[28px] font-bold mb-2">
            Advanced Proximal Femur Fixation System
          </h2>
          <div className="w-[180px] h-[2px] bg-white rounded-sm mb-4" />
          <p className="text-white/90 font-[Inter] text-[14px] md:text-[15px] max-w-6xl min-[1920px]:max-w-[80%] leading-relaxed">
            The Proximal Femur Nail is designed for proximal femur fracture fixation, offering versatile options with either a lag screw or blade with three anchors. Its system features a specialized lag screw thread design, Twin Lock system, flat lateral nail profile, and multiple distal diameter options for versatile fixation requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5" data-aos="fade-right" data-aos-delay="100">

            {/* Card 1 */}
            <div className="bg-white rounded-md p-5 lg:p-8 flex flex-col shadow-lg">
              <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
                <div className="w-auto h-auto flex items-center justify-center shrink-0 mt-1">
                  <img src="/medical/ases/i1.png" alt="Upper Extremity" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-[#333333] font-[Inter] font-bold text-[20px] md:text-[24px] leading-tight">Flexible Configuration</h3>
                  <p className="text-[#404040] font-[Inter] text-[14px] leading-relaxed">
                    The nail features a flat lateral profile for smoother insertion, along with multiple distal diameter options to support different product configurations and sizing requirements.
                  </p>
                </div>
              </div>
              <Link href="#readmore" className="text-[#BA0A28] font-[Inter] font-bold text-[16px] md:text-[18px] uppercase hover:opacity-80 transition-opacity underline">
                READ MORE
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-md p-5 lg:p-8 flex flex-col shadow-lg">
              <div className="flex items-start gap-4 border-b border-gray-100 pb-4">
                <div className="w-auto h-auto flex items-center justify-center shrink-0 mt-1">
                  <img src="/medical/ases/i2.png" alt="Lower Extremity" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-[#333333] font-[Inter] font-bold text-[20px] md:text-[24px] leading-tight">Versatile Fixation</h3>
                  <p className="text-[#404040] font-[Inter] text-[14px] leading-relaxed">
                    The system supports both lag screw and blade configurations with three anchors, providing multiple fixation options within the Proximal Femur Nail system.
                  </p>
                </div>
              </div>
              <Link href="#readmore" className="text-[#BA0A28] font-[Inter] font-bold text-[16px] md:text-[18px] uppercase hover:opacity-80 transition-opacity underline">
                READ MORE
              </Link>
            </div>

          </div>

          {/* Right Column: Video */}
          <div className="lg:col-span-7 relative h-[400px] lg:h-auto min-h-[400px]" data-aos="fade-left" data-aos-delay="200">
            <div className="w-full h-full aspect-video rounded-[6px] flex items-center justify-center relative overflow-hidden shadow-xl group">
              <DynamicVideoPlayer type="short-1" className="absolute aspect-video inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
