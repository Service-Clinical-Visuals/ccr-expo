"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Sparkles, HeartHandshake, Layers } from "lucide-react";

/**
 * Video01 Section - Precision Illumination
 * Matches Figma specifications:
 * - Background: Dark Navy #0B1A30.
 * - Left: Video Player with 16:9 aspect ratio (aspect-video) and object-cover.
 * - Right: Eyebrow, Title, Description, 3 feature items with icons scaling to 2k/4k, CTA button.
 * - Responsive: Stacks vertically up to 1035px, 2-column layout from 1036px.
 */
const Video01 = () => {
  const points = [
    {
      title: "Advanced Illumination",
      desc: "Provides consistent, high-quality illumination to help surgeons clearly visualize the surgical field and identify critical details with greater precision.",
      icon: <Sparkles className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 text-[#38BDF8]" />,
    },
    {
      title: "Ergonomic Comfort",
      desc: "Designed to reduce strain and provide a balanced fit, allowing medical professionals to maintain comfort and focus throughout demanding surgical procedures.",
      icon: <HeartHandshake className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 text-[#38BDF8]" />,
    },
    {
      title: "Versatile Solutions",
      desc: "A comprehensive range of lighting and visualization products for different surgical specialties.",
      icon: <Layers className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 text-[#38BDF8]" />,
    },
  ];

  return (
    <section id="video-precision" className="w-full py-16 xl:py-24 bg-[#0B1A30] text-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1036px]:flex-row sunoptic-split-row items-center gap-10 xl:gap-14 w-full">

          {/* Video Column: Desktop 50% left, Mobile/Tablet order 2 below heading */}
          <div
            className="w-full min-[1036px]:w-1/2 sunoptic-col-50 sunoptic-mobile-order-second sunoptic-desktop-order-1 order-2 min-[1036px]:order-1 aspect-video relative rounded-[5px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl flex items-center justify-center"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full aspect-video object-cover"
            />
            {/* Fallback visual label matching Figma layer */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-['Palanquin',sans-serif] font-semibold text-lg 2k:text-2xl 4k:text-3xl text-white/40">
                Video Clip 01
              </span>
            </div>
          </div>

          {/* Heading & Content Column: Desktop 50% right, Mobile/Tablet order 1 above video */}
          <div
            className="w-full min-[1036px]:w-1/2 sunoptic-col-50 sunoptic-mobile-order-first sunoptic-desktop-order-2 order-1 min-[1036px]:order-2 flex flex-col gap-5 sm:gap-6"
            data-aos="fade-left"
          >
            <Typography
              variant="eyebrow"
              className="!text-white font-semibold text-xs sm:text-sm tracking-wider"
            >
              ADVANCED SURGICAL ILLUMINATION
            </Typography>

            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Palanquin',sans-serif] leading-tight"
            >
              Precision Illumination for Every Surgical Environment
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="text-white/80 text-sm sm:text-base leading-relaxed font-['DM_Sans',sans-serif]"
            >
              Sunoptic&apos;s Battery Operated LED Headlight delivers bright, focused illumination with cordless convenience, lightweight comfort and adjustable positioning for enhanced surgical visibility.
            </Typography>

            {/* 3 Checklist Items with responsive icon scaling */}
            <div className="flex flex-col gap-4 mt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3.5 2k:gap-5">
                  <div className="w-10 h-10 2k:w-16 2k:h-16 4k:w-22 4k:h-22 rounded-[12px] 2k:rounded-[18px] 4k:rounded-[24px] bg-[rgba(14,165,233,0.1)] border border-[rgba(14,165,233,0.3)] flex items-center justify-center shrink-0 mt-0.5">
                    {pt.icon}
                  </div>
                  <p className="text-xs sm:text-sm 2k:text-lg 4k:text-xl leading-relaxed text-white/90 font-['DM_Sans',sans-serif]">
                    <strong className="text-white font-bold">{pt.title}</strong> – {pt.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                text="Explore Product"
                variant="primary"
                href="#products"
                className="px-6 py-3"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Video01;
