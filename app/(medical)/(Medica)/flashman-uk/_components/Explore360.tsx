"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const FEATURES = [
  "Integrates multiple infusion devices into one coordinated workstation for efficient clinical operations.",
  "Supports controlled medication delivery with flexible infusion management capabilities.",
  "Enhances workflow efficiency through an organized and streamlined workstation design.",
  "Designed to support healthcare professionals across diverse clinical care environments.",
];

export default function Explore360() {
  return (
    <section className="w-full relative py-14 sm:py-20 md:py-24 bg-[#E7F6F9] overflow-hidden">
      {/* Background Graphic */}
      <img
        src="/medical/flashman-uk/bg1.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-24 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-12 items-center">
          {/* Left Column: Text & Features List */}
          <div
            className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            {/* Eyebrow */}
            <span className="section-text text-[#2997AA] font-semibold font-inter tracking-wide mb-2">
              | Advance Infusion Technology
            </span>

            {/* Main Heading */}
            <h2 className="section-title font-bold text-[#1e293b] font-unbounded leading-tight tracking-tight mb-4">
              Intelligent Infusion Solutions for Better Patient Care
            </h2>

            {/* Description */}
            <p className="section-text font-inter text-[#475569] leading-relaxed mb-5">
              Designed to support precise and efficient infusion therapy, the Infusion Workstation System brings multiple infusion devices together into an integrated solution, helping healthcare professionals manage medication delivery and patient care more effectively.
            </p>

            {/* Feature Bullets */}
            <ul className="flex flex-col gap-3 font-inter text-[#475569]">
              {FEATURES.map((feature, idx) => (
                <li key={idx} className="section-text flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#2997AA] font-bold select-none leading-tight">
                    -
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: 360 Video Player Box */}
          <div
            className="lg:col-span-7 xl:col-span-7 relative w-full overflow-hidden aspect-video flex items-center justify-center rounded-[5px] bg-white/40 shadow-sm"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            {/* Dynamic Video Player */}
            <div className="absolute inset-0 w-full h-full z-10">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-contain aspect-video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
