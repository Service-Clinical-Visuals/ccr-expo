/**
 * Unique Solution Section - OrthoGet
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Two-Column Layout (50% | 50%):
 *    - Left: Section tag, heading, dual-paragraph clinical rationale, and 3 icon value pills.
 *    - Right: High-resolution featured product visual (`/medical/orthoget/soln.webp`).
 * 2. Responsive Feature Badges:
 *    - Uses #EFF6FF rounded icon containers with #0624BF stroke icons and clear typography.
 * 3. 4K & Wide-screen Scaled Spacing:
 *    - Scales padding, icon containers, and typographic rhythm across all breakpoints.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import { ShieldCheck, Crosshair, HeartPulse } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Long-Term Reliability",
  },
  {
    icon: Crosshair,
    title: "Minimal Invasive Approach",
  },
  {
    icon: HeartPulse,
    title: "Enhanced Patient Outcomes",
  },
];

const UniqueSolution = () => {
  return (
    <section id="solutions" className="w-full py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-10 min-[1300px]:gap-12 xl:gap-14 2xl:gap-18 min-[2500px]:gap-24 min-[3800px]:gap-32">

          {/* Left Column: Text & Features */}
          <div
            className="w-full min-[1300px]:w-[50%] flex flex-col gap-5 sm:gap-6 min-[2500px]:gap-9 min-[3800px]:gap-12"
            data-aos="fade-right"
          >
            <Typography variant="tag" color="primary">
              _ Unique Solution
            </Typography>

            <Typography
              variant="h2"
              color="secondary"
              className="text-[#202020] xl:max-w-[90%]"
            >
              INNOVATION on a global scale
            </Typography>

            <div className="space-y-4 min-[2500px]:space-y-6 min-[3800px]:space-y-8 xl:max-w-[90%]">
              <Typography
                variant="p"
                color="muted"
                className="font-dmsans leading-relaxed text-[#404040]"
              >
                The OrthoNail dynamic intramedullary nail combines exceptional durability with externally activated implant lengthening through innovative physical properties and advanced lengthening mechanisms. It helps minimize bone demineralization, muscle atrophy, and joint mobility complications, promoting more effective treatment, improved patient outcomes, and faster recovery.
              </Typography>

              <Typography
                variant="p"
                color="muted"
                className="font-dmsans leading-relaxed text-[#404040]"
              >
                The OrthoNail is the first Polish implant designed for dynamic long-bone lengthening, with no comparable solution currently available on the international market, making it globally innovative.
              </Typography>
            </div>

            {/* 3 Features / Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 min-[1300px]:gap-5 2k:gap-8 4k:gap-12 pt-3 2k:pt-6 4k:pt-10">
              {features.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center min-[1300px]:items-start min-[1300px]:text-left gap-2.5 sm:gap-3 2k:gap-4 4k:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 min-[1300px]:w-16 min-[1300px]:h-16 2k:w-24 2k:h-24 4k:w-32 4k:h-32 rounded-[12px] sm:rounded-[14px] 2k:rounded-[20px] 4k:rounded-[28px] bg-[#EFF6FF] flex items-center justify-center text-[#0624BF] shrink-0 shadow-sm">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 min-[1300px]:w-8 min-[1300px]:h-8 2k:w-12 2k:h-12 4k:w-16 4k:h-16 stroke-[2]" />
                    </div>
                    <Typography variant="h4" color="muted" className="leading-snug text-center min-[1300px]:text-left">
                      {feat.title}
                    </Typography>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Featured Visual with Layered SVG Implant */}
          <div
            className="w-full min-[1300px]:w-[50%]"
            data-aos="fade-left"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[792/556] rounded-[10px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[26px] overflow-hidden shadow-lg border border-gray-200/80 bg-white group flex items-center justify-center">
              {/* Background wave visual (Rectangle 8) */}
              <img
                src="/medical/orthoget/soln_bg.webp"
                alt="OrthoNail Solution Background"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Layered SVG Implant placed over the image */}
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 min-[2500px]:p-10 pointer-events-none">
                <img
                  src="/medical/orthoget/SVG.webp"
                  alt="OrthoNail Implant"
                  className="w-[72%] sm:w-[68%] min-[2500px]:w-[70%] max-w-[460px] min-[2500px]:max-w-[700px] min-[3800px]:max-w-[950px] h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-[0_8px_10px_rgba(0,0,0,0.08)] drop-shadow-[0_20px_26px_rgba(0,0,0,0.03)]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UniqueSolution;

