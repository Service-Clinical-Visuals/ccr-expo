"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function ProductionAndInnovation() {
  return (
    <section
      id="production-innovation"
      className="relative w-full py-16 sm:py-20 md:py-28 bg-[#24559c] overflow-hidden bg-production-pills"
    >


      <div className="relative z-10 custom-container">
        {/* Centered Headings & Copy */}
        <div
          className="xl:max-w-[70%] mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Kicker */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="section-text font-bold text-[#ffffff] tracking-normal font-inter">
              &mdash; Urology & Catheters
            </span>
          </div>

          {/* Title */}
          <h2 className="section-title font-medium font-poppins text-white tracking-tight mb-5 ">
            Precision 2-Way Foley Catheter
          </h2>

          {/* Description */}
          <p className="section-text text-white font-normal font-inter leading-relaxed">
            The Farmac 2-Way Foley Catheter is designed for controlled urethral catheterisation, featuring a sterile construction and practical 2-way configuration. Available in multiple sizes and colour-coded options, it supports accurate selection for different clinical requirements.
          </p>
        </div>

        {/* Video Card Container */}
        <div
          className="mt-8 sm:mt-12 max-w-5xl mx-auto"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          <div className="relative w-full aspect-video rounded-md overflow-hidden bg-white/10  flex items-center justify-center">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
