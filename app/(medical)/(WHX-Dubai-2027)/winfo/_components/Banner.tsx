"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import { BarHeading } from "./SectionHeading";

export default function Banner() {
  return (
    <section id="home" className="w-full">
      <div
        id="banner-section"
        className="h-[100svh] relative w-full min-h-[420px] overflow-hidden bg-[#d9d9d9]"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* Video background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-end custom-container pb-12 sm:pb-16 xl:pb-[7%]">
          <div data-aos="fade-up" data-aos-delay="200">
            <BarHeading
              as="h1"
              light
              eyebrow="Explore The Colourful World Of Health"
              title="Precision Instruments for Advanced Spine Surgery."
              titleClassName="banner-title"
              className="max-w-[95%] sm:max-w-[75%] xl:max-w-[55%]"
            />
          </div>
          <div className="mt-8 xl:mt-[2.4vw]" data-aos="fade-up" data-aos-delay="350">
            <Button href="#products">Explore More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
