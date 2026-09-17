"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

export default function VersatileVenousAccess() {
  const features = [
    {
      title: "High-Flow Performance",
      desc: "Flexible thin-walled polyurethane construction supports efficient delivery of fluids and medications.",
    },
    {
      title: "Multi lumen Versatility",
      desc: "Separate lumens enable multiple therapies, monitoring, sampling, and fluid administration through one puncture.",
    },
    {
      title: "Complete Procedure Setup",
      desc: "Catheter sets include guide wire, puncture needle, dilator, syringe, and fixation components.",
    },
    {
      title: "Secure Catheter Fixation",
      desc: "Integrated fixation features help maintain stable catheter positioning during clinical use.",
    },
  ];

  return (
    <section
      id="versatile-access"
      className="w-full bg-[#F9F9F9] py-16 sm:py-20 xl:py-24 overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center gap-3 xl:max-w-[70%] max-w-[90%] mx-auto"
          data-aos="fade-up"
        >
          <Typography
            variant="h4"
            color="primary"
            weight="semibold"
            className="uppercase tracking-[0.04em]"
          >
            VERSATILE VENOUS ACCESS
          </Typography>

          <Typography variant="h2" color="dark">
            Engineered for Controlled Access and Consistent Clinical Performance
          </Typography>
        </div>

        {/* Two-Column Content: Left Text/Features + Right Video */}
        <div className="mt-12 sm:mt-14 flex flex-col xl:flex-row items-center gap-10 lg:gap-12 xl:gap-14 min-[3800px]:gap-20 w-full">
          {/* Left Column: Intro Paragraph + 4 Red Arrow Features + Button */}
          <div
            className="flex flex-col gap-6 w-full xl:w-[42%]"
            data-aos="fade-right"
          >
            {/* Overview Paragraph */}
            <Typography variant="p" color="muted" className="leading-relaxed">
              INTRA Central Venous Catheters are designed to combine flexible handling with dependable vascular access, using biocompatible polyurethane that becomes softer at body temperature. Their soft-tip construction, radiopaque material, centimetre markings, and secure fixation features support controlled positioning and practical everyday use in clinical environments.
            </Typography>

            {/* 4 Bullet Features with Red ↗ */}
            <div className="flex flex-col gap-4 sm:gap-5 pt-2">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-3.5">
                  <ArrowUpRight
                    className="w-5 h-5 text-[#EC1C24] shrink-0 mt-1"
                    strokeWidth={2.5}
                  />
                  <Typography variant="p" color="muted" className="leading-relaxed">
                    <strong className="font-semibold text-[#202020]">
                      {feat.title} —{" "}
                    </strong>
                    <span>{feat.desc}</span>
                  </Typography>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Button variant="outline-red" href="#products">
                View Product Details
              </Button>
            </div>
          </div>

          {/* Right Column: 02 Video Display */}
          <div
            className="w-full xl:w-[58%] relative aspect-video rounded-[16px] overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 border border-gray-200 shadow-sm"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
