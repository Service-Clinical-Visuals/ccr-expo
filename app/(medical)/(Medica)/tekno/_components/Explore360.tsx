"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Explore360() {
  return (
    <section className="w-full bg-[#1A171B] py-14 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-8 items-stretch">

          {/* Left Column: 360 Video Player Box */}
          <div
            className="xl:col-span-7 relative w-full overflow-hidden flex items-center justify-center bg-white rounded-xl shadow-lg aspect-video"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            {/* Dynamic Video Player */}
            <div className="absolute inset-0 w-full h-full z-10">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Information Box */}
          <div
            className="xl:col-span-5 flex flex-col justify-center bg-[#18181b] border-2 border-[#D22840] rounded-xl p-6 sm:p-10 shadow-2xl"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <div className="text-center mb-6">
              <h2 className="section-title font-medium tracking-tight font-exo2 text-[#FFFFFF] text-2xl sm:text-3xl">
                Explore the Rigid Endoscope
              </h2>
            </div>

            <p className="text-[#FFFFFF] leading-relaxed font-outfit font-light section-text text-center mb-8">
              Experience the detailed design and precision engineering of TEKNO-MEDICAL rigid endoscopes through an interactive 360° view. Explore the instrument from every angle and take a closer look at its refined construction, optical design, and carefully engineered components. Developed to support demanding minimally invasive procedures, the rigid endoscope combines precision, durability, and reliable visualization to meet the requirements of modern surgical applications.
            </p>

            <hr className="border-[#FFFFFF33] mb-8" />

            <div className="grid grid-cols-4 gap-2 mb-10">
              <div className="flex flex-col items-center text-center gap-3">
                <img src="/medical/tekno/icon1.png" alt="High-Quality Optics" className="w-auto h-auto object-contain" />
                <span className="text-[#FFFFFF] section-text font-outfit">High-Quality<br />Optics</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <img src="/medical/tekno/icon2.png" alt="Precision Engineering" className="w-auto h-auto object-contain" />
                <span className="text-[#FFFFFF] section-text font-outfit">Precision<br />Engineering</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <img src="/medical/tekno/icon3.png" alt="Robust Construction" className="w-auto h-auto object-contain" />
                <span className="text-[#FFFFFF] section-text font-outfit">Robust<br />Construction</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <img src="/medical/tekno/icon4.png" alt="Precision Engineering" className="w-auto h-auto object-contain" />
                <span className="text-[#FFFFFF] section-text font-outfit">Precision<br />Engineering</span>
              </div>
            </div>

            <div className="flex justify-center">
              <Button href="#product-details" variant="primary" showArrow={false}>
                View Product
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

