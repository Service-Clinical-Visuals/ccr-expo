"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const Platform = () => {
  return (
    <section id="platform" className="w-full py-16 lg:py-24 bg-[#10253D] overflow-hidden">
      <div className="custom-container">

        {/* Top Header Row */}
        <div className="flex flex-col items-center text-center mb-8" data-aos="fade-up">
          <Typography variant="h2" color="white" className="mb-4 max-w-4xl leading-tight font-bold">
            Advanced Electrosurgical Performance
          </Typography>
          <Typography variant="p" color="white" className="text-sm md:text-base leading-relaxed xl:max-w-[70%] mx-auto mb-8 opacity-90">
            The H-Series Electrosurgical Unit is designed to support precise cutting and coagulation across a wide range of surgical procedures.
          </Typography>

          {/* Horizontal Line */}
          <div className="w-full h-[1px] bg-[#FFFFFF80] mb-10"></div>
        </div>

        {/* Video and Content Grid */}
        <div className="grid grid-cols-1 min-[1480px]:grid-cols-12 gap-8 min-[1480px]:gap-12 items-center">

          {/* Left: Video Placeholder (span 8) */}
          <div className="order-2 min-[1480px]:order-1 min-[1480px]:col-span-9 w-full aspect-video relative overflow-hidden flex items-center justify-center" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Content (span 4) */}
          <div className="order-1 min-[1480px]:order-2 min-[1480px]:col-span-3 flex flex-col justify-start" data-aos="fade-left">
            <Typography variant="h4" color="white" className="mb-4 font-semibold text-xl lg:text-2xl">
              Modern Surgical Performance
            </Typography>

            <div className="w-full h-[1px] bg-[#FFFFFF80] mb-4"></div>

            <Typography variant="p" color="white" className="text-sm leading-relaxed mb-5 opacity-90">
              The H-Series combines advanced energy delivery with multiple operating modes to provide a flexible, efficient, and reliable electrosurgical solution for modern procedures
            </Typography>

            {/* Bullet Points */}
            <div className="flex flex-col gap-6 mb-5">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-1" />
                <Typography variant="p" color="white" className="text-sm leading-relaxed opacity-90">
                  <span className="font-semibold text-white">Monopolar & Bipolar Modes</span> – Supports versatile energy delivery for different surgical applications.
                </Typography>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-1" />
                <Typography variant="p" color="white" className="text-sm leading-relaxed opacity-90">
                  <span className="font-semibold text-white">Tissue Response Technology</span> – Helps maintain consistent performance by responding to tissue conditions.
                </Typography>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-1" />
                <Typography variant="p" color="white" className="text-sm leading-relaxed opacity-90">
                  <span className="font-semibold text-white">Controlled Energy Delivery</span> – Supports precise cutting and effective coagulation during procedures.
                </Typography>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#FFFFFF80] mb-4"></div>

            <Typography variant="p" color="white" className="text-sm leading-relaxed mb-8 opacity-90">
              Its dual output capability and tissue response technology are designed to support consistent performance across modern surgical procedures.
            </Typography>

            <div>
              <Button
                text="Explore H-Series"
                href="#h-series"
                variant="primary"
                showIcon={true}
                icon={<ArrowRight className="w-4 h-4 ml-2" />}
                className="bg-white !text-[#2A2A2A] hover:bg-gray-100 font-medium px-6 py-3 border-none rounded-sm"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Platform;
