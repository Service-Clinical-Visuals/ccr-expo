"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const PerformanceTrust = () => {
  const points = [
    {
      title: "Wear Protection",
      description: "Helps minimize friction between moving parts and protect essential engine components.",
    },
    {
      title: "Temperature Performance",
      description: "Supports effective lubrication during cold starts and normal operating temperatures.",
    },
    {
      title: "Engine Cleanliness",
      description: "Helps control deposit formation and maintain consistent engine performance.",
    },
  ];

  return (
    <section id="specifications" className="w-full py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-[#0D0D0D] overflow-hidden relative">
      <div className="custom-container relative min-h-[500px] min-[1301px]:min-h-[640px] min-[1536px]:min-h-[700px] min-[2500px]:min-h-[850px] min-[3800px]:min-h-[1100px] flex items-center">
        {/* Grey background (Rectangle 5) extending from far left edge to ~48% of custom-container */}
        <div className="absolute top-0 -left-[100vw] w-[calc(100vw+100%)] min-[1301px]:w-[calc(100vw+46%)] min-[1536px]:w-[calc(100vw+48%)] h-full rounded-none min-[1301px]:rounded-r-[24px] bg-[#121111] shadow-[0_8px_16px_rgba(0,0,0,0.35)] pointer-events-none z-0" />

        {/* Content Layout: tablet layout up to 1300px, desktop row from 1301px up to 4K */}
        <div className="relative z-10 w-full flex flex-col min-[1301px]:flex-row items-center justify-between gap-8 min-[1301px]:gap-10 min-[1536px]:gap-12 min-[2500px]:gap-16 py-8 min-[1301px]:py-12">
          {/* Left Column: Proportional percentage width (~42%-44%) with responsive typography */}
          <div
            className="w-full min-[1301px]:w-[44%] min-[1536px]:w-[42%] shrink-0 flex flex-col justify-between gap-4 sm:gap-5 min-[2500px]:gap-8 min-[3800px]:gap-12"
            data-aos="fade-right"
          >
            {/* Title */}
            <Typography
              variant="h3"
              color="white"
              className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-normal uppercase tracking-wide leading-tight"
            >
              Performance You Can Trust With Bardahl
            </Typography>

            {/* Paragraph 1 */}
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed text-gray-300 font-normal"
            >
              Bardahl Syn-Polar N SAE 5W-30 is designed to provide reliable lubrication for compatible engines.
              Its carefully formulated oil technology supports engine protection, smooth operation, and
              dependable performance across everyday driving conditions
            </Typography>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 min-[2500px]:gap-5 my-0.5">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3 min-[2500px]:gap-4">
                  <div className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 rounded-full bg-[#F8EA17] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 text-black stroke-[3]" />
                  </div>
                  <Typography
                    variant="p"
                    color="muted"
                    className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-xl leading-snug text-gray-200"
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
              className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed text-gray-300 font-normal"
            >
              Always check the vehicle manufacturer's recommendations to confirm the correct oil specification
              and compatibility.
            </Typography>

            {/* Button */}
            <div className="pt-1 min-[2500px]:pt-3">
              <Button
                text="View Specifications"
                variant="pill"
                href="#specifications"
                showIcon={true}
                iconDirection="up-right"
              />
            </div>
          </div>

          {/* Right Column: Proportional percentage width (~52%-54%) filling up to 4K */}
          <div
            className="w-full min-[1301px]:w-[52%] min-[1536px]:w-[54%] aspect-[16/10] sm:aspect-[1020/703] relative overflow-hidden rounded-[20px] min-[2500px]:rounded-[30px] bg-black/50 border border-white/10 shadow-2xl shrink-0"
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

export default PerformanceTrust;
