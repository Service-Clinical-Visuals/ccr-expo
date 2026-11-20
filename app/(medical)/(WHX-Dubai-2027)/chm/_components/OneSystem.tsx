/**
 * OneSystem Section (Video Clip - 02)
 *
 * ARCHITECTURAL REFERENCE (from Inogen + Zinnanti Surgical Standards):
 * 1. Dark Slate Theme with Wavy Pattern:
 *    - `bg-[#5F6467] bg-[url('/medical/chm/bg.webp')] bg-cover`.
 * 2. Header Row:
 *    - Left: Title "One System. Multiple Surgical Possibilities." & paragraph.
 *    - Right: Button "Explore Product Details" (white pill with red arrow badge).
 * 3. Horizontal Divider: 1px white/25 border.
 * 4. Content Layout:
 *    - Left Column (approx 45%): Descriptive text + 3 boxed feature cards with checkmarks scaling to 2K and 4K.
 *    - Right Column (approx 55%): DynamicVideoPlayer with `type="short-2"` in standard 16:9 ratio with rounded corners.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const features = [
  {
    title: "Unified Implant System",
    description: "Combines three nail designs into one system for greater procedural versatility across different femoral fracture types.",
  },
  {
    title: "Condyle Compression",
    description: "Integrated locking components support compression fixation of the femoral condyles during surgical procedures.",
  },
  {
    title: "Simplified Surgical Logistics",
    description: "A versatile system helps reduce inventory complexity and supports easier surgical preparation for medical teams.",
  },
];

export default function OneSystem() {
  return (
    <section
      id="one-system"
      className="w-full py-16 xl:py-24 2k:py-32 4k:py-44 bg-[#5F6467] bg-[url('/medical/chm/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative text-white"
    >
      <div className="custom-container flex flex-col gap-8 sm:gap-10 2k:gap-16 4k:gap-20">
        {/* Header Row (stacked up to 1500px screens) */}
        <div
          className="flex flex-col min-[1500px]:flex-row min-[1500px]:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-full min-[1500px]:max-w-[70%]">
            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide"
            >
              One System. Multiple Surgical Possibilities.
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="text-white/85 text-sm sm:text-base leading-relaxed"
            >
              The CHARFIX Femoral Nail combines three different nail designs into one versatile implant system, offering a comprehensive solution for femoral fracture fixation. Depending on the fracture pattern and clinical requirements, surgeons can select from reconstructive, compression, dynamic, static, or retrograde techniques.
            </Typography>
          </div>

          <div className="shrink-0 self-start min-[1500px]:self-center">
            <Button
              text="Explore Product Details"
              href="#products"
              variant="white"
            />
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-px bg-white/25" />

        {/* Content Row: Left Column with boxed cards, Right Column with Video (stacked up to 1500px screens) */}
        <div className="flex flex-col min-[1500px]:flex-row items-center gap-8 min-[1500px]:gap-12 2k:gap-16 4k:gap-20 w-full mt-2">
          {/* Left Column (Approx 45% on >=1500px) */}
          <div
            className="w-full min-[1500px]:w-[45%] flex flex-col gap-5 2k:gap-8 4k:gap-10"
            data-aos="fade-right"
          >
            <Typography
              variant="p"
              color="white"
              className="text-white/90 text-xs sm:text-sm leading-relaxed"
            >
              The retrograde insertion technique provides an option for intramedullary femoral fixation when a hip prosthesis or another implant is already present in the proximal femur. Additionally, the integrated locking set enables compression fixation of the condyles, supporting the specific requirements of distal femoral procedures.
            </Typography>

            {/* 3 Boxed Cards with Outline & Shadow */}
            <div className="flex flex-col gap-3.5 sm:gap-4 2k:gap-6 4k:gap-8 mt-1">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="w-full border border-white/45 rounded-xl 2k:rounded-2xl 4k:rounded-3xl p-4 sm:p-5 2k:p-8 4k:p-10 bg-white/5 backdrop-blur-xs shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex items-start gap-3.5 2k:gap-5 4k:gap-7 hover:border-white/75 transition-colors"
                >
                  <div className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 text-[#2A2A2A] shadow-sm">
                    <Check className="w-3.5 h-3.5 2k:w-5.5 2k:h-5.5 4k:w-8 4k:h-8 text-[#2A2A2A]" strokeWidth={3} />
                  </div>
                  <p className="text-xs sm:text-sm text-white/95 leading-relaxed">
                    <strong className="text-white font-semibold">{item.title}</strong> – {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Video Clip 02 (Approx 55% on >=1500px) */}
          <div
            className="w-full min-[1500px]:w-[55%] relative aspect-video overflow-hidden rounded-[20px] sm:rounded-[30px] 2k:rounded-[40px] 4k:rounded-[56px] shadow-2xl border border-white/20 bg-black/40"
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
}
