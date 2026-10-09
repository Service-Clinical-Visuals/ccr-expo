"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import { Check } from "lucide-react";

const Deg360 = () => {
  const features = [
    {
      title: "Advanced Engine Protection",
      description: "Helps reduce friction and wear across critical engine components, supporting dependable operation.",
    },
    {
      title: "Cold-Start Performance",
      description: "The 5W viscosity grade supports oil flow during cold starts under suitable operating conditions.",
    },
    {
      title: "Everyday Driving Reliability",
      description: "Supports consistent engine operation for compatible vehicles under routine driving conditions.",
    },
  ];

  return (
    <section id="experience-360" className="w-full py-16 xl:py-24 bg-[#1C1C1C] overflow-hidden relative">
      <div className="custom-container relative z-10 flex flex-col gap-8 xl:gap-10">
        {/* Centered Heading & Intro with Watermark */}
        <div className="relative pt-6 sm:pt-8 md:pt-10 pb-0 flex flex-col items-center text-center" data-aos="fade-up">
          {/* Giant Watermark centered directly behind header text on mobile/tablet, keeping desktop layout */}
          <div className="absolute top-1 sm:top-2 md:top-4 xl:top-auto xl:bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 max-w-[95%] sm:max-w-[90%] xl:max-w-[80%] overflow-hidden flex justify-center items-start xl:items-end">
            <span className="watermark !text-[clamp(48px,9.2vw,185px)] min-[2500px]:!text-[270px] min-[3800px]:!text-[380px] text-center leading-none">
              View In 360
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center gap-3 w-full max-w-[90%] xl:max-w-[80%] mx-auto">
            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-[38px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-normal uppercase tracking-wide leading-tight w-full max-w-[90%] xl:max-w-[80%] mx-auto"
            >
              360° Video View
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed text-gray-300 font-normal w-full max-w-[90%] xl:max-w-[80%] mx-auto"
            >
              Take a closer look at Bardahl Syn-Polar N SAE 5W-30 through an interactive 360° experience.
              Explore its advanced lubrication technology, engine protection benefits, and performance-focused
              formulation designed to support smooth operation and reliable engine care for compatible vehicles.
            </Typography>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/20" />

        {/* 2-Column Content: Left Video, Right Details (tablet layout up to 1300px) */}
        <div className="flex flex-col min-[1301px]:flex-row items-center gap-8 xl:gap-12 w-full">
          {/* Left Column: 360 Video Player using Deleo aspect-video technique */}
          <div
            className="w-full min-[1301px]:w-[58%] rounded-[20px] overflow-hidden aspect-video relative bg-black/50 border border-white/10 shadow-2xl"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Specs & Feature Points */}
          <div
            className="w-full min-[1301px]:w-[42%] flex flex-col gap-5 xl:gap-6"
            data-aos="fade-left"
          >
            <Typography
              variant="h3"
              color="white"
              className="text-xl sm:text-2xl lg:text-[26px] min-[2500px]:text-4xl min-[3800px]:text-5xl font-normal uppercase tracking-wide"
            >
              Bardahl Syn-Polar N SAE 5W-30
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed text-gray-300"
            >
              Discover advanced lubrication technology with Bardahl Syn-Polar N SAE 5W-30, developed to support
              engine protection, smooth operation, and dependable performance. Designed for compatible vehicles,
              this motor oil helps reduce friction between moving components, supports lubrication during cold
              starts, and helps maintain engine cleanliness under normal driving conditions. Experience Bardahl’s
              commitment to automotive care with a lubrication solution focused on reliability, efficiency, and
              consistent engine performance.
            </Typography>

            {/* Checklist Items */}
            <ul className="flex flex-col gap-3.5 pt-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 rounded-full bg-[#F8EA17] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 min-[3800px]:w-7 min-[3800px]:h-7 text-black stroke-[3]" />
                  </div>
                  <Typography
                    variant="p"
                    color="muted"
                    className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-snug text-gray-200"
                  >
                    <strong className="text-white font-medium">{feature.title}</strong> – {feature.description}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deg360;
