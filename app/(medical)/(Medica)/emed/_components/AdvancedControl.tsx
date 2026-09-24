"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function AdvancedControl() {
  return (
    <section id="advanced-control" className="w-full py-16 sm:py-20 lg:py-28 min-[2500px]:py-36 emed-bg text-white overflow-hidden">
      <div className="custom-container">

        {/* Section Header */}
        <div className="text-center w-full max-w-[90%] xl:max-w-[70%] mx-auto mb-10 sm:mb-14 min-[2500px]:mb-20 space-y-3 sm:space-y-4" data-aos="fade-up">
          <Typography
            variant="h2"
            color="white"
            className="capitalize"
          >
            Advanced Electrosurgical Control
          </Typography>
          <Typography
            variant="p"
            color="white"
            className="leading-relaxed text-white/90"
          >
            The ATOM high-frequency electrosurgical generator is designed to provide greater control, flexibility, and efficiency during modern surgical procedures. It combines monopolar and bipolar functions with dedicated settings for urology and ENT applications, supporting versatile clinical use and precise surgical energy management across different procedures and clinical environments.
          </Typography>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 min-[1500px]:grid-cols-[75fr_25fr] gap-8 min-[1500px]:gap-8 xl:gap-10 min-[2000px]:gap-16 min-[2500px]:gap-24 items-center">

          {/* Video Player */}
          <div
            className="w-full relative aspect-video overflow-hidden rounded-[24px_0px] sm:rounded-[36px_0px] lg:rounded-[50px_0px] min-[2500px]:rounded-[70px_0px]"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content Column */}
          <div className="flex flex-col space-y-4 sm:space-y-5 min-[2000px]:space-y-8 min-[2500px]:space-y-10" data-aos="fade-left">
            <div>
              <Typography
                variant="h3"
                color="white"
                className="font-['Outfit'] font-semibold text-[23px] sm:text-[27px] min-[1500px]:text-[28px] min-[2000px]:text-[36px] min-[2500px]:text-[48px] min-[3800px]:text-[64px] text-white leading-tight"
              >
                Advanced Surgical Solutions
              </Typography>
              <div className="w-full h-px bg-white/30 my-3 sm:my-3.5 min-[2000px]:my-6 min-[2500px]:my-8" />
              <Typography
                variant="p"
                color="white"
                className="font-['Outfit'] text-white/95 text-[15px] sm:text-[15.5px] min-[1500px]:text-[16px] min-[2000px]:text-[20px] min-[2500px]:text-[26px] min-[3800px]:text-[36px] leading-relaxed"
              >
                Experience our latest medical technologies through an informative product video, highlighting practical solutions designed to support precision, efficiency, and reliable performance in modern surgical procedures.
              </Typography>
            </div>

            {/* Checkpoints with Solid White Circles */}
            <div className="flex flex-col space-y-3.5 sm:space-y-4 min-[2000px]:space-y-6 min-[2500px]:space-y-8 pt-1">
              <div className="flex items-start gap-3 min-[2000px]:gap-5">
                <div className="w-5 h-5 min-[2000px]:w-8 min-[2000px]:h-8 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <svg className="w-3 h-3 min-[2000px]:w-5 min-[2000px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-[#006B96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <Typography variant="p" color="white" className="font-['Outfit'] text-white text-[14.5px] sm:text-[15px] min-[1500px]:text-[15.5px] min-[2000px]:text-[20px] min-[2500px]:text-[26px] min-[3800px]:text-[36px] leading-relaxed">
                  <span className="font-semibold text-white">Bipolar Forceps</span> – Designed for precise tissue handling and controlled coagulation during surgical procedures.
                </Typography>
              </div>

              <div className="flex items-start gap-3 min-[2000px]:gap-5">
                <div className="w-5 h-5 min-[2000px]:w-8 min-[2000px]:h-8 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <svg className="w-3 h-3 min-[2000px]:w-5 min-[2000px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-[#006B96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <Typography variant="p" color="white" className="font-['Outfit'] text-white text-[14.5px] sm:text-[15px] min-[1500px]:text-[15.5px] min-[2000px]:text-[20px] min-[2500px]:text-[26px] min-[3800px]:text-[36px] leading-relaxed">
                  <span className="font-semibold text-white">Handles & Cables SDS</span> – Supports reliable instrument connection, secure handling, and efficient operation.
                </Typography>
              </div>

              <div className="flex items-start gap-3 min-[2000px]:gap-5">
                <div className="w-5 h-5 min-[2000px]:w-8 min-[2000px]:h-8 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <svg className="w-3 h-3 min-[2000px]:w-5 min-[2000px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-[#006B96]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <Typography variant="p" color="white" className="font-['Outfit'] text-white text-[14.5px] sm:text-[15px] min-[1500px]:text-[15.5px] min-[2000px]:text-[20px] min-[2500px]:text-[26px] min-[3800px]:text-[36px] leading-relaxed">
                  <span className="font-semibold text-white">Disposable Neutral Electrode</span> – Designed for safe, convenient, and hygienic single-use application during electrosurgical procedures.
                </Typography>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 min-[2000px]:pt-6">
              <Button
                text="Explore ATOM"
                variant="white"
                href="#atom-360"
                showIcon={true}
                className="min-[2000px]:text-2xl min-[2500px]:text-3xl min-[3800px]:text-4xl min-[2000px]:h-[64px] min-[2500px]:h-[80px] min-[3800px]:h-[104px] min-[2000px]:px-10 min-[2500px]:px-14 min-[3800px]:px-18"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
