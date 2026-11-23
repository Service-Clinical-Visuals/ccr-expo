/**
 * SurgicalControl Section (Video Clip 02) - PAJUNK
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Background & Styling:
 *    - Brand dark pine green background `#144835`.
 * 2. Two-Column Split Layout:
 *    - Left: Video Player container using `DynamicVideoPlayer` (`type="short-2"`) with 16:9 ratio.
 *    - Right: Tag, Heading, intro text, two dark feature cards (`#0A1F17`), and outline CTA button.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Sparkles, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "No Tools Required",
    description: "Tactile quick-release push button allows nursing staff to segregate the handle, inner rod, and outer insulation sheath instantly.",
    icon: Sparkles,
  },
  {
    title: "Validated Automated WD Cycles",
    description: "Fully compatible with standard automated washer-disinfectors (A0 value > 3000) and steam autoclave cycles at 134°C.",
    icon: ShieldCheck,
  },
];

const SurgicalControl = () => {
  return (
    <section id="surgical-control" className="w-full py-16 xl:py-24 bg-[#144835] text-white overflow-hidden">
      <div className="custom-container">

        {/* Mobile & Tablet Heading (Appears before video on screens up to 1300px) */}
        <div className="block min-[1301px]:hidden w-full space-y-2 mb-8 text-center sm:text-left" data-aos="fade-up">
          <Typography
            variant="tag-badge"
            color="white"
            className="tracking-widest text-xs sm:text-sm font-semibold opacity-90"
          >
            ENGINEERED FOR SURGICAL CONTROL
          </Typography>

          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl font-bold tracking-tight"
          >
            Precision Handling. Seamless Performance.
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="text-white/80 text-sm sm:text-base leading-relaxed pt-1"
          >
            Discover the advanced functionality of PAJUNK&apos;s laparoscopic instruments, designed with ergonomic handles, precise mechanical control and 360° rotation to support smooth and efficient surgical procedures.
          </Typography>
        </div>

        <div className="flex flex-col min-[1301px]:flex-row items-center gap-10 min-[1301px]:gap-14 w-full">

          {/* Video Container (Left on desktop from 1301px, directly follows heading up to 1300px) */}
          <div className="w-full min-[1301px]:w-[50%] self-center" data-aos="fade-right">
            <div className="relative w-full aspect-video rounded-[6px] overflow-hidden shadow-2xl border border-white/10 bg-black/40">
              <DynamicVideoPlayer
                type="short-2"
                className="absolute inset-0 w-full h-full aspect-video object-cover"
              />
            </div>
          </div>

          {/* Right Column: Heading (desktop from 1301px), Feature Cards & CTA */}
          <div className="w-full min-[1301px]:w-[50%] flex flex-col gap-6" data-aos="fade-left">

            {/* Desktop Heading (Hidden up to 1300px because it is displayed above the video) */}
            <div className="hidden min-[1301px]:block space-y-2">
              <Typography
                variant="tag-badge"
                color="white"
                className="tracking-widest text-xs sm:text-sm font-semibold opacity-90"
              >
                ENGINEERED FOR SURGICAL CONTROL
              </Typography>

              <Typography
                variant="h2"
                color="white"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
              >
                Precision Handling. Seamless Performance.
              </Typography>

              <Typography
                variant="p"
                color="white"
                className="text-white/80 text-sm sm:text-base leading-relaxed pt-1"
              >
                Discover the advanced functionality of PAJUNK&apos;s laparoscopic instruments, designed with ergonomic handles, precise mechanical control and 360° rotation to support smooth and efficient surgical procedures.
              </Typography>
            </div>

            {/* Feature Cards */}
            <div className="space-y-3.5 2k:space-y-6 4k:space-y-8">
              {features.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#0A1F17] rounded-[4px] 2k:rounded-[8px] 4k:rounded-[12px] p-4 sm:p-5 2k:p-8 4k:p-12 flex flex-col gap-1.5 2k:gap-3 4k:gap-4 border border-white/5 shadow-md"
                  >
                    <div className="flex items-center gap-2.5 2k:gap-4 4k:gap-6">
                      <div className="w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-[#E1EB52] shrink-0">
                        <IconComponent className="w-full h-full" />
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-white/70 pl-6.5 2k:pl-11 4k:pl-16">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                text="Explore Products"
                variant="outline"
                href="#products"
                showIcon={true}
                className="!py-2.5 !px-6 text-sm"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SurgicalControl;

