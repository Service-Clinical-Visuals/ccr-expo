"use client";

import React from "react";
import { TbHeartRateMonitor } from "react-icons/tb";
import { LuActivity, LuMonitor } from "react-icons/lu";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const highlights = [
  {
    title: "Advanced ESU Technology",
    description: "Designed for reliable cardiac monitoring.",
    Icon: TbHeartRateMonitor,
  },
  {
    title: "Intuitive Interface",
    description: "Simplifies everyday ESU workflows.",
    Icon: LuMonitor,
  },
  {
    title: "Clinical Efficiency",
    description: "Supports streamlined cardiac assessment.",
    Icon: LuActivity,
  },
];

export default function Interactive360() {
  return (
    <section
      id="experience-360"
      className="w-full bg-primary bg-[url('/medical/fluke/bg2.webp')] bg-cover bg-center bg-no-repeat py-12 sm:py-16 xl:py-[84px] min-[2500px]:py-32 min-[3800px]:py-44 overflow-hidden"
    >
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 items-center gap-10 xl:gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Content (first on mobile/tablet) */}
        <div className="order-1 xl:col-span-5 flex flex-col items-start" data-aos="fade-right">
          <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3 mb-3 sm:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-[54px] h-[2px] min-[2500px]:w-[80px] min-[2500px]:h-[3px] min-[3800px]:w-[108px] min-[3800px]:h-1 rounded-full bg-secondary shrink-0" />
            <Typography variant="h5" color="white" weight="medium" className="uppercase">
              Explore ESU Tester
            </Typography>
          </div>

          <Typography variant="h2" color="white" className="mb-4 sm:mb-5 min-[2500px]:mb-8 min-[3800px]:mb-11">
            ESU Performance Testing
          </Typography>

          <Typography variant="p" color="white">
            Discover reliable ESU testing solutions designed to evaluate electrosurgical unit performance. Verify
            output power, high-frequency leakage current, and other key parameters to support equipment safety and
            consistent surgical performance.
          </Typography>

          <ul className="w-full flex flex-col gap-4 sm:gap-5 min-[2500px]:gap-8 min-[3800px]:gap-10 mt-6 sm:mt-7 min-[2500px]:mt-11 min-[3800px]:mt-14">
            {highlights.map(({ title, description, Icon }) => (
              <li key={title} className="grid grid-cols-[auto_1fr] items-start gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4">
                <Icon
                  className="w-6 h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 text-white shrink-0"
                  strokeWidth={1.5}
                />
                <Typography variant="p" color="white">
                  <Typography variant="span" color="white" weight="semibold">
                    {title}
                  </Typography>{" "}
                  — {description}
                </Typography>
              </li>
            ))}
          </ul>

          <div className="mt-6 sm:mt-7 min-[2500px]:mt-11 min-[3800px]:mt-14">
            <Button text="Explore Product" variant="primary" href="#products" showIcon={false} />
          </div>
        </div>

        {/* 360° video (last on mobile/tablet) */}
        <div
          className="order-2 xl:col-span-7 relative w-full aspect-video xl:aspect-[704/388] overflow-hidden rounded-[4px] min-[2500px]:rounded-[6px] min-[3800px]:rounded-[8px] bg-[#EBEBEB]"
          data-aos="fade-left"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
