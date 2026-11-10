"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section id="home" className="w-full">
      <div
        id="banner-section"
        className="relative w-full h-[100svh] min-h-[460px] overflow-hidden bg-[#d9dcde]"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* Video background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover" />
        </div>


        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-end custom-container pb-16 sm:pb-20 xl:pb-[12vh]">
          <div className="max-w-full sm:max-w-[85%] xl:max-w-[60%]">
            <p
              className="eyebrow font-mulish font-medium text-white mb-3 xl:mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Advanced Cardiac Monitoring Solutions
            </p>
            <h1
              className="banner-title font-mulish font-bold text-white mb-6 xl:mb-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Smarter Cardiac Monitoring, Better Patient Care.
            </h1>
            <div data-aos="fade-up" data-aos-delay="300">
              <Button href="#about">Explore More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
