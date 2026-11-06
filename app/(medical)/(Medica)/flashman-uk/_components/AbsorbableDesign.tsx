"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const FEATURES = [
  "Integrates multiple infusion devices into a unified workstation, enabling streamlined clinical operations and organized infusion management across diverse patient care needs.",
  "Designed to simplify equipment handling and streamline clinical workflows while offering a flexible workstation solution for modern healthcare environments.",
];

export default function AbsorbableDesign() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 md:py-24 overflow-hidden">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-24 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-10 items-center">
          {/* Left Column: 01 Video Player Box */}
          <div
            className="lg:col-span-7 xl:col-span-7 relative w-full overflow-hidden aspect-video flex items-center justify-center rounded-[5px]"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            {/* Dynamic Video Player */}
            <div className="absolute inset-0 w-full h-full z-10">
              <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 w-full h-full object-contain aspect-video"
              />
            </div>
          </div>

          {/* Right Column: Text & Features List */}
          <div
            className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            {/* Eyebrow */}
            <span className="section-text text-[#2997AA] font-semibold font-inter tracking-wide mb-2">
              | Smarter Infusion Management
            </span>

            {/* Main Heading */}
            <h2 className="section-title font-bold text-[#1e293b] font-unbounded leading-tight tracking-tight mb-4">
              Precision-Driven Infusion Management for Modern Healthcare
            </h2>

            {/* Description */}
            <p className="section-text font-inter text-[#475569] leading-relaxed mb-5">
              The Infusion Workstation System brings advanced infusion technology into a unified platform, helping healthcare professionals manage infusion procedures with greater organization, flexibility and operational efficiency.
            </p>

            {/* Feature Bullets */}
            <ul className="flex flex-col gap-3 font-inter text-[#475569] mb-8">
              {FEATURES.map((feature, idx) => (
                <li key={idx} className="section-text flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#2997AA] font-bold select-none leading-tight">
                    -
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Bottom CTA Button */}
            <div>
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-0 hover:gap-2 px-6 py-2.5 rounded-lg border border-[#2997AA] text-[#2997AA] bg-transparent hover:bg-[#2997AA] hover:text-white transition-all duration-300 font-unbounded font-medium cursor-pointer shadow-2xs hover:shadow-sm"
              >
                <span className="btn-text">Discover Infusion System</span>
                <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
