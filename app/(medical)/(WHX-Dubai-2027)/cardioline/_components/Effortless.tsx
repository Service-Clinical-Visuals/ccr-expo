"use client";

import React from "react";
import { LuCircleCheck } from "react-icons/lu";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  "High-Quality ECG Signals",
  "Intuitive Touchscreen",
  "Clear Waveform Display",
  "Digital Workflow Support",
];

export default function Effortless() {
  return (
    <section id="solutions" className="w-full bg-[#F1F4FE] py-12 sm:py-16 xl:py-[76px] min-[2500px]:py-28 min-[3800px]:py-40 overflow-hidden">
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 items-center gap-10 xl:gap-8 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Heading + content (first on mobile/tablet) */}
        <div className="order-1 xl:col-span-5 flex flex-col items-start" data-aos="fade-right">
          <Typography variant="h5" color="secondary" weight="medium" className="mb-3 min-[2500px]:mb-5 min-[3800px]:mb-7">
            Simplifying Cardiac Diagnostics
          </Typography>
          <Typography variant="h2" color="dark" className="mb-5 sm:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
            Effortless Operation. Efficient ECG Workflows.
          </Typography>
          <Typography variant="p" color="dark">
            Experience how TouchECG Android combines intuitive touchscreen controls with advanced ECG functionality to
            simplify routine examinations. Designed with healthcare professionals in mind, it supports a smooth and
            convenient diagnostic workflow.
          </Typography>

          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 sm:gap-y-5 min-[2500px]:gap-x-10 min-[2500px]:gap-y-8 min-[3800px]:gap-x-14 min-[3800px]:gap-y-10 mt-5 sm:mt-6 min-[2500px]:mt-9 min-[3800px]:mt-12">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3">
                <LuCircleCheck
                  className="w-[18px] h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 text-[#10B981] shrink-0"
                  strokeWidth={2}
                />
                <Typography variant="span" color="primary" weight="medium">
                  {item}
                </Typography>
              </li>
            ))}
          </ul>

          <div className="mt-7 sm:mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16">
            <Button text="Explore Product" variant="primary" href="#products" />
          </div>
        </div>

        {/* Video (last on mobile/tablet) */}
        <div
          className="order-2 xl:col-span-7 relative w-full aspect-video xl:aspect-[627/346] overflow-hidden"
          data-aos="fade-left"
        >
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
