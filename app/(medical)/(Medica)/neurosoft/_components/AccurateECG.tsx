"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AccurateECG() {
  return (
    <section
      id="accurate-ecg"
      className="w-full py-16 sm:py-20 lg:py-24 min-[2500px]:py-36 overflow-hidden select-none"
      style={{
        backgroundImage: "url('/medical/neurosoft/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="custom-container">
        <div className="flex flex-col min-[1026px]:flex-row items-center gap-8 min-[1026px]:gap-10 xl:gap-12 min-[2500px]:gap-16 w-full">
          <div
            className="w-full min-[1026px]:w-[30%] shrink-0 flex flex-col justify-center space-y-5 min-[2500px]:space-y-8"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="w-full space-y-4 min-[2500px]:space-y-7">
              <h2 className="!text-white font-baloo font-semibold text-[24px] sm:text-[28px] min-[1026px]:text-[30px] min-[2500px]:text-[46px] min-[3800px]:text-[60px] leading-[135%] capitalize">
                Designed For Accurate
                <br />
                Resting ECG
              </h2>

              <div className="w-full h-px bg-white/25" />

              <p className="!text-white font-baloo font-normal text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[150%] opacity-95">
                The RESTING ECG system provides 12 high-quality standard ECG leads with automatic measurement,
                interpretation, and report generation.
              </p>

              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-[22px] h-[22px] min-[2500px]:w-[34px] min-[2500px]:h-[34px] min-[3800px]:w-[44px] min-[3800px]:h-[44px] rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-6 min-[3800px]:h-6 text-[#273644] stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="!text-white font-baloo font-normal text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[145%] opacity-95">
                    <strong className="font-semibold text-white text-inherit">Automatic Report Generation</strong> – Creates detailed reports with measurements.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-[22px] h-[22px] min-[2500px]:w-[34px] min-[2500px]:h-[34px] min-[3800px]:w-[44px] min-[3800px]:h-[44px] rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-6 min-[3800px]:h-6 text-[#273644] stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="!text-white font-baloo font-normal text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[145%] opacity-95">
                    <strong className="font-semibold text-white text-inherit">Automatic Measurement & Interpretation</strong> – Supports efficient ECG analysis.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-white/25" />

              <p className="!text-white font-baloo font-normal text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[150%] opacity-95">
                Its digital system supports detailed ECG analysis, pacemaker pulse detection, and flexible printing options.
              </p>

              <div className="pt-2">
                <Button
                  text="Explore RESTING ECG"
                  variant="white"
                  showIcon={true}
                  className="text-[16px] min-[2500px]:text-[22px] min-[3800px]:text-[28px] min-[2500px]:!py-4 min-[2500px]:!px-8 min-[3800px]:!py-6 min-[3800px]:!px-12 font-medium !text-[#263441]"
                />
              </div>
            </div>
          </div>

          <div
            className="w-full min-[1026px]:w-[70%] relative aspect-video overflow-hidden rounded-[20px]"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="150"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
