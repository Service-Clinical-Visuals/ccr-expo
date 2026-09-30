"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import SectionBadge from "./SectionBadge";

export default function Deg360() {
  return (
    <section
      id="explore360"
      className="w-full py-12 md:py-16 lg:py-20 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-[url('/medical/dlr-meda/bg.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-white/70 z-0 pointer-events-none" />

      <div className="custom-container relative z-10 flex flex-col items-center text-center gap-8 md:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Header Block */}
        <div
          className="flex flex-col items-center w-full lg:max-w-[80%] xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <SectionBadge text="360° Product View" />

          <Typography
            variant="h2"
            color="dark"
            className="mt-4 min-[2500px]:mt-6 min-[3800px]:mt-8 leading-[1.4] text-center"
          >
            Explore Our Hemodialysis Catheter Solutions in 360°
          </Typography>

          <Typography
            variant="p"
            color="dark"
            className="mt-3 min-[2500px]:mt-5 min-[3800px]:mt-7 text-center opacity-90"
          >
            Take a closer look at DLR Medikal&apos;s long- and short-term
            hemodialysis catheter sets. Rotate, zoom, and inspect every detail
            to see how precision engineering, quality materials, and thoughtful
            design come together to support safe, efficient, and reliable
            clinical performance.
          </Typography>
        </div>

        {/* 360 Player */}
        <div
          className="w-full lg:max-w-[80%] xl:max-w-[70%] mx-auto aspect-video relative rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px] overflow-hidden  "
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <Button
            text="View All Products"
            href="#products"
            variant="primary"
            className="px-10 py-3 min-[2500px]:px-16 min-[2500px]:py-5 min-[3800px]:px-20 min-[3800px]:py-7 min-[2500px]:rounded-[8px]"
          />
        </div>
      </div>
    </section>
  );
}
