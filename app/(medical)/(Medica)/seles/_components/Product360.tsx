"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Product360() {
  return (
    <section
      id="stent-360"
      className="w-full relative py-14 sm:py-20 md:py-24 min-[2000px]:py-32 min-[3000px]:py-40 bg-[#0A0A0A] text-[#D1D1D1] overflow-hidden"
    >

      <div className="custom-container mx-auto min-[2000px]:max-w-[1700px] min-[2500px]:max-w-[1900px] min-[3000px]:max-w-[2200px] min-[3840px]:max-w-[2600px] transition-all relative z-10">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8">
          {/* Left: Heading with white accent pill & Description */}
          <div
            className="flex-1 w-full xl:max-w-[70%]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="mb-3 sm:mb-4 min-[2000px]:mb-8 min-[3000px]:mb-10">
              <h2 className="mb-4 font-orbitron font-semibold text-[28px] min-[2000px]:text-[40px] min-[3000px]:text-[50px] text-white">
                Explore The Proximal Femur Nail In 360°
              </h2>
            </div>

            <p className="w-full font-baloo text-[18px] sm:text-[20px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] leading-[160%] text-[#D1D1D1]">
              Take a closer look at the Proximal Femur Nail – Long through an interactive 360° experience. Explore its design, titanium construction, and key features engineered for precise internal fixation, stability, and reliable fracture management.
            </p>
          </div>

          {/* Right: CTA Button */}
          <div
            className="flex-shrink-0 pt-1 lg:pt-3"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <Button
              text="View in 360°"
              bgColor="#DBA018"
              textColor="#ffffff"
              className="h-[43px] min-[2000px]:h-[60px] min-[3000px]:h-[70px] px-6 min-[2000px]:px-8 min-[3000px]:px-10 py-2.5 min-[2000px]:py-4 min-[3000px]:py-5 text-[17px] min-[2000px]:!text-[22px] min-[3000px]:!text-[28px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
            />
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="w-full h-px bg-white/25 my-8 sm:my-10 md:my-12 min-[2000px]:my-16 min-[3000px]:my-20"
          data-aos="fade-in"
          data-aos-duration="800"
        />

        {/* 360° Video Player Container */}
        <div
          className="
            relative w-full max-w-[1394px] min-[2000px]:max-w-[80%] min-[3000px]:max-w-[70%] mx-auto
            aspect-video
            rounded-[28px] sm:rounded-[40px] md:rounded-[50px]
            overflow-hidden shadow-[0px_6px_24px_rgba(0,0,0,0.25)]
            bg-white/10
          "
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}