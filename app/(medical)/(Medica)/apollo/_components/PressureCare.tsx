"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const POINTS = [
  "Advanced air mattress technology supports effective pressure redistribution and helps reduce the risk of pressure ulcer development.",
  "Specialist turning and low-air-loss systems provide enhanced positioning support and improved patient comfort.",
];

export default function PressureCare() {
  return (
    <section className="apollo-bg-light w-full py-16 sm:py-20 xl:py-[4.8vw]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_57.4%] gap-10 xl:gap-[2.3vw] items-center">
          {/* Content */}
          <div className="order-2 xl:order-1" data-aos="fade-right">
            <Eyebrow className="mb-4 xl:mb-5">Advanced Pressure Care</Eyebrow>
            <h2 className="section-title font-head font-bold text-[var(--heading)] mb-4 xl:mb-4 xl:max-w-[85%]">
              Intelligent Mattress Systems For Better Patient Protection
            </h2>
            <p className="section-text font-inter text-[var(--body)] mb-5 xl:mb-6">
              Apollo Healthcare Technologies offers a comprehensive range of dynamic mattress systems designed to
              deliver effective pressure redistribution and enhanced patient comfort. Combining advanced air technology
              with specialist support features, these solutions help healthcare professionals prevent and manage
              pressure ulcers while supporting individual patient care requirements.
            </p>
            <ul className="apollo-list section-text font-inter text-[var(--body)] mb-8">
              {POINTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Button href="#products" variant="solid">
              Explore Dynamic Mattresses
            </Button>
          </div>

          {/* 360 video */}
          <div
            className="order-1 xl:order-2 relative w-full aspect-video min-[1921px]:aspect-auto min-[1921px]:self-stretch min-[1921px]:min-h-[27.25vw] rounded-[6px] overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
