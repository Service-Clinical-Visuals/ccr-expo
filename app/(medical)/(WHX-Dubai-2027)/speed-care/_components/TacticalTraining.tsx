/**
 * Tactical Training Section (Train as you fight)
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

const trainingPoints = [
  {
    title: "Realistic Training Experience",
    desc: "Matching shape, feel, and mineral composition to SpeedM®.",
  },
  {
    title: "Confident Emergency Response",
    desc: "Helps teams practise procedures and build confidence for critical situations.",
  },
];

export default function TacticalTraining() {
  return (
    <section id="training" className="w-full py-16 xl:py-24 2k:py-36 4k:py-48 bg-[#EFEFEF] overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-10 xl:gap-14 2k:gap-20 4k:gap-28 w-full">

          {/* Left Column: Description, Points & CTA (40%) */}
          <div
            className="w-full min-[1300px]:w-[40%] flex flex-col space-y-5 sm:space-y-6 2k:space-y-9 4k:space-y-12"
            data-aos="fade-right"
          >
            {/* Tag Badge */}
            <div>
              <Badge text="REALISTIC TACTICAL TRAINING" tone="translucent" />
            </div>

            {/* Section Heading */}
            <Typography
              variant="h2"
              color="gray"
              className="text-xl sm:text-2xl lg:text-[1.6875rem] 2k:text-4xl 4k:text-6xl font-bold leading-snug w-full max-w-full xl:max-w-[70%]"
            >
              Train as you fight – train realistically. Act more safely
            </Typography>

            {/* Description */}
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl leading-relaxed text-[#4B5563]"
            >
              &ldquo;Train as you fight&rdquo; represents a clear principle: training must be as realistic as possible so that procedures, processes, and decisions can be reliably mastered even under operational conditions. For police, military, and rescue services, this can be crucial when every second counts in extreme situations.
            </Typography>

            {/* Feature Bullets */}
            <div className="flex flex-col gap-4 2k:gap-7 4k:gap-10 pt-1">
              {trainingPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4 2k:gap-6 4k:gap-9">
                  {/* Scaled Red Bullet Round */}
                  <span className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 rounded-full bg-[#E62730] flex items-center justify-center shrink-0 mt-1 shadow-xs" />
                  <p className="text-xs sm:text-sm lg:text-base 2k:text-2xl 4k:text-3xl text-[#4B5563] leading-relaxed">
                    <strong className="text-[#333333] font-bold">{point.title}:</strong> {point.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4 2k:pt-6 4k:pt-8">
              <Button
                text="Explore More"
                variant="primary"
                href="#training"
              />
            </div>
          </div>

          {/* Right Column: Video 02 Player (60% - No bg, no border, no shadow - pure aspect-video) */}
          <div
            className="w-full min-[1300px]:w-[60%]"
            data-aos="fade-left"
          >
            <div className="w-full aspect-video rounded-2xl 2k:rounded-3xl 4k:rounded-[2.5rem] overflow-hidden relative">
              <DynamicVideoPlayer
                type="short-2"
                className="w-full h-full aspect-video object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
