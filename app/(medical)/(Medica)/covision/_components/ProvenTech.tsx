"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const ProvenTech = () => {
  return (
    <section
      id="proven-technology"
      className="w-full py-16 xl:py-24 min-[3800px]:py-36 bg-[#164160] overflow-hidden text-white"
    >
      <div className="custom-container flex flex-col gap-8 xl:gap-0">
        {/* Mobile & Tablet Header: Displayed first on screens < xl */}
        <div className="flex xl:hidden flex-col gap-4 w-full md:max-w-[90%] mx-auto" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <div className="w-[27px] h-[4px] bg-[#FB8021] rounded-full shrink-0"></div>
            <Typography
              variant="h4"
              color="primary"
              className="!font-bold tracking-wider uppercase"
            >
              PROVEN TECHNOLOGY
            </Typography>
          </div>

          <Typography variant="h2" color="white" className="!font-bold leading-tight">
            Proven Technologies, Comprehensive Solutions
          </Typography>

          <Typography variant="p" color="white" className="leading-relaxed text-gray-200">
            Covision’s implant designs use well-proven technologies with a history of excellent
            clinical outcomes, supporting cemented, cementless, hybrid, and reverse hybrid
            approaches.
          </Typography>
        </div>

        {/* Content Row: 70% | 30% desktop split */}
        <div className="flex flex-col xl:flex-row items-center gap-8 xl:gap-10 2xl:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24 w-full">
          {/* Video Content: 70% on desktop - object-contain ensures short-1 video is NEVER cropped */}
          <div
            className="w-full xl:w-[70%] relative aspect-video overflow-hidden rounded-xl shadow-2xl border border-white/10 bg-black/40"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

          {/* Right Column: 30% on desktop */}
          <div
            className="flex flex-col gap-5 min-[3800px]:gap-8 w-full xl:w-[30%]"
            data-aos="fade-left"
          >
            {/* Desktop Only Header */}
            <div className="hidden xl:flex flex-col gap-4 min-[3800px]:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-[27px] min-[3800px]:w-14 h-[4px] min-[3800px]:h-2 bg-[#FB8021] rounded-full shrink-0"></div>
                <Typography
                  variant="h4"
                  color="primary"
                  className="!font-bold tracking-wider uppercase"
                >
                  PROVEN TECHNOLOGY
                </Typography>
              </div>

              <Typography variant="h2" color="white" className="!font-bold leading-tight text-xl 2xl:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl">
                Proven Technologies, Comprehensive Solutions
              </Typography>

              <Typography variant="p" color="white" className="leading-relaxed text-gray-200 text-sm 2xl:text-base min-[3800px]:text-2xl">
                Covision’s implant designs use well-proven technologies with a history of excellent
                clinical outcomes, supporting cemented, cementless, hybrid, and reverse hybrid
                approaches.
              </Typography>
            </div>

            {/* Points White Card with Orange Offset Accent */}
            <div className="relative mt-1">
              {/* Orange backdrop offset */}
              <div className="absolute inset-0 -translate-x-1.5 translate-y-1.5 bg-[#FB8021] rounded-xl z-0" />

              {/* White card */}
              <div className="relative z-10 bg-white rounded-xl p-5 sm:p-6 min-[3800px]:p-10 flex flex-col gap-4 min-[3800px]:gap-6 text-[#333333] shadow-md border-2 border-white">
                {/* Item 1 */}
                <div className="flex flex-col gap-1">
                  <Typography
                    variant="h4"
                    color="dark"
                    className="!font-bold text-base 2xl:text-lg min-[3800px]:text-2xl text-[#333333]"
                  >
                    1 — Proven Implant Technologies
                  </Typography>
                  <Typography
                    variant="p"
                    color="muted"
                    className="text-xs sm:text-sm 2xl:text-base min-[3800px]:text-xl leading-relaxed pl-4 text-[#4B5563]"
                  >
                    Well-established designs developed to support reliable clinical outcomes.
                  </Typography>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col gap-1">
                  <Typography
                    variant="h4"
                    color="dark"
                    className="!font-bold text-base 2xl:text-lg min-[3800px]:text-2xl text-[#333333]"
                  >
                    2 — Comprehensive Surgical Solutions
                  </Typography>
                  <Typography
                    variant="p"
                    color="muted"
                    className="text-xs sm:text-sm 2xl:text-base min-[3800px]:text-xl leading-relaxed pl-4 text-[#4B5563]"
                  >
                    Cemented, cementless, hybrid, and reverse hybrid options for diverse implant
                    requirements.
                  </Typography>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-1">
              <Button
                text="Explore More"
                variant="outline"
                href="#proven-technology"
                showIcon={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenTech;
