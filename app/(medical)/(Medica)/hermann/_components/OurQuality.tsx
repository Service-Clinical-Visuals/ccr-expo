"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

export default function OurQuality() {
  return (
    <section
      id="quality"
      className="relative w-full py-16 sm:py-20 lg:py-24 min-[3800px]:py-36 bg-[#6D1010] bg-[url('/medical/hermann/q-bg.webp')] bg-cover bg-center overflow-hidden"
    >
      {/* Dark Wine Overlay for Contrast */}
      <div className="absolute inset-0 bg-[#6D1010]/60 mix-blend-multiply pointer-events-none" />

      <div className="custom-container relative z-10 flex flex-col gap-8 sm:gap-10">
        {/* Header Row: Title, Description & CTA */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="w-full max-w-[900px] xl:max-w-[80%] space-y-3 sm:space-y-4">
            <Typography
              variant="h2"
              color="white"
              className="!font-semibold capitalize drop-shadow-sm text-white xl:max-w-[80%]"
            >
              Our Quality
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="text-white/95 leading-relaxed w-full xl:max-w-[80%]"
            >
              The Quality Of Our Products Is For Us A Task And An Obligation Towards Our Customers Of Utmost Priority. As Early As In The 90s, Hermann Medizintechnik Was A Pioneer In Terms Of Quality Management.
            </Typography>
          </div>

          <div className="shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button
              text="Discover Our Quality"
              variant="secondary"
              href="#quality"
              showIcon={true}
            />
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/70" />

        {/* 2 Quality Action Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Card 1: Scissors Inspection */}
          <div
            className="group relative w-full aspect-[820/533] rounded-[20px] min-[3800px]:rounded-[40px] overflow-hidden shadow-lg border border-white/10 bg-black/20"
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <img
              src="/medical/hermann/q1.webp"
              alt="Hermann Surgical Shears Precision Inspection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Top-Right Circular Action Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 min-[3800px]:top-10 min-[3800px]:right-10 w-11 h-11 sm:w-12 sm:h-12 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shadow-md group-hover:bg-[var(--color-primary-hover)] group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 min-[3800px]:w-10 min-[3800px]:h-10" strokeWidth={2.5} />
            </div>
          </div>

          {/* Card 2: Microscope Inspection */}
          <div
            className="group relative w-full aspect-[820/533] rounded-[20px] min-[3800px]:rounded-[40px] overflow-hidden shadow-lg border border-white/10 bg-black/20"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src="/medical/hermann/q2.webp"
              alt="Hermann High Precision Microscopic Quality Check"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Top-Right Circular Action Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 min-[3800px]:top-10 min-[3800px]:right-10 w-11 h-11 sm:w-12 sm:h-12 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shadow-md group-hover:bg-[var(--color-primary-hover)] group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 min-[3800px]:w-10 min-[3800px]:h-10" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
