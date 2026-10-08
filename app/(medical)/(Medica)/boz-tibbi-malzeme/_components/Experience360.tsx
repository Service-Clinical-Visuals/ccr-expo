"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Experience360() {
  return (
    <section id="experience-360" className="w-full relative overflow-hidden pb-16 lg:pb-24">
      {/* Banner */}
      <div className="w-full bg-[var(--color-primary)] pt-12 sm:pt-16 pb-28 sm:pb-36 lg:pb-48">
        <div className="custom-container flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-3 xl:max-w-[70%] max-w-[90%]" data-aos="fade-right">
            <Typography variant="h2" color="white" className="capitalize tracking-wide">
              MONOPROLEN Mesh
            </Typography>
            <Typography variant="p" color="white" className="text-white/90 leading-relaxed font-normal">
              Explore MONOPROLEN Mesh through a 360° product view, highlighting its flexible monofilament polypropylene structure, thin mesh design, and easy handling.
            </Typography>
          </div>

          <div className="shrink-0" data-aos="fade-left">
            <Button
              text="Explore In 360°"
              href="#experience-360"
              variant="secondary"
            />
          </div>
        </div>
      </div>

      {/* 360° Video */}
      <div className="custom-container -mt-20 sm:-mt-28 lg:-mt-36 relative z-10">
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-[20px] sm:rounded-[30px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-white"
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
