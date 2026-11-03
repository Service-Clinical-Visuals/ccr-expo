"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const AirwayVisualization = () => {
  const features = [
    {
      title: "720P HD Imaging",
      description: "Provides high-resolution images for clear airway visualization during intubation.",
    },
    {
      title: "Active Anti-Fog System",
      description: "Maintains lens clarity and minimizes fogging during critical airway procedures.",
    },
    {
      title: "Image & Video Recording",
      description: "Captures HD photos and videos for clinical documentation and review purposes.",
    },
  ];

  return (
    <section
      id="technologies"
      className="w-full py-16 min-[1500px]:py-24 bg-gradient-to-r from-[#3EC19F] via-[#2B7AB7] to-[#1C54A0] bg-[url('/medical/tecme/bg.webp')] bg-cover bg-center bg-no-repeat bg-blend-soft-light text-white overflow-hidden relative"
    >
      <div className="custom-container">
        {/* Mobile / Tablet Heading (Visible on screens below 1500px) */}
        <div className="min-[1500px]:hidden w-full mb-6 sm:mb-8 text-white" data-aos="fade-down">
          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl font-semibold leading-tight drop-shadow-sm"
          >
            Advanced Airway Visualization Technology
          </Typography>
        </div>

        {/* 70% | 30% Division on Desktop (1500px and above) */}
        <div className="flex flex-col min-[1500px]:flex-row gap-10 min-[1500px]:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24 items-center w-full">
          {/* Left Column: 70% Width at 1500px+ (Stacked aspect-video on tablet / mobile) */}
          <div
            className="w-full min-[1500px]:w-[70%] shrink-0 relative aspect-video overflow-hidden rounded-[20px] sm:rounded-[30px] shadow-2xl bg-[#EAEAEA]"
            data-aos="fade-right"
          >
            {/* DynamicVideoPlayer using exact Deleo short-1 specification */}
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Fallback Label if video is loading or fallback */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
              <span className="text-[#33363F]/40 font-bold text-xl sm:text-3xl md:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl tracking-wider uppercase select-none">
                Video Clip - 01
              </span>
            </div>
          </div>

          {/* Right Column: 30% Width at 1500px+ (Information & Features) */}
          <div
            className="w-full min-[1500px]:w-[30%] flex flex-col gap-5 min-[2500px]:gap-8 min-[3800px]:gap-12 text-white"
            data-aos="fade-left"
          >
            {/* Heading (Visible on desktop 1500px and above) */}
            <Typography
              variant="h2"
              color="white"
              className="hidden min-[1500px]:block text-2xl sm:text-3xl lg:text-3xl min-[2500px]:text-4xl min-[3800px]:text-6xl font-semibold leading-tight drop-shadow-sm"
            >
              Advanced Airway Visualization Technology
            </Typography>

            {/* Introduction paragraph */}
            <Typography variant="p" color="white" className="leading-relaxed text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-white/90">
              The SMARTSCOPE LV PRO combines high-definition imaging, active anti-fog technology,
              and powerful LED illumination to support clear and reliable laryngeal visualization.
            </Typography>

            {/* Divider */}
            <div className="w-full h-px bg-white/25" />

            {/* Feature Checklist */}
            <div className="flex flex-col gap-3.5 min-[2500px]:gap-6 min-[3800px]:gap-8">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6">
                  <span className="w-6 h-6 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-white text-[#005EAC] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={3} />
                  </span>
                  <Typography variant="p" color="white" className="text-sm sm:text-base min-[2500px]:text-lg min-[3800px]:text-2xl leading-relaxed">
                    <strong className="font-semibold text-white">{feat.title}</strong> –{" "}
                    <span className="text-white/90">{feat.description}</span>
                  </Typography>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/25" />

            {/* Supporting line */}
            <Typography variant="p" color="white" className="text-sm sm:text-base min-[2500px]:text-lg min-[3800px]:text-2xl text-white/90 leading-relaxed">
              Its advanced design helps healthcare professionals perform intubation procedures with
              improved visibility and precision.
            </Typography>

            {/* CTA Button */}
            <div className="pt-2 min-[2500px]:pt-4 min-[3800px]:pt-6">
              <Button
                text="Discover Visualization Features"
                href="#products"
                variant="white"
                iconType="arrow-up-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirwayVisualization;
