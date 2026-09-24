"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AbsorbableDesign() {
  return (
    <section className="relative w-full bg-[#16202D] py-14 sm:py-20 md:py-24 text-white overflow-hidden">
      {/* Optional: Add a subtle medical sketch pattern background here if available, 
          currently simulating the dark ambiance with solid #16202D */}

      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Column: Video Clip Box */}
          <div
            className="xl:col-span-8 w-full"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="relative w-full aspect-video overflow-hidden flex items-center justify-center">
              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-1"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div
            className="xl:col-span-4 flex flex-col"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <div className="border-l-4 border-white pl-4 mb-6 rounded-sm">
              <h4 className="text-white section-text font-bold font-inter text-sm mb-1 tracking-wide">
                Imaging & Examination
              </h4>
              <h2 className="section-title font-bold text-white tracking-tight font-dmsans leading-tight text-3xl sm:text-4xl">
                Clear Imaging for Examination
              </h2>
            </div>

            <p className="section-text text-white/90 leading-relaxed font-inter mb-6 font-regular">
              The SLV-101 supports digital documentation by enabling examination videos to be captured, transferred, stored, and archived. Its Video, S-Video, and USB connections make it easy to share examination records, while integrated software supports clinical documentation, training, and research. This enables physicians to review and manage examination data.
            </p>

            <hr className="border-[#D9D9D9] mb-8 w-1/3 border-1" />

            <ul className="flex flex-col gap-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="w-[19px] h-[19px] rounded-full bg-white mt-1.5 flex-shrink-0"></div>
                <p className="section-text text-white/90 font-inter  font-regular leading-snug">
                  <strong className="text-white">Intuitive Examination Control</strong> - Convenient handle controls make magnification, focusing, and frame fixation simple and easy during examinations.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-[19px] h-[19px] rounded-full bg-white mt-1.5 flex-shrink-0"></div>
                <p className="section-text text-white/90 font-regular font-inter leading-snug">
                  <strong className="text-white">Clinical & Research Use</strong> - The SLV-101 supports multiple physicians across clinical and research applications.
                </p>
              </li>
            </ul>

            <div>
              <Button href="#product-details" variant="primary" showArrow={false} className="!w-auto !px-7 !rounded-md">
                Know More
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
