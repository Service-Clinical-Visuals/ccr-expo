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
        <div className="relative z-20 h-full flex flex-col justify-end w-full px-4 sm:px-6 md:px-8 xl:px-40 mx-auto pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-4xl">
            {/* Main Hero Heading */}
            <h1
              className="banner-title font-semibold text-white font-dmsans mb-4"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="200"
            >
              Advancing Medical Technology
            </h1>
            <p
              className="text-white/90 text-regular card-title font-inter"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              Over 30 years of expertise in innovative medical technologies<br className="hidden sm:block" />
              and engineering solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
