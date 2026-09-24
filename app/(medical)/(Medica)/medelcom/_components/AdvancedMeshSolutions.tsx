"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AdvancedMeshSolutions() {
  return (
    <section className="w-full bg-[#0287DC] py-16 sm:py-20 md:py-24 text-white">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Column: Video Box */}
          <div
            className="xl:col-span-8 w-full"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="relative w-full aspect-video overflow-hidden flex items-center justify-center">
              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-2"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content & Button */}
          <div
            className="xl:col-span-4 flex flex-col"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <div className="border-l-4 border-white pl-4 mb-6 rounded-sm">
              <h4 className="text-white section-text font-bold font-inter text-sm mb-1 tracking-wide">
                Clinical Workflow
              </h4>
              <h2 className="section-title font-bold text-white tracking-tight font-dmsans leading-tight">
                Designed for Clinical Practice
              </h2>
            </div>

            <div className="flex flex-col gap-5 section-text text-white/90 leading-relaxed font-inter font-regular mb-8">
              <p className="section-text">
                Designed to support a practical and organized approach to professional colposcopy examinations, the SLV-101 fits naturally into clinical environments. Its compact configuration helps maintain a clear and focused examination setup while allowing healthcare professionals to work comfortably throughout the procedure. Its practical design also helps create a convenient and well-structured space for routine clinical examinations.
              </p>
              <p className="section-text">
                The system supports a smooth workflow from patient preparation and examination through to observation and review. Its practical design helps keep the examination process organized, making the SLV-101 suitable for routine clinical environments where efficient operation and a well-structured examination setup are important.
              </p>
            </div>

            <div>
              <Button href="#product-details" variant="outline" showArrow={false} className="!w-auto !px-8 !border-white !text-white hover:!bg-white hover:!text-[#0287DC] !rounded-md">
                Know More
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
