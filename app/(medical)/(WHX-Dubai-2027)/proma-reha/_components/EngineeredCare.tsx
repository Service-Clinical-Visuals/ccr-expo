"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import { Bed, ArrowDownToLine, UserCheck, ShieldCheck } from "lucide-react";

export default function EngineeredCare() {
  const features = [
    {
      icon: Bed,
      title: "Designed for Smooth Operation",
    },
    {
      icon: ArrowDownToLine,
      title: "Enhanced Patient Positioning",
    },
    {
      icon: UserCheck,
      title: "Convenient Caregiver Access",
    },
    {
      icon: ShieldCheck,
      title: "Dependable Safety Features",
    },
  ];

  return (
    <section
      id="engineered-care"
      className="w-full py-16 xl:py-24 bg-[url('/medical/proma-reha/bg2.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative"
    >
      <div className="custom-container relative z-10">
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-10 lg:gap-14 min-[1300px]:gap-16 min-[3800px]:gap-24 w-full">
          {/* Left Column: Text & Features (40%) */}
          <div
            className="flex flex-col gap-6 w-full min-[1300px]:w-[40%]"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 min-[2500px]:w-3.5 min-[2500px]:h-3.5 min-[3800px]:w-5 min-[3800px]:h-5 rounded-full bg-white"></span>
              <Typography
                variant="h4"
                color="white"
                className="uppercase tracking-wider !font-semibold text-base min-[2500px]:text-2xl min-[3800px]:text-3xl"
              >
                ENGINEERED FOR RELIABLE CARE
              </Typography>
            </div>

            <Typography
              variant="h2"
              color="white"
              className="leading-snug !font-bold text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-6xl xl:max-w-[90%]"
            >
              Thoughtful Features for Everyday Healthcare Needs
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed opacity-95 font-secondary xl:max-w-[90%]">
              DECU PRO is designed to simplify daily patient care through practical
              features, dependable construction and easy operation. Its carefully
              developed design supports healthcare professionals while creating a
              comfortable and reliable environment for patients.
            </Typography>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 min-[2500px]:gap-8 min-[3800px]:gap-12 mt-3">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="flex items-center gap-3.5 min-[2500px]:gap-6 min-[3800px]:gap-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 min-[2500px]:w-22 min-[2500px]:h-22 min-[3500px]:w-32 min-[3500px]:h-32 min-[3800px]:w-36 min-[3800px]:h-36 rounded-full bg-[#E8F1FC] flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 min-[2500px]:w-11 min-[2500px]:h-11 min-[3500px]:w-18 min-[3500px]:h-18 min-[3800px]:w-20 min-[3800px]:h-20 text-[var(--color-secondary)]" strokeWidth={2} />
                    </div>
                    <span className="text-white font-secondary font-medium text-base min-[2500px]:text-2xl min-[3800px]:text-3xl leading-snug">
                      {feat.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Video Clip 02 (60%) - Exact Deleo short video pattern */}
          <div
            className="w-full min-[1300px]:w-[60%] relative aspect-video overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-slate-900"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
