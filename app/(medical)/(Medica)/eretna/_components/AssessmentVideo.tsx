"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const keyFeatures = [
  "Portable ECG solution",
  "Quick and convenient ECG acquisition",
  "Compact, practical design",
  "Intuitive operation",
  "Reliable cardiac assessment",
  "Suitable for flexible clinical use",
];

export default function AssessmentVideo() {
  return (
    <section
      id="assessment-video"
      className="w-full py-16 xl:py-24 min-[2500px]:py-36 bg-[#1A171B] text-white overflow-hidden"
    >
      <div className="custom-container">
        {/* Top Header */}
        <div
          className="xl:max-w-[70%] max-w-[90%] mx-auto text-center space-y-4 mb-10 sm:mb-12"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <Typography variant="h2" color="white">
            Portable Cardiac Monitoring, <span className="text-[#4C75D8]">Made Simple</span>
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed opacity-90">
            Experience the T Cardio 6 Portable ECG Device in action. Designed for convenient ECG recording and efficient cardiac assessment, T Cardio 6 combines portability, intuitive operation, and dependable performance for healthcare professionals.
          </Typography>
        </div>

        {/* Divider */}
        <div className="w-full h-0 border-t-2 border-[#3452A7] mb-12 sm:mb-16" />

        {/* Two-Column Grid: Video (60%) & Content (40%) */}
        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-14 w-full">
          {/* Left Column: Video Clip */}
          <div
            className="w-full xl:w-[60%] relative aspect-video overflow-hidden shadow-2xl border border-white/10 bg-black"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

          {/* Right Column: Features Content */}
          <div
            className="w-full xl:w-[40%] flex flex-col gap-6"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="space-y-3">
              <Typography variant="h3" color="white">
                Designed for Efficient Cardiac Assessment
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed opacity-85">
                T Cardio 6 combines portable design with dependable ECG technology for convenient cardiac assessment across diverse clinical environments.
              </Typography>
            </div>

            {/* Key Features List */}
            <div className="border-2 border-[#3452A7] rounded-2xl p-6 sm:p-7 bg-white/[0.02] space-y-4">
              <Typography variant="h4" color="white" className="mb-2">
                Key Features
              </Typography>

              <div className="space-y-3.5">
                {keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="shrink-0 flex items-center justify-center w-[26px] h-[26px]">
                      <img
                        src="/medical/eretna/key.png"
                        alt="Key feature"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <Typography variant="p" color="white" className="text-[14.5px] sm:text-[15px] opacity-95">
                      {feat}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Explore Product CTA Button */}
            <div className="pt-2">
              <Button
                text="Explore Product"
                href="#products"
                variant="primary"
                showIcon={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
