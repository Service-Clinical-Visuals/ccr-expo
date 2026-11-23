/**
 * SleepScreening Section (SOMNOtouch™ RESP eco Device Feature - p4 / Video Clip 02)
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Light background container (#F7F7F7).
 * 2. Two-Column Split Layout:
 *    - Left: Featured media / device image (p4.webp) or short clip video player.
 *    - Right: Descriptive copy, and 2 distinct feature boxes with #005781 borders.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Check } from "lucide-react";

export default function SleepScreening() {
  return (
    <section id="sleep-screening" className="w-full py-16 xl:py-24 bg-[#F7F7F7] overflow-hidden">
      <div className="custom-container">

        {/* Two-Column Split Layout: 60% Video / 40% Copy (Tablet layout kept up to 1035px, split from 1036px) */}
        <div className="flex flex-col min-[1036px]:flex-row gap-8 min-[1036px]:gap-12 xl:gap-16 items-center">

          {/* Mobile/Tablet Only Heading: Appears FIRST before video on screens up to 1035px */}
          <div className="min-[1036px]:hidden space-y-1.5 w-full max-w-full text-left" data-aos="fade-up">
            <span className="font-primary font-bold text-[#585858] text-lg sm:text-[20px] uppercase tracking-wide">
              SOMNOtouch™ RESP eco
            </span>
            <h2 className="font-primary text-[#212121] text-2xl sm:text-3xl leading-tight">
              Sleep Screening starts with the SOMNOtouch™ RESP eco.
            </h2>
          </div>

          {/* Left Column: Device Video Container (60%) with Deleo aspect-video standard */}
          <div
            className="w-full min-[1036px]:w-[60%] relative aspect-video overflow-hidden rounded-[16px] shadow-lg border border-gray-200 bg-[#05172E] group"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Copy & 2 Highlight Boxes (40%) */}
          <div className="w-full min-[1036px]:w-[40%] flex flex-col gap-4 sm:gap-5 shrink-0" data-aos="fade-left">
            {/* Desktop Only Heading: Appears on desktop screens from 1036px in right column */}
            <div className="hidden min-[1036px]:block space-y-1.5 w-full max-w-full">
              <span className="font-primary font-bold text-[#585858] text-lg sm:text-[20px] uppercase tracking-wide">
                SOMNOtouch™ RESP eco
              </span>

              <h2 className="font-primary text-[#212121] text-2xl sm:text-3xl lg:text-[34px] leading-tight">
                Sleep Screening starts with the SOMNOtouch™ RESP eco.
              </h2>
            </div>

            <div className="flex flex-col gap-3 font-secondary text-[#585858] text-sm sm:text-base leading-relaxed text-justify">
              <p>
                The SOMNOtouch RESP eco joins the SOMNOtouch™ family of products and is positioned primarily at the doctor who only requires a simple respiratory sleep screening device.
              </p>
              <p>
                Responding to the growing demand for low cost home sleep screening devices – the SOMNOtouch™ RESP eco will have 12 channels including one of two optional sensors: abdomen effort or bruxism. Using the smart intelligent connect system.
              </p>
            </div>

            {/* 2 Feature Boxes with #005781 borders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3.5 min-[2500px]:gap-6 min-[3800px]:gap-8 pt-2">

              {/* Box 1 */}
              <div className="bg-[#F9F9F9] border border-[#005781] rounded-[16px] min-[2500px]:rounded-[24px] min-[3800px]:rounded-[32px] p-4 min-[2500px]:p-6 min-[3800px]:p-8 flex flex-col gap-2.5 min-[2500px]:gap-4 shadow-sm w-full">
                <div className="w-6 h-6 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-[#005781] flex items-center justify-center text-white shrink-0">
                  <Check className="w-3.5 h-3.5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" strokeWidth={3} />
                </div>
                <p className="font-secondary text-[#585858] text-xs sm:text-sm leading-relaxed w-full max-w-full">
                  Bruxism screener (optional) – addressing the growing trend toward dental sleep medicine
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-[#F9F9F9] border border-[#005781] rounded-[16px] min-[2500px]:rounded-[24px] min-[3800px]:rounded-[32px] p-4 min-[2500px]:p-6 min-[3800px]:p-8 flex flex-col gap-2.5 min-[2500px]:gap-4 shadow-sm w-full">
                <div className="w-6 h-6 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-[#005781] flex items-center justify-center text-white shrink-0">
                  <Check className="w-3.5 h-3.5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" strokeWidth={3} />
                </div>
                <p className="font-secondary text-[#585858] text-xs sm:text-sm leading-relaxed w-full max-w-full">
                  Measure RERA’s to help distinguish between AHI and RDI
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

