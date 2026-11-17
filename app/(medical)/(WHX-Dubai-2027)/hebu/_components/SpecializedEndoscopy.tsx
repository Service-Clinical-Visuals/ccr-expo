"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Eyebrow from "./Eyebrow";

export default function SpecializedEndoscopy() {
  return (
    <section className="w-full bg-[var(--dark)] py-16 sm:py-20 xl:py-[4.9vw]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-[57.4%_1fr] gap-10 xl:gap-[1.9vw] items-center">
          {/* Video */}
          <div
            className="relative w-full aspect-video rounded-[6px] overflow-hidden bg-black"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Text */}
          <div data-aos="fade-left" data-aos-delay="150">
            <Eyebrow light className="mb-3 xl:mb-4">
              Engineered for Surgical Excellence
            </Eyebrow>
            <h2 className="section-title font-head font-semibold text-white mb-4 xl:mb-6">
              Specialized Endoscopy Solutions for Modern Medical Procedures
            </h2>
            <p className="section-text font-body text-white/90 mb-4 xl:mb-5">
              Discover a specialized collection of endoscopic instruments and visualization systems from HEBUmedical,
              developed to support demanding diagnostic and surgical applications. From spinal procedures and
              laparoscopy to arthroscopy, urology and ENT, our portfolio brings together precision-engineered solutions
              that help medical professionals achieve clear visualization, reliable handling and greater procedural
              confidence.
            </p>
            <p className="section-text font-body text-white/90">
              Comprehensive endoscopic solutions across multiple specialties, combining advanced optical systems,
              specialized instruments and compatible accessories to deliver detailed visualization, precise handling,
              efficient workflows and dependable performance in spine surgery, gynecology, urology and arthroscopic
              procedures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
