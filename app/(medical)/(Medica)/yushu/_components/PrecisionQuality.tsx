"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function PrecisionQuality() {
  return (
    <section
      id="precision"
      className="w-full py-16 xl:py-24 bg-[#0B7A75] bg-[url('/medical/yushu/bg3.webp')] bg-cover bg-center bg-no-repeat relative overflow-hidden text-white"
    >
      <div className="custom-container">
        <div className="precision-layout-container flex flex-col items-center gap-6 xl:gap-8 min-[3800px]:gap-16 w-full">
          {/* Left: Text Content */}
          <div
            className="precision-left-col w-full flex flex-col gap-6"
            data-aos="fade-right"
          >
            {/* Tagline */}
            <div className="flex items-center gap-3">
              <div className="w-5 h-[3px] bg-white rounded-full"></div>
              <Typography
                variant="h4"
                color="white"
                className="uppercase !font-semibold tracking-wider text-xs sm:text-sm"
              >
                PRECISION & QUALITY
              </Typography>
            </div>

            {/* Title */}
            <Typography
              variant="h2"
              color="white"
              className="font-bold leading-tight"
            >
              Optimized Design for Consistent Endoscopic Performance
            </Typography>

            {/* Paragraph 1 */}
            <Typography variant="p" color="white" className="leading-relaxed text-sm sm:text-base text-gray-100 font-normal">
              The Cover-ENT® combines an engineered design with practical functionality for
              efficient ENT examinations. Its transparent distal lens provides clear,
              distortion-free visualization, while the flexible, lightweight sheath ensures easy
              and secure placement on compatible rigid endoscopes. Its optimized design helps
              maintain consistent optical performance during different viewing angles.
            </Typography>

            {/* Paragraph 2 */}
            <Typography variant="p" color="white" className="leading-relaxed text-sm sm:text-base text-gray-100 font-normal">
              Precisely engineered to provide consistent visual performance across different viewing
              angles. To maintain high manufacturing standards, every Cover-ENT® device undergoes a
              100% quality control test to verify the integrity and optimal sealing of all bonded
              components for reliable performance.
            </Typography>

            {/* Button */}
            <div className="pt-2">
              <Button text="Know More" variant="secondary" href="#precision" />
            </div>
          </div>

          {/* Right: Video Showcase */}
          <div
            className="precision-right-col w-full relative aspect-video overflow-hidden rounded-2xl shadow-2xl mt-4"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
