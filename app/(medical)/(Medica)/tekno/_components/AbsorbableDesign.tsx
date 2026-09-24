import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AbsorbableDesign() {
  return (
    <section className="relative w-full bg-[#1A171B] py-14 sm:py-20 md:py-24 text-[#FFFFFF] overflow-hidden">
      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left Column: Text Content */}
          <div
            className="xl:col-span-4 flex flex-col order-2 xl:order-1"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="mb-6">
              <h2 className="section-title font-medium tracking-tight font-exo2 leading-tight text-[#FFFFFF]">
                Precision for Clear Visualization
              </h2>
            </div>

            <p className="section-text text-[#FFFFFF] font-light leading-relaxed font-outfit mb-8">
              Discover the engineering behind TEKNO-MEDICAL rigid endoscopes through a detailed product video. Explore their optical design, precise construction, and functional details developed to support clear visualization and reliable performance during minimally invasive procedures.
            </p>

            <ul className="flex flex-col gap-6 mb-10">
              <li className="flex items-start gap-4">
                <img src="/medical/tekno/icon5.png" alt="Icon" className="w-auto h-auto mt-1 object-contain flex-shrink-0" />
                <p className="section-text text-[#FFFFFF] font-outfit font-light leading-relaxed">
                  <strong className="text-[#FFFFFF] font-medium">High-Quality Visualization</strong> - Delivers clear, detailed views to support accurate observation during minimally invasive procedures.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <img src="/medical/tekno/icon5.png" alt="Icon" className="w-auto h-auto mt-1 object-contain flex-shrink-0" />
                <p className="section-text text-[#FFFFFF] font-outfit font-light leading-relaxed">
                  <strong className="text-[#FFFFFF] font-medium">Precision Optical System</strong> - Advanced optical engineering provides consistent image quality and reliable visualization throughout the procedure.
                </p>
              </li>
            </ul>

            <div>
              <Button href="#product-details" variant="primary" showArrow={false}>
                View Product
              </Button>
            </div>
          </div>

          {/* Right Column: Video Clip Box */}
          <div
            className="xl:col-span-8 w-full order-1 xl:order-2"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <div className="relative w-full aspect-video overflow-hidden flex items-center justify-center rounded-[16px]">
              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-1"
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

