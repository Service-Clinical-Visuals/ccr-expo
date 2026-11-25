"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

/**
 * Video02 Section - Comfort, Flexibility and Precision
 * Matches Figma specifications:
 * - Background: Dark Navy #0B1A30.
 * - Left Column: Eyebrow, Title, Description, Frosted glass overlay box with 3 points, CTA button.
 * - Right Column: Video player container with 16:9 aspect ratio (aspect-video) and object-cover.
 * - Responsive: Stacks vertically up to 1035px, 2-column layout from 1036px.
 */
const Video02 = () => {
  const points = [
    "Provides comfortable wear and reduces strain during extended procedures.",
    "Allows easy adjustment of the light direction and angle, helping surgeons focus illumination precisely on the surgical area for improved visibility during procedures.",
    "Provides freedom of movement without restricting surgeons with cables, allowing convenient positioning and flexibility while maintaining reliable illumination.",
  ];

  return (
    <section id="video-flexibility" className="w-full py-16 xl:py-24 bg-[#0B1A30] text-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1036px]:flex-row sunoptic-split-row items-center gap-10 xl:gap-14 w-full">

          {/* Left Column: Text & Frosted Glass Container (Approx 50% Desktop, Full width Tablet/Mobile) */}
          <div className="w-full min-[1036px]:w-1/2 sunoptic-col-50 flex flex-col gap-5 sm:gap-6" data-aos="fade-right">
            <Typography
              variant="eyebrow"
              className="!text-white font-semibold text-xs sm:text-sm tracking-wider"
            >
              DESIGNED FOR SURGICAL PERFORMANCE
            </Typography>

            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Palanquin',sans-serif] leading-tight"
            >
              Comfort, Flexibility and Precision in Every Detail
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="text-white/80 text-sm sm:text-base leading-relaxed font-['DM_Sans',sans-serif]"
            >
              Explore the lightweight design, adjustable positioning and battery-powered convenience of Sunoptic&apos;s LED Headlight, delivering comfort and consistent illumination for surgical procedures.
            </Typography>

            {/* Frosted Glass Box with Points & Scaling Checkmarks */}
            <div className="w-full bg-[rgba(14,36,67,0.7)] backdrop-blur-md rounded-[8px] p-5 sm:p-6 2k:p-8 4k:p-10 border border-white/10 flex flex-col gap-4 2k:gap-6">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 2k:gap-5">
                  <CheckCircle2 className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 text-[#00A3FF] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm 2k:text-lg 4k:text-xl leading-relaxed text-[#F1F5F9] font-['DM_Sans',sans-serif]">
                    {pt}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                text="Explore Product"
                variant="primary"
                href="#products"
                className="px-6 py-3"
              />
            </div>
          </div>

          {/* Right Column: Video Player Container (Approx 50% Desktop, Full width Tablet/Mobile) */}
          <div
            className="w-full min-[1036px]:w-1/2 sunoptic-col-50 aspect-video relative rounded-[5px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl flex items-center justify-center"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full aspect-video object-cover"
            />
            {/* Fallback visual label matching Figma layer */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-['Palanquin',sans-serif] font-semibold text-lg 2k:text-2xl 4k:text-3xl text-white/40">
                Video Clip 02
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Video02;
