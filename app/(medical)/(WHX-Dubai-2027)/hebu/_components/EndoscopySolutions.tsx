"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

/**
 * Split section: the top band is dark, the bottom band uses the light "tech"
 * background. On desktop the 360 video spans both bands on the right.
 * The dark band is painted by a pseudo-element on the text cell that bleeds
 * to both viewport edges, so it always matches the text height.
 */
export default function EndoscopySolutions() {
  return (
    <section className="hebu-bg-tech relative isolate overflow-hidden w-full">
      <div className="custom-container grid grid-cols-1 xl:grid-cols-[31.6%_1fr] gap-x-[2.3vw]">
        {/* Text (dark band) */}
        <div
          className="relative pt-16 sm:pt-20 xl:pt-[5.4vw] pb-12 xl:pb-[2.7vw] before:content-[''] before:absolute before:inset-y-0 before:-left-[100vw] before:-right-[100vw] before:bg-[var(--dark)] before:-z-10"
          data-aos="fade-right"
        >
          <Eyebrow light className="mb-3 xl:mb-4">
            Advanced Endoscopy Solutions
          </Eyebrow>
          <h2 className="section-title font-head font-semibold text-white mb-4 xl:mb-6">
            Precision Endoscopy Equipment for Diverse Medical Specialties
          </h2>
          <p className="section-text font-body text-white/90">
            Explore HEBUmedical&apos;s comprehensive range of endoscopy products, developed to support precise
            diagnostics and minimally invasive procedures. Covering multiple medical disciplines, our portfolio combines
            advanced optical technology, reliable instrumentation and practical functionality to meet the demanding
            requirements of modern surgical environments.
          </p>
        </div>

        {/* 360 video */}
        <div
          className="relative w-full aspect-video mt-10 xl:mt-[4.3vw] xl:mb-[5.2vw] xl:row-span-2 xl:col-start-2 xl:row-start-1 rounded-[6px] overflow-hidden bg-white"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-contain" />
        </div>

        {/* Quote (light band) */}
        <div className="pt-10 xl:pt-[3.2vw] pb-16 xl:pb-[5.2vw]" data-aos="fade-up">
          <p className="quote-text font-body text-[var(--body)] mb-6 xl:mb-8 max-w-[480px] xl:max-w-none">
            &ldquo;Empowering Better Diagnostics Through Precision and Innovation.&rdquo;
          </p>
          <Button href="#products">Discover Our Endoscopy Range</Button>
        </div>
      </div>
    </section>
  );
}
