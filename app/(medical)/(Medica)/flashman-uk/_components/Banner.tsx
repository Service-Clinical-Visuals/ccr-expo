"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section id="banner-section" className="w-full">
      {/* Full-width Fullscreen Video Hero Container */}
      <div
        className="relative w-full h-screen overflow-hidden bg-black"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* Dynamic Video Player Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>



        {/* Banner Content Container */}
        <div className="relative z-20 h-full flex flex-col justify-end w-full custom-container px-4 sm:px-6 md:px-8 xl:px-25 pb-12 sm:pb-16 md:pb-24">
          <div className="max-w-[90%] xl:max-w-[70%]">
            {/* Main Hero Heading */}
            <h1
              className="banner-title font-regular text-white font-poppins mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="200"
            >
              Innovating Medical Technology,<br className="hidden sm:block" />
              Enhancing Lives Worldwide.
            </h1>

          </div>
        </div>
      </div>
    </section>
  );
}
