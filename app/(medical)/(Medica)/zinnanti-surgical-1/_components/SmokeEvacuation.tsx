"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Badge from "./Badge";
import Button from "./Button";
import Typography from "./Typography";

const FEATURES = [
  "High-flow smoke evacuation system",
  "High-efficiency filtration technology",
  "35-hour filter capacity",
  "Designed for HRA procedures",
  "100–120V power supply",
];

/** Decorative dot grid used in the corners of the blue section. */
function Dots({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute w-[80px] h-[60px] 2k:w-[140px] 2k:h-[100px] opacity-60 [background-image:radial-gradient(#ffffff_1.2px,transparent_1.3px)] [background-size:11px_11px] 2k:[background-size:18px_18px] ${className}`}
    />
  );
}

/** Decorative flowing lines. */
function Waves({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 200" fill="none" className={`absolute pointer-events-none ${className}`}>
      {Array.from({ length: 14 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${150 + i * 3} C 90 ${40 + i * 6}, 210 ${210 - i * 4}, 400 ${30 + i * 5}`}
          stroke="white"
          strokeOpacity={0.35}
          strokeWidth="0.8"
        />
      ))}
    </svg>
  );
}

export default function SmokeEvacuation() {
  return (
    <section
      id="smoke-evacuation"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#4a4175] via-[var(--color-primary)] to-[#2d274c] py-12 sm:py-16 xl:py-[4.5rem] 2k:py-28 4k:py-40"
    >
      <Dots className="top-4 left-6" />
      <Dots className="bottom-4 right-6" />
      <Waves className="top-0 right-0 w-[30%] h-auto opacity-90 rotate-180" />
      <Waves className="bottom-0 left-0 w-[45%] h-auto" />

      <div className="custom-container relative z-10 flex flex-col lg:flex-row lg:items-center">
        {/* Text card */}
        <div
          className="w-full lg:w-[46%] xl:w-[44%] 2xl:w-[40%] lg:my-8 2xl:my-0 shrink-0 bg-white rounded-2xl 2k:rounded-3xl 4k:rounded-[2.5rem] lg:rounded-r-none px-6 sm:px-7 2k:px-10 4k:px-14 py-7 xl:py-8 2k:py-10 4k:py-14 flex flex-col items-start gap-3 xl:gap-4 2k:gap-5 4k:gap-6"
          data-aos="fade-right"
        >
          <Badge text="Engineered for Performance" />
          <Typography variant="h2" color="none" className="text-[var(--color-heading)]">
            Advanced Smoke Evacuation
          </Typography>
          <Typography variant="p" color="muted">
            The Bovie ZSE01 is a high-flow smoke evacuator designed for HRA procedures, featuring a
            high-efficiency 35-hour filter for effective surgical smoke management.
          </Typography>
          <ul className="flex flex-col gap-1.5 xl:gap-2 2k:gap-2.5 4k:gap-3 pl-1">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 2k:gap-5 text-[var(--color-muted)]">
                <span className="mt-[0.65em] w-1 h-1 2k:w-1.5 2k:h-1.5 4k:w-2 4k:h-2 rounded-full bg-[var(--color-muted)] shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-2 2k:mt-3 4k:mt-4">
            <Button text="Know More" />
          </div>
        </div>

        {/* Video */}
        <div
          className="relative w-full lg:flex-1 mt-6 lg:mt-0 aspect-video lg:aspect-auto lg:self-stretch 2xl:aspect-video 2xl:self-auto rounded-lg 2k:rounded-2xl overflow-hidden bg-white shadow-xl"
          data-aos="fade-left"
        >
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
