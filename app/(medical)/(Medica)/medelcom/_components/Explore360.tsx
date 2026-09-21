"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Scan, MonitorUp } from "lucide-react";
import Button from "./Button";

export default function Explore360() {
  return (
    <section className="w-full bg-[#0287DC] py-14 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Column: Information Box */}
          <div
            className="xl:col-span-4 flex flex-col justify-center"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <div className="border-l-[5px] border-white pl-4 mb-8 rounded-[3px]">
              <h4 className="text-white section-text font-semibold font-inter section-text mb-1 tracking-wide">
                360° Experience
              </h4>
              <h2 className="section-title font-bold tracking-tight font-dmsans text-white text-3xl sm:text-4xl">
                Video Colposcope SLV-101
              </h2>
            </div>

            <p className="section-text text-white/90 leading-relaxed font-inter mb-10 text-sm sm:text-base">
              The SLV-101 is a compact digital video colposcope with a high-quality camera, powerful LED illumination, and up to 252x magnification for clear, detailed examination and digital documentation.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-4 sm:p-5 flex gap-4 items-center shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black/5">
                <div className="flex-shrink-0">
                  <img src="/medical/medelcom/i1.png" alt="Imaging & Examination" className="w-auto h-auto object-contain" />
                </div>
                <p className="text-slate-700 font-inter section-text leading-snug">
                  <strong className="text-slate-900">Imaging & Examination :</strong> Natural imaging, bright LED illumination, green filtering, and easy magnification control.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-4 sm:p-5 flex gap-4 items-center shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black/5">
                <div className="flex-shrink-0">
                  <img src="/medical/medelcom/i2.png" alt="Connectivity & Data" className="w-auto h-auto object-contain" />
                </div>
                <p className="text-slate-700 font-inter section-text leading-snug">
                  <strong className="text-slate-900">Connectivity & Data :</strong> Video, S-Video, and USB connectivity for easy recording, transfer, storage, and archiving.
                </p>
              </div>
            </div>

            <div>
              <Button href="#product-details" variant="outline" className="!w-auto !border-white !text-white hover:!bg-white hover:!text-[#0287DC]" showArrow={false}>
                Explore
              </Button>
            </div>
          </div>

          {/* Right Column: 360 Video Player Box */}
          <div
            className="xl:col-span-8 relative w-full overflow-hidden aspect-video flex items-center justify-center"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            {/* Dynamic Video Player */}
            <div className="absolute inset-0 w-full h-full z-10">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
