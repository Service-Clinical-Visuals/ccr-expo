import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import { Sparkles } from "lucide-react";

export default function AdvancedMeshSolutions() {
  return (
    <section className="w-full bg-[#F9F9F9] py-16 sm:py-24 text-[#111111]">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Column: Video Box */}
          <div
            className="xl:col-span-8 w-full h-full flex flex-col"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="relative w-full h-full aspect-video flex items-center justify-center bg-gray-200">
              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-2"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Features and Button */}
          <div
            className="xl:col-span-4 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <h2 className="section-title font-semibold text-[#111111] tracking-tight font-exo2 leading-tight mb-6">
              Intelligent Ventilation for Critical Care
            </h2>
            <p className="section-text text-[#111111] font-regular font-dm-sans leading-relaxed mb-8">
              Designed for demanding intensive-care environments, the ARIA 150 C combines advanced ventilation modes, intelligent monitoring, and flexible respiratory support in one integrated platform. Its intuitive interface helps clinicians manage ventilation efficiently across a broad range of patient needs.
            </p>

            <div className="border-2 border-[#1B489F] rounded-[12px] p-6 sm:p-8 bg-transparent mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#1B489F] fill-current" strokeWidth={1.5} />
                <h3 className="card-title text-[#111111] font-dm-sans font-semibold text-[16px] sm:text-[18px]">
                  Advanced ventilation modes
                </h3>
              </div>
              <p className="section-text text-[#111111] font-dm-sans font-regular leading-relaxed">
                Deliver precise, adaptable respiratory support with advanced ventilation modes designed to meet diverse patient needs. Optimized for controlled breathing, assisted ventilation, and changing clinical conditions, these modes provide flexibility and reliable performance throughout treatment.
              </p>
            </div>

            <div>
              <Button href="#product" variant="primary" showArrow={false}>
                Explore Product
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
