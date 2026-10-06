"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Explore360() {
  return (
    <section id="experience-360" className="w-full py-12 sm:py-16 lg:py-24 bg-[#F1F1F1] overflow-hidden">
      <div className="custom-container flex flex-col gap-8 sm:gap-10">
        

        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2 w-full max-w-[90%] xl:max-w-[70%]">
            <Typography variant="h2" color="dark" className="font-semibold text-2xl sm:text-3xl md:text-4xl">
              <span className="!text-[#00425E] font-inherit" style={{ color: "#00425E", fontSize: "inherit", fontWeight: "inherit" }}>
                Explore TERAMESH®
              </span>{" "}
              Non-Absorbable In 360°
            </Typography>
            <Typography variant="p" color="muted" className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed">
              Take a closer look at TERAMESH® Non-Absorbable through an interactive 360° experience. Explore its polypropylene monofilament construction, mesh structure, and design developed for abdominal wall stabilization.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button
              text="View in 360°"
              href="#experience-360"
              variant="primary"
              iconType="arrow-up-right"
            />
          </div>
        </div>

        <div className="w-full h-px bg-black/15" />

        <div
          className="w-full xl:max-w-[70%] mx-auto aspect-video rounded-[24px] sm:rounded-[30px] overflow-hidden relative shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-white"
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
