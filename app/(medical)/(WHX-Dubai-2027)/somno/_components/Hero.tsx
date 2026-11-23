/**
 * Hero Section
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Background Video Integration:
 *    - Uses `DynamicVideoPlayer` with `type="banner"`, filling the container absolutely (`inset-0 w-full h-full object-cover`).
 * 2. Text & Content Alignment:
 *    - Left bottom aligned content area with optimal line length.
 *    - Uses Squada One display font for high-impact brand headline.
 * 3. Responsive Height:
 *    - Scales gracefully from mobile to 4K displays.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#0A192F]">
      {/* Container filling full screen height on all screen sizes */}
      <div className="relative w-full h-[100dvh] min-h-[100dvh] flex items-end">

        {/* Dynamic Video Player Background with dark gradient overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>

        {/* Content Container placed 15% above the bottom of the screen */}
        <div className="custom-container relative z-20 pb-[15vh]">
          <div
            className="w-full max-w-full xl:max-w-[70%] space-y-5 sm:space-y-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Headline with xl:max-w-[70%] measure */}
            <h1 className="font-primary text-white text-3xl sm:text-4xl md:text-5xl lg:text-[42px] 2xl:text-[46px] min-[2500px]:text-6xl min-[3800px]:text-8xl leading-[1.08] tracking-wide drop-shadow-md w-full max-w-full xl:max-w-[70%]">
              Medical technology that sets new standards. Reliable. Flexible. Innovative.
            </h1>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="#about"
                className="inline-flex items-center justify-center text-center font-primary font-bold text-[#212121]/75 hover:text-[#212121] bg-[#F9F9F9] hover:bg-white text-base sm:text-lg lg:text-[20px] px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 leading-none"
              >
                <span className="font-primary font-bold text-center leading-none">Explore Products</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

