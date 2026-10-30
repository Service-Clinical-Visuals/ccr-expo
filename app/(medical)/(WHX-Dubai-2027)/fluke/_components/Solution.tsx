"use client";

import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const checklist = [
  "Accurate Output Power Measurement Across Multiple Operating Modes",
  "High-Frequency Leakage Testing For Enhanced Electrical Safety",
  "Reliable Performance Verification For Consistent Surgical Operation",
];

export default function Solution() {
  return (
    <section
      id="solutions"
      className="w-full bg-[#F8F9FB] bg-[url('/medical/fluke/bg3.webp')] bg-cover bg-center bg-no-repeat py-12 sm:py-16 xl:py-[86px] min-[2500px]:py-32 min-[3800px]:py-44 overflow-hidden"
    >
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 items-center gap-10 xl:gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Content (first on mobile/tablet) */}
        <div className="order-1 xl:order-2 xl:col-span-5 flex flex-col items-start" data-aos="fade-left">
          <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3 mb-3 sm:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-[54px] h-[2px] min-[2500px]:w-[80px] min-[2500px]:h-[3px] min-[3800px]:w-[108px] min-[3800px]:h-1 rounded-full bg-secondary shrink-0" />
            <Typography variant="h5" color="muted" weight="medium" className="uppercase">
              Precision in Every Measurement
            </Typography>
          </div>

          <Typography variant="h2" color="dark" className="mb-5 sm:mb-7 min-[2500px]:mb-10 min-[3800px]:mb-14">
            Ensuring Electrosurgical Safety
          </Typography>

          <Typography variant="p" color="dark">
            Explore how the ESU Tester evaluates electrosurgical unit output, verifies high-frequency leakage current,
            and supports routine performance checks. Designed for biomedical professionals, it helps simplify testing
            workflows and maintain equipment safety standards.
          </Typography>

          <ul className="w-full flex flex-col gap-3 sm:gap-3.5 min-[2500px]:gap-5 min-[3800px]:gap-7 mt-4 sm:mt-5 min-[2500px]:mt-8 min-[3800px]:mt-10">
            {checklist.map((item) => (
              <li key={item} className="grid grid-cols-[auto_1fr] items-start gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4">
                <IoCheckmarkDoneCircle className="w-[18px] h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 mt-[0.2em] text-[#B5B8BE] shrink-0" />
                <Typography variant="p" color="dark">
                  {item}
                </Typography>
              </li>
            ))}
          </ul>

          <div className="mt-8 sm:mt-10 min-[2500px]:mt-14 min-[3800px]:mt-20">
            <Button text="Explore Product" variant="primary" href="#products" showIcon={false} />
          </div>
        </div>

        {/* Video (last on mobile/tablet) */}
        <div
          className="order-2 xl:order-1 xl:col-span-7 relative w-full aspect-video xl:aspect-[704/388] overflow-hidden bg-[#EBEBEB]"
          data-aos="fade-right"
        >
          <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
