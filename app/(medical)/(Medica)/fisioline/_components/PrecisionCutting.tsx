"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Link from "next/link";
import { Check } from "lucide-react";

const PrecisionCutting = () => {
  return (
    <section id="precision" className="w-full py-16 xl:py-24 bg-[#EBEBEB] overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Mobile & Tablet Header (Visible on small screens: Heading first, next video) */}
        <div className="xl:hidden w-full mb-6 sm:mb-8" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="!font-bold leading-tight">
            Precision Cutting &amp; Coagulation
          </Typography>
          <Typography variant="p" color="muted" className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-3 max-w-[90%]">
            LUMIX® SURGERY combines advanced laser technology with precise cutting and coagulation capabilities in one versatile device.
          </Typography>
        </div>

        <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10 min-[3800px]:gap-16 w-full">
          {/* Left: Video Player (Deleo short-1 aspect-video pattern) */}
          <div
            className="w-full xl:w-[60%] relative aspect-video overflow-hidden rounded-[24px] shadow-md bg-black/5"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Dark Blue Content Card - 40% */}
          <div
            className="w-full xl:w-[40%] bg-[#222D83] text-white rounded-[24px] p-7 sm:p-9 md:p-10 min-[2500px]:p-14 min-[3800px]:p-20 flex flex-col justify-between shadow-xl"
            data-aos="fade-left"
          >
            <div>
              {/* Desktop Header (Visible only on xl and above inside the card) */}
              <div className="hidden xl:block">
                <Typography variant="h2" color="white" className="!font-bold leading-tight">
                  Precision Cutting &amp; Coagulation
                </Typography>

                <Typography variant="p" color="white" className="text-white/85 text-xs sm:text-sm leading-relaxed mt-4 xl:max-w-[90%]">
                  LUMIX® SURGERY combines advanced laser technology with precise cutting and coagulation capabilities in one versatile device.
                </Typography>
              </div>

              {/* Checklist - Tecme Technique */}
              <ul className="space-y-4 my-6 sm:my-8 xl:max-w-[90%]">
                <li className="flex items-start gap-3 min-[1920px]:gap-3.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-white text-[#222D83] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 min-[1920px]:w-4 min-[1920px]:h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={3} />
                  </span>
                  <Typography variant="p" color="white" className="text-white/95 text-xs sm:text-sm font-medium leading-snug">
                    Dual Surgical Functions – Combines cutting and coagulation in one device.
                  </Typography>
                </li>

                <li className="flex items-start gap-3 min-[1920px]:gap-3.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-white text-[#222D83] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 min-[1920px]:w-4 min-[1920px]:h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={3} />
                  </span>
                  <Typography variant="p" color="white" className="text-white/95 text-xs sm:text-sm font-medium leading-snug">
                    Optional Therapeutic Mode – Provides continuous, frequenced, and modulated operation.
                  </Typography>
                </li>

                <li className="flex items-start gap-3 min-[1920px]:gap-3.5 min-[2500px]:gap-4 min-[3800px]:gap-6">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-white text-[#222D83] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 min-[1920px]:w-4 min-[1920px]:h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={3} />
                  </span>
                  <Typography variant="p" color="white" className="text-white/95 text-xs sm:text-sm font-medium leading-snug">
                    Multiple Wavelengths – Available in 810 nm, 980 nm, and 1064 nm options.
                  </Typography>
                </li>
              </ul>

              <Typography variant="p" color="white" className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 xl:max-w-[90%]">
                Designed for soft tissue procedures, it offers controlled performance and flexible operating modes to support different surgical requirements.
              </Typography>
            </div>

            {/* Bottom Button with right_arrow.png - Tecme Button Technique */}
            <div className="pt-2 min-[1920px]:pt-3 min-[2500px]:pt-4 min-[3800px]:pt-6">
              <Link
                href="#precision"
                className="h-[44px] sm:h-[48px] md:h-[50px] lg:h-[52px] min-[1920px]:h-[68px] min-[2500px]:h-[84px] min-[3800px]:h-[116px] px-5 sm:px-6 md:px-7 min-[1920px]:px-9 min-[2500px]:px-12 min-[3800px]:px-16 rounded-lg min-[2500px]:rounded-xl min-[3800px]:rounded-2xl bg-white hover:bg-gray-100 text-[#222D83] font-primary font-semibold flex items-center gap-2.5 min-[1920px]:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 text-sm sm:text-base min-[1920px]:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl transition-all w-fit shadow-md group"
              >
                <span>Explore Surgical Benefits</span>
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

export default PrecisionCutting;
