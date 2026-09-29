import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowUpRight } from "lucide-react";

export default function AbsorbableDesign() {
  return (
    <section className="relative w-full bg-[#F9F9F9] py-16 sm:py-24 overflow-hidden">
      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="flex flex-col items-center justify-center text-center max-w-[85%] mx-auto mb-10 sm:mb-10" data-aos="fade-up">
          <h2 className="section-title font-semibold tracking-tight font-exo2 leading-tight text-[#111111] mb-8">
            Advanced Ventilation, Clearly Controlled
          </h2>
          <p className="section-text text-[#111111] font-regular leading-relaxed font-dm-sans text-[14px] sm:text-[16px]">
            The ARIA 150 C combines advanced ventilation technology with an intuitive 15-inch touchscreen interface, providing healthcare professionals with precise control and comprehensive monitoring for critical-care applications.
          </p>
        </div>

        <div className="group relative w-full max-w-[85%] mx-auto aspect-video overflow-hidden flex items-center justify-center bg-transparent cursor-pointer" data-aos="fade-up" data-aos-delay="200">
          {/* Dynamic Video Player */}
          <div className="absolute inset-0 w-full h-full z-10">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Custom Overlay Button */}
          <div className="absolute z-20 w-16 h-16 sm:w-[84px] sm:h-[84px] bg-[#1B489F] rounded-full flex items-center justify-center cursor-pointer opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 hover:bg-[#153a82] hover:!scale-105 transition-all duration-300">
            <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
