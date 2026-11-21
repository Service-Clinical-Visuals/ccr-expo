"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

/**
 * CompositeMeshVideo (01 Video) Section - Vitrex Medical Group
 *
 * ARCHITECTURAL REFERENCE (Inogen):
 * 1. Two-Column Asymmetric Layout:
 *    - Left: Deep technical narrative with dual paragraphs constrained for comfortable line length.
 *    - Right: 16:9 Video container with standard `aspect-video` and `DynamicVideoPlayer` with `type="short-1"`.
 * 2. Visual Theme:
 *    - Cyan `#70CDE3` background with hexagon pattern overlay `bg.webp`.
 * 3. Breakpoint Strategy:
 *    - Responsive stacking on mobile/tablet (`flex-col lg:flex-row`).
 */
const CompositeMeshVideo = () => {
  return (
    <section
      id="composite-mesh"
      className="relative w-full py-16 xl:py-24 bg-[#70CDE3] overflow-hidden text-white"
    >
      {/* Background Hexagon Texture */}
      <div
        className="absolute inset-0 bg-[url('/medical/vitrex/bg.webp')] bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay pointer-events-none"
      />

      <div className="custom-container relative z-10">
        <div className="flex flex-col min-[1301px]:flex-row items-center gap-12 min-[3800px]:gap-16 w-full">
          
          {/* Text Content (Left side on Desktop, Top on Mobile/Tablet) - matching Deleo w-[40%] above 1300px */}
          <div
            className="flex flex-col gap-6 w-full min-[1301px]:w-[40%]"
            data-aos="fade-right"
          >
            <Typography
              variant="h4"
              color="white"
              className="text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.0625rem] min-[2500px]:text-[1.5625rem] min-[3800px]:text-[2.1875rem] font-bold tracking-wide"
            >
              Composite Mesh Technology
            </Typography>

            <Typography
              variant="h2"
              color="white"
              className="text-[1.4375rem] sm:text-[1.8125rem] lg:text-[1.4375rem] xl:text-[1.6875rem] min-[2500px]:text-[2.4375rem] min-[3800px]:text-[3.4375rem] font-bold tracking-tight text-white leading-snug"
            >
              A Purpose-Built Composite Mesh For Abdominal Wall Reinforcement
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1.0625rem] min-[2500px]:text-[1.3125rem] min-[3800px]:text-[1.8125rem] leading-relaxed text-white/95"
            >
              Capromesh features an advanced dual-material construction, combining an absorbable PGA/PCL copolymer with permanent polypropylene fibres. Designed for hernia repair and fascial defect treatment, its carefully engineered mesh structure provides lasting reinforcement while minimising the amount of permanent material remaining after absorption.
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1.0625rem] min-[2500px]:text-[1.3125rem] min-[3800px]:text-[1.8125rem] leading-relaxed text-white/95"
            >
              Combines an absorbable glycolide-caprolactone copolymer with polypropylene fibres in a sterile composite mesh, where the absorbable component resorbs over approximately 90–120 days, leaving the polypropylene mesh to provide lasting reinforcement. Its monofilament construction is designed to reduce the risks of infection and inflammation while maintaining stability when trimmed.
            </Typography>
          </div>

          {/* Video Content (Right side on Desktop, Bottom on Mobile/Tablet) - matching Deleo w-[60%] above 1300px */}
          <div
            className="w-full min-[1301px]:w-[60%] relative aspect-video overflow-hidden"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompositeMeshVideo;

