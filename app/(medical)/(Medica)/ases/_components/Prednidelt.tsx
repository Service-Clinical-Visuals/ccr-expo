"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Link from "next/link";

export default function Prednidelt() {
  return (
    <section id="kirschner-wire" className="w-full py-16 md:py-24 bg-[#F1F1F1BF] overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Video Placeholder */}
          <div className="w-full relative order-2 lg:order-1" data-aos="fade-right">
            <div className="w-full aspect-video bg-white rounded flex items-center justify-center relative overflow-hidden shadow-sm border border-gray-200 group">
              <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />

            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start gap-3 order-1 lg:order-2" data-aos="fade-left">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#BA0A28] font-[Inter] font-bold text-[16px] md:text-[18px]">
                Orthopedic Fixation
              </span>
              <h2 className="text-[#333333] font-[Manrope] text-[24px] md:text-[28px] font-bold leading-tight">
                Kirschner Wire for Precision Fixation
              </h2>
              <div className="w-[180px] h-[2px] bg-[#BA0A28] rounded-sm mb-2" />
            </div>

            <p className="text-[#404040] font-[Inter] text-[14px] leading-relaxed">
              Kirschner wire is available in four different types: trocar-ended, bayonet-ended,
              olive-tipped, and grooved Kirschner wire, and is used for fixation in bone fractures.
              The trocar-ended Kirschner wire comes in two length options: Ø 0.8 mm (150 mm
              and 300 mm), Ø 1.0 mm (250, 275, 300, 400 mm), and Ø 1.2 mm (250, 300,
              400mm). There is one length option of 150 mm for Ø 1.4 mm, and 5 different length
              options for Ø 1.5 mm: 150, 250, 275, 300, and 400 mm. There are 3 length options
              for Ø 1.8 mm: 275, 300, and 400 mm.
            </p>

            <p className="text-[#404040] font-[Inter] text-[14px] leading-relaxed">
              There are 6 length options for Ø 2 mm: 200, 250, 275, 300, 400, and 440 mm.
              There is only one length option of 300 mm for Ø 2.2 mm. There are 4 length options
              for Ø2.5 mm: 250, 275, 300, and 400 mm. There is only one length option for Ø2.6
              mm: 300 mm. There are 3 length options for Ø3.0 mm: 275, 300, and 400 mm.
            </p>

            <Link
              href="#contact"
              className="mt-4 inline-block w-fit bg-[#BA0A28] text-white px-8 py-3 rounded-[4px] font-[Inter] font-bold text-[16px] md:text-[18px] uppercase hover:bg-[#900820] transition-colors shadow-sm"
            >
              Learn More
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
