"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-[#121111] overflow-hidden relative">
      <div className="custom-container relative z-10 flex flex-col gap-8 xl:gap-10">
        {/* Top Header Block with Watermark */}
        <div className="relative pt-6 sm:pt-8 md:pt-10 pb-0" data-aos="fade-up">
          {/* Giant Watermark directly positioned behind header text on mobile/tablet, keeping desktop layout */}
          <div className="absolute top-1 sm:top-2 md:top-4 xl:top-auto xl:bottom-0 left-0 pointer-events-none select-none z-0 max-w-[95%] sm:max-w-[90%] xl:max-w-[80%] overflow-hidden flex items-start xl:items-end">
            <span className="watermark !text-[clamp(44px,8.5vw,185px)] min-[2500px]:!text-[270px] min-[3800px]:!text-[380px] leading-none">
              ABOUT BARDHAL
            </span>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-[90%] xl:max-w-[80%]">
              <Typography
                variant="h2"
                color="white"
                className="text-2xl sm:text-3xl lg:text-[38px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-normal uppercase tracking-wide leading-tight w-full max-w-[90%] xl:max-w-[80%]"
              >
                Bardahl Manufacturing Corporation, USA
              </Typography>

              <Typography
                variant="p"
                color="muted"
                className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed text-gray-300 font-normal w-full max-w-[90%] xl:max-w-[80%]"
              >
                Since 1939, Bardahl products are sold worldwide in over 90 countries on 6 continents and are
                packaged in 16 languages. Still family owned and operated, Bardahl manages its worldwide business
                from its headquarters in Seattle, Washington with Evelyn Bardahl McNeil, and her Husband Hugh McNeil,
                Chairman and President of the corporation.
              </Typography>
            </div>

            {/* Circular Action Button */}
            <div className="shrink-0 self-start lg:self-center">
              <Button
                variant="circle"
                href="#about"
                iconDirection="up-right"
                aria-label="Learn more about Bardahl"
              />
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/20" />

        {/* Banner Image */}
        <div
          className="w-full rounded-[20px] overflow-hidden border border-white/10 shadow-2xl relative aspect-[16/7] md:aspect-[16/6] bg-black/40"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="/moto/bardahl/about.webp"
            alt="Bardahl Manufacturing Corporation"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
