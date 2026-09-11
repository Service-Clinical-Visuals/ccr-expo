"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function ProductPortfolio() {
  return (
    <section className="w-full bg-[#2A3338] py-14 sm:py-18 md:py-24 overflow-hidden bg-[url('/medical/kaul/bg.png')] bg-cover bg-center bg-no-repeat relative">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-stretch">
          
          {/* Left Column: Text Content */}
          <div
            className="xl:col-span-6 flex flex-col justify-center h-full"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            {/* Tag */}
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-[1px] bg-[#FCC100]"></div>
              <span className="font-poppins text-[#FCC100] section-subtitle font-semibold tracking-wide uppercase">
                Medical Portfolio
              </span>
              <div className="w-12 h-[1px] bg-[#FCC100]"></div>
            </div>

            {/* Section Heading */}
            <h2 className="section-title font-semibold text-white font-poppins tracking-tight leading-snug mb-6">
              Engineered Systems Supporting Every Stage of Orthopedic Treatment
            </h2>

            {/* Description */}
            <p className="section-text text-gray-300 font-inter leading-relaxed mb-6">
              Our product ecosystem is developed to align with real surgical workflows, offering integrated solutions across diagnosis, fixation, and recovery phases. From structurally optimized implants to surgeon-friendly instrumentation, each product is designed to simplify procedures, reduce operative complexity, and ensure dependable clinical performance. Built with advanced materials and precise engineering, our portfolio adapts to diverse surgical environments and evolving medical needs.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-8 sm:mb-10">
              <li className="flex items-start gap-3">
                <span className="text-[#FCC100] font-bold mt-0.5">-</span>
                <span className="section-text text-gray-300 font-inter leading-relaxed">
                  Modular implant systems enabling flexible configurations for varied surgical case requirements
                </span>
              </li>
            </ul>

            {/* CTA Button */}
            <div>
              <Button href="#portfolio" variant="outline-primary">
                Know More
              </Button>
            </div>
          </div>

          {/* Right Column: Video Box */}
          <div
            className="xl:col-span-6 h-full"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <div className="relative w-full h-full min-h-[300px] rounded-md overflow-hidden bg-white/5 flex items-center justify-center border border-white/10 shadow-2xl p-2 sm:p-3">
              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-2"
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
