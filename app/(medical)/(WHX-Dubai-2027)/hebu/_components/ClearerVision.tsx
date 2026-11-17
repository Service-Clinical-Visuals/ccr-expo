"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

export default function ClearerVision() {
  return (
    <section className="w-full bg-[var(--dark)] py-16 sm:py-20 xl:py-[5.1vw]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_57.4%] gap-10 xl:gap-[1.9vw] items-center">
          {/* Text */}
          <div className="order-2 xl:order-1" data-aos="fade-right">
            <Eyebrow light className="mb-3 xl:mb-4">
              Precision Imaging &amp; Instruments
            </Eyebrow>
            <h2 className="section-title font-head font-semibold text-white mb-4 xl:mb-6">
              Enabling Clearer Vision Across Specialized Medical Procedures
            </h2>
            <p className="section-text font-body text-white/90 mb-4 xl:mb-5">
              HEBUmedical offers a comprehensive selection of endoscopic equipment developed for specialized diagnostic
              and surgical applications. Our portfolio brings together solutions for spine surgery, laparoscopy,
              arthroscopy, urology, gynaecology and ENT, helping medical professionals access reliable technology
              designed for precision, safety and effective clinical workflows.
            </p>
            <p className="section-text font-body text-white/90 mb-8 xl:mb-10">
              Dedicated endoscopy solutions featuring specialized, carefully engineered equipment that delivers accurate
              visualization, dependable functionality, practical handling, and precision across diverse diagnostic and
              minimally invasive surgical procedures in demanding clinical environments.
            </p>
            <Button href="#products" variant="white">
              View Endoscopy Collection
            </Button>
          </div>

          {/* Video */}
          <div
            className="order-1 xl:order-2 relative w-full aspect-video rounded-[6px] overflow-hidden bg-black"
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
