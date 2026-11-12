"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

export default function IntelligentVentilation() {
  return (
    <section className="thora-bg3 w-full py-16 sm:py-20 xl:py-[5vw]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_57.4%] gap-10 xl:gap-[2.3vw] items-center">
          {/* Content */}
          <div className="order-2 xl:order-1" data-aos="fade-right">
            <Eyebrow className="mb-4 xl:mb-5">Innovation in Jet Ventilation</Eyebrow>
            <h2 className="section-title font-plex font-semibold text-[var(--heading)] mb-5 xl:mb-8">
              Intelligent Ventilation for Advanced Medical Procedures
            </h2>
            <div className="section-text font-inter text-[var(--body)] space-y-4 mb-8">
              <p>
                The Monsoon 4 combines sophisticated ventilation technology with intelligent control and precise
                performance, providing healthcare professionals with an advanced solution for high-frequency jet
                ventilation in modern clinical environments.
              </p>
              <p>
                Advanced jet ventilation technology designed for precise respiratory management during medical
                procedures, featuring intelligent control functions, flexible ventilation parameter adjustments, and
                integrated respiratory gas conditioning for consistent performance. Its user-focused design ensures
                convenient operation, effective monitoring, and adaptability to diverse clinical requirements.
              </p>
            </div>
            <Button href="#products">Discover Monsoon 4</Button>
          </div>

          {/* Video */}
          <div
            className="order-1 xl:order-2 relative w-full aspect-[930/525] rounded-[6px] overflow-hidden bg-white/60"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
