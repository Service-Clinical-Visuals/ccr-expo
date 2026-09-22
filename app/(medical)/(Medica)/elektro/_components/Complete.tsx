"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const Complete = () => {
  return (
    <section id="complete" className="w-full py-16 lg:py-24 bg-[#10253D] overflow-hidden">
      <div className="custom-container">

        <div className="grid grid-cols-1 min-[1380px]:grid-cols-12 gap-8 min-[1380px]:gap-16 items-center">

          {/* Left: Content (span 4 or 5) */}
          <div className="min-[1380px]:col-span-4 flex flex-col justify-start" data-aos="fade-right">
            <Typography variant="h2" color="white" className="mb-6 font-semibold leading-tight">
              Precision Electrosurgery<br />With Flexible Performance
            </Typography>

            <div className="w-full h-[1px] bg-[#FFFFFF80] mb-5"></div>

            <Typography variant="p" color="white" className="text-sm leading-relaxed mb-6 opacity-90">
              The H-Series Electrosurgical Unit combines controlled monopolar and bipolar energy with dual output capability and multiple operating modes.
            </Typography>

            {/* Bullet Points */}
            <div className="flex flex-col gap-6 mb-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-1" />
                <Typography variant="p" color="white" className="text-sm leading-relaxed opacity-90">
                  <span className="font-semibold text-white">Monopolar & Bipolar Energy</span> – Supports versatile surgical applications.
                </Typography>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-1" />
                <Typography variant="p" color="white" className="text-sm leading-relaxed opacity-90">
                  <span className="font-semibold text-white">Dual Output System</span> – Allows two modes to operate simultaneously.
                </Typography>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#FFFFFF80] mb-5"></div>

            <Typography variant="p" color="white" className="text-sm leading-relaxed mb-8 opacity-90">
              Designed for precise cutting and coagulation, it provides a flexible solution for a wide range of surgical procedures, supporting consistent energy delivery and effective tissue management.
            </Typography>

            <div>
              <Button
                text="View Product Details"
                href="#details"
                variant="primary"
                showIcon={true}
                icon={<ArrowRight className="w-4 h-4 ml-2" />}
                className="bg-white !text-[#2A2A2A] hover:bg-gray-100 font-medium px-6 py-3 border-none rounded-sm"
              />
            </div>

          </div>

          {/* Right: Video Placeholder (span 7 or 8) */}
          <div className="min-[1380px]:col-span-8 w-full aspect-video relative overflow-hidden flex items-center justify-center" data-aos="fade-left">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Complete;
