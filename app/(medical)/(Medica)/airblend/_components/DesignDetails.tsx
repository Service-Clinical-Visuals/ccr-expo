"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const designCheckpoints = [
  {
    title: "Flexible Flow Range",
    description: "Supports prescribed oxygen therapy with adjustable flow from 1–10 L/min.",
  },
  {
    title: "Convenient Monitoring",
    description: "Digital display provides easy access to device information.",
  },
  {
    title: "Practical Design",
    description: "Combines functional components with a compact housing for everyday use.",
  },
];

/**
 * DesignDetails Section ("Efficient & User-Friendly Design" / short-2) - Airblend
 *
 * EXACT FIGMA MATCH:
 * 1. Partial Dark Strip Background:
 *    - The dark carbon fiber background (Rectangle 5, height: 267px) ONLY covers the top ~25-30% of this section.
 *    - The remaining section background below is clean white (bg-white).
 * 2. Overlapping Layout:
 *    - The content row (Video Clip 02 + White Card, height: 628px) starts 75px from the top,
 *      overlapping the dark strip and extending down over the white background.
 * 3. Exact Sizing:
 *    - Video (Rectangle 774): 1107px wide, 628px high on desktop, sharp corners, shadow.
 *    - Card (Rectangle 775): 533px wide, 628px high on desktop, sharp corners, white background, shadow.
 */
const DesignDetails = () => {
  return (
    <section
      id="design-details"
      className="relative w-full bg-white pb-16 xl:pb-24 overflow-hidden"
    >
      {/* 1. Top Dark Carbon-Fiber Strip (Height: 267px, covers ~25-30% of the section) */}
      <div className="absolute top-0 left-0 right-0 w-full h-[267px] min-[2500px]:h-[380px] min-[3800px]:h-[540px] bg-[#707070] bg-[url('/medical/airblend/bg.webp')] bg-cover bg-center z-0" />

      {/* 2. Main Content Container (Starts 75px from the top, overlapping both backgrounds) */}
      <div className="custom-container relative z-10 pt-[75px] min-[2500px]:pt-[100px] min-[3800px]:pt-[150px]">
        <div className="airblend-design-row">
          {/* Video Clip 02: 2nd on mobile/tablet, 1st on desktop - exact 16:9 aspect-video */}
          <div
            className="airblend-design-video order-2 min-[1301px]:order-1 aspect-video relative overflow-hidden rounded-none shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-black"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="w-full h-full object-contain aspect-video"
            />
          </div>

          {/* White Card: 1st on mobile/tablet, 2nd on desktop */}
          <div
            className="airblend-design-card order-1 min-[1301px]:order-2 bg-white text-[#2A2A2A] rounded-none p-6 sm:p-8 lg:p-10 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] border border-gray-100 flex flex-col justify-between"
            data-aos="fade-left"
          >
            <div className="space-y-4">
              <Typography
                variant="h2"
                color="secondary"
                className="text-2xl sm:text-[30px] font-semibold text-[#2A2A2A] tracking-tight"
              >
                Efficient &amp; User-Friendly Design
              </Typography>

              {/* Divider Line 1 */}
              <div className="w-full h-px bg-black/20" />

              <p className="text-xs sm:text-sm lg:text-[17px] leading-[1.5] text-[#4A4A4A]">
                The Healthtime OC10 is a high-flow oxygen concentrator designed to deliver oxygen-enriched gas for prescribed supplemental oxygen therapy.
              </p>

              {/* 3 Check items */}
              <div className="flex flex-col gap-3 py-1">
                {designCheckpoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 2k:gap-5 4k:gap-7">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 2k:w-9 2k:h-9 4k:w-13 4k:h-13 rounded-full bg-[#7BC142] flex items-center justify-center shrink-0 mt-0.5 text-white shadow-xs">
                      <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 2k:w-6 2k:h-6 4k:w-9 4k:h-9" strokeWidth={3} />
                    </div>
                    <p className="text-xs sm:text-sm lg:text-[17px] 2k:text-xl 4k:text-2xl leading-[1.5] text-[#4A4A4A]">
                      <strong className="font-semibold text-[#2A2A2A]">{item.title}:</strong> {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider Line 5 */}
              <div className="w-full h-px bg-black/20" />

              <p className="text-xs sm:text-sm lg:text-[17px] leading-[1.5] text-[#4A4A4A]">
                Using advanced concentration technology, the device separates nitrogen from ambient air to produce oxygen-enriched output within a flow range of 1–10 L/min.
              </p>
            </div>

            <div className="pt-4">
              <Button
                text="Download User Manual"
                href="#design-details"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignDetails;
