"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Search, Target, Shield, Hand } from "lucide-react";

/**
 * ExploreTechnology Section - Sunoptic Surgical
 * Matches Figma specifications:
 * - Background: Dark Navy #0B1A30.
 * - Left Column: Interactive 360 viewer or technology video player with aspect-video and object-cover.
 * - Right Column: White card with product title, description, 4 feature badges scaling to 2k/4k, and CTA button.
 * - Responsive: Stacks vertically up to 1035px, 2-column layout from 1036px.
 */
const ExploreTechnology = () => {
  const features = [
    {
      title: "High-Quality Instruments",
      icon: <Search className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 text-[#409BBD]" />,
    },
    {
      title: "Precision Engineering",
      icon: <Target className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 text-[#409BBD]" />,
    },
    {
      title: "Robust Construction",
      icon: <Shield className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 text-[#409BBD]" />,
    },
    {
      title: "Adjustable Positioning",
      icon: <Hand className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 text-[#409BBD]" />,
    },
  ];

  return (
    <section id="technology" className="w-full py-16 xl:py-24 bg-[#0B1A30] text-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1036px]:flex-row sunoptic-split-row items-center gap-10 xl:gap-14 w-full">

          {/* Video Container (Desktop 60% left, Mobile/Tablet order 2 below heading) */}
          <div
            className="w-full min-[1036px]:w-[60%] sunoptic-col-60 sunoptic-mobile-order-second sunoptic-desktop-order-1 order-2 min-[1036px]:order-1 aspect-video relative rounded-[10px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl flex items-center justify-center"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full aspect-video object-cover"
            />
          </div>

          {/* White Feature Card (Desktop 40% right, Mobile/Tablet order 1 above video) */}
          <div
            className="w-full min-[1036px]:w-[40%] sunoptic-col-40 sunoptic-mobile-order-first sunoptic-desktop-order-2 order-1 min-[1036px]:order-2 bg-white rounded-[5px] shadow-[0px_2px_8px_rgba(0,0,0,0.15)] p-6 sm:p-8 xl:p-10 flex flex-col gap-6 text-[#111111]"
            data-aos="fade-left"
          >
            <div className="space-y-2 text-center min-[1036px]:text-left">
              <Typography
                variant="eyebrow"
                className="!text-[#409BBD] font-semibold text-xs sm:text-sm tracking-wider"
              >
                EXPLORE OUR TECHNOLOGY
              </Typography>
              <Typography
                variant="h3"
                color="dark"
                className="text-xl sm:text-2xl xl:text-3xl font-bold font-['Palanquin',sans-serif] leading-snug"
              >
                Sunoptic Battery Operated LED Surgical Headlight
              </Typography>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#444444] font-['DM_Sans',sans-serif] text-center min-[1036px]:text-left">
              Explore the Sunoptic Battery Operated LED Headlight from every angle, highlighting its lightweight design, adjustable positioning and advanced LED illumination for enhanced surgical visibility and comfort. Its battery-powered operation offers flexibility and convenience during surgical procedures.
            </p>

            <div className="w-full h-px bg-gray-200" />

            {/* 4 Feature Badges in Grid with responsive scaling on 2k & 4k */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 2k:gap-6 items-start text-center">
              {features.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 group">
                  <div className="w-10 h-10 2k:w-16 2k:h-16 4k:w-22 4k:h-22 rounded-[12px] 2k:rounded-[18px] 4k:rounded-[24px] bg-[rgba(64,155,189,0.1)] border border-[rgba(64,155,189,0.3)] flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="font-['Palanquin',sans-serif] font-semibold text-xs sm:text-sm 2k:text-lg 4k:text-xl text-[#111111] leading-tight">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex justify-center min-[1036px]:justify-start">
              <Button
                text="Explore Product"
                variant="primary"
                href="#products"
                className="px-6 py-3 w-full sm:w-auto text-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExploreTechnology;
