"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="w-full">
      {/* Full-width Video Hero Container */}
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
        <div className="relative z-20 h-full flex flex-col justify-end w-full px-4 sm:px-6 md:px-8 xl:px-40 mx-auto pb-12 sm:pb-16 md:pb-32">
          <div className="max-w-4xl">
            {/* Main Hero Heading */}
            <h1
              className="banner-title font-medium text-[#FFFFFF] font-exo2 mb-4 sm:mb-8"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="200"
            >
              Precision in Every Detail. Innovation in <br /> Every Solution.
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              <Button href="#explore" variant="primary" showArrow={false}>
                <span className="font-outfit font-medium text-[#FFFFFF]">Explore More</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

