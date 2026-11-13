"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

const Catheterization = () => {
  return (
    <section id="catheterization" className="w-full relative bg-white py-12 min-[1300px]:py-20 overflow-hidden">
      {/* Background Soft Pink Block (Rectangle 5 in Figma: Width 1123px, Height 745px, Color #F2E1F0, shadow 0 3px 8px rgba(0,0,0,0.24)) */}
      <div
        className="hidden min-[1300px]:block absolute top-0 left-0 w-[58%] xl:w-[60%] 2xl:w-[58%] h-full bg-[#F2E1F0] shadow-[0_3px_8px_rgba(0,0,0,0.24)] z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="custom-container relative z-10">
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-10 xl:gap-12 w-full">
          {/* Left Column: Text Content Card (Group 1000003767 in Figma: max-w-[533px] on desktop) */}
          {/* Below 1300px follows the full width of custom-container; above 1300px switches to desktop side-by-side */}
          <div
            className="w-full min-[1300px]:w-[40%] min-[1300px]:max-w-[533px] flex flex-col gap-5 min-[1300px]:gap-6 bg-[#F2E1F0] min-[1300px]:bg-transparent p-6 sm:p-8 min-[1300px]:p-0 rounded-none relative z-10"
            data-aos="fade-right"
          >
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Designed For Smooth & Reliable Catheterization
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed text-gray-700 text-sm sm:text-base">
              TRO-UROCATH 2-way silicone balloon catheters combine a smooth silicone-coated surface with a carefully designed structure to support gentle insertion, patient comfort, and reliable bladder drainage.
            </Typography>

            {/* Feature Bullets with magenta filled check circles */}
            <div className="flex flex-col gap-3.5 my-1">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 text-white fill-[#A50469] shrink-0 mt-0.5 min-[2500px]:mt-1.5" />
                <Typography variant="p" color="dark" className="leading-relaxed text-gray-800 text-xs sm:text-sm">
                  <strong className="text-gray-900">Smooth Silicone-Coated Surface</strong> – Helps minimize irritation during insertion and supports patient comfort.
                </Typography>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 text-white fill-[#A50469] shrink-0 mt-0.5 min-[2500px]:mt-1.5" />
                <Typography variant="p" color="dark" className="leading-relaxed text-gray-800 text-xs sm:text-sm">
                  <strong className="text-gray-900">Two-way & Three-Way Options</strong> – Provides flexibility for various clinical applications and drainage needs.
                </Typography>
              </div>
            </div>

            <Typography variant="p" color="muted" className="leading-relaxed text-gray-700 text-xs sm:text-sm">
              Available in two-way and three-way configurations, they feature a reinforced tip, oval drainage eyes, and a color-coded balloon inflation channel to support easy identification and proper placement across different clinical requirements.
            </Typography>

            <div className="pt-2">
              <Button
                text="Discover Product Features"
                variant="primary"
                href="#catheterization"
                showIcon={true}
              />
            </div>
          </div>

          {/* Right Column: Video Container using Deleo technique (aspect-video relative overflow-hidden) */}
          <div
            className="w-full min-[1300px]:w-[60%] relative aspect-video overflow-hidden rounded-none shadow-2xl z-20 shrink-0"
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
};

export default Catheterization;
