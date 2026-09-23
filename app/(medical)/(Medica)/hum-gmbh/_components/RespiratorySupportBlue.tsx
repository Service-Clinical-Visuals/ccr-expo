"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function RespiratorySupportBlue() {
  return (
    <section id="respiratory-support" className="w-full py-16 sm:py-20 lg:py-24 min-[2500px]:py-36 min-[3800px]:py-48 bg-[#005BAA] !text-white overflow-hidden">
      <div className="custom-container">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center" data-aos="fade-up">
          <Typography
            variant="h2"
            color="white"
            className="font-['Exo_2'] font-bold !text-white"
          >
            Comfortable & Reliable Respiratory Support
          </Typography>
          <div className="w-[180px] sm:w-[240px] min-[2500px]:w-[340px] min-[3800px]:w-[460px] h-[3px] min-[2500px]:h-[6px] min-[3800px]:h-[8px] bg-white mt-3 sm:mt-4" />
        </div>

        <div className="w-full h-px bg-white/30 my-10 sm:my-14 min-[2500px]:my-20" />

        <div className="grid grid-cols-1 min-[1500px]:grid-cols-10 gap-8 xl:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24 items-center w-full">

          <div
            className="min-[1500px]:col-span-7 w-full relative aspect-video"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="min-[1500px]:col-span-3 w-full flex flex-col space-y-6 min-[2500px]:space-y-8" data-aos="fade-left">
            <Typography
              variant="h3"
              color="white"
              className="font-['Exo_2'] font-bold !text-white"
            >
              Designed For Comfort
            </Typography>

            <Typography variant="p" color="white" className="!text-white leading-relaxed">
              Safety valve and MaxShield configuration options add flexibility for different clinical requirements, making the mask a practical choice for reliable and comfortable respiratory care.
            </Typography>

            <div className="flex flex-col space-y-4 min-[2500px]:space-y-6 pt-1">
              <div className="flex items-start gap-3 min-[2500px]:gap-4">
                <div className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <svg className="w-3 h-3 min-[2500px]:w-4.5 min-[2500px]:h-4.5 min-[3800px]:w-6 min-[3800px]:h-6 text-[#005BAA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <Typography variant="p" color="white" className="!text-white leading-relaxed">
                  The soft silicone cushion provides a secure and gentle seal while helping reduce pressure around the nose bridge for improved patient comfort during therapy.
                </Typography>
              </div>

              <div className="flex items-start gap-3 min-[2500px]:gap-4">
                <div className="w-5 h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <svg className="w-3 h-3 min-[2500px]:w-4.5 min-[2500px]:h-4.5 min-[3800px]:w-6 min-[3800px]:h-6 text-[#005BAA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <Typography variant="p" color="white" className="!text-white leading-relaxed">
                  Adjustable headgear and interchangeable elbows provide a personalized fit and make it easier to adapt the mask.
                </Typography>
              </div>
            </div>

            <Typography variant="p" color="white" className="!text-white leading-relaxed pt-1">
              The Aero CPAP Mask is a non-invasive respiratory support solution designed to deliver pressurized airflow comfortably and effectively.
            </Typography>

            <div className="pt-2">
              <Button
                text="View Product Details"
                variant="white"
                href="#cpap"
                showIcon={true}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
