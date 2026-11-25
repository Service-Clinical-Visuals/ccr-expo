"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

const focusAreas = [
  {
    title: "Social Responsibility",
    description: "Promoting equality, employee well-being, and ethical partnerships.",
  },
  {
    title: "Environmental Protection",
    description: "Reducing emissions, minimizing waste, and conserving resources.",
  },
  {
    title: "Economic Growth",
    description: "Building long-term financial stability through responsible business practices.",
  },
  {
    title: "Continuous Improvement",
    description: "Enhancing product quality, innovation, and sustainable manufacturing.",
  },
];

/**
 * Sustainability Section - Reison Medical
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Split Header Row:
 *    - Left: Section title & subtext (`w-full max-w-full xl:max-w-[70%]`).
 *    - Right: Action button `<Button text="Discover Our Commitment" ... />`.
 * 2. Two-Column Split Layout:
 *    - Left Column (58% width): Sustainability photo `/medical/reison/sustain.webp` (rounded-3xl).
 *    - Right Column (42% width): White elevated card (`rounded-[25px]`, shadow-md) with 4 key focus points.
 * 3. Tablet Responsiveness:
 *    - Stacks on screens below 1036px (`flex-col min-[1036px]:flex-row`).
 */
const Sustainability = () => {
  return (
    <section id="sustainability" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">

        {/* Section Header Row */}
        <div
          className="flex flex-col min-[1036px]:flex-row min-[1036px]:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-full xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#2A2A2A] font-primary capitalize"
            >
              Sustainability At Reison Medical
            </Typography>
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base leading-relaxed text-[#4A4A4A]"
            >
              Sustainability is a fundamental part of Reison Medical’s operations. We strive to create long-term benefits for both people and the environment by focusing on three areas: economic, social, and environmental sustainability.
            </Typography>
          </div>

          <div className="shrink-0 self-start min-[1036px]:self-center">
            <Button
              text="Discover Our Commitment"
              variant="primary"
              href="#sustainability"
              showIcon={true}
            />
          </div>
        </div>

        {/* Two-Column Split Layout */}
        <div className="flex flex-col min-[1036px]:flex-row items-center gap-8 min-[1036px]:gap-12 w-full">

          {/* Left Column: Sustainability Image */}
          <div className="w-full min-[1036px]:w-[58%]" data-aos="fade-right">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[30px] overflow-hidden shadow-lg border border-gray-200/80 group cursor-pointer">
              <img
                src="/medical/reison/sustain.webp"
                alt="Reison Medical team assembling operating table equipment sustainably"
                className="w-full h-full aspect-[16/10] sm:aspect-[16/9] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Focus Areas Card */}
          <div className="w-full min-[1036px]:w-[42%]" data-aos="fade-left">
            <div className="bg-white rounded-[25px] p-6 sm:p-8 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] border border-gray-100 flex flex-col gap-4">

              <h3 className="font-primary text-xl sm:text-2xl font-bold text-[#2A2A2A] capitalize">
                Our Key Sustainability Focus Areas:
              </h3>

              <div className="w-full h-px bg-black/15 my-1" />

              <p className="font-secondary text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                Reison Medical is committed to a sustainable future through responsible practices, environmental care, social responsibility, and continuous improvement, creating long-term value for people and the planet.
              </p>

              {/* 4 Checklist Items */}
              <div className="flex flex-col gap-3.5 sm:gap-4 mt-2">
                {focusAreas.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                    <div className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 rounded-full bg-[#2F3F5A] flex items-center justify-center shrink-0 mt-0.5 text-white shadow-sm">
                      <Check className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={3} />
                    </div>
                    <p className="font-secondary text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl leading-relaxed text-[#4A4A4A]">
                      <strong className="text-[#2A2A2A] font-semibold">{item.title}:</strong> {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Sustainability;

