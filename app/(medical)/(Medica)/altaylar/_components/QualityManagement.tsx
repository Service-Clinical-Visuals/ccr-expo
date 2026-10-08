"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function QualityManagement() {
  return (
    <section className="w-full relative py-16 sm:py-20 md:py-24 bg-[#FAFAFA]">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-25 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">

          {/* Left Content: Video */}
          <div
            className="lg:col-span-7 w-full h-full"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center rounded-[5px]">
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-2"
                  className="absolute inset-0 w-full h-full object-cover object-center aspect-video"
                />
              </div>
            </div>
          </div>

          {/* Right Content: Text */}
          <div
            className="lg:col-span-5 flex flex-col"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <h4 className="text-[#07A1A8] section-text font-semibold font-inter mb-3 tracking-wide flex items-center gap-2">
              <span className="w-[12px] h-[12px] rounded-full bg-[#07A1A8]"></span> Surgical Flexibility and Lasting Tissue Support
            </h4>

            <h2 className="section-title font-semibold text-[#202020] tracking-tight font-raleway leading-snug mb-6">
              Advanced Mesh Design Supporting Confident Surgical Tissue Reinforcement
            </h2>

            <p className="section-text text-[#404040] font-inter leading-relaxed mb-8 font-regular">
              PAHA Polypropylene Mesh is developed with a soft, flexible monofilament structure that combines strength with practical surgical handling. Its transparent open-pore architecture facilitates visualization and tissue incorporation, while the thin construction helps reduce unnecessary mesh material. The mesh can also be accurately resized through laser cutting, with sealed edges helping maintain structural integrity during customization.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-start gap-3">
                <span className="text-[#07A1A8] font-bold mt-0.5">→</span>
                <span className="font-inter font-regular text-[#404040] section-text leading-relaxed">
                  Soft flexible construction supports smooth handling across demanding surgical procedures.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#07A1A8] font-bold mt-0.5">→</span>
                <span className="font-inter font-regular text-[#404040] section-text leading-relaxed">
                  Transparent pores enhance visualization while encouraging rapid tissue incorporation.
                </span>
              </div>
            </div>

            <div>
              <Button href="#explore-mesh" variant="outline" showArrow={false} className="!w-auto !px-8 border !border-[#07A1A8] !text-[#07A1A8] hover:!bg-[#07A1A8] hover:!text-white rounded-[8px]">
                <span className="font-raleway font-semibold btn-text">Explore Mesh Technology</span>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
