"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="w-full relative">
      {/* Full Width Hero Container matching Screenshot */}
      <div
        className="relative w-full h-screen min-h-[500px] overflow-hidden bg-[#0A102A]"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* Dynamic Video Player Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover aspect-video"
          />
        </div>


        {/* Banner Content Container (Positioned at bottom-left as in screenshot) */}
        <div className="relative z-20 h-full flex flex-col justify-end p-8 sm:p-12 md:p-16 lg:p-24 xl:px-32 xl:pb-24">
          <div className="max-w-[90%] md:max-w-[80%] 2xl:max-w-[60%]">
            {/* Main Hero Heading */}
            <h1
              className="banner-title font-dm-sans font-bold text-white tracking-tight mb-4"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="200"
            >
              Sustainable Life Science
              <br />
              Technologies!!!
            </h1>
            {/* Hero Subheading */}
            <p
              className="font-inter text-white section-text sm:text-base md:text-lg font-regular tracking-wide opacity-90"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="400"
            >
              Leader and Innovative Medical Device Manufacturer of Turkey!!!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
