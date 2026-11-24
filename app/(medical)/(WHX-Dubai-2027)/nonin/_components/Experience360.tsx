/**
 * Experience360 Section (EXPLORE EVERY ANGLE - WristOx₂® 3150)
 * Master Reference: Inogen Development Standards
 * Icon scaling: Spec icons scale smoothly across mobile, desktop, 2K and 4K displays.
 */
"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { BatteryCharging, HardDrive, Cloud } from "lucide-react";

const specs = [
  {
    icon: BatteryCharging,
    iconColor: "#75D1FF",
    title: "44-Hour Continuous Operation",
    description:
      "Runs on standard 2 x AAA alkaline batteries for up to 44 hours (or 24 hours with continuous BLE broadcast active).",
  },
  {
    icon: HardDrive,
    iconColor: "#FFD88A",
    title: "1,080 Hours of Memory",
    description:
      "Robust non-volatile memory logs high-resolution 1-second interval telemetry without data compromise during battery swaps.",
  },
  {
    icon: Cloud,
    iconColor: "#75D1FF",
    title: "Nonin Health® Cloud Native",
    description:
      "Integrates effortlessly with nVISION® and Nonin Health cloud dashboards for automated CMS qualification scoring.",
  },
];

const Experience360 = () => {
  return (
    <section id="technologies" className="w-full py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-48 bg-[#F2F3F4] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14 min-[2500px]:gap-20 min-[3800px]:gap-28">
        
        {/* Section Header: Centered with xl:max-w-[70%] width limit for optimal line length */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3 min-[2500px]:space-y-5 min-[3800px]:space-y-8"
          data-aos="fade-up"
        >
          <span className="text-[#2A96C2] font-heading font-bold text-xs sm:text-sm min-[2500px]:text-xl min-[3800px]:text-3xl uppercase tracking-widest block">
            EXPLORE EVERY ANGLE
          </span>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-[32px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-black"
          >
            Get a Closer Look at WristOx₂® 3150
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-[#111111]"
          >
            Explore the WristOx₂® Model 3150 with Bluetooth® Low Energy from every angle and discover its compact wrist-worn design, intuitive display and convenient wireless connectivity.
          </Typography>
        </div>

        {/* 2-Column Split: Stacks on mobile/tablet up to 1450px, side-by-side above 1450px */}
        <div className="flex flex-col min-[1451px]:flex-row items-center gap-8 min-[1451px]:gap-10 min-[2500px]:gap-16 min-[3800px]:gap-24 w-full">
          
          {/* Left: 360 Video Container */}
          <div
            className="w-full min-[1451px]:w-[65%] aspect-video relative overflow-hidden rounded-[5px] min-[2500px]:rounded-[10px] min-[3800px]:rounded-[16px]"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

          {/* Right: Specs Cards (3 dark cards + CTA button) */}
          <div
            className="w-full min-[1451px]:w-[35%] flex flex-col gap-4 sm:gap-5 min-[2500px]:gap-8 min-[3800px]:gap-12"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            {specs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="w-full bg-[#0F1C2C] text-white p-5 sm:p-6 min-[2500px]:p-9 min-[3800px]:p-14 rounded-[4px] min-[2500px]:rounded-[8px] min-[3800px]:rounded-[12px] shadow-sm flex flex-col gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 min-[2500px]:gap-5 min-[3800px]:gap-8">
                    <IconComp
                      className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-14 min-[3800px]:h-14 shrink-0"
                      style={{ color: item.iconColor }}
                    />
                    <h3 className="text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-4xl font-bold font-heading text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl text-white/90 leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>
              );
            })}

            {/* Bottom Button */}
            <div className="pt-2 self-start">
              <Button
                text="Explore Product"
                href="#products"
                showIcon={true}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience360;
