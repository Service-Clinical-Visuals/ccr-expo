"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Experience360 = () => {
  return (
    <section id="experience-360" className="w-full py-12 sm:py-16 lg:py-24 min-[3800px]:py-32 bg-[#F5F5F5] overflow-hidden">
      <div className="custom-container">
        {/* Top Header Row */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-10"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 sm:gap-4 xl:max-w-[70%]">
            <h2 className="capitalize font-semibold text-inherit">
              <span className="text-[#2A2A2A] text-[length:inherit]">Explore </span>
              <span className="text-[var(--color-primary)] text-[length:inherit]">CRYOTUR STREAM In 360°</span>
            </h2>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Discover the TUR CRYOTUR STREAM through an immersive 360° product experience. Explore
              its innovative cooling technology, ergonomic handpiece, and advanced control system,
              designed to deliver precise, contact-free cryotherapy for physiotherapy and
              rehabilitation professionals.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button
              text="View in 360°"
              href="#experience-360"
              variant="primary"
            />
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-black/20 my-6 sm:my-8 lg:my-10" />

        {/* 360° Video Block matching Deleo 70% concept */}
        <div
          className="w-full lg:max-w-[70%] mx-auto aspect-video relative overflow-hidden rounded-2xl lg:rounded-[30px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-white"
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
};

export default Experience360;

