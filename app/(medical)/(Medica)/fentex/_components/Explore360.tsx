"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Scan, MonitorUp } from "lucide-react";
import Button from "./Button";

export default function Explore360() {
  return (
    <section className="w-full bg-[#F1F5F9] py-14 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-25">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Column: Information Box */}
          <div
            className="xl:col-span-5 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <div className="mb-6">
              <h4 className="text-[#006AB3] section-text font-bold font-inter mb-3 text-sm tracking-wide">
                Precision Endoscopy
              </h4>
              <h2 className="section-title font-bold tracking-tight font-poppins text-slate-900 leading-snug">
                Clear Visualization for <span className="text-[#006AB3]">Precise Examination</span> and<br className="hidden xl:block" /> Reliable ENT Clinical Procedures
              </h2>
            </div>

            <p className="section-text text-slate-600 leading-relaxed font-inter mb-4 text-sm sm:text-base">
              The 700715FX Nasopharyngoscope is a rigid endoscopic solution designed for ENT examination and visualization. Featuring a 0° viewing direction, 300 mm working length, and 3.4 mm diameter, it provides a specialized configuration for detailed examination within the nasopharyngeal region.
            </p>

            <p className="section-text text-slate-600 leading-relaxed font-inter mb-10 text-sm sm:text-base">
              The 0° Viewing Direction provides a straightforward optical perspective for controlled and detailed visualization during ENT examinations. The 300 mm Working Length offers suitable reach for accessing and examining relevant anatomical areas during clinical procedures, while the 3.4 mm Diameter combines a compact instrument profile with specialized endoscopic visualization for professional ENT applications.
            </p>

            <div>
              <Button href="#product-details" variant="outline" className="!w-auto !border-slate-900 !text-slate-900 hover:!bg-slate-100" showArrow={false}>
                View Product Details
              </Button>
            </div>
          </div>

          {/* Right Column: 360 Video Player Box */}
          <div
            className="xl:col-span-7 relative w-full overflow-hidden aspect-video flex items-center justify-center"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            {/* Dynamic Video Player */}
            <div className="absolute inset-0 w-full h-full z-10">
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
