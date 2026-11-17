"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import { Check } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Lightweight & Compact Design",
    description: "Weighs as little as 1.3 kg with the standard battery, making it convenient to carry during daily activities.",
  },
  {
    title: "Four Pulse Dose Settings",
    description: "Offers four oxygen delivery settings to support different prescribed oxygen therapy needs.",
  },
  {
    title: "Extended Battery Options",
    description: "Provides up to 3 hours with the standard battery, 4.25 hours with the intermediate battery, and 5.75 hours with the extended battery.",
  },
  {
    title: "Quiet Operation",
    description: "Operates at approximately 39 dBA on Setting 2, supporting a quieter user experience.",
  },
];

/**
 * Mobility Section
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Section Background: Dark theme variant with responsive background image (bg-[#05172E] with bg-cover).
 * 2. Section Header:
 *    - Constrained to `xl:max-w-[70%]` on desktop for readability, `max-w-full` on mobile.
 * 3. Asymmetric Two-Column Split Layout:
 *    - Stacks vertically on screens below 1300px (`flex-col min-[1300px]:flex-row`).
 *    - Left Column (75% width): Video container with standard `aspect-video` (16:9) and asymmetrical
 *      rounded corners (`rounded-tl-[48px] sm:rounded-tl-[64px] rounded-br-[48px] sm:rounded-br-[64px]`).
 *    - Right Column (25% width): High-density feature checklist with Lucide icons.
 * 4. Responsive Font Scaling:
 *    - Uses responsive rem units with arbitrary breakpoint multipliers (e.g., `min-[2500px]:text-lg`, `min-[3800px]:text-2xl`).
 */
const Mobility = () => {
  return (
    <section
      id="solutions"
      className="w-full py-16 xl:py-24 bg-[#05172E] bg-[url('/medical/inogen/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative text-white"
    >
      <div className="custom-container flex flex-col gap-12 sm:gap-16">

        {/* Section Header: Constrained to xl:max-w-[70%] on desktop for optimal line measure */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
          >
            Designed For Mobility, Comfort &amp; Performance
          </Typography>
          <Typography
            variant="p"
            color="white"
            className="text-white/80 text-sm sm:text-base leading-relaxed"
          >
            The Inogen Rove 4 combines lightweight portability with reliable oxygen delivery in a compact design. With four pulse dose settings, flexible battery options, and simple controls, it is designed to support patients in maintaining an active and flexible lifestyle.
          </Typography>
        </div>

        {/* Two-Column Content: Divided 75% | 25% (stacked up to 1300px) */}
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-8 min-[1300px]:gap-10 w-full">

          {/* Left Column: Video Player (75%) */}
          <div
            className="w-full min-[1300px]:w-[75%] relative aspect-video overflow-hidden bg-white/5 rounded-tl-[48px] sm:rounded-tl-[64px] rounded-br-[48px] sm:rounded-br-[64px] rounded-tr-none rounded-bl-none shadow-2xl border border-white/10"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Key Features (25%) */}
          <div
            className="w-full min-[1300px]:w-[25%] flex flex-col gap-4 sm:gap-5"
            data-aos="fade-left"
          >
            <Typography
              variant="h3"
              color="white"
              className="text-[1.25rem] sm:text-[1.375rem] lg:text-[1.5rem] xl:text-[1.5625rem] font-bold tracking-tight text-white"
            >
              Key Features
            </Typography>

            <div className="flex flex-col gap-3.5 sm:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-9">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                  <div className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 min-[2500px]:mt-1 text-[#0B3090] shadow-sm">
                    <Check className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={3} />
                  </div>
                  <p className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl leading-relaxed text-white/90">
                    <strong className="text-white font-semibold">{feature.title}</strong> – {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 min-[2500px]:pt-5 min-[3800px]:pt-8">
              <Link
                href="#solutions"
                className="inline-flex items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 bg-white text-[#0B3090] hover:bg-gray-100 hover:text-[#082470] hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 font-semibold px-6 py-3 min-[2500px]:px-9 min-[2500px]:py-4 min-[3800px]:px-14 min-[3800px]:py-6 rounded-lg min-[2500px]:rounded-xl min-[3800px]:rounded-2xl shadow-md transition-all duration-300 ease-in-out text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl group cursor-pointer"
              >
                <span>View Specifications</span>
                <img
                  src="/medical/inogen/ba.webp"
                  alt="arrow"
                  className="w-[14px] h-[10px] min-[2500px]:w-[22px] min-[2500px]:h-[16px] min-[3800px]:w-[32px] min-[3800px]:h-[24px] group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0 object-contain"
                />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Mobility;
