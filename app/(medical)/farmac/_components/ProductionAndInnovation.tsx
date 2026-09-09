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
          className="max-w-4xl mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Kicker */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="section-text font-bold text-[#ffffff] tracking-normal font-inter">
              &mdash; Farmac Zabban&apos;s production
            </span>
          </div>

          {/* Title */}
          <h2 className="section-title font-medium font-poppins text-white tracking-tight mb-5 ">
            Production and innovation
          </h2>

          {/* Description */}
          <p className="section-text text-white font-normal font-inter leading-relaxed">
            With the know-how and experience gained over the years, Farmac Zabban offers its customers the best solution
          </p>
          <p className="section-text text-white font-normal font-inter leading-relaxed mt-1">
            Farmac Zabban&apos;s production process includes technologically advanced equipment and machinery housed in a particle-controlled clean room.
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
