"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";


export default function AdvancedMeshSolutions() {
  return (
    <section className="w-full bg-[#0C6A81] py-16 sm:py-20 md:py-24 text-[#FFFFFF] overflow-hidden">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">

          {/* Left Column: Text Content and Cards */}
          <div
            className="lg:col-span-5 xl:col-span-4 flex flex-col"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[30px] h-[4px] bg-white rounded-full shadow-[0px_5px_15px_0px_#D9D9D9]"></div>
              <span className="font-dmsans font-bold text-white section-text tracking-widest uppercase">
                STERILITY & SINGLE USE
              </span>
            </div>

            <h2 className="section-title font-semibold text-[#FFFFFF] tracking-tight font-dmsans leading-tight mb-5">
              Sterile Supply for Single Use
            </h2>
            <p className="section-text text-[#FFFFFF] font-regular font-inter leading-relaxed mb-10 opacity-95">
              The 3D® ANATOMIC implant is delivered sterile and is intended for single use. If the device or its sterile packaging is damaged before the procedure, it must not be fitted.
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {/* Feature Card 1 */}
              <div className="flex bg-white rounded-[8px] overflow-hidden w-full">
                <div className="w-[130px] bg-[#65B5A0]  rounded-r-[8px] flex items-center justify-center flex-shrink-0">
                  <img src="/medical/microval/icon4.png" alt="Sterilization" className="w-auto h-auto object-contain" />
                </div>
                <div className="p-4 sm:p-5 flex flex-col justify-center">
                  <h3 className="font-dmsans font-bold text-[#111111] card-title mb-1">Ethylene Oxide Sterilization</h3>
                  <p className="font-inter font-regular text-[#4B5563] section-text leading-relaxed">
                    The 3D® ANATOMIC implant is supplied sterile and sterilized with ethylene oxide.
                  </p>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="flex bg-white rounded-[8px] overflow-hidden w-full">
                <div className="w-[130px] bg-[#65B5A0] flex items-center justify-center flex-shrink-0">
                  <img src="/medical/microval/icon5.png" alt="Single Use" className="w-auto h-auto object-contain" />
                </div>
                <div className="p-4 sm:p-5 flex flex-col justify-center">
                  <h3 className="font-dmsans font-bold text-[#111111] card-title mb-1">Single-Use Only</h3>
                  <p className="font-inter font-regular text-[#4B5563] section-text leading-relaxed">
                    The implant is intended for single use and must not be reused or re-sterilized.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Button href="#learn-more" showArrow={true}>
                learn More
              </Button>
            </div>
          </div>

          {/* Right Column: Video Box */}
          <div
            className="lg:col-span-7 xl:col-span-8 w-full flex flex-col"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <div className="relative w-full aspect-video overflow-hidden flex items-center justify-center rounded-[8px] bg-white">
              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-2"
                  className="absolute inset-0 w-full h-full object-cover object-center aspect-video"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
