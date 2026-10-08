"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function AbsorbableDesign() {
  return (
    <section className="relative w-full bg-[#F8F8F8] py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-25">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Text Content */}
          <div
            className="lg:col-span-5 flex flex-col"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h4 className="text-[#07A1A8] section-text font-semibold font-inter mb-3 tracking-wide flex items-center gap-2">
              <span className="w-[8px] h-[8px] rounded-full bg-[#07A1A8]"></span> Hernia Repair Solution
            </h4>

            <h2 className="section-title font-semibold text-[#202020] tracking-tight font-raleway leading-snug mb-6">
              Designed for Controlled Handling and Reliable Tissue Integration
            </h2>

            <p className="section-text text-[#404040] leading-relaxed font-inter font-regular mb-8">
              PAHA Polypropylene Mesh combines a thin, flexible structure with durable monofilament construction to support dependable hernia repair and soft-tissue reinforcement. Its transparent pores improve visualization of underlying tissues, while the lightweight design helps minimize unnecessary material and potential scar tissue buildup. The mesh can also be precisely resized through laser cutting, supporting versatile surgical applications.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-start gap-3">
                <span className="text-[#07A1A8] font-bold mt-0.5">→</span>
                <span className="font-inter font-regular text-[#404040] section-text leading-relaxed">
                  Thin mesh construction helps reduce excess material and minimize postoperative tissue discomfort.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#07A1A8] font-bold mt-0.5">→</span>
                <span className="font-inter font-regular text-[#404040] section-text leading-relaxed">
                  Flexible monofilament design supports convenient handling during laparoscopic surgical applications.
                </span>
              </div>
            </div>

            <div>
              <Button href="#discover" variant="outline" showArrow={false} className="!w-auto !px-8 border !border-[#07A1A8] !text-[#07A1A8] hover:!bg-[#07A1A8] hover:!text-white rounded-[8px]">
                <span className="font-inter font-semibold btn-text">Discover PAHA Mesh</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Video */}
          <div
            className="lg:col-span-7 w-full h-full"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <div className="relative w-full h-full aspect-video overflow-hidden flex items-center justify-center bg-gray-200 rounded-[12px]">
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-1"
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
