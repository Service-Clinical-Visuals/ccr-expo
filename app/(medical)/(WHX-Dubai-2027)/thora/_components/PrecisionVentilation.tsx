"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Eyebrow from "./Eyebrow";

export default function PrecisionVentilation() {
  return (
    <section id="products" className="thora-bg1 w-full py-12 sm:py-16 xl:py-[2.3vw]">
      <div className="custom-container">
        <div className="text-center mb-6 xl:mb-8" data-aos="fade-up">
          <Eyebrow className="mb-5 xl:mb-6">Advanced Ventilation Technology</Eyebrow>
          <h2 className="section-title font-plex font-semibold text-[var(--heading)]">
            Precision Ventilation. Advanced Respiratory Care.
          </h2>
        </div>

        <div
          className="relative w-full lg:w-[66%] mx-auto aspect-[1067/600] rounded-[6px] overflow-hidden bg-white/60"
          data-aos="zoom-in"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-contain" />
        </div>

        <p
          className="section-text font-inter text-[var(--body)] text-center max-w-[1030px] min-[1921px]:max-w-[55%] mx-auto mt-6 xl:mt-10"
          data-aos="fade-up"
        >
          The Monsoon 4 is an advanced high-frequency jet ventilation system designed for demanding clinical procedures.
          Combining intelligent respiratory gas conditioning, flexible ventilation modes and advanced monitoring
          capabilities, it supports precise and controlled ventilation in modern operating environments.
        </p>
      </div>
    </section>
  );
}
