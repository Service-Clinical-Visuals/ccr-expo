/**
 * Instruments360 Section - PAJUNK
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Section Header:
 *    - Constrained to `w-full max-w-full xl:max-w-[70%] mx-auto` for readable typography measure.
 * 2. Two-Column Split Layout:
 *    - Left: Technical Specification Drawer (dark card `#0A1F17` with alternating spec rows `#0F2E22`).
 *    - Right: 360° interactive video embed using `DynamicVideoPlayer` with `type="360"` and `aspect-video`.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const specs = [
  { label: "Shaft Diameter Range", value: "5.0 mm / 10.0 mm" },
  { label: "Effective Working Length", value: "330 mm / 450 mm Bariatric" },
  { label: "Reprocessing Tolerance", value: "> 500 Autoclave Cycles (134°C)" },
  { label: "Cleaning Compatibility", value: "Luer-Lock Flushing Port" },
  { label: "Safety Dielectric Rating", value: "High Voltage HF Insulated" },
];

const Instruments360 = () => {
  return (
    <section id="instruments" className="w-full py-16 xl:py-24 bg-[#144835] text-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="tag-badge"
            color="white"
            className="tracking-widest text-xs sm:text-sm font-semibold opacity-90"
          >
            EXPLORE OUR INSTRUMENTS
          </Typography>

          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase"
          >
            EXPLORE OUR INSTRUMENTS
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="text-white/80 text-sm sm:text-base leading-relaxed"
          >
            Discover PAJUNK's advanced laparoscopic instrument systems, designed to combine precision, ergonomic handling and flexibility. Explore the modular ErgoSys system with interchangeable handles and instrument inserts for diverse surgical applications.
          </Typography>
        </div>

        {/* Two-Column Specification Drawer & 360 Video Player (Tablet stacked up to 1300px, row from 1301px) */}
        <div className="w-full mt-12 sm:mt-16 flex flex-col min-[1301px]:flex-row items-center gap-8 min-[1301px]:gap-10">
          
          {/* Left Column: Technical Specification Drawer */}
          <div
            className="w-full min-[1301px]:w-[42%] bg-[#0A1F17] rounded-[8px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl border border-white/5"
            data-aos="fade-right"
          >
            <div className="space-y-4">
              <Typography
                variant="h3"
                color="white"
                className="text-xl sm:text-2xl font-bold tracking-tight"
              >
                Modular 3-Piece Precision Assembly
              </Typography>

              <Typography
                variant="p"
                color="white"
                className="text-white/80 text-sm leading-relaxed"
              >
                Constructed with aircraft-grade insulated PEEK coating and German surgical stainless steel for exceptional durability and maximum patient electrical safety.
              </Typography>

              {/* Spec Rows */}
              <div className="space-y-2.5 pt-2">
                {specs.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0F2E22] rounded-[3px] p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm"
                  >
                    <span className="text-white/75 font-semibold text-xs sm:text-sm">
                      {item.label}
                    </span>
                    <span className="text-white font-medium text-xs sm:text-sm">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <Button
                text="Explore Products"
                variant="outline"
                href="#products"
                showIcon={true}
                className="!py-2.5 !px-5 text-sm"
              />
            </div>
          </div>

          {/* Right Column: 360 Video Player */}
          <div
            className="w-full min-[1301px]:w-[58%] aspect-video relative rounded-[8px] overflow-hidden shadow-2xl border border-white/10 bg-black/40 flex items-center justify-center self-center"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full aspect-video object-cover"
            />
            {/* Overlay hint if video is loading */}
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded text-white text-xs font-semibold flex items-center gap-1.5 pointer-events-none z-10">
              <span>360° Interactive View</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Instruments360;

