/**
 * Advanced Sleep Analysis & Diagnostics Section
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Centered Section Header:
 *    - Subtitle and title structured with Squada One font.
 * 2. Two-Column Split Layout:
 *    - Left: Technical description, 3 bullet checklist items with checkmark icons, and CTA button.
 *    - Right: Dynamic video presentation container with rounded-[24px] corners.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const bulletPoints = [
  "Correlation between body position and respiratory events – to better differentiate between patients requiring positional training devices or CPAP therapy.",
  "Cheyne Stokes analysis in combination with pulse rate, gives insight to cardiorespiratory health.",
  "Extensive CPAP pressure report – better define the ideal fixed pressure for your patients.",
];

export default function AdvancedSleep() {
  return (
    <section id="advanced-sleep" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">

        {/* Section Header with Deleo xl:max-w-[70%] standard */}
        <div className="text-center space-y-1.5 w-full max-w-full xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <span className="font-primary font-bold text-[#585858] text-lg sm:text-[20px] uppercase tracking-wide">
            POWERFUL CARDIO-RESPIRATORY SLEEP SCREENING
          </span>
          <h2 className="font-primary text-[#212121] text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Comprehensive insights for accurate sleep assessment and personalised patient care.
          </h2>
        </div>

        {/* Two-Column Split Layout: 40% Copy / 60% Video (Tablet layout kept up to 1035px: Heading -> Video -> Checklist) */}
        <div className="flex flex-col min-[1036px]:flex-row gap-8 min-[1036px]:gap-12 xl:gap-16 items-center">
          
          {/* Mobile/Tablet Only Heading: Appears FIRST before video on screens up to 1035px */}
          <div className="min-[1036px]:hidden space-y-1.5 w-full max-w-full text-left" data-aos="fade-up">
            <h3 className="font-primary text-[#212121] text-2xl sm:text-3xl leading-tight">
              Advanced Sleep Analysis &amp; Diagnostics
            </h3>
          </div>

          {/* Right Column (DOM order for mobile/tablet): Video Container (Appears NEXT after heading on screens up to 1035px) */}
          <div
            className="w-full min-[1036px]:w-[60%] aspect-video rounded-[24px] overflow-hidden shadow-xl border border-gray-200 relative bg-[#05172E] min-[1036px]:order-2"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Left Column (DOM order for mobile/tablet): Copy & Checklist */}
          <div className="w-full min-[1036px]:w-[40%] flex flex-col gap-5 sm:gap-6 shrink-0 min-[1036px]:order-1" data-aos="fade-right">
            {/* Desktop Only Heading: Appears on desktop screens from 1036px in left column */}
            <div className="hidden min-[1036px]:block space-y-1.5 w-full max-w-full">
              <h3 className="font-primary text-[#212121] text-2xl sm:text-3xl lg:text-[32px] leading-tight">
                Advanced Sleep Analysis &amp; Diagnostics
              </h3>
            </div>

            <p className="font-secondary text-[#585858] text-sm sm:text-base leading-relaxed text-justify w-full max-w-full">
              Advanced sleep analysis features include body position correlation with respiratory events, RERA measurement to distinguish AHI from RDI, and Cheyne-Stokes analysis combined with pulse rate for improved cardiorespiratory insights. Additional capabilities include detailed CPAP pressure reporting to determine ideal fixed pressure and an optional Bruxism Screener to support dental sleep medicine.
            </p>

            <div className="flex flex-col gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 pt-1 w-full max-w-full">
              {bulletPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 min-[2500px]:gap-5 min-[3800px]:gap-6 w-full max-w-full">
                  <CheckCircle2 className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 text-[#005781] shrink-0 mt-0.5 fill-[#005781] text-white" />
                  <p className="font-secondary text-[#585858] text-sm sm:text-base leading-relaxed w-full max-w-full">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="#products"
                className="inline-flex items-center justify-center text-center font-primary font-bold text-white bg-[#005781] hover:bg-[#004567] text-base sm:text-lg lg:text-[20px] px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 leading-none"
              >
                <span className="font-primary font-bold text-center leading-none">Explore Products</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

