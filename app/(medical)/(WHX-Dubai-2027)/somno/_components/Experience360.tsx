/**
 * Experience 360 Section (SOMNOtouch™ RESP eco)
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Centered Section Header:
 *    - Subtitle and title structured with Squada One font.
 * 2. 360deg Video Container:
 *    - Standard 16:9 aspect-video ratio, rounded-[24px], border and shadow.
 *    - Uses DynamicVideoPlayer with type="360".
 * 3. Feature Highlights:
 *    - 3 callout metrics with check icons and vertical dividers.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Check } from "lucide-react";

export default function Experience360() {
  return (
    <section id="experience-360" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">

        {/* Section Header with Deleo xl:max-w-[70%] standard */}
        <div className="text-center space-y-1.5 w-full max-w-full xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <span className="font-primary font-bold text-[#585858] text-lg sm:text-[20px] uppercase tracking-wide">
            Experience 360 deg view
          </span>
          <h2 className="font-primary text-[#005781] text-2xl sm:text-3xl lg:text-4xl">
            SOMNOtouch™ RESP eco
          </h2>
        </div>

        {/* Split Layout: 360 Video Player & Content (Tablet layout kept up to 1035px: Heading -> Video -> Badges) */}
        <div className="flex flex-col min-[1036px]:grid min-[1036px]:grid-cols-2 gap-8 min-[1036px]:gap-12 xl:gap-16 items-center">
          
          {/* Mobile/Tablet Only Heading: Appears FIRST before 360 video on screens up to 1035px */}
          <div className="min-[1036px]:hidden space-y-1.5 w-full max-w-full text-left" data-aos="fade-up">
            <h3 className="font-primary text-[#212121] text-xl sm:text-2xl leading-tight">
              INVENTIVELY SIMPLE &amp; POWERFUL CARDIO-RESPIRATORY SLEEP SCREENING
            </h3>
          </div>

          {/* Left: 360 Video Player (Appears NEXT after heading on screens up to 1035px) */}
          <div
            className="w-full aspect-video rounded-[24px] overflow-hidden shadow-xl border border-gray-200 relative bg-[#05172E]"
            data-aos="zoom-in"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Technical Features */}
          <div className="flex flex-col gap-5 sm:gap-6 w-full" data-aos="fade-left">
            {/* Desktop Only Heading: Appears on desktop screens from 1036px in right column */}
            <div className="hidden min-[1036px]:block space-y-1.5 w-full max-w-full">
              <h3 className="font-primary text-[#212121] text-xl sm:text-2xl lg:text-[30px] leading-tight">
                INVENTIVELY SIMPLE &amp; POWERFUL CARDIO-RESPIRATORY SLEEP SCREENING
              </h3>
            </div>

            <p className="font-secondary text-[#585858] text-sm sm:text-base leading-relaxed text-justify w-full max-w-full">
              The system correlates body position with respiratory events to help distinguish patients requiring positional training devices or CPAP therapy. It also measures RERAs to differentiate between AHI and RDI, provides Cheyne-Stokes analysis alongside pulse rate for cardiorespiratory insights, offers extensive CPAP pressure reports to identify ideal fixed pressure, and includes an optional Bruxism Screener to support the growing field of dental sleep medicine.
            </p>

            {/* 3 Callout Badges with check icons and vertical dividers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 min-[2500px]:gap-8 min-[3800px]:gap-12 pt-4 min-[2500px]:pt-8 min-[3800px]:pt-12 border-t border-gray-100">
              
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center gap-2.5 min-[2500px]:gap-4">
                <div className="w-8 h-8 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#005781] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Check className="w-4.5 h-4.5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11" strokeWidth={3} />
                </div>
                <h4 className="font-primary font-bold text-[#005781] !text-[1.125rem] sm:!text-[1.25rem] lg:!text-[1.375rem] min-[2500px]:!text-[2rem] min-[3800px]:!text-[2.75rem] leading-snug">
                  12 Channels with Proven Signal Quality
                </h4>
              </div>

              {/* Feature 2 (with border) */}
              <div className="flex flex-col items-center text-center gap-2.5 min-[2500px]:gap-4 sm:border-l sm:border-gray-200 sm:pl-3 min-[2500px]:pl-6">
                <div className="w-8 h-8 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#005781] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Check className="w-4.5 h-4.5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11" strokeWidth={3} />
                </div>
                <h4 className="font-primary font-bold text-[#005781] !text-[1.125rem] sm:!text-[1.25rem] lg:!text-[1.375rem] min-[2500px]:!text-[2rem] min-[3800px]:!text-[2.75rem] leading-snug">
                  No Thermistor Needed
                </h4>
              </div>

              {/* Feature 3 (with border) */}
              <div className="flex flex-col items-center text-center gap-2.5 min-[2500px]:gap-4 sm:border-l sm:border-gray-200 sm:pl-3 min-[2500px]:pl-6">
                <div className="w-8 h-8 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#005781] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Check className="w-4.5 h-4.5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11" strokeWidth={3} />
                </div>
                <h4 className="font-primary font-bold text-[#005781] !text-[1.125rem] sm:!text-[1.25rem] lg:!text-[1.375rem] min-[2500px]:!text-[2rem] min-[3800px]:!text-[2.75rem] leading-snug">
                  Outstanding Cost/Benefit Ratio
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

