"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section id="experience-360" className="w-full py-16 xl:py-24 bg-[#F9F9F9] overflow-hidden">
      <div className="custom-container flex flex-col gap-8 lg:gap-10 min-[2500px]:gap-16 min-[3800px]:gap-24">
        {/* Top Header Row with Title and Button */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/10"
          data-aos="fade-up"
        >
          {/* Left Title and Subtitle (Deleo xl:max-w-[80%] pattern) */}
          <div className="flex flex-col gap-3 w-full xl:max-w-[80%]">
            <div className="flex items-center gap-3">
              <Typography variant="h2" color="dark" className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl">
                Explore The SMARTSCOPE LV PRO In 360°
              </Typography>
              <div className="w-8 sm:w-10 min-[2500px]:w-14 min-[3800px]:w-20 h-1 sm:h-1.5 min-[2500px]:h-2.5 min-[3800px]:h-4 gradient-accent rounded-full shrink-0" />
            </div>

            <Typography variant="p" color="muted" className="leading-relaxed text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl xl:max-w-[80%]">
              Discover the Tecme SMARTSCOPE LV PRO Video Laryngoscope through an immersive 360°
              experience. Explore its ergonomic design, high-definition camera, anti-fog technology,
              and advanced features developed to support clear visualization during airway management
              procedures.
            </Typography>
          </div>

          {/* Right Button */}
          <div className="shrink-0">
            <Button
              text="View Product"
              href="#products"
              variant="gradient"
              iconType="arrow-up-right"
            />
          </div>
        </div>

        {/* 360 Video Player Container (Exact Deleo pattern: w-full lg:max-w-[80%] mx-auto aspect-video relative overflow-hidden) */}
        <div
          className="w-full lg:max-w-[80%] mx-auto aspect-video relative overflow-hidden rounded-[20px] sm:rounded-[30px] shadow-xl bg-[#EAEAEA]"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          {/* Dynamic Video Player (Exact Deleo className) */}
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />


        </div>
      </div>
    </section>
  );
};

export default Deg360;
