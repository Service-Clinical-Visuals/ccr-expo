"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Scan, MonitorUp } from "lucide-react";
import Button from "./Button";

export default function Explore360() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-24">
      {/* Top Teal Background */}
      <div className="absolute top-0 left-0 w-full h-[35%] xl:h-[35%] bg-[#07A1A8] z-0"></div>

      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-25">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Column: 360 Video Player Box */}
          <div
            className="xl:col-span-7 relative w-full overflow-hidden aspect-video flex items-center justify-center bg-[#F1F5F9]"
            data-aos="fade-right"
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

          {/* Right Column: Information Box */}
          <div
            className="xl:col-span-5 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <div className="mb-8 xl:mb-16">
              <h4 className="text-white section-text font-semibold font-inter mb-4 text-sm tracking-wide flex items-center gap-2">
                <span className="w-[12px] h-[12px] rounded-full bg-white"></span> PAHA Polypropylene Mesh
              </h4>
              <h2 className="section-title font-semibold tracking-tight font-raleway text-white leading-snug">
                Advanced Mesh Designed for Reliable Hernia Repair and Tissue Reinforcement
              </h2>
            </div>

            <div className="bg-transparent mt-2 xl:mt-2">
              <p className="section-text text-[#404040] leading-relaxed font-inter mb-8 font-regular">
                PAHA Polypropylene Mesh is a sterile, non-absorbable, biocompatible monofilament mesh designed for hernia repair and soft-tissue reinforcement. Its flexible, lightweight construction and transparent open-pore design support tissue integration, enhanced surgical visibility, and convenient handling during both open and laparoscopic procedures. The strong and durable polypropylene material provides dependable performance throughout tissue reinforcement procedures, while the mesh can be resized using precision laser-cutting technology to meet specific surgical requirements.
              </p>

              <div>
                <Button href="#product-details" variant="outline" className="!w-auto !border-[#07A1A8] !text-[#07A1A8] hover:!bg-[#07A1A8] hover:!text-white" showArrow={false}>
                  View Product Details
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
