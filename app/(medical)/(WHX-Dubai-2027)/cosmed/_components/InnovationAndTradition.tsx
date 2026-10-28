"use client";

import React from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

export default function InnovationAndTradition() {
  return (
    <section
      id="about"
      className="w-full bg-white py-16 sm:py-20 md:py-20"
    >
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-20 items-center">
          {/* Left Column: 3 Overlapping / Grid Images */}
          <div
            className="lg:col-span-6 w-full"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-5 items-stretch">
              {/* Left Column: Tall Runner Image */}
              <div className="relative w-full h-full min-h-[340px] sm:min-h-[440px] lg:min-h-[500px] min-[2500px]:min-h-[640px] min-[3800px]:min-h-[820px] rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="/medical/cosmed/about1.webp"
                  alt="COSMED Diagnostic Assessment"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Column: Stacked Booth Images */}
              <div className="flex flex-col gap-4 sm:gap-5 h-full">
                <div className="relative w-full flex-1 min-h-[160px] sm:min-h-[210px] lg:min-h-[240px] min-[2500px]:min-h-[310px] min-[3800px]:min-h-[400px] rounded-2xl overflow-hidden shadow-md group">
                  <img
                    src="/medical/cosmed/about2.webp"
                    alt="COSMED Healthcare Team"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative w-full flex-1 min-h-[160px] sm:min-h-[210px] lg:min-h-[240px] min-[2500px]:min-h-[310px] min-[3800px]:min-h-[400px] rounded-2xl overflow-hidden shadow-md group">
                  <img
                    src="/medical/cosmed/about3.webp"
                    alt="COSMED Diagnostic Consultation"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div
            className="lg:col-span-6 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            {/* Subtitle with vertical blue accent bar */}
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-1 h-5 bg-[#0066B2] rounded-full inline-block"></span>
              <span className="text-[#0066B2] section-text font-semibold font-plus-jakarta tracking-wide">
                About COSMED
              </span>
            </div>

            {/* Main Title */}
            <h2 className="section-title font-bold tracking-tight font-plus-jakarta text-[#1E293B] leading-snug mb-4 sm:mb-5">
              Advancing Healthcare Through Innovative Diagnostic Technologies & Precision Measurement Solutions
            </h2>

            {/* Description Paragraph */}
            <p className="section-text leading-relaxed font-inter font-regular text-[#475569] mb-6 sm:mb-7">
              COSMED develops advanced diagnostic systems designed to support healthcare professionals, researchers, and sports scientists. With a focus on respiratory function, metabolic assessment, and body composition, the company delivers reliable technologies that enhance clinical evaluation, scientific research, and performance analysis.
            </p>

            {/* Feature Bullets with Arrow Icons */}
            <div className="flex flex-col gap-3.5 sm:gap-4 mb-8 sm:mb-9">
              <div className="flex items-start gap-3">
                <ArrowUpRight className="w-5 h-5 text-[#0066B2] flex-shrink-0 mt-0.5" strokeWidth={2.4} />
                <p className="section-text text-[#475569] font-inter leading-relaxed">
                  Comprehensive diagnostic solutions for respiratory health, cardiopulmonary testing, and metabolic function assessment.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ArrowUpRight className="w-5 h-5 text-[#0066B2] flex-shrink-0 mt-0.5" strokeWidth={2.4} />
                <p className="section-text text-[#475569] font-inter leading-relaxed">
                  Advanced measurement technologies designed to support accurate clinical evaluations and scientific research.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ArrowUpRight className="w-5 h-5 text-[#0066B2] flex-shrink-0 mt-0.5" strokeWidth={2.4} />
                <p className="section-text text-[#475569] font-inter leading-relaxed">
                  Reliable systems combining innovation, usability, and performance for diverse healthcare and research environments.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button href="#about" variant="dark-blue">
                Discover Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
