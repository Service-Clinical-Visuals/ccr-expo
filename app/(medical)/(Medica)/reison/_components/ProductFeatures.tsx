"use client";

import React from "react";
import Button from "./Button";
import { Check } from "lucide-react";

/**
 * ProductFeatures Section (features) - Reison Medical
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Split Layout:
 *    - Left: Dark Navy Card (`#2F3F5A`) with rounded right corners (`rounded-r-[20px]`),
 *      narrative copy, feature checklist, and CTA.
 *    - Right: Large photography asset `features.webp` with navy border (`border-[3px] border-[#2F3F5A]`).
 * 2. Breakpoint Stacking:
 *    - Stacks on screens below 1036px (`flex-col min-[1036px]:flex-row`).
 */
const ProductFeatures = () => {
  return (
    <section id="features" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Tablet Layout (stacked) remains active up to 1300px; desktop activates from 1301px */}
        <div className="flex flex-col min-[1301px]:flex-row items-center gap-8 min-[1301px]:gap-10 w-full">

          {/* Left Navy Card */}
          <div
            className="w-full min-[1301px]:w-[38%] bg-[#2F3F5A] rounded-[24px] sm:rounded-r-[24px] p-6 sm:p-8 xl:p-10 text-white flex flex-col justify-between gap-5 shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
            data-aos="fade-right"
          >
            {/* Title */}
            <h2 className="font-primary text-2xl sm:text-3xl font-bold leading-tight capitalize text-white">
              Reliable Design &amp; Practical Functionality
            </h2>

            <div className="w-full h-px bg-white/25" />

            {/* Paragraph 1 */}
            <p className="font-secondary text-xs sm:text-sm text-white/90 leading-relaxed">
              The integrated cushion provides additional comfort, while the secure clamping mechanism ensures stable attachment to compatible operating table rails.
            </p>

            {/* Two Checkmark Points */}
            <div className="flex flex-col gap-3 sm:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 my-1">
              <div className="flex items-start gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                <div className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 text-[#2F3F5A] shadow-sm">
                  <Check className="w-3.5 h-3.5 min-[2500px]:w-5.5 min-[2500px]:h-5.5 min-[3800px]:w-8 min-[3800px]:h-8" strokeWidth={3} />
                </div>
                <p className="font-secondary text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl leading-relaxed text-white">
                  <strong className="font-semibold text-white">Stable Support:</strong> Provides reliable positioning throughout surgical procedures.
                </p>
              </div>

              <div className="flex items-start gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                <div className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 text-[#2F3F5A] shadow-sm">
                  <Check className="w-3.5 h-3.5 min-[2500px]:w-5.5 min-[2500px]:h-5.5 min-[3800px]:w-8 min-[3800px]:h-8" strokeWidth={3} />
                </div>
                <p className="font-secondary text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl leading-relaxed text-white">
                  <strong className="font-semibold text-white">Easy Maintenance:</strong> Designed for convenient cleaning and routine inspection.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-white/25" />

            {/* Paragraph 2 */}
            <p className="font-secondary text-xs sm:text-sm text-white/90 leading-relaxed">
              Manufactured using stainless steel and high-pressure laminate, the table combines durability, functionality, and ease of maintenance.
            </p>

            {/* Action CTA Button */}
            <div className="pt-2">
              <Button
                text="Explore Product Features"
                variant="white"
                href="#features"
                showIcon={true}
              />
            </div>
          </div>

          {/* Right Image Container */}
          <div className="w-full min-[1301px]:w-[62%]" data-aos="fade-left">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[30px] overflow-hidden border-[3px] border-[#2F3F5A] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] group cursor-pointer">
              <img
                src="/medical/reison/features.webp"
                alt="Operating room table mattress and cushion attachment features"
                className="w-full h-full aspect-[16/10] sm:aspect-[16/9] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;

