"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const EngineLubrication = () => {
  const points = [
    {
      title: "Enhanced Engine Protection",
      description: "Helps minimize friction and wear across essential engine components.",
    },
    {
      title: "Temperature Performance",
      description: "Helps provide lubrication during cold starts and normal operating temperatures.",
    },
    {
      title: "Dependable Performance",
      description: "Supports consistent engine operation during daily driving and regular use.",
    },
  ];

  return (
    <section id="technology" className="w-full py-16 xl:py-24 bg-[#121111] overflow-hidden relative">
      {/* Figma Rectangle 5: Subtle horizontal band across the full width behind the top half */}
      <div className="absolute top-12 sm:top-16 xl:top-20 left-0 w-full h-[240px] sm:h-[280px] xl:h-[324px] bg-white/[0.04] pointer-events-none z-0" />

      <div className="custom-container relative z-10">
        {/* Watermark matching other sections - right aligned */}
        <div className="relative mb-6 sm:mb-10 xl:mb-14 pointer-events-none select-none z-0" data-aos="fade-up">
          <div className="absolute -top-6 sm:-top-10 md:-top-14 xl:-top-16 right-0 max-w-[90%] xl:max-w-[80%] overflow-hidden flex justify-end">
            <span className="watermark !text-[clamp(48px,9.2vw,185px)] min-[2500px]:!text-[270px] min-[3800px]:!text-[380px] leading-none text-right">
              BARDAHL
            </span>
          </div>
        </div>

        {/* 2-Column Content: Left Video (1020x703) & Right Card (533x628), tablet layout up to 1300px */}
        <div className="flex flex-col min-[1301px]:flex-row items-center min-[1301px]:items-end justify-center gap-6 min-[1301px]:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full relative z-10">
          {/* Left Column: Video Clip 01 matching Figma proportion with percentage width */}
          <div
            className="w-full min-[1301px]:w-[58%] min-[1536px]:w-[62%] aspect-[1020/703] relative overflow-hidden rounded-[20px] min-[2500px]:rounded-[32px] min-[3800px]:rounded-[44px] bg-black/50 border border-white/10 shadow-2xl shrink-0 order-2 min-[1301px]:order-1"
            data-aos="fade-up"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Feature Card with percentage width, bottom-aligned with video and scaled on 4K */}
          <div
            className="w-full min-[1301px]:w-[40%] min-[1536px]:w-[36%] min-[1301px]:min-h-[628px] min-[2500px]:min-h-[920px] min-[3800px]:min-h-[1350px] shrink-0 bg-[#141414] border border-white/10 rounded-[20px] min-[2500px]:rounded-[32px] min-[3800px]:rounded-[44px] p-6 sm:p-8 xl:p-9 min-[2500px]:p-14 min-[3800px]:p-20 shadow-2xl flex flex-col justify-between gap-4 sm:gap-5 min-[2500px]:gap-8 min-[3800px]:gap-12 relative z-10 order-1 min-[1301px]:order-2"
            data-aos="fade-up"
          >
            {/* Title - Clean Anton title case matching Figma */}
            <Typography
              variant="h3"
              color="white"
              className="text-2xl sm:text-[26px] xl:text-[28px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-normal uppercase tracking-wide leading-tight"
            >
              Reliable Engine Lubrication
            </Typography>

            {/* Paragraph 1 */}
            <Typography
              variant="p"
              color="muted"
              className="text-xs sm:text-sm min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed text-gray-300 font-normal"
            >
              Bardahl Syn-Polar N SAE 5W-30 is developed to support modern engine requirements through
              effective lubrication, dependable protection, and consistent performance.
            </Typography>

            {/* Checklist matching Figma */}
            <ul className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 my-0.5 min-[2500px]:my-2">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 min-[2500px]:gap-5">
                  <div className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-[#F8EA17] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9 text-black stroke-[3]" />
                  </div>
                  <Typography
                    variant="p"
                    color="muted"
                    className="text-xs sm:text-sm min-[2500px]:text-xl min-[3800px]:text-2xl leading-snug text-gray-300"
                  >
                    <strong className="text-white font-medium">{point.title}</strong> – {point.description}
                  </Typography>
                </li>
              ))}
            </ul>

            {/* Paragraph 2 */}
            <Typography
              variant="p"
              color="muted"
              className="text-xs sm:text-sm min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed text-gray-300 font-normal"
            >
              Designed for compatible vehicles, it helps reduce friction between moving components, supports
              smooth engine operation, and helps maintain internal engine cleanliness.
            </Typography>

            {/* Button - Grey capsule with attached yellow circle */}
            <div className="pt-1 min-[2500px]:pt-3 min-[3800px]:pt-5">
              <Button
                text="View Products Details"
                variant="pill"
                href="#products"
                showIcon={true}
                iconDirection="up-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineLubrication;
