"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="w-full">
      {/* Full-width Video Hero Container */}
      <div
        className="relative w-full h-[100dvh] xl:h-auto xl:aspect-video overflow-hidden bg-black"
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
              className="banner-title font-semibold text-white font-poppins mb-6 leading-tight"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="200"
            >
              Precision Medical Solutions Designed<br className="hidden sm:block" />
              for Advanced ENT and Head & Neck Surgery
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="300"
            >
              <Button href="#solutions" showArrow={false} className="!bg-white !text-slate-900 hover:!bg-slate-100">
                <span className="font-inter font-bold ">Explore Our Solutions</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
