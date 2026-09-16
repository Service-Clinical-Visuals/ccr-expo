"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden flex flex-col justify-end pb-16 md:pb-24 lg:pb-32"
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0 bg-[#020520]">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover "
        />

      </div>

      {/* Hero Content Container */}
      <div className="custom-container relative z-10">
        <div
          className="max-w-[90%] lg:max-w-[800px] min-[1920px]:max-w-[55%] text-left"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-white font-[Manrope] text-3xl md:text-5xl lg:text-[54px] font-bold leading-[1.2] mb-4 md:mb-6 tracking-tight">
            Building Better Orthopedic Solutions<br className="hidden md:block" /> Through Innovation & Quality
          </h1>
          <p className="text-white/90 font-[Inter] text-[15px] md:text-[18px] max-w-[650px] min-[1920px]:max-w-[45%] leading-[1.6]">
            Delivering precision-engineered orthopedic solutions through innovation, quality, and a commitment to patient satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}
