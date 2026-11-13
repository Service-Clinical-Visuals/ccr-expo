"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section id="home" className="w-full">
      <div
        id="banner-section"
        className="relative w-full h-[100svh] min-h-[420px] overflow-hidden]"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* Video background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-end custom-container pb-12 sm:pb-16 xl:pb-[10%]">
          <h1
            className="banner-title font-head font-semibold text-white max-w-[90%] sm:max-w-[65%] xl:max-w-[40%]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Advancing Patient Care Through
            <br />
            Innovation, Comfort and Technology.
          </h1>
        </div>
      </div>
    </section>
  );
}
