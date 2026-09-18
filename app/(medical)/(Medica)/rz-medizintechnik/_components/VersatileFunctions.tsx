"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function VersatileFunctions() {
  return (
    <section
      id="versatile-functions"
      className="w-full bg-[#CCEBEC] py-16 sm:py-20 lg:py-24 xl:py-28 min-[2500px]:py-36 min-[3800px]:py-48 overflow-hidden"
    >
      <div className="custom-container">
        {/* Deleo Technique: Left Text & Right Video */}
        <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-14 min-[3800px]:gap-20 w-full">
          {/* Left Column: Floating White Card (order-1 on mobile & desktop matching Deleo) */}
          <div
            className="w-full xl:w-[42%] 2xl:w-[40%]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="bg-white rounded-[16px] min-[2500px]:rounded-[22px] min-[3800px]:rounded-[28px] p-7 sm:p-9 lg:p-10 min-[2500px]:p-14 min-[3800px]:p-20 shadow-lg border border-[#0099A1]/15 flex flex-col items-start text-left space-y-5 sm:space-y-6 min-[2500px]:space-y-8 min-[3800px]:space-y-10">
              <Typography
                variant="h2"
                color="dark"
                weight="semibold"
                className="leading-tight tracking-tight font-semibold"
                style={{ fontWeight: 600 }}
              >
                Versatile Functions. Controlled Performance.
              </Typography>

              <Typography
                variant="p"
                color="secondary"
                className="leading-relaxed"
              >
                The G44 offers versatile monopolar and bipolar functions with
                configurable working modes for different surgical requirements.
                Dedicated endoscopic and bipolar resection functions, combined
                with automatic power regulation and real-time parameter
                control, support precise and efficient procedures in urology
                and gynecology.
              </Typography>

              <div className="pt-2">
                <Button variant="primary" href="#products">
                  Explore Product
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Video Clip 02 (matching Deleo aspect-video) */}
          <div
            className="w-full xl:w-[58%] 2xl:w-[60%] relative aspect-video overflow-hidden rounded-[12px] sm:rounded-[16px] min-[2500px]:rounded-[20px] min-[3800px]:rounded-[24px] shadow-md border border-[#0099A1]/25 bg-transparent"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}