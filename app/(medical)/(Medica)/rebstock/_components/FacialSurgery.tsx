"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function FacialSurgery() {
  return (
    <section
      id="science"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#003F77] bg-[url('/medical/rebstock/bg.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden relative"
    >
      <div className="custom-container flex flex-col gap-6">
        <div className="min-[1501px]:hidden flex flex-col gap-3 text-white" data-aos="fade-up">
          <Typography
            variant="h2"
            color="white"
            className="!font-semibold capitalize leading-snug"
          >
            Precision For Facial Surgery
          </Typography>
          <div className="w-full h-px bg-white/25" />
        </div>

        <div className="grid grid-cols-1 min-[1501px]:grid-cols-10 gap-8 lg:gap-10 xl:gap-12 min-[3800px]:gap-20 items-center w-full">
          <div
            className="w-full min-[1501px]:col-span-7 relative aspect-video overflow-hidden rounded-none shadow-[0px_4px_20px_rgba(0,0,0,0.35)] bg-black"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-contain" />
          </div>

          <div
            className="flex flex-col gap-4 sm:gap-5 w-full min-[1501px]:col-span-3 text-white"
            data-aos="fade-left"
          >
            <div className="hidden min-[1501px]:flex flex-col gap-4">
              <Typography
                variant="h2"
                color="white"
                className="!font-semibold capitalize leading-snug"
              >
                Precision For Facial Surgery
              </Typography>

              <div className="w-full h-px bg-white/25" />
            </div>

            <Typography
              variant="p"
              color="white"
              className="leading-relaxed text-white/90"
            >
              Our Facial Implant system is developed to support demanding cranio-maxillofacial procedures, combining precise engineering, anatomical design, and reliable fixation.
            </Typography>

            <ul className="space-y-4 text-white list-none my-1">
              <li className="flex gap-3 items-start">
                {/* Tick image */}
                <img
                  src="/medical/rebstock/tick.png"
                  alt="Tick"
                  className="w-5 h-5 min-[1920px]:w-6 min-[1920px]:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 shrink-0 mt-0.5 object-contain"
                />
                <Typography
                  variant="p"
                  color="white"
                  className="leading-relaxed text-white/90"
                >
                  Carefully designed to follow facial anatomy, supporting accurate positioning and a precise fit during complex reconstructive procedures.
                </Typography>
              </li>

              <li className="flex gap-3 items-start">
                {/* Tick image */}
                <img
                  src="/medical/rebstock/tick.png"
                  alt="Tick"
                  className="w-5 h-5 min-[1920px]:w-6 min-[1920px]:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 shrink-0 mt-0.5 object-contain"
                />
                <Typography
                  variant="p"
                  color="white"
                  className="leading-relaxed text-white/90"
                >
                  Engineered for secure and stable placement, providing dependable performance and supporting surgeons throughout the fixation process.
                </Typography>
              </li>
            </ul>

            <div className="w-full h-px bg-white/25" />

            <Typography
              variant="p"
              color="white"
              className="leading-relaxed text-white/90"
            >
              Designed with surgical requirements in mind, it provides surgeons with versatile solutions for accurate positioning and efficient handling across a range of reconstructive applications.
            </Typography>

            <div className="pt-2">
              <Button
                text="Explore Facial Implants"
                variant="white"
                href="#products"
                className="rounded-none shadow-[0px_3px_8px_rgba(0,0,0,0.24)] !px-6 !py-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
