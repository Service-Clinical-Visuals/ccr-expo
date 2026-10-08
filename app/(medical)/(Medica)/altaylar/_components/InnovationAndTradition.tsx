"use client";

import React from "react";
import Button from "./Button";

export default function InnovationAndTradition() {
  return (
    <section
      id="about"
      className="w-full bg-white flex flex-col py-16 sm:py-20 md:py-24"
    >
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-25">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">
          {/* Left Column: Overlapping Images */}
          <div
            className="xl:col-span-7 w-full relative flex items-center justify-center overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <img
              src="/medical/altaylar/about.webp"
              alt="About ALTAYLAR"
              className="w-full h-auto xl:h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/medical/fentex/about.webp";
              }}
            />
          </div>

          {/* Right Column: Text Content */}
          <div
            className="xl:col-span-5 flex flex-col gap-6"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div>
              <h4 className="text-[#07A1A8] section-text font-bold font-inter mb-3 text-sm tracking-wide flex items-center gap-2">
                <span className="w-[12px] h-[12px] rounded-full bg-[#07A1A8]"></span> About ALTAYLAR
              </h4>
              <h2 className="section-title font-semibold tracking-tight font-raleway text-[#202020] leading-snug">
                Precision Medical Technology & Advanced Surgical Solutions
              </h2>
            </div>

            <div className="flex flex-col gap-5 text-[#404040]">
              <p className="section-text leading-relaxed font-inter font-regular">
                Founded in 2007, Altaylar Medical has over 20 years of experience in the medical device and healthcare industry. Specializing in General Surgery, Urology, and Neurosurgery, the company has expanded its product portfolio to serve diverse medical needs.
              </p>

              <p className="section-text leading-relaxed font-inter font-regular">
                Today, Altaylar Medical serves the Turkish market and exports to nearly 60 countries worldwide. Through international partnerships and in-house manufacturing, the company is committed to delivering high-quality, reliable, and innovative medical solutions.
              </p>

              <p className="section-text leading-relaxed font-inter font-regular">
                Recognized among Turkey's Top 100 Exporting Companies in the Medicine and Pharmaceuticals category, Altaylar Medical continues to strengthen its global presence and brand recognition.
              </p>
            </div>

            <div className="pt-2">
              <Button href="#about" variant="outline" className="!w-auto !border-[#07A1A8] !text-[#07A1A8] hover:!bg-[#07A1A8] hover:!text-white" showArrow={false}>
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>

      </div>

      {/* Stats Section */}
      <div className="w-full bg-[#F8F8F8] py-16 sm:py-16 mt-15">
        <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-25">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 text-center">
            {/* Stat 1 */}
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <h3 className="font-raleway text-4xl xl:text-5xl font-[800] text-[#006769] mb-2">20+</h3>
              <p className="font-raleway text-xs font-semibold text-[#202020] tracking-wider uppercase mb-1">YEARS OF EXPERTISE</p>
              <p className="font-inter font-regular text-sm text-[#3D4949]">Dedicated manufacturing since 2007</p>
            </div>

            {/* Stat 2 */}
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <h3 className="font-raleway text-4xl xl:text-5xl font-[800] text-[#006769] mb-2">~60</h3>
              <p className="font-raleway text-xs font-semibold text-[#202020] tracking-wider uppercase mb-1">EXPORT DESTINATIONS</p>
              <p className="font-inter font-regular text-sm text-[#3D4949]">Across Europe, Asia & Americas</p>
            </div>

            {/* Stat 3 */}
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              <h3 className="font-raleway text-4xl xl:text-5xl font-[800] text-[#006769] mb-2">Top 100</h3>
              <p className="font-raleway text-xs font-semibold text-[#202020] tracking-wider uppercase mb-1">TURKISH EXPORTER</p>
              <p className="font-inter font-regular text-sm text-[#3D4949]">Medicine & Pharmacology Rank</p>
            </div>

            {/* Stat 4 */}
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <h3 className="font-raleway text-4xl xl:text-5xl font-[800] text-[#006769] mb-2">100%</h3>
              <p className="font-raleway text-xs font-semibold text-[#202020] tracking-wider uppercase mb-1">CLEANROOM STERILE</p>
              <p className="font-inter font-regular text-sm text-[#3D4949]">ISO 13485 & CE Compliant Systems</p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
