"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Explore360() {
  return (
    <section className="relative w-full bg-[#E9E9E94D] py-16 sm:py-20 md:py-20 overflow-hidden">
      {/* Top Blue Brand Background Image */}
      <div className="absolute top-0 left-0 w-full h-[36%] sm:h-[38%] lg:h-[42%] bg-[#0066B2] z-0 overflow-hidden">
        <img
          src="/medical/cosmed/bg.webp"
          alt="COSMED Background"
          className="w-full h-full object-cover object-center pointer-events-none"
        />
      </div>

      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-10 min-[2500px]:gap-16 min-[3800px]:gap-20 items-center">
          {/* Left Column: Floating Information Card */}
          <div
            className="lg:col-span-5 w-full h-full bg-white rounded-[5px] p-7 sm:p-9 lg:p-10 xl:p-12 min-[2500px]:p-16 min-[3800px]:p-22 flex flex-col justify-center shadow-[0px_3px_8px_0px_#0000003D]"
            style={{ boxShadow: "0px 3px 8px 0px #0000003D" }}
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            {/* Subtitle with vertical blue accent bar */}
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-1 h-5 bg-[#0066B2] rounded-full inline-block"></span>
              <span className="text-[#0066B2] section-text font-semibold font-plus-jakarta tracking-wide">
                Advanced Cardiac Diagnostics
              </span>
            </div>

            {/* Card Title */}
            <h2 className="section-title font-bold tracking-tight font-plus-jakarta text-[#1E293B] leading-snug mb-4 sm:mb-5">
              Precision ECG Systems for Comprehensive Cardiac Exercise Testing
            </h2>

            {/* Card Description */}
            <p className="section-text text-[#475569] font-inter leading-relaxed font-regular mb-8">
              The Quark C12x and T12x deliver reliable ECG monitoring for resting examinations and exercise-based cardiac assessments. Designed for flexibility, these systems combine signal analysis, adaptable testing protocols, and integration with cardiopulmonary exercise testing equipment to help healthcare professionals evaluate cardiac responses efficiently.
            </p>

            {/* CTA Button */}
            <div>
              <Button href="#ecg-solutions" variant="dark-blue">
                Discover ECG Solutions
              </Button>
            </div>
          </div>

          {/* Right Column: 360 / Dynamic Video Player Container */}
          <div
            className="lg:col-span-7 w-full"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <div className="relative w-full aspect-video sm:aspect-[16/10] lg:aspect-video rounded-[5px] overflow-hidden flex items-center justify-center">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover object-center aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
