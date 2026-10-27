"use client";

import React from "react";
import { LuCircleDot } from "react-icons/lu";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Innovation() {
  return (
    <section id="technology" className="w-full bg-primary py-12 sm:py-16 lg:py-20 2xl:py-[78px] min-[2500px]:py-28 min-[3800px]:py-40 overflow-hidden">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8 2xl:gap-8 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Video (after the content on mobile/tablet) */}
        <div
          className="order-2 lg:order-1 lg:col-span-7 relative w-full aspect-video lg:aspect-[764/430] overflow-hidden "
          data-aos="fade-right"
        >
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-start" data-aos="fade-left">
          <div className="flex items-center gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4 mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 min-[3800px]:w-3 min-[3800px]:h-3 rounded-full bg-white" />
            <Typography variant="h6" color="white" className="uppercase">
              Meet the Technology
            </Typography>
          </div>

          <Typography variant="h2" color="white" className="mb-5 sm:mb-6 2xl:mb-8 min-[2500px]:mb-11 min-[3800px]:mb-14">
            Innovation in Motion
          </Typography>

          <Typography variant="p" color="white">
            Discover the NeedleVue Lite Cart and its advanced ultrasound technology through a closer look at its
            design, integrated components, and clinical functionality. Explore how intelligent instrument
            visualization and a mobile cart configuration come together to support ultrasound-guided procedures.
          </Typography>

          <div className="flex items-center gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4 mt-5 2xl:mt-6 min-[2500px]:mt-9 min-[3800px]:mt-12 mb-1 min-[2500px]:mb-2">
            <LuCircleDot className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white shrink-0" strokeWidth={2.5} />
            <Typography variant="h6" color="white">
              Integrated Ultrasound Technology for Clinical Applications
            </Typography>
          </div>
          <Typography variant="p" color="white">
            Explore the advanced ultrasound imaging technology integrated into the NeedleVue Lite Cart, designed to
            support real-time visualization during ultrasound-guided procedures. Discover how imaging capabilities
            and instrument visualization work together to help clinicians navigate procedural workflows with greater
            clarity and precision.
          </Typography>

          <div className="mt-7 2xl:mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16">
            <Button text="Explore Product" variant="secondary" href="#products" />
          </div>
        </div>
      </div>
    </section>
  );
}
