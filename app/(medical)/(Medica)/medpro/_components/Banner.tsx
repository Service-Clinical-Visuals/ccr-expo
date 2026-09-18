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
            className="absolute aspect-video inset-0 w-full h-full object-cover xl:object-fill"
          />
        </div>


        {/* Banner Content Container */}
        <div className="relative z-20 h-full flex flex-col justify-end w-full px-4 sm:px-6 md:px-8 xl:px-40 mx-auto pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-4xl">
            {/* Main Hero Heading: Advanced Urological Solutions... */}
            <h1
              className="banner-title font-semibold text-white font-fraunces mb-8"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="200"
            >
              Advanced Urological Solutions Designed<br className="hidden sm:block" />
              for Precision, Performance, and Better Clinical Outcomes
            </h1>
            <div
              data-aos-duration="900"
              data-aos-delay="400"
            >
              <Button href="#products" variant="white-outline" className="!w-auto !px-[30px]">
                Explore our Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
