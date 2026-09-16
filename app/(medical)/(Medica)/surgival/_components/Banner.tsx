"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Banner() {
  return (
    <section id="banner-section" className="custom-container mt-34 min-[3800px]:mt-40">
      {/* Rounded Video Hero Container matching Screenshot */}
      <div
        className="relative w-full h-screen  overflow-hidden bg-black shadow-2xl"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* Dynamic Video Player Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DynamicVideoPlayer
            type="banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Banner Content Container (Positioned at bottom-left as in screenshot) */}
        <div className="relative z-20 h-full flex flex-col justify-end p-6 sm:p-10 md:p-14 lg:p-20">
          <div className="max-w-3xl flex flex-col gap-6 items-start">
            {/* Main Hero Heading */}
            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
              <Typography variant="h1" color="white" className="leading-tight">
                Restoring Mobility, Advancing Orthopaedic Care
              </Typography>
            </div>

            {/* CTA Button */}
            <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
              <Button href="#products" variant="secondary" text="Explore Products" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
