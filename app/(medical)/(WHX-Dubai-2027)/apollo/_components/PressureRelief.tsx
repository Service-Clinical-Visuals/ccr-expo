"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Eyebrow from "./Eyebrow";

const POINTS = [
  "Innovative alternating air technology helps minimize sustained pressure and supports effective pressure redistribution for patients.",
  "Specialised mattress configurations address varying clinical requirements, including patients needing advanced turning and low-air-loss support.",
];

export default function PressureRelief() {
  return (
    <section className="apollo-bg-green w-full py-16 sm:py-20 xl:py-[5vw]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_57.4%] gap-10 xl:gap-[1.6vw] items-center">
          {/* Content */}
          <div className="order-2 xl:order-1 text-white" data-aos="fade-right">
            <Eyebrow light className="mb-4 xl:mb-5">
              Advanced Pressure Relief
            </Eyebrow>
            <h2 className="section-title font-head font-bold mb-5 xl:mb-6">
              Smarter Support For Changing Patient Care Needs
            </h2>
            <p className="section-text font-inter text-white/95 mb-5">
              Apollo Healthcare Technologies brings together a specialized collection of dynamic mattress systems
              designed to address different levels of pressure care. Featuring advanced air cell technology, adjustable
              support and intelligent pressure management, these solutions help healthcare professionals provide
              tailored comfort while supporting the prevention and management of pressure ulcers.
            </p>
            <ul className="apollo-list section-text font-inter text-white/95">
              {POINTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Video */}
          <div
            className="order-1 xl:order-2 relative w-full aspect-video min-[1921px]:aspect-auto min-[1921px]:self-stretch min-[1921px]:min-h-[27.25vw] rounded-[6px] overflow-hidden bg-white/30"
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
