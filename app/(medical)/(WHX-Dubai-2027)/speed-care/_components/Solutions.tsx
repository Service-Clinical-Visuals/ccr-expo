/**
 * Solutions / 360 Video Section
 * Master Reference: Zinnanti Surgical & Inogen Standards
 * - Video container: pure aspect-video with rounded corners only (no bg, no borders, no shadows).
 * - Video player: aspect-video with object-contain so video is not cropped or trimmed.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Badge from "./Badge";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const solutionPoints = [
  {
    title: "Rapid Hemorrhage Control",
    desc: "Designed to help manage severe and life-threatening bleeding.",
  },
  {
    title: "Advanced Hemostatic Technology",
    desc: "Uses mineral-based halloysite technology to support the natural clotting process.",
  },
  {
    title: "Easy Application",
    desc: "Developed for practical use in demanding emergency situations.",
  },
  {
    title: "Versatile Emergency Use",
    desc: "Optimized for tactical medicine, casualty care, and modern emergency medicine.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="w-full py-16 xl:py-24 2k:py-36 4k:py-48 bg-[#EFEFEF] overflow-hidden">
      <div className="custom-container flex flex-col gap-8 sm:gap-10 2k:gap-16 4k:gap-20">

        {/* Top Header Row with Badge & Button */}
        <div className="flex flex-col gap-4 2k:gap-6 4k:gap-8" data-aos="fade-up">
          {/* Badge */}
          <div>
            <Badge text="LIFE-SAVING EMERGENCY SOLUTIONS" tone="translucent" />
          </div>

          {/* Heading and Action Button */}
          <div className="flex flex-col min-[1300px]:flex-row min-[1300px]:items-center justify-between gap-6 2k:gap-10 4k:gap-14">
            <Typography
              variant="h2"
              color="gray"
              className="text-xl sm:text-2xl lg:text-[1.6875rem] 2k:text-4xl 4k:text-6xl font-bold leading-snug w-full max-w-full xl:max-w-[70%]"
            >
              SpeedM® – Always ready for action. Everywhere. Everytime.
            </Typography>

            <div className="shrink-0 self-start min-[1300px]:self-center">
              <Button
                text="Explore More"
                variant="primary"
                href="#solutions"
              />
            </div>
          </div>

          {/* Subtext */}
          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl leading-relaxed text-[#4B5563]"
          >
            Even today, severe bleeding causes preventable deaths in emergencies, with 40% of trauma-related deaths occurring before hospital arrival.
          </Typography>

          {/* Divider line */}
          <div className="w-full h-[1px] 2k:h-[2px] 4k:h-[3px] bg-[#D9D9D9] my-2 2k:my-4 4k:my-6" />
        </div>

        {/* Two-Column Content: Left Checklist & Description (40%) | Right 360 Video Player (60%) */}
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-10 xl:gap-14 2k:gap-20 4k:gap-28 w-full">
          
          {/* Left Column: Description & 4 Points (40%) */}
          <div
            className="w-full min-[1300px]:w-[40%] flex flex-col gap-6 2k:gap-9 4k:gap-12"
            data-aos="fade-right"
          >
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl leading-relaxed text-[#4B5563]"
            >
              SpeedM® Emergency Hemostatic Dressing is designed to control life-threatening bleeding when every second counts. Using advanced mineral-based technology, it supports rapid hemorrhage management, particularly in wounds where conventional methods are ineffective. Optimized for tactical medicine, casualty care, and modern emergency situations, SpeedM® provides an easy-to-use solution for critical bleeding control.
            </Typography>

            {/* Checklist */}
            <div className="flex flex-col gap-4 2k:gap-7 4k:gap-10">
              {solutionPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4 2k:gap-6 4k:gap-9">
                  {/* Scaled Red Bullet Round */}
                  <span className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 rounded-full bg-[#E62730] flex items-center justify-center shrink-0 mt-1 shadow-xs" />
                  <p className="text-xs sm:text-sm lg:text-base 2k:text-2xl 4k:text-3xl text-[#4B5563] leading-relaxed">
                    <strong className="text-[#333333] font-bold">{point.title}:</strong> {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 360° Video Player Container (60% - No bg, no border, no shadow - pure aspect-video) */}
          <div
            className="w-full min-[1300px]:w-[60%]"
            data-aos="fade-left"
          >
            <div className="w-full aspect-video rounded-2xl 2k:rounded-3xl 4k:rounded-[2.5rem] overflow-hidden relative">
              <DynamicVideoPlayer
                type="360"
                className="w-full h-full aspect-video object-contain"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
