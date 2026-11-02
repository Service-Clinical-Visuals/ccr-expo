"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Scale, Zap, ShieldCheck, Award } from "lucide-react";

export default function TechnicalHighlights() {
  const stats = [
    {
      icon: Scale,
      value: "250 kg",
      label: "SAFE WORKING LOAD",
    },
    {
      icon: Zap,
      value: "4 Motors",
      label: "LINAK® DRIVE SYSTEM",
    },
    {
      icon: ShieldCheck,
      value: "EN 60601-2-52",
      label: "HOSPITAL COMPLIANCE",
    },
    {
      icon: Award,
      value: "5-Year",
      label: "CHASSIS GUARANTEE",
    },
  ];

  return (
    <section id="highlights" className="w-full py-16 xl:py-24 bg-[#878AAA] overflow-hidden">
      <div className="custom-container flex flex-col gap-12 sm:gap-16">
        {/* Top Split Content: Video on Left & Text on Right */}
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-10 lg:gap-14 min-[1300px]:gap-16 min-[3800px]:gap-24 w-full">
          {/* Left Column: Video Clip 01 (60%) - Deleo pattern */}
          <div
            className="w-full min-[1300px]:w-[60%] relative aspect-video overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-slate-900 order-2 min-[1300px]:order-1"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Text Content (40%) */}
          <div
            className="flex flex-col gap-5 w-full min-[1300px]:w-[40%] order-1 min-[1300px]:order-2"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 min-[2500px]:w-3.5 min-[2500px]:h-3.5 min-[3800px]:w-5 min-[3800px]:h-5 rounded-full bg-white"></span>
              <Typography
                variant="h4"
                color="white"
                className="uppercase tracking-wider !font-semibold text-base min-[2500px]:text-2xl min-[3800px]:text-3xl"
              >
                INNOVATION IN PATIENT CARE
              </Typography>
            </div>

            <Typography
              variant="h2"
              color="white"
              className="leading-snug !font-bold text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-6xl xl:max-w-[90%]"
            >
              Advanced Bed Design for Enhanced Patient Comfort
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed opacity-95 xl:max-w-[90%]">
              DECU PRO combines thoughtful engineering, ergonomic design and practical
              functionality to deliver comfortable patient positioning and reliable support.
              Designed for modern healthcare environments, it helps simplify daily care
              activities while ensuring convenience for both patients and caregivers.
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed opacity-95 xl:max-w-[90%]">
              DECU PRO offers ergonomic patient positioning, smooth bed adjustment mechanisms
              and enhanced safety features. Its caregiver-friendly controls and reliable
              performance help simplify daily care activities while ensuring comfort and
              convenience for both patients and healthcare professionals.
            </Typography>

            <div className="pt-2">
              <Button
                text="Explore Product"
                variant="primary"
                href="#products"
                className="!px-7 !py-3 min-[3800px]:!px-12 min-[3800px]:!py-6"
              />
            </div>
          </div>
        </div>

        {/* Bottom Stat Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 min-[2500px]:gap-8 min-[3800px]:gap-12 w-full">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-xl sm:rounded-2xl min-[2500px]:rounded-3xl min-[3800px]:rounded-4xl p-5 sm:p-6 min-[2500px]:p-8 min-[3800px]:p-12 border border-slate-200/80 shadow-md flex items-center gap-4 sm:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-9 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
              >
                {/* Icon Container - Increased and 4k scaled */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 min-[2500px]:w-24 min-[2500px]:h-24 min-[3500px]:w-36 min-[3500px]:h-36 min-[3800px]:w-42 min-[3800px]:h-42 rounded-xl sm:rounded-2xl min-[2500px]:rounded-3xl min-[3500px]:rounded-4xl bg-[#F1F5F9] flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 min-[2500px]:w-13 min-[2500px]:h-13 min-[3500px]:w-20 min-[3500px]:h-20 min-[3800px]:w-24 min-[3800px]:h-24 text-[var(--color-secondary)]" strokeWidth={1.8} />
                </div>

                {/* Text Info */}
                <div className="flex flex-col min-w-0">
                  <Typography
                    variant="h2"
                    color="secondary"
                    className="!font-bold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl min-[2500px]:text-5xl min-[3800px]:text-6xl leading-tight truncate"
                  >
                    {stat.value}
                  </Typography>
                  <span className="font-secondary font-medium text-xs sm:text-sm lg:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-[#5B5896] tracking-wider uppercase mt-1 truncate">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
