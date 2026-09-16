"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function HipReplacement() {
  return (
    <section
      id="hip-replacement"
      className="relative w-full py-16 lg:py-24 xl:py-28 bg-white overflow-hidden"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/medical/str/bg.png"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="custom-container relative z-10">
        <div className="flex flex-col xl:flex-row items-center gap-12 min-[3800px]:gap-16 w-full">
          {/* Video Content (Left side on Desktop, Bottom on Mobile/Tablet) */}
          <div
            className="w-full xl:w-[60%] relative aspect-video overflow-hidden order-2 xl:order-1 rounded-[5px] shadow-sm border border-gray-200 bg-[#E5E7EB]"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover rounded-[5px]"
            />
          </div>

          {/* Text Content (Right side on Desktop, Top on Mobile/Tablet) */}
          <div
            className="flex flex-col gap-6 w-full xl:w-[40%] order-1 xl:order-2"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-5 bg-[#F6821F]" />
              <Typography
                variant="h4"
                color="primary"
                className="!font-semibold uppercase tracking-wide"
              >
                Total Hip Replacement
              </Typography>
            </div>

            <Typography variant="h2" color="dark">
              Advanced Hip Replacement Designed for Natural Movement
            </Typography>

            <div className="flex flex-col gap-4 text-left">
              <Typography variant="p" color="muted" className="leading-relaxed">
                WIND Total Hip Replacement is a precision-engineered orthopedic
                implant system designed to support anatomical compatibility,
                stable fixation, and long-term performance. The comprehensive
                system includes femoral stems, acetabular cups, UHMWPE liners,
                and femoral heads in multiple sizes and configurations,
                providing surgeons with flexibility to address different patient
                anatomies and surgical requirements.
              </Typography>

              <Typography variant="p" color="muted" className="leading-relaxed">
                Advanced HA surface technology further supports implant
                integration, while the carefully designed components work
                together to promote stable and comfortable hip movement.
              </Typography>
            </div>

            <div className="pt-2">
              <Button variant="outline-orange" href="#products">
                Explore WIND System
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
