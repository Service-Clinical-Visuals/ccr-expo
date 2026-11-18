"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const Filtration = () => {
  return (
    <section
      id="filtration"
      className="relative w-full bg-[var(--color-navy)] xl:bg-[var(--color-quote-bg)] overflow-hidden"
    >
      {/* Navy band — on desktop it starts below the top of the video so the video straddles both colours */}
      <div className="hidden xl:block absolute left-0 right-0 bottom-0 top-[22%] bg-[var(--color-navy)] pointer-events-none" />

      <div className="custom-container relative z-10 pt-12 xl:pt-0 pb-14 xl:pb-20 min-[2500px]:pb-32 min-[3800px]:pb-44">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-14 min-[2500px]:gap-20 items-center">
          {/* Video */}
          <div
            className="xl:col-span-7 relative w-full aspect-video overflow-hidden bg-gray-100 border-2 border-[#7FB6DA] rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-md rounded-bl-md min-[2500px]:rounded-tl-[3rem] min-[2500px]:rounded-br-[3rem] shadow-2xl"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div
            className="xl:col-span-5 flex flex-col items-start gap-4 sm:gap-5 min-[2500px]:gap-8 xl:pt-[10%]"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <Eyebrow text="Filter Technology" tone="light" />

            <Typography variant="h2" color="white" className="leading-tight">
              Reliable Filtration for Cleaner Surgical Environments
            </Typography>

            <Typography variant="p" color="white" className="text-white/90 leading-relaxed font-normal">
              Discover the Smoke Evacuator Unit&apos;s integrated 35-hour filter
              system, designed to support effective surgical smoke management.
              Explore its filter design and functionality, developed to help
              maintain a cleaner and more controlled operating environment.
            </Typography>

            <div className="pt-2 sm:pt-3">
              <Button text="Explore Product" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filtration;
