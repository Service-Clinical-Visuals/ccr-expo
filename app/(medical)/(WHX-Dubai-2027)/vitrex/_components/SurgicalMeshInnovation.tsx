"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const benefits = [
  "Monofilament fibres are designed to reduce infection and inflammation risks during tissue reinforcement.",
  "After partial absorption, lightweight polypropylene remains to provide long-term support for weakened abdominal structures.",
  "Stable mesh construction with monofilament fibres allows easy trimming into different shapes without compromising structural integrity, while helping reduce the risk of infection and inflammation during tissue healing.",
];

/**
 * SurgicalMeshInnovation (02 Video) Section - Vitrex Medical Group
 *
 * ARCHITECTURAL REFERENCE (Inogen):
 * 1. Inverse Two-Column Layout:
 *    - Left: 16:9 Video container with `DynamicVideoPlayer` using `type="short-2"`.
 *    - Right: Value proposition header, technical intro, and structured bullet list.
 * 2. Visual Theme:
 *    - Consistent cyan `#70CDE3` with subtle geometric hexagon background overlay.
 */
const SurgicalMeshInnovation = () => {
  return (
    <section
      id="surgical-mesh-innovation"
      className="relative w-full py-16 xl:py-24 bg-[#70CDE3] overflow-hidden text-white"
    >
      {/* Background Hexagon Texture */}
      <div
        className="absolute inset-0 bg-[url('/medical/vitrex/bg.webp')] bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay pointer-events-none"
      />

      <div className="custom-container relative z-10">
        <div className="flex flex-col min-[1301px]:flex-row items-center gap-12 min-[3800px]:gap-16 w-full">
          
          {/* Video Content (Left side on Desktop, Bottom on Mobile/Tablet) - matching Deleo w-[60%] above 1300px */}
          <div
            className="w-full min-[1301px]:w-[60%] relative aspect-video overflow-hidden order-2 min-[1301px]:order-1"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text Content (Right side on Desktop, Top on Mobile/Tablet) - matching Deleo w-[40%] above 1300px */}
          <div
            className="w-full min-[1301px]:w-[40%] flex flex-col gap-6 order-1 min-[1301px]:order-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <Typography
              variant="h4"
              color="white"
              className="text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.0625rem] min-[2500px]:text-[1.5625rem] min-[3800px]:text-[2.1875rem] font-bold tracking-wide"
            >
              Surgical Mesh Innovation
            </Typography>

            <Typography
              variant="h2"
              color="white"
              className="text-[1.4375rem] sm:text-[1.8125rem] lg:text-[1.4375rem] xl:text-[1.6875rem] min-[2500px]:text-[2.4375rem] min-[3800px]:text-[3.4375rem] font-bold tracking-tight text-white leading-snug"
            >
              Engineered Composite Support For Demanding Abdominal Wall Repairs
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1.0625rem] min-[2500px]:text-[1.3125rem] min-[3800px]:text-[1.8125rem] leading-relaxed text-white/95"
            >
              Capromesh is a specialised surgical mesh developed to provide dependable reinforcement for weakened abdominal walls and fascial defects. Its unique combination of absorbable copolymer and polypropylene fibres delivers a carefully balanced structure, designed to maintain support while reducing the permanent foreign-body material after absorption.
            </Typography>

            <div className="flex flex-col gap-3 sm:gap-4 mt-2">
              {benefits.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 2k:gap-5 4k:gap-7">
                  <span className="w-2 h-2 2k:w-3.5 2k:h-3.5 4k:w-5 4k:h-5 rounded-full bg-white mt-2 2k:mt-3 4k:mt-4 shrink-0" />
                  <Typography
                    variant="p"
                    color="white"
                    className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[0.9375rem] 2k:text-[1.1875rem] 4k:text-[1.6875rem] leading-relaxed text-white/90"
                  >
                    {point}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SurgicalMeshInnovation;

