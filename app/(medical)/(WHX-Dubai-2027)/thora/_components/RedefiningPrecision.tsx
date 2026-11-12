"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

export default function RedefiningPrecision() {
  return (
    <section className="thora-bg2 w-full py-16 sm:py-20 xl:py-[5vw]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-[57.4%_1fr] gap-10 xl:gap-[1.9vw] items-center">
          {/* Video */}
          <div
            className="relative w-full aspect-[930/525] rounded-[6px] overflow-hidden bg-white/60"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div data-aos="fade-left" data-aos-delay="150">
            <Eyebrow className="mb-4 xl:mb-5">Next-Generation Jet Ventilation</Eyebrow>
            <h2 className="section-title font-plex font-semibold text-[var(--heading)] mb-5 xl:mb-8">
              Redefining Precision in Advanced Ventilation Technology
            </h2>
            <div className="section-text font-inter text-[var(--body)] space-y-4 mb-8 text-left lg:text-justify">
              <p>
                The Monsoon 4 represents advanced jet ventilation technology, combining intelligent control, precise gas
                delivery and innovative system capabilities to support demanding medical procedures and modern
                respiratory care.
              </p>
              <p>
                Delivers controlled high-frequency jet ventilation for demanding surgical and clinical applications,
                featuring intelligent ventilation management with precise control over respiratory parameters and
                integrated gas conditioning to ensure optimal performance during procedures. Its flexible configurations
                accommodate diverse clinical requirements and applications, providing versatility, precision, and
                reliability across a wide range of medical settings.
              </p>
            </div>
            <Button href="#about">Discover Our Company</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
