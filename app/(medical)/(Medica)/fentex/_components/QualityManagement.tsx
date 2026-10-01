"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function QualityManagement() {
  return (
    <section className="w-full relative py-16 sm:py-24 md:py-24 bg-[#F1F5F9]">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-25 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-8 items-center">

          {/* Left Content: Text */}
          <div
            className="xl:col-span-5 flex flex-col"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <h4 className="text-[#006AB3] section-text font-bold font-inter mb-3 tracking-wide">
              Endoscopic Excellence
            </h4>

            <h2 className="section-title font-bold text-[#202020] tracking-tight font-poppins leading-snug mb-6">
              High-Performance <span className="text-[#006AB3]">Nasopharyngoscopy</span> Supporting Clear Visualization Across ENT Examinations
            </h2>

            <p className="section-text text-[#404040] font-inter leading-relaxed mb-4 font-regular">
              The 700715FX Nasopharyngoscope is engineered for precise ENT visualization, combining a 3.4 mm diameter, 300 mm working length, and 0° viewing direction. Its German-made construction incorporates ergonomic handling, a sharp 21,000-pixel image, an 85° field of view, and 160° up/down angulation for controlled examination.
            </p>

            <p className="section-text text-[#404040] font-inter leading-relaxed mb-10 font-regular">
              Sharp Image Quality delivers 21,000-pixel imaging for detailed visualization during demanding nasopharyngeal examinations and procedures, while Controlled Angulation offers 160° up-and-down angulation for flexible positioning during specialized ENT examinations. Ergonomic Design combines German-made quality with an ergonomic construction, supporting comfortable, precise, and controlled clinical handling.
            </p>

            <div>
              <Button href="#product-details" variant="outline" showArrow={false} className="!w-auto !px-6 border !border-[#202020] !text-[#202020] hover:!text-white hover:!bg-[#006AB3]">
                <span className="font-inter font-semibold btn-text">View Product Details</span>
              </Button>
            </div>
          </div>

          {/* Right Content: Video */}
          <div
            className="xl:col-span-7 w-full"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <div className="relative w-full h-full aspect-video overflow-hidden flex items-center justify-center bg-gray-200 rounded-md">
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-2"
                  className="absolute inset-0 w-full h-full object-cover object-center aspect-video"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
