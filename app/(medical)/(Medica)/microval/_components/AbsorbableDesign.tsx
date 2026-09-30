import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AbsorbableDesign() {
  return (
    <section className="relative w-full bg-[#EFEEEF] py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Column: Video Box */}
          <div
            className="xl:col-span-7 2xl:col-span-8 w-full"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="relative w-full aspect-video overflow-hidden flex items-center justify-center rounded-[8px] bg-white">
              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-1"
                  className="absolute inset-0 w-full h-full object-cover object-center aspect-video"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div
            className="xl:col-span-5 2xl:col-span-4 flex flex-col"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[30px] h-[4px] bg-[#DF0001] rounded-full shadow-[0px_5px_15px_0px_#DF00018C]"></div>
              <span className="font-dmsans font-bold text-[#DF0001] section-text tracking-widest uppercase">
                PRODUCT DESIGN
              </span>
            </div>

            <div className="mb-6">
              <h2 className="section-title font-semibold tracking-tight font-dmsans leading-tight text-[#111111]">
                Designed for Seamless Surgical Handling
              </h2>
            </div>

            <p className="section-text text-[#4B5563] font-regular leading-relaxed font-inter mb-8">
              The 3D ANATOMIC implant features a flexible, shape-memory design that allows easy trocar insertion, followed by unwinding and adaptation to the abdominal wall. A marking option also helps with implant orientation during placement.
            </p>

            <ul className="flex flex-col gap-5 mb-10">
              <li className="flex items-start gap-3">
                <div className="w-[12px] h-[12px] rounded-full bg-[#DF0001] flex-shrink-0 mt-2"></div>
                <p className="section-text text-[#4B5563] font-inter font-regular leading-relaxed">
                  <strong className="text-[#111111] font-semibold">Adaptive Design :</strong> Unwinds easily after trocar insertion and adapts to the abdominal wall.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-[12px] h-[12px] rounded-full bg-[#DF0001] flex-shrink-0 mt-2"></div>
                <p className="section-text text-[#4B5563] font-inter font-regular leading-relaxed">
                  <strong className="text-[#111111] font-semibold">Trocar Compatibility :</strong> Can be rolled for insertion through a trocar, supporting laparoscopic handling.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-[12px] h-[12px] rounded-full bg-[#DF0001] flex-shrink-0 mt-2"></div>
                <p className="section-text text-[#4B5563] font-inter font-regular leading-relaxed">
                  <strong className="text-[#111111] font-semibold">Implant Orientation :</strong> A black biocompatible silicone ink mark can be applied to facilitate implantation.
                </p>
              </li>
            </ul>

            <div>
              <Button href="#know-more" showArrow={true}>
                Know More
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
