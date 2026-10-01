"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
// IconPark outline six-points SVG icon matching Figma layer # icon-park-outline:six-points
function SixPointsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 24V12m0 12l-10.5 6.062zm0 0l10.5 6.062zm-10-8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0 16a4 4 0 1 1-8 0a4 4 0 0 1 8 0m14 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m14-8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0-16a4 4 0 1 1-8 0a4 4 0 0 1 8 0M28 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FemoralStem() {
  const points = [
    {
      title: "Stable Fixation –",
      description:
        "Ensuring a secure and reliable positioning within the femur is crucial for optimal healing and functionality.",
    },
    {
      title: "Anatomical Design –",
      description:
        "This innovative design promotes natural hip alignment, ensuring that your body maintains its optimal posture.",
    },
    {
      title: "Unwavering Reliability –",
      description:
        "Our product is meticulously engineered to provide robust and dependable support for implants, ensuring that you can trust it for long-lasting performance and stability in various applications.",
    },
  ];

  return (
    <section id="femoral-stem" className="w-full py-16 xl:py-24 min-[2000px]:py-28 min-[2500px]:py-32 min-[3800px]:py-44 bg-[#ECF7FD] overflow-hidden">
      <div className="custom-container">
        {/* Mobile / Tablet Heading (< xl): appears before video */}
        <div className="flex flex-col gap-3 xl:hidden mb-8" data-aos="fade-up">
          <Typography
            variant="h4"
            className="!text-[#0059A4] text-xs sm:text-sm font-bold tracking-widest uppercase"
          >
            FEMORAL STEM
          </Typography>
          <Typography
            variant="h2"
            color="dark"
            className="text-[#0B1C30] font-extrabold leading-tight text-2xl sm:text-3xl"
          >
            Precision in Every Step of Hip Reconstruction
          </Typography>
          <Typography variant="p" color="muted" className="text-[#414752] leading-relaxed mt-1">
            Explore the Femoral Stem in detail, designed to provide stable fixation and reliable
            support within the femur. Its engineered design supports proper alignment and smooth
            hip joint function.
          </Typography>
        </div>

        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16 w-full">
          {/* Left: Video Player (Matching Deleo aspect-video method) */}
          <div
            className="w-full xl:w-1/2 relative aspect-video rounded-2xl overflow-hidden bg-black shadow-lg border border-gray-200"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div
            className="flex flex-col gap-5 w-full xl:w-1/2 xl:max-w-[90%]"
            data-aos="fade-left"
          >
            {/* Desktop-only Heading & Intro (xl and above) */}
            <div className="hidden xl:flex flex-col gap-5">
              <Typography
                variant="h4"
                className="!text-[#0059A4] text-xs sm:text-sm font-bold tracking-widest uppercase"
              >
                FEMORAL STEM
              </Typography>

              <Typography
                variant="h2"
                color="dark"
                className="text-[#0B1C30] font-extrabold leading-tight"
              >
                Precision in Every Step of Hip Reconstruction
              </Typography>

              <Typography variant="p" color="muted" className="text-[#414752] leading-relaxed">
                Explore the Femoral Stem in detail, designed to provide stable fixation and reliable
                support within the femur. Its engineered design supports proper alignment and smooth
                hip joint function.
              </Typography>
            </div>

            {/* Bordered Key Points Box */}
            <div className="border-2 border-[#0059A4] bg-white rounded-2xl p-6 sm:p-7 space-y-4 sm:space-y-5 shadow-sm mt-2">
              {points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-6 h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 mt-0.5 text-[#0082CB]">
                    <SixPointsIcon className="w-full h-full text-[#0082CB]" />
                  </div>
                  <p className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed text-[#414752]">
                    <strong className="text-[#0B1C30] font-bold">{pt.title}</strong>{" "}
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
