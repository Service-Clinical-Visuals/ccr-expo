"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function SurgicalShowcase() {
  return (
    <section id="showcase" className="w-full relative overflow-hidden bg-white">
      {/* ======================================================== */}
      {/* DESKTOP VIEW (1500px and above): 60% Video | 40% Content Split */}
      {/* - Top half is Blue background with White Headline         */}
      {/* - Bottom half is White background with Paragraphs & Button*/}
      {/* - Video spans cleanly across both Blue and White zones    */}
      {/* ======================================================== */}
      <div className="hidden min-[1500px]:block w-full relative">
        {/* Top Blue Bar containing Headline */}
        <div className="w-full bg-[#0082CB] pt-16 xl:pt-20 pb-8 xl:pb-10 min-[2500px]:pt-28 min-[2500px]:pb-16">
          <div className="custom-container">
            <div className="flex items-start justify-between gap-12 xl:gap-16 min-[2500px]:gap-24 min-[3800px]:gap-32">
              {/* Left spacer for 60% video */}
              <div className="w-[calc(60%-1.5rem)] xl:w-[calc(60%-2rem)] min-[2500px]:w-[calc(60%-3rem)] shrink-0" />

              {/* Right: Headline on Blue (40%) */}
              <div className="w-[calc(40%-1.5rem)] xl:w-[calc(40%-2rem)] min-[2500px]:w-[calc(40%-3rem)]" data-aos="fade-left">
                <Typography
                  variant="h4"
                  className="!text-white/90 text-xs sm:text-sm min-[2500px]:text-xl font-bold tracking-widest uppercase mb-3"
                >
                  SURGICAL ENGINEERING &amp; VIDEO SHOWCASE
                </Typography>

                <Typography
                  variant="h2"
                  className="!text-white font-extrabold text-2xl xl:text-3xl 2xl:text-4xl min-[2500px]:text-6xl leading-tight"
                >
                  Precision Manufacturing &amp; Surgical Technique: Hipokrat Femoral Stem
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom White Bar containing Paragraphs and Button */}
        <div className="w-full bg-white pt-5 xl:pt-6 pb-16 xl:pb-24 min-[2500px]:pb-36">
          <div className="custom-container">
            <div className="flex items-start justify-between gap-12 xl:gap-16 min-[2500px]:gap-24 min-[3800px]:gap-32">
              {/* Left spacer for 60% video */}
              <div className="w-[calc(60%-1.5rem)] xl:w-[calc(60%-2rem)] min-[2500px]:w-[calc(60%-3rem)] shrink-0" />

              {/* Right: Paragraphs & Button on White (40%) */}
              <div className="w-[calc(40%-1.5rem)] xl:w-[calc(40%-2rem)] min-[2500px]:w-[calc(40%-3rem)] flex flex-col gap-6" data-aos="fade-left">
                <Typography
                  variant="p"
                  color="muted"
                  className="text-[#414752] leading-relaxed text-sm xl:text-base min-[2500px]:text-2xl text-justify"
                >
                  Dive into the cutting-edge manufacturing process that shapes our femoral stems. From
                  the intricate details of micron-level 5-axis CNC milling to the innovative vacuum
                  plasma titanium coating, each step is designed with precision in mind. Explore the
                  advanced orthopedic surgical broaching techniques that ensure a perfect fit. Learn
                  how every phase of production enhances precision, optimizes surface performance,
                  guarantees secure fixation, and supports reliable clinical applications, ultimately
                  leading to better outcomes for patients.
                </Typography>

                <Typography
                  variant="p"
                  color="muted"
                  className="text-[#414752] leading-relaxed text-sm xl:text-base min-[2500px]:text-2xl text-justify"
                >
                  Experience the advanced manufacturing process behind our femoral stems, from
                  micron-level 5-axis CNC milling and vacuum plasma titanium coating to precise
                  orthopedic surgical broaching techniques.
                </Typography>

                <div className="pt-2">
                  <Button
                    text="Explore Product"
                    variant="primary"
                    href="#products"
                    showIcon={false}
                    className="!bg-[#0082CB] hover:!bg-[#006fae] !px-8 !py-3 !rounded-full text-base font-semibold shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Video (60%): Spans both Blue and White zones - Non-cropping */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="custom-container h-full relative">
            <div className="w-[calc(60%-1.5rem)] xl:w-[calc(60%-2rem)] min-[2500px]:w-[calc(60%-3rem)] absolute top-16 xl:top-20 min-[2500px]:top-28 pointer-events-auto">
              <div
                className="w-full relative aspect-video rounded-2xl min-[2500px]:rounded-3xl overflow-hidden bg-black shadow-2xl"
                data-aos="zoom-in"
              >
                <DynamicVideoPlayer
                  type="short-2"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MOBILE & TABLET VIEW (< 1500px): Used up to 1500px screens */}
      {/* ======================================================== */}
      <div className="block min-[1500px]:hidden w-full">
        {/* Top Blue Background Bar */}
        <div className="w-full bg-[#0082CB] pt-16 pb-20 sm:pb-28">
          <div className="custom-container">
            <div className="flex flex-col items-start gap-2">
              <Typography
                variant="h4"
                className="!text-white/90 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2"
              >
                SURGICAL ENGINEERING &amp; VIDEO SHOWCASE
              </Typography>

              <Typography
                variant="h2"
                className="!text-white font-extrabold text-2xl sm:text-3xl leading-tight"
              >
                Precision Manufacturing &amp; Surgical Technique: Hipokrat Femoral Stem
              </Typography>
            </div>
          </div>
        </div>

        {/* Main Content Area Overlapping */}
        <div className="custom-container -mt-16 sm:-mt-24 pb-16">
          <div className="flex flex-col items-center gap-8 w-full">
            {/* Prominent Video Player - Matching Deleo aspect-video method */}
            <div
              className="w-full relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl"
              data-aos="zoom-in"
            >
              <DynamicVideoPlayer
                type="short-2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Text and Action Button */}
            <div
              className="flex flex-col gap-6 w-full pt-2"
              data-aos="fade-left"
            >
              <Typography
                variant="p"
                color="muted"
                className="text-[#414752] leading-relaxed text-sm sm:text-base text-justify"
              >
                Dive into the cutting-edge manufacturing process that shapes our femoral stems. From
                the intricate details of micron-level 5-axis CNC milling to the innovative vacuum
                plasma titanium coating, each step is designed with precision in mind. Explore the
                advanced orthopedic surgical broaching techniques that ensure a perfect fit. Learn
                how every phase of production enhances precision, optimizes surface performance,
                guarantees secure fixation, and supports reliable clinical applications, ultimately
                leading to better outcomes for patients.
              </Typography>

              <Typography
                variant="p"
                color="muted"
                className="text-[#414752] leading-relaxed text-sm sm:text-base text-justify"
              >
                Experience the advanced manufacturing process behind our femoral stems, from
                micron-level 5-axis CNC milling and vacuum plasma titanium coating to precise
                orthopedic surgical broaching techniques.
              </Typography>

              <div className="pt-2">
                <Button
                  text="Explore Product"
                  variant="primary"
                  href="#products"
                  showIcon={false}
                  className="!bg-[#0082CB] hover:!bg-[#006fae] !px-8 !py-3 !rounded-full text-base font-semibold shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
