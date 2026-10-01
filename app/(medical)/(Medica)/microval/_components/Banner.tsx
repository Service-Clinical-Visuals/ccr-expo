"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="w-full">
      {/* Full-width Video Hero Container */}
      <div
        className="relative w-full aspect-video overflow-hidden bg-black"
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


        {/* Banner Content Container */}
        <div className="relative z-20 h-full flex flex-col justify-end w-full px-4 sm:px-6 md:px-8 xl:px-30 mx-auto pb-30 sm:pb-16 lg:pb-35">
          <div className="max-w-[90%]">
            {/* Main Hero Heading */}
            <h1
              className="font-semibold text-[#FFFFFF] font-dmsans mb-4 sm:mb-8 max-w-[90%] banner-title"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="200"
            >
              Over 30 years of rigor and high standards<br className="hidden sm:block" /> serving healthcare professionals
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

