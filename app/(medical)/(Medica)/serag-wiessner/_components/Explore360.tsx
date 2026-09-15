"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Explore360() {
  return (
    <section className="w-full bg-[#f5f5f5] py-14 sm:py-20 md:py-24">
      <div className="custom-container">
        {/* Centered Heading and Description */}
        <div
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-14"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="section-title font-semibold tracking-tight font-exo2">
            Explore SERAGYN® BR PA &amp; SERASYNTH® MESH BR In 360°
          </h2>
          <p className="section-text mt-3 sm:mt-4 leading-relaxed font-outfit">
            Take a closer look at our breast reconstruction mesh implants through an
            interactive 360° experience. Explore their soft, flexible design, specialised
            textile structure, and key features developed to support tissue reinforcement,
            stability, and reliable surgical handling.
          </p>
        </div>

        {/* 360 Video Player Box */}
        <div
          className="relative w-full max-w-7xl  mx-auto overflow-hidden aspect-video bg-[#f5f5f5] shadow-xl shadow-slate-900/5 "
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="150"
        >

          {/* Dynamic Video Player */}
          <div className="absolute inset-0 w-full h-full z-10">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
