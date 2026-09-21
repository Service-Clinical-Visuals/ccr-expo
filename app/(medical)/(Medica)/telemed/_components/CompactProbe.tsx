"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function CompactProbe() {
  return (
    <section
      id="compact-probe"
      className="w-full bg-white pt-10 sm:pt-14 xl:pt-18 pb-16 sm:pb-20 xl:pb-24 overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header & Action */}
        <div
          className="flex flex-col min-[1025px]:flex-row min-[1025px]:items-end justify-between gap-6 min-[1025px]:gap-10 min-[3800px]:gap-20 mb-8 sm:mb-10 xl:mb-12 min-[3800px]:mb-20"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Left Heading & Description */}
          <div className="flex-1 xl:max-w-[70%] min-[3800px]:max-w-[75%]">
            <Typography
              variant="h2"
              weight="semibold"
              color="dark"
              className="font-['Exo_2'] tracking-tight capitalize"
            >
              Professional{" "}
              <span className="text-[#0F3E7B]">Ultrasound</span> In A Compact
              Probe
            </Typography>

            <Typography
              variant="p"
              color="body"
              className="mt-3.5 sm:mt-4 min-[3800px]:mt-6 leading-relaxed"
            >
              MicrUs Pro combines professional ultrasound imaging with a compact
              handheld design for Windows and Android devices. Three probe
              versions support versatile imaging across multiple clinical
              applications.
            </Typography>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 pt-1 min-[1025px]:pt-0">
            <Button
              variant="primary"
              href="#micrus-pro"
              showArrow
            >
              Discover MicrUs Pro
            </Button>
          </div>
        </div>

        {/* Video Player */}
        <div
          className="w-full xl:max-w-[75%] aspect-[16/9] relative overflow-hidden mt-6 sm:mt-8 min-[3800px]:mt-16 mx-auto shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
