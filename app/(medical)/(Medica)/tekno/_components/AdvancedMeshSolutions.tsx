"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AdvancedMeshSolutions() {
  return (
    <section className="w-full bg-[#1A171B] py-16 sm:py-20 md:py-24 text-[#FFFFFF]">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">

        {/* Top Text Section */}
        <div
          className="max-w-7xl mx-auto text-center mb-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="section-title font-medium text-[#FFFFFF] tracking-tight font-exo2 leading-tight mb-6">
            Precision in Every Procedure
          </h2>
          <p className="section-text text-[#FFFFFF] font-light font-outfit leading-relaxed">
            Explore the functionality and refined construction of TEKNO-MEDICAL rigid endoscopes. Designed with precision optics, durable components, and practical handling, they provide reliable support for demanding minimally invasive procedures.
          </p>
        </div>

        <hr className="border-white/50 mb-12" />

        {/* Bottom Split Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Column: Video Box */}
          <div
            className="xl:col-span-8 w-full flex flex-col"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="relative w-full h-full aspect-video overflow-hidden flex items-center justify-center rounded-[16px] flex-grow">
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
            className="xl:col-span-4 flex flex-col justify-between"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-8 mb-10">

              {/* Feature Card 1 */}
              <div className="border-2 border-white rounded-[12px] p-4 sm:p-4 bg-[#18181b]">
                <h3 className="card-title text-[#FFFFFF] font-outfit font-semibold mb-2">Advanced Optical Clarity</h3>
                <p className="section-text text-[#FFFFFF] font-outfit font-light leading-relaxed">
                  Provides clear, detailed visualization to support accurate observation during minimally invasive procedures.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="border-2 border-white rounded-[12px] p-4 sm:p-4 bg-[#18181b]">
                <h3 className="card-title text-[#FFFFFF] font-outfit font-semibold mb-2">Precise Instrument Handling</h3>
                <p className="section-text text-[#FFFFFF] font-outfit font-light leading-relaxed">
                  Carefully engineered design allows controlled and convenient handling throughout surgical procedures.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="border-2 border-white rounded-[12px] p-4 sm:p-4 bg-[#18181b]">
                <h3 className="card-title text-[#FFFFFF] font-outfit font-semibold mb-2">Durable Construction</h3>
                <p className="section-text text-[#FFFFFF] font-outfit font-light leading-relaxed">
                  High-quality materials and robust construction support reliable performance in demanding clinical environments.
                </p>
              </div>

            </div>

            <div>
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

