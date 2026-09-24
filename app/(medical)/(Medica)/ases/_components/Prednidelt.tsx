"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Link from "next/link";

export default function Prednidelt() {
  return (
    <section id="kirschner-wire" className="w-full py-16 md:py-24 bg-[#F1F1F1BF] overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-[3800px]:gap-16 items-center">

          {/* Left Column: Video Placeholder */}
          <div className="w-full relative order-2 lg:order-1" data-aos="fade-right">
            <div className="w-full aspect-video rounded flex items-center justify-center relative overflow-hidden shadow-sm border border-gray-200 group">
              <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />

            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start gap-3 order-1 lg:order-2" data-aos="fade-left">
            <div className="flex flex-col gap-2 w-full">
              <span className="text-[#BA0A28] font-[Inter] font-bold text-[16px] md:text-[18px]">
                SCREW COMPONENTS
              </span>
              <h2 className="text-[#333333] font-[Manrope] text-[24px] md:text-[28px] font-bold leading-tight">
                Integrated Fixation Components
              </h2>
              <div className="w-[180px] h-[2px] bg-[#BA0A28] rounded-sm mb-2" />
            </div>

            <p className="text-[#404040] font-[Inter] text-[14px] leading-relaxed">
              The PFNA system includes a range of dedicated components, including the integrated compression lag screw and PFNA compression screw, designed to complement the overall nail system. These components offer different options within the PFNA fixation configuration and form an important part of the complete component range. Their dedicated design allows them to be used as part of the PFNA system according to the selected configuration. Together, these components provide a comprehensive range of options within the PFNA system.
            </p>

            <p className="text-[#404040] font-[Inter] text-[14px] leading-relaxed">
              Additional components include the Ø4.8 Proximal-Distal Locking Screw, PFNA Nail Head Screw, and PFNA End Cap, providing a complete range of dedicated components for the PFNA system. These components complement the nail and complete its overall configuration.
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
