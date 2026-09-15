"use client";

import React from "react";
import { Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function ClinicalPerformance() {
  return (
    <section id="clinical-performance" className="w-full bg-white py-14 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Top Centered Section Heading & Description */}
        <div
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 md:mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="section-title font-semibold tracking-tight font-outfit ">
            Designed For Versatile Use
          </h2>
          <p className="section-text mt-3 sm:mt-4 leading-relaxed font-outfit">
            The Euro All Silicone Foley Catheter provides a range of sizing options to support
            different clinical requirements. Its sterile, single-use design makes it suitable
            for controlled urinary drainage applications, offering reliable performance and
            convenient handling across various healthcare settings.
          </p>
        </div>

        {/* Two-Column Grid: Left Video (Approx 66%) & Right Content (Approx 33%) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Video Box */}
          <div
            className="xl:col-span-9 w-full"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-[#f5f5f5] shadow-xl ">
              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-2"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Clinical Performance Details & Bullets */}
          <div
            className="xl:col-span-3 flex flex-col gap-4 sm:gap-5"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            {/* Title */}
            <h3 className="card-title font-bold tracking-tight font-outfit">
              Clinical Performance
            </h3>

            {/* Subtle Divider Line */}
            <div className="w-full h-px bg-slate-200" />

            {/* Intro Description */}
            <p className="section-text leading-relaxed font-outfit">
              Designed to support efficient urinary drainage while providing practical sizing
              options for a variety of clinical applications.
            </p>

            {/* Feature Highlights with Red Badges */}
            <div className="flex flex-col gap-3.5 pt-1">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#d40708] flex items-center justify-center flex-shrink-0 text-white mt-0.5 shadow-sm shadow-[#d40708]/30">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <p className="section-text leading-relaxed font-outfit flex-1">
                  <strong className="font-semibold text-slate-900 font-outfit">
                    Colour-Coded Sizes
                  </strong>{" "}
                  – Distinct colour coding helps healthcare professionals quickly identify the
                  required catheter size during clinical use.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#d40708] flex items-center justify-center flex-shrink-0 text-white mt-0.5 shadow-sm shadow-[#d40708]/30">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <p className="section-text leading-relaxed font-outfit flex-1">
                  <strong className="font-semibold text-slate-900 font-outfit">
                    Consistent Drainage
                  </strong>{" "}
                  – The catheter&apos;s smooth, flexible design supports effective urine
                  drainage and reliable day-to-day clinical handling.
                </p>
              </div>
            </div>

            {/* Concluding Paragraph */}
            <p className="section-text leading-relaxed font-outfit pt-1">
              It ensures reliable performance, convenient handling, and consistent
              functionality across different healthcare environments and patient care
              requirements.
            </p>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-3">
              <Button href="#product-details" variant="primary" rounded="sm">
                View Product Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
