"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Atom360() {
  return (
    <section id="atom-360" className="w-full py-16 sm:py-20 lg:py-24 min-[2500px]:py-36 emed-bg text-white overflow-hidden">
      <div className="custom-container">

        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-[90%] xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="white"
              className="capitalize"
            >
              Explore ATOM In 360°
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="leading-relaxed text-white/90"
            >
              Take a closer look at the ATOM Electrosurgical Generator through an interactive 360° experience. Explore its compact design, 7-inch touchscreen, intuitive controls, and advanced features for precise surgical energy management.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button
              text="View in 360°"
              variant="white"
              href="#solutions"
              showIcon={true}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px /25 mb-8 sm:mb-12 min-[2500px]:mb-16" />

        {/* 360 Video Player */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-[24px_0px] sm:rounded-[36px_0px] lg:rounded-[50px_0px] min-[2500px]:rounded-[70px_0px] "
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
