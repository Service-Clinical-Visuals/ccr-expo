"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Product360() {
  return (
    <section
      id="stent-360"
      className="w-full relative py-14 sm:py-20 md:py-24 bg-[#468A28] text-white overflow-hidden"
      style={{
        backgroundImage: "url('/medical/geotek/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Subtle overlay to ensure the green brand consistency */}
      <div className="absolute inset-0 bg-[#468A28]/85 pointer-events-none" />

      <div className="custom-container mx-auto relative z-10">
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8">
          {/* Left: Heading with white accent pill & Description */}
          <div
            className="flex-1 max-w-5xl xl:max-w-[1050px]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-4 flex-wrap">
              <h2 className="font-baloo font-semibold text-[26px] sm:text-[30px] md:text-[34px] leading-[150%] text-white capitalize">
                Explore The Double J Ureteral Stent Set In 360°
              </h2>
              <span className="w-[33px] h-[5px] bg-white rounded-[43px] inline-block shrink-0" />
            </div>

            <p className="font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] leading-[150%] text-white max-w-[963px] w-full">
              Take a closer look at the Double J Ureteral Stent Set through an interactive 360°
              experience. Explore its design, components, and key features, including the DJ stent,
              pusher, guide wire, and clamps, designed for reliable ureteral drainage and clinical
              use.
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
              variant="white"
              className="h-[43px] px-6 py-2.5 text-[17px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
            />
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="w-full h-px bg-white/25 my-8 sm:my-10 md:my-12"
          data-aos="fade-in"
          data-aos-duration="800"
        />

        {/* 360° Video Player Container */}
        <div
          className="
            relative w-full max-w-[1394px] mx-auto
            aspect-video min-h-[300px] sm:min-h-[420px] md:min-h-[540px] lg:min-h-[640px] xl:min-h-[690px]
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
            className="absolute inset-0 w-full h-full object-cover aspect-video"
          />
        </div>
      </div>
    </section>
  );
}
