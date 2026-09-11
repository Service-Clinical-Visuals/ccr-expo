"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Experience360() {
  return (
    <section className="w-full bg-[#2A3338] py-12 sm:py-16 md:py-20 lg:py-20 overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">

          {/* Left Column: Information and Product Features */}
          <div
            className="xl:col-span-5 flex flex-col justify-center order-1 xl:order-1"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            {/* Tag / Subtitle */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-[1px] bg-[#FCC100]"></div>
              <span className="font-poppins text-[#FCC100] section-subtitle font-semibold tracking-wide">
                Nailing System
              </span>
              <div className="w-12 h-[1px] bg-[#FCC100]"></div>
            </div>

            {/* Section Heading */}
            <h2 className="section-title font-semibold text-white font-poppins tracking-tight leading-snug mb-6">
              KN-1 Advance Nailing System
            </h2>

            {/* Description Paragraphs */}
            <p className="section-text font-regular text-[#FFFFFF] font-inter leading-relaxed mb-4">
              The KAULMED KN-1 Advanced Nailing System is a comprehensive intramedullary solution designed for the effective treatment of long bone fractures. Engineered with precision and stability in mind, it ensures optimal load distribution and reliable fixation across femur, tibia, and humerus procedures. This system supports both trauma and reconstructive orthopedic surgeries, enabling surgeons to achieve consistent, high-performance clinical outcomes with enhanced efficiency and control.
            </p>
            <p className="section-text text-[#FFFFFF] font-regular font-inter leading-relaxed mb-8 sm:mb-10">
              KAULMED is a trusted leader in medical devices, specializing in precision-engineered surgical tools. Our KN-1 Advance Nailing System is manufactured with the highest standards of quality, ensuring reliability, durability, and surgeon confidence in the operating room.
            </p>

            {/* CTA Button */}
            <div>
              <Button href="#products" variant="outline-primary">
                Know More
              </Button>
            </div>
          </div>

          {/* Right Column: 360 Degree Video Player Box */}
          <div
            className="xl:col-span-7 order-2 xl:order-2"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="relative w-full aspect-video rounded-md overflow-hidden bg-white/5 flex items-center justify-center border border-white/10">
              <div className="absolute aspect-video inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="360"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
