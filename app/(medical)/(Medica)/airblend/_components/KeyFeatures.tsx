"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const keyFeaturesList = [
  {
    title: "High Oxygen Flow",
    description: "Provides an adjustable flow range of 1–10 L/min, supporting different prescribed oxygen therapy requirements.",
  },
  {
    title: "Digital Display",
    description: "Incorporates a user-friendly digital display that allows convenient access to essential operating information.",
  },
  {
    title: "Ergonomic Design",
    description: "Combines a practical handle and extendable patient unit to support easy handling and everyday usability.",
  },
];

/**
 * KeyFeatures Section ("Designed For Reliable Oxygen Delivery") - Airblend
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Dark Texture Background: Carbon fiber pattern (bg.webp) over charcoal base (#707070).
 * 2. Centered Section Header: Constrained to `xl:max-w-[70%]`.
 * 3. Responsive Layout:
 *    - Tablet (768px - 1035px): Stacks cleanly.
 *    - Desktop (>=1036px): 2-Column row via `.airblend-features-row`.
 */
const KeyFeatures = () => {
  return (
    <section
      id="key-features"
      className="w-full py-16 xl:py-24 bg-[#707070] bg-[url('/medical/airblend/bg.webp')] bg-cover bg-center text-white overflow-hidden relative"
    >
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        {/* Centered Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl lg:text-[30px] min-[2500px]:text-[48px] min-[3800px]:text-[64px] font-semibold tracking-tight text-white"
          >
            Designed For Reliable Oxygen Delivery
          </Typography>
          <Typography
            variant="p"
            color="white"
            className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-white/90"
          >
            The Healthtime OC10 is designed to provide efficient oxygen concentration through advanced technology and user-friendly functionality. With an adjustable flow range of 1–10 L/min, it supports prescribed supplemental oxygen therapy while maintaining an oxygen concentration of 93% ±3%.
          </Typography>
        </div>

        {/* 2-Column Content: Video (70%) | Features (30%) - Mobile/Tablet up to 1300px: Heading first, Video next */}
        <div className="airblend-features-row">
          {/* Video Clip 01: 2nd on mobile/tablet, 1st on desktop - exact 16:9 aspect-video */}
          <div
            className="airblend-features-video order-2 min-[1301px]:order-1 aspect-video relative overflow-hidden rounded-[16px] shadow-2xl bg-black"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="w-full h-full object-contain aspect-video"
            />
          </div>

          {/* Key Features & Benefits: 1st on mobile/tablet, 2nd on desktop */}
          <div
            className="airblend-features-content order-1 min-[1301px]:order-2 flex flex-col gap-5 sm:gap-6"
            data-aos="fade-left"
          >
            <Typography
              variant="h3"
              color="white"
              className="text-xl sm:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl font-semibold text-white"
            >
              Key Features &amp; Benefits
            </Typography>

            <p className="text-xs sm:text-sm min-[2500px]:text-base min-[3800px]:text-xl leading-relaxed text-white/90">
              The Healthtime OC10 is designed with a combination of advanced oxygen concentration technology and practical features to support convenient operation and reliable performance. Every element focuses on improving usability, accessibility, and mobility while meeting the requirements of prescribed supplemental oxygen therapy.
            </p>

            <div className="flex flex-col gap-3.5 2k:gap-5 pt-1">
              {keyFeaturesList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 2k:gap-5 4k:gap-7">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 2k:w-9 2k:h-9 4k:w-13 4k:h-13 rounded-full bg-[#7BC142] flex items-center justify-center shrink-0 mt-0.5 text-white shadow-xs">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 2k:w-6 2k:h-6 4k:w-9 4k:w-9" strokeWidth={3} />
                  </div>
                  <p className="text-xs sm:text-sm 2k:text-lg 4k:text-2xl leading-relaxed text-white">
                    <strong className="font-semibold">{item.title}:</strong> {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                text="Explore Features"
                href="#products-section"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
