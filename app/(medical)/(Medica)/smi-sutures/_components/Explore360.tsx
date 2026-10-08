"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Explore360() {
  return (
    <section
      id="view-360"
      className="w-full bg-[#3a5da8] bg-[url('/medical/smi-sutures/bg.webp')] bg-cover bg-center bg-no-repeat py-14 sm:py-16 min-[1025px]:py-20"
    >
      <div className="custom-container px-0 sm:px-2 min-[1025px]:px-4">
        {/* Top Header Row */}
        <div
          className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:items-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Left: Heading & Description */}
          <div className="xl:col-span-9">
            <h2 className="section-title font-semibold text-white inline-flex items-center gap-3">
              Explore Polypropylene Mesh In 360°
              <span className="inline-block w-6 sm:w-7 h-[3px] rounded-full bg-white flex-shrink-0" />
            </h2>

            <p className="section-text text-white/90 mt-3 max-w-4xl">
              Take a closer look at the Polypropylene Mesh through an interactive 360° experience. Explore its
              monofilament polypropylene construction, thin mesh structure, porosity, transparency, and durable
              design developed for abdominal wall reinforcement.
            </p>
          </div>

          {/* Right: View in 360° CTA */}
          <div className="xl:col-span-3 flex xl:justify-end">
            <Button href="" variant="white">
              View in 360°
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/25 mt-6 sm:mt-8 mb-6 sm:mb-8" />

        {/* 360 Video Player Box */}
        <div
          className="relative w-full max-w-7xl mx-auto aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-white/10"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
