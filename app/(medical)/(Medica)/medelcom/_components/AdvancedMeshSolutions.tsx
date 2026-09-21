"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AdvancedMeshSolutions() {
  return (
    <section className="w-full bg-[#0287DC] py-16 sm:py-20 md:py-24 text-white">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Column: Video Box */}
          <div
            className="xl:col-span-8 w-full"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="relative w-full aspect-video overflow-hidden flex items-center justify-center">
              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-2"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content & Button */}
          <div
            className="xl:col-span-4 flex flex-col"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <div className="border-l-4 border-white pl-4 mb-6 rounded-sm">
              <h4 className="text-white section-text font-bold font-inter text-sm mb-1 tracking-wide">
                Digital Ultrasound
              </h4>
              <h2 className="section-title font-bold text-white tracking-tight font-dmsans leading-tight">
                Compact Color Doppler Imaging
              </h2>
            </div>

            <div className="flex flex-col gap-5 section-text text-white/90 leading-relaxed font-inter font-regular mb-8">
              <p className="section-text">
                The SLE 901 CD is a compact and versatile Digital Color Doppler ultrasound system designed to support a wide range of clinical applications, including abdominal, gynecological, obstetric, cardiac, vascular, orthopedic, urological, and emergency examinations. Its flexible design and reliable imaging capabilities make it suitable for different medical specialties and clinical environments.
              </p>
              <p className="section-text">
                Advanced imaging technologies such as speckle noise reduction, spatial compounding, image enhancement, and tissue harmonics deliver clear and detailed images. With a 12-inch rotating medical LED monitor, multiple connectivity options, DICOM 3.0 support, and optional battery operation, the SLE 901 CD offers flexible and convenient clinical use.
              </p>
            </div>

            <div>
              <Button href="#product-details" variant="outline" showArrow={false} className="!w-auto !px-8 !border-white !text-white hover:!bg-white hover:!text-[#0287DC] !rounded-md">
                Know More
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
