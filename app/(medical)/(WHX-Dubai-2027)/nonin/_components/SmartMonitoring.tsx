/**
 * SmartMonitoring Section (SMART MONITORING. SEAMLESS CONNECTIVITY.)
 * Master Reference: Inogen Development Standards
 * Visuals:
 * - 2-Column Split:
 *   - Left: 4 interactive/collapsible chapter items (#01 Device BLE Discovery, #02 Continuous Overnight, #03 Automated Cloud Sync, #04 CMS Diagnostic Report)
 *     followed by "Explore Product" CTA button.
 *   - Right: Video Container (DynamicVideoPlayer type="short-1")
 */
"use client";

import React, { useState } from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const chapters = [
  {
    num: "01",
    title: "Device BLE Discovery & Pairing",
    description: "Instant encrypted pairing with iOS/Android tablet via NoninConnect.",
  },
  {
    num: "02",
    title: "Continuous Overnight Monitoring",
    description: "Soft sensor ergonomics and motion artifact filtering during sleep stages.",
  },
  {
    num: "03",
    title: "Automated Cloud Sync",
    description: "Instant data offload to Nonin Health platform without physician portal delays.",
  },
  {
    num: "04",
    title: "CMS Diagnostic Report Output",
    description: "1-click generation of desaturation index and qualifying summary for Medicare.",
  },
];

const SmartMonitoring = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <section id="smart-monitoring" className="w-full py-16 xl:py-24 bg-[#F2F3F4] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">

        {/* Section Header Row: Title on Left, Description on Right */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="space-y-2 w-full max-w-full xl:max-w-[70%]">
            <span className="text-[#2A96C2] font-heading font-bold text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl uppercase tracking-widest block">
              SMART MONITORING. SEAMLESS CONNECTIVITY.
            </span>
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-[32px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-black"
            >
              Reliable Monitoring, Wherever Care Takes You
            </Typography>
          </div>

          <div className="w-full max-w-full xl:max-w-[70%] lg:text-right">
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl text-[#111111] leading-relaxed w-full max-w-full xl:max-w-[100%]"
            >
              Experience the WristOx₂® Model 3150 with Bluetooth® Low Energy, combining compact wrist-worn comfort, advanced PureSAT® technology and wireless data connectivity for convenient, continuous SpO₂ monitoring.
            </Typography>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-[#293646]/20" />

        {/* Content Row: 4 Chapters (Left) & Video Clip 01 (Right) - Stacks up to 1450px, side-by-side above 1450px */}
        <div className="flex flex-col min-[1451px]:flex-row items-start gap-8 min-[1451px]:gap-12 w-full">

          {/* Left Column: Chapters (38% above 1450px) */}
          <div
            className="w-full min-[1451px]:w-[38%] flex flex-col gap-3.5 sm:gap-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {chapters.map((ch, idx) => {
              const isActive = activeChapter === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveChapter(idx)}
                  className={`p-4 sm:p-5 rounded-[8px] cursor-pointer transition-all duration-300 ${isActive
                    ? "bg-[#0F1C2C] text-white shadow-md"
                    : "bg-[#0F1C2C]/90 hover:bg-[#0F1C2C] text-white/90"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#75D1FF] font-heading font-bold text-sm sm:text-base min-[2500px]:text-xl">
                      {ch.num}
                    </span>
                    <h3 className="text-[#75D1FF] font-heading font-bold text-sm sm:text-base min-[2500px]:text-xl">
                      {ch.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm min-[2500px]:text-lg text-white/90 leading-relaxed font-body mt-2 pl-7">
                    {ch.description}
                  </p>
                </div>
              );
            })}

            {/* Bottom Explore Button */}
            <div className="pt-2 self-start">
              <Button
                text="Explore Product"
                href="#products"
                showIcon={true}
                className="px-6 py-2.5 min-[2500px]:px-9 min-[2500px]:py-3.5 min-[3800px]:px-14 min-[3800px]:py-5"
              />
            </div>
          </div>

          {/* Right Column: Video Clip 01 (62% above 1450px) */}
          <div
            className="w-full min-[1451px]:w-[62%] aspect-video relative overflow-hidden rounded-[5px]"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default SmartMonitoring;

