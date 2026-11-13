"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

export default function PressureManagement() {
  return (
    <section className="apollo-bg-light w-full py-16 sm:py-20 xl:py-[4.8vw]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-[57.4%_1fr] gap-10 xl:gap-[1.9vw] items-center">
          {/* Video */}
          <div
            className="relative w-full aspect-video min-[1921px]:aspect-auto min-[1921px]:self-stretch min-[1921px]:min-h-[27.25vw] rounded-[6px] overflow-hidden bg-white/60"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div data-aos="fade-left" data-aos-delay="150">
            <Eyebrow className="mb-4 xl:mb-5">Intelligent Pressure Management</Eyebrow>
            <h2 className="section-title font-head font-bold text-[var(--heading)] mb-4 xl:max-w-[90%]">
              Advanced Mattress Technology For Every Level Of Care
            </h2>
            <div className="section-text font-inter text-[var(--body)] space-y-4 mb-8 text-left lg:text-justify">
              <p>
                Discover Apollo Healthcare Technologies&apos; specialised dynamic mattress collection, engineered to
                support patients with varying pressure care requirements. From advanced turning systems to
                low-air-loss solutions, each product combines innovative air technology, adaptable support and
                thoughtful design to help healthcare professionals deliver effective pressure ulcer prevention and
                management.
              </p>
              <p>
                Advanced pressure-relief and automated turning technology redistributes body weight, supports patient
                repositioning, reduces manual handling, and accommodates diverse clinical needs and risk levels.
              </p>
            </div>
            <Button href="#products">View Mattress Collection</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
