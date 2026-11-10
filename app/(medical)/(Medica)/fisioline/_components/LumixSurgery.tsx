"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Link from "next/link";
import { Check } from "lucide-react";

const LumixSurgery = () => {
  return (
    <section id="technologies" className="w-full py-16 xl:py-24 bg-[#222D83] overflow-hidden relative">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        {/* Top Header - max-w-[90%] xl:max-w-[80%] */}
        <div
          className="flex flex-col gap-3 text-center max-w-[90%] xl:max-w-[80%] mx-auto"
          data-aos="fade-up"
        >
          <Typography variant="h2" color="white" className="!font-bold text-center">
            LUMIX® SURGERY For Advanced Surgical Applications
          </Typography>
          <Typography
            variant="p"
            color="white"
            className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed text-center"
          >
            LUMIX® SURGERY is a powerful and versatile surgical laser designed to deliver precise, rapid, and reliable performance across multiple soft tissue applications. Combining cutting and coagulation functions in a single device, it provides healthcare professionals with flexible solutions for different surgical procedures.
          </Typography>
        </div>

        {/* Content Row: 70% | 30% (Deleo aspect-video pattern for short-2) */}
        <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-12 min-[3800px]:gap-16 w-full">
          {/* Left: Video Player - 70% aspect-video relative overflow-hidden */}
          <div
            className="w-full xl:w-[75%] relative aspect-video overflow-hidden rounded-[24px] shadow-2xl bg-white/5"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Info Column - 30% */}
          <div
            className="w-full xl:w-[25%] text-white flex flex-col justify-between"
            data-aos="fade-left"
          >
            <div>
              <Typography variant="h3" color="white" className="!font-bold text-xl sm:text-2xl leading-tight">
                Additional Advantages
              </Typography>

              <Typography variant="p" color="white" className="text-white/80 text-xs sm:text-sm leading-relaxed mt-3">
                Designed to support modern surgical practices, LUMIX® SURGERY helps minimize tissue impact, reduce post-surgical discomfort, and promote better healing outcomes.
              </Typography>

              {/* Checklist - Tecme Technique */}
              <ul className="space-y-4 my-6 sm:my-8">
                <li className="flex items-start gap-3 min-[1920px]:gap-3.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-white text-[#222D83] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 min-[1920px]:w-4 min-[1920px]:h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={3} />
                  </span>
                  <Typography variant="p" color="white" className="text-white/95 text-xs sm:text-sm font-medium leading-snug">
                    Enhanced Surgical Precision – Supports accurate cutting, especially in delicate microsurgical procedures.
                  </Typography>
                </li>

                <li className="flex items-start gap-3 min-[1920px]:gap-3.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-white text-[#222D83] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 min-[1920px]:w-4 min-[1920px]:h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={3} />
                  </span>
                  <Typography variant="p" color="white" className="text-white/95 text-xs sm:text-sm font-medium leading-snug">
                    Reduced Post-Surgical Effects – Helps minimize swelling, pain, and tissue trauma for greater patient comfort.
                  </Typography>
                </li>

                <li className="flex items-start gap-3 min-[1920px]:gap-3.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-white text-[#222D83] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 min-[1920px]:w-4 min-[1920px]:h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={3} />
                  </span>
                  <Typography variant="p" color="white" className="text-white/95 text-xs sm:text-sm font-medium leading-snug">
                    Better Healing Outcomes – Supports tissue recovery with improved aesthetic results and smoother healing processes.
                  </Typography>
                </li>
              </ul>

              <Typography variant="p" color="white" className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                Its advanced laser technology makes it a versatile solution for both routine procedures and delicate microsurgical applications.
              </Typography>
            </div>

            {/* Bottom Button with right_arrow.png - Tecme Button Technique */}
            <div className="pt-2 min-[1920px]:pt-3 min-[2500px]:pt-4 min-[3800px]:pt-6">
              <Link
                href="#technologies"
                className="h-[44px] sm:h-[48px] md:h-[50px] lg:h-[52px] min-[1920px]:h-[68px] min-[2500px]:h-[84px] min-[3800px]:h-[116px] px-5 sm:px-6 md:px-7 min-[1920px]:px-9 min-[2500px]:px-12 min-[3800px]:px-16 rounded-lg min-[2500px]:rounded-xl min-[3800px]:rounded-2xl bg-white hover:bg-gray-100 text-[#222D83] font-semibold flex items-center gap-2.5 min-[1920px]:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 text-sm sm:text-base min-[1920px]:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl transition-all w-fit shadow-md group"
              >
                <span>View Technical Specifications</span>
                <img
                  src="/medical/fisioline/right_arrow.webp"
                  alt="arrow"
                  className="w-3.5 sm:w-4 min-[1920px]:w-4.5 min-[2500px]:w-6 min-[3800px]:w-8 h-auto object-contain [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(85%)_saturate(3021%)_hue-rotate(228deg)] group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LumixSurgery;
