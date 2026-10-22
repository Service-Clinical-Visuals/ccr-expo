"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Interactive360() {
  return (
    <section id="experience-360" className="relative w-full bg-white overflow-hidden">
      {/* Top band */}
      <div className="w-full bg-primary pt-8 sm:pt-10 2xl:pt-12 min-[2500px]:pt-16 min-[3800px]:pt-24">
        <div className="custom-container">
          <div
            className="flex flex-col md:flex-row md:items-center justify-between gap-6 2xl:gap-10 min-[3800px]:gap-16 pb-6 sm:pb-8 2xl:pb-10 min-[2500px]:pb-14 min-[3800px]:pb-20 border-b border-white/30"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-3 2xl:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 md:max-w-[65%] xl:max-w-[62%]">
              <Typography variant="h1" color="white">
                Explore CARDIO M-PC In 360°
              </Typography>
              <Typography variant="p" color="white">
                Discover the CARDIO M-PC USB resting PC-ECG through an immersive 360° product experience. Explore its
                compact design and advanced diagnostic capabilities, developed to support efficient cardiac
                examinations in hospitals, clinics, and mobile healthcare settings.
              </Typography>
            </div>

            <div className="shrink-0">
              <Button text="Explore 360° View" variant="secondary" href="#experience-360" />
            </div>
          </div>
        </div>
      </div>

      {/* Video card overlapping the band and the white area */}
      <div className="w-full bg-linear-to-b from-primary from-[15%] to-white to-[15%] pt-5 sm:pt-6 2xl:pt-8 min-[2500px]:pt-10 min-[3800px]:pt-14">
        <div className="custom-container pb-12 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-32 min-[3800px]:pb-44">
          <div
            className="w-full xl:w-[88%] mx-auto aspect-video xl:aspect-[1146/533] relative overflow-hidden rounded-tl-[20px] rounded-br-[20px] sm:rounded-tl-[28px] sm:rounded-br-[28px] min-[2500px]:rounded-tl-[40px] min-[2500px]:rounded-br-[40px] min-[3800px]:rounded-tl-[56px] min-[3800px]:rounded-br-[56px] shadow-[0px_4px_12px_rgba(0,0,0,0.2)] bg-[#EBEBEB]"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
