/**
 * VersatileFixation Section (Video Clip - 01)
 *
 * ARCHITECTURAL REFERENCE (from Inogen + Zinnanti Surgical Standards):
 * 1. Section Container: Dark slate background with wavy lines pattern (`bg-[#5F6467] bg-[url('/medical/chm/bg.webp')] bg-cover`).
 * 2. Responsive Header Row:
 *    - Left Content: Title & description.
 *    - Right Action: Round circular button with diagonal arrow, scaling to 2K & 4K.
 * 3. Horizontal Divider: 1px white/25 border.
 * 4. Video & Highlights Split Layout:
 *    - Left: Video Player container with standard aspect-video (16:9 ratio) using `DynamicVideoPlayer type="short-1"`.
 *    - Right: Performance Highlights checklist with checkmark circles and icons scaling to 2K and 4K.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "Multiple Fixation Methods",
    description: "Supports reconstructive, compression, dynamic, static, and retrograde fixation.",
  },
  {
    title: "Retrograde Insertion",
    description: "Enables femoral fixation in cases involving an existing proximal hip prosthesis or implant.",
  },
  {
    title: "Integrated Locking Set",
    description: "Supports compression fixation of the femoral condyles.",
  },
  {
    title: "Surgical Flexibility",
    description: "Adapts to different fracture patterns and procedural needs.",
  },
];

export default function VersatileFixation() {
  return (
    <section
      id="solutions"
      className="w-full py-16 xl:py-24 2k:py-32 4k:py-44 bg-[#5F6467] bg-[url('/medical/chm/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative text-white"
    >
      <div className="custom-container flex flex-col gap-8 sm:gap-10 2k:gap-16 4k:gap-20">
        {/* Header Row: Title & Intro Copy + Circle Arrow Button */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-full xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide"
            >
              Versatile Fixation For Diverse Femoral Fractures
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="text-white/85 text-sm sm:text-base leading-relaxed"
            >
              The CHARFIX Femoral Nail offers a versatile solution for intramedullary fixation, supporting multiple surgical approaches based on fracture type. Its adaptable design provides surgeons with flexibility in selecting the appropriate fixation method.
            </Typography>
          </div>

          <div className="shrink-0 self-start md:self-center">
            <Link
              href="#products"
              className="w-12 h-12 sm:w-14 sm:h-14 2k:w-20 2k:h-20 4k:w-28 4k:h-28 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#A41E27] backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
              aria-label="View Solutions"
            >
              <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 2k:w-10 2k:h-10 4k:w-14 4k:h-14 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-px bg-white/25" />

        {/* Main Content: Video on Left, Performance Highlights on Right (tablet stacked layout maintained up to 1300px) */}
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-8 min-[1300px]:gap-12 2k:gap-16 4k:gap-20 w-full mt-2">
          {/* Left Column: Video Clip 01 - Flat sharp corners (rounded-none) */}
          <div
            className="w-full min-[1300px]:w-[68%] relative aspect-video overflow-hidden rounded-none shadow-2xl border border-white/20 bg-black/40"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Performance Highlights (Approx 32% on Desktop >=1300px) */}
          <div
            className="w-full min-[1300px]:w-[32%] flex flex-col gap-4 sm:gap-5 2k:gap-7 4k:gap-9"
            data-aos="fade-left"
          >
            <Typography
              variant="h3"
              color="white"
              className="text-xl sm:text-2xl lg:text-3xl font-normal tracking-wide text-white"
            >
              Performance Highlights
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="text-white/80 text-xs sm:text-sm leading-relaxed"
            >
              With reconstructive, compression, dynamic, static, and retrograde options, the system is designed to accommodate different clinical requirements and support efficient surgical procedures.
            </Typography>

            {/* Checklist items with 2K & 4K responsive scaling */}
            <div className="flex flex-col gap-3.5 sm:gap-4 2k:gap-6 4k:gap-8 mt-1">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 2k:gap-4.5 4k:gap-6">
                  <div className="w-5 h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 rounded-full bg-[#A41E27] flex items-center justify-center shrink-0 mt-0.5 text-white shadow-sm border border-white/30">
                    <Check className="w-3 h-3 2k:w-5 2k:h-5 4k:w-8 4k:h-8" strokeWidth={3} />
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-white/90">
                    <strong className="text-white font-semibold">{item.title}</strong> – {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 2k:pt-6 4k:pt-8">
              <Button
                text="Discover CHARFIX System"
                href="#products"
                variant="white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
