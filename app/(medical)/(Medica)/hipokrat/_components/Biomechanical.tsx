"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import { Check } from "lucide-react";

export default function Biomechanical() {
  const points = [
    {
      title: "Hydroxyapatite (HA) & Porous Titanium Coating:",
      text: "Micro-textured surface architecture ensuring rapid osteoinduction and secondary mechanicalfixation.",
    },
    {
      title: "Anatomical Taper & Triple-Wedge Geometry:",
      text: "Engineered to prevent axial subsidence and promote uniform proximal load distribution, preserving femoral bone stock.",
    },
    {
      title: "12/14 Standard Morse Taper:",
      text: "Complete modularity with ceramic and CoCr femoral heads for optimal neck-shaft offset customization.",
    },
  ];

  return (
    <section
      id="biomechanical"
      className="w-full py-16 xl:py-24 bg-[#0082CB] text-white overflow-hidden relative"
    >
      <div className="custom-container">
        {/* Mobile / Tablet Heading (< xl): appears before video */}
        <div className="flex flex-col gap-3 xl:hidden mb-8" data-aos="fade-up">
          <Typography
            variant="h4"
            className="!text-white/90 text-xs sm:text-sm font-bold tracking-widest uppercase"
          >
            BIOMECHANICAL ENGINEERING
          </Typography>
          <Typography
            variant="h2"
            className="!text-white font-extrabold leading-tight text-2xl sm:text-3xl"
          >
            Biomechanical Engineering: Uncemented &amp; Cemented Femoral Stem Systems.
          </Typography>
          <Typography
            variant="p"
            className="!text-white/95 leading-relaxed text-sm sm:text-base font-normal mt-1"
          >
            Designed in our Biomechanical R&amp;D center to optimize primary stability,
            physiological load transfer, and long-term osteointegration in total hip arthroplasty.
          </Typography>
        </div>

        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16 w-full">
          {/* Left: 360 Video Player (Matching Deleo aspect-video method) */}
          <div
            className="w-full xl:w-1/2 relative aspect-video rounded-2xl overflow-hidden bg-black shadow-xl"
            data-aos="zoom-in"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div
            className="flex flex-col gap-6 w-full xl:w-1/2 xl:max-w-[90%]"
            data-aos="fade-left"
          >
            {/* Desktop-only Heading & Intro (xl and above) */}
            <div className="hidden xl:flex flex-col gap-4">
              <Typography
                variant="h4"
                className="!text-white/90 text-xs sm:text-sm font-bold tracking-widest uppercase"
              >
                BIOMECHANICAL ENGINEERING
              </Typography>

              <Typography
                variant="h2"
                className="!text-white font-extrabold leading-tight"
              >
                Biomechanical Engineering: Uncemented &amp; Cemented Femoral Stem Systems.
              </Typography>

              <Typography
                variant="p"
                className="!text-white/95 leading-relaxed text-sm sm:text-base font-normal"
              >
                Designed in our Biomechanical R&amp;D center to optimize primary stability,
                physiological load transfer, and long-term osteointegration in total hip arthroplasty.
              </Typography>
            </div>

            {/* 3 Key Feature Points */}
            <ul className="space-y-4 pt-2">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#D4E3FF] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-4 h-4 text-[#0082CB] stroke-[2.5]" />
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-white">
                    <strong className="font-semibold text-white">{point.title}</strong> {point.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
