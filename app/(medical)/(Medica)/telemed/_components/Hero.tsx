"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full relative z-10 h-screen h-[100dvh] min-h-[560px] flex flex-col telemed-hero-section pb-3 sm:pb-4 md:pb-5 xl:pb-6 min-[2500px]:pb-8 min-[3800px]:pb-12 overflow-hidden bg-white"
    >
      <div className="custom-container flex-1 min-h-0 h-full flex flex-col">
        {/* Hero Banner Card */}
        <div
          className="relative overflow-hidden w-full flex-1 min-h-0 h-full rounded-2xl md:rounded-3xl min-[3800px]:rounded-[48px] shadow-xl bg-[#1a1c23] group"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {/* Background Video */}
          <DynamicVideoPlayer
            type="banner"
            className="absolute top-0 left-0 w-full h-full object-fill"
          />

          {/* Top-Left Badge: "| Treatment procedure" */}
          <div
            className="absolute top-6 sm:top-8 xl:top-9 2xl:top-10 min-[2500px]:top-14 min-[3800px]:top-20 left-6 sm:left-10 xl:left-12 2xl:left-14 min-[2500px]:left-16 min-[3800px]:left-24 z-20 flex items-center gap-2.5 2xl:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 text-white"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {/* Purple Accent Vertical Bar */}
            <span className="w-[3.5px] sm:w-[4px] 2xl:w-[5px] min-[2500px]:w-[7px] min-[3800px]:w-[9px] h-[20px] sm:h-[24px] 2xl:h-[28px] min-[2500px]:h-[38px] min-[3800px]:h-[52px] bg-[#8B5CF6] rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
            <span className="font-['Exo_2'] font-[700] text-[17px] sm:text-[19px] xl:text-[21px] 2xl:text-[24px] min-[2500px]:text-[32px] min-[3800px]:text-[44px] text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Treatment procedure
            </span>
          </div>

          {/* Bottom-Left Content: Headline & Explore Button (70% width concept on big screens) */}
          <div
            className="absolute bottom-8 sm:bottom-12 xl:bottom-14 2xl:bottom-16 min-[2500px]:bottom-20 min-[3800px]:bottom-28 left-6 sm:left-10 xl:left-12 2xl:left-14 min-[2500px]:left-16 min-[3800px]:left-24 z-20 w-full max-w-[90%] sm:max-w-[560px] xl:max-w-[70%] min-[3800px]:max-w-[75%] flex flex-col items-start gap-5 sm:gap-7 2xl:gap-8 min-[2500px]:gap-10 min-[3800px]:gap-14 pointer-events-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Main Headline */}
            <h1 className="font-['Exo_2'] font-[600] text-white text-[28px] sm:text-[34px] min-[1025px]:text-[38px] xl:text-[44px] 2xl:text-[50px] min-[1920px]:text-[56px] min-[2500px]:text-[72px] min-[3800px]:text-[96px] leading-[1.22] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] capitalize">
              Driving innovation beyond convention
            </h1>

            {/* CTA Button: Explore Our Products */}
            <div className="pt-1 min-[2500px]:pt-3 min-[3800px]:pt-4">
              <Button
                variant="white"
                href="#products"
                showArrow
                className="shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
              >
                Explore Our Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
