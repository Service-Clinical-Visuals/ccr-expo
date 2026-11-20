/**
 * Video02Banner Section (02 Video Blue Banner) - OrthoGet
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Reversed 2-Column Blue Banner (#0624BF):
 *    - Left: 02 Video Player container (`type="short-2"`).
 *    - Right: Clinical specifications, tag, heading, narrative, and bullet points.
 * 2. Exact Video Implementation:
 *    - Uses Inogen's `DynamicVideoPlayer` with `aspect-video` (16:9 ratio).
 * 3. Responsive Balancing:
 *    - Desktop (>=1024px): Video on Left, Text on Right.
 *    - Mobile/Tablet: Stacks naturally with video first, followed by text.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const implantBullets = [
  "Hybrid magneto-mechanical technology enables controlled bone extension through externally activated internal implant mechanisms.",
  "Titanium alloys and ferrite-free materials support magnetic power transmission within the innovative implant design.",
  "Engineered structural strength targets physiological loading while maintaining durability through repeated mechanical loading cycles.",
];

const Video02Banner = () => {
  return (
    <section id="technology-video" className="w-full py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-[#0624BF]/70 text-white overflow-hidden relative">
      <div className="custom-container">
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-10 min-[1300px]:gap-12 min-[3800px]:gap-16 w-full">

          {/* Left Column: 02 Video Player (60% - Deleo Pattern) */}
          <div
            className="w-full min-[1300px]:w-[60%] relative aspect-video overflow-hidden rounded-[10px] min-[2500px]:rounded-[20px] min-[3800px]:rounded-[30px] shadow-2xl border border-white/20 bg-black/20 order-2 min-[1300px]:order-1"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Clinical Narrative (40%) */}
          <div
            className="flex flex-col gap-5 sm:gap-6 w-full min-[1300px]:w-[40%] order-1 min-[1300px]:order-2"
            data-aos="fade-left"
          >
            <Typography variant="tag" color="white">
              _ Next-Generation Bone Implant
            </Typography>

            <Typography
              variant="h2"
              color="white"
              className="leading-snug"
            >
              Redefining Limb Lengthening With Intelligent Implant Engineering
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="font-dmsans leading-relaxed text-white/90"
            >
              OrthoNail is a patented hybrid intramedullary implant designed for controlled lower-limb bone lengthening. Its innovative magneto-mechanical drive integrates advanced materials and engineering to provide precise, gradual bone extension through external activation, aiming to enhance stability, accuracy, and patient comfort.
            </Typography>

            {/* Bullets */}
            <div className="flex flex-col gap-3.5 min-[2500px]:gap-6 min-[3800px]:gap-8 pt-1">
              {implantBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 2k:w-4 2k:h-4 4k:w-6 4k:h-6 rounded-full bg-white shrink-0 mt-2 2k:mt-3 4k:mt-4 shadow-sm" />
                  <p className="font-dmsans leading-relaxed text-white/90">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Video02Banner;

