"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Hygienic = () => {
  return (
    <section className="w-full bg-[#192B6C] py-16 lg:py-20">
      <div className="custom-container flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-white/50 pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-3 lg:max-w-[75%]">
            <Typography variant="h2" color="white" className="font-semibold text-2xl lg:text-3xl">
              Hygienic & Practical Design
            </Typography>
            <Typography variant="p" color="white" className="text-[13px] lg:text-sm leading-relaxed opacity-90 font-light">
              Primacath® combines practical handling with hygienic features to support catheterization. The ring application helps minimize direct handling, while ethylene oxide sterilization provides a sterile product ready for use
            </Typography>
          </div>
          <div className="shrink-0" data-aos="fade-left" data-aos-delay="100">
            <a href="#products" className="inline-flex items-center justify-center bg-white text-[#192B6C] font-semibold text-md px-6 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-md">
              View Product Details
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Video Container */}
        <div className="w-[85%] mx-auto relative aspect-video flex items-center justify-center overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hygienic;
