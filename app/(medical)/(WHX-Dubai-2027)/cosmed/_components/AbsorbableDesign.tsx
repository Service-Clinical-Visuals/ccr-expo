"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function AbsorbableDesign() {
  return (
    <section id="cardiac-monitoring" className="relative w-full bg-white py-16 sm:py-20 md:py-20 overflow-hidden">
      {/* Blue Banner Background on Desktop (Starts behind the right half of the video and extends to right screen edge) */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[72%] xl:w-[70%] h-[90%] bg-[#0066B2] rounded-[10px] z-0 overflow-hidden shadow-lg">
        <img
          src="/medical/cosmed/bg1.webp"
          alt="COSMED Background"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
      </div>

      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 items-center">
          {/* Left Column: Video Box Overlapping the Blue Background */}
          <div
            className="lg:col-span-8 w-full"
            data-aos="fade-right"
            data-aos-duration="850"
          >
            <div className="relative w-full aspect-video sm:aspect-[16/10] rounded-[10px] overflow-hidden flex items-center justify-center shadow-lg">
              <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover object-center aspect-video"
              />
            </div>
          </div>

          {/* Right Column: Information Content inside the Blue Banner */}
          <div
            className="relative overflow-hidden lg:col-span-4 flex flex-col justify-center text-white bg-[#0066B2] lg:bg-transparent rounded-2xl lg:rounded-none p-6 sm:p-8 lg:p-0 lg:pl-4 xl:pl-6 min-[2500px]:pl-10 min-[3800px]:pl-14"
            data-aos="fade-left"
            data-aos-duration="850"
            data-aos-delay="150"
          >
            {/* Mobile Background Image */}
            <img
              src="/medical/cosmed/bg1.webp"
              alt=""
              className="lg:hidden absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
            />

            <div className="relative z-10 flex flex-col justify-center">
              {/* Subtitle with vertical white accent bar */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-1 h-5 bg-white rounded-full inline-block"></span>
                <span className="text-white/95 section-text font-semibold font-plus-jakarta tracking-wide">
                  Intelligent ECG Technology
                </span>
              </div>

              {/* Main Title */}
              <h2 className="section-title font-bold text-white font-plus-jakarta leading-snug tracking-tight mb-4 sm:mb-5">
                Advanced Cardiac Monitoring for Clinical Exercise Assessment
              </h2>

              {/* Description Paragraph 1 */}
              <p className="section-text text-white/90 font-inter leading-relaxed mb-4">
                Designed for modern cardiac testing, COSMED's Quark C12x and T12x provide diagnostic-quality 12-lead ECG monitoring for resting examinations and exercise stress tests. With advanced signal analysis, adaptable testing protocols, and compatibility with COSMED metabolic systems, these solutions help clinicians evaluate cardiac responses and functional capacity efficiently.
              </p>

              {/* Description Paragraph 2 */}
              <p className="section-text text-white/80 font-inter leading-relaxed mb-8">
                Advanced solutions for ECG analysis, customizable exercise testing, and synchronized cardiopulmonary assessments with integrated patient data management.
              </p>

              {/* CTA Button */}
              <div>
                <Button href="#cardiac-monitoring" variant="white-blue">
                  View Detail
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
