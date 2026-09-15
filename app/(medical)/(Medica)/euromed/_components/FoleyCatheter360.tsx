"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function FoleyCatheter360() {
  return (
    <section className="w-full bg-[#f5f5f5] py-14 sm:py-20 md:py-24">

      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Top Header Row with Title, Description, and 360 CTA Button */}
        <div
          className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Left: Heading & Description */}
          <div className="max-w-4xl">
            <h2 className="section-title font-semibold tracking-tight font-outfit">
              Euro All <span className="text-[#d40708]">Silicone Foley Catheter</span>
            </h2>
            <p className="section-text mt-2 sm:mt-3 leading-relaxed font-outfit">
              Experience the Euro All Silicone Foley Catheter from every angle. Designed for
              reliable urinary drainage, its flexible silicone construction and secure
              balloon retention support comfortable, single-use bladder drainage.
            </p>
          </div>

          {/* Right: View in 360° CTA Button */}
          <div className="flex-shrink-0">
            <Button href="#360-view" variant="primary" rounded="sm">
              View in 360°
            </Button>
          </div>
        </div>

        {/* Subtle Horizontal Divider Line */}
        <div className="w-full h-px bg-slate-300 my-6 sm:my-8" />

        {/* Large Centered 360° Video Container */}
        <div
          className="relative w-full max-w-7xl mx-auto overflow-hidden aspect-video rounded-2xl bg-[#f5f5f5] shadow-lg shadow-slate-900/5 "
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          {/* Dynamic 360 Video Player */}
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
