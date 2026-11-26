"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

/**
 * Double Checkmark SVG Component matching Figma charm:tick-double
 */
const DoubleCheck = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* First check */}
    <path
      d="M3 12.5L7 16.5L15 8.5"
      stroke="#134093"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Second check */}
    <path
      d="M9 12.5L13 16.5L21 8.5"
      stroke="#134093"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * AMNOTEC Product Spotlight (360 Video) Section
 * Master Reference: Inogen Methodology
 *
 * Requirements:
 * - Background: #E2ECF3
 * - Left: 360 Degree Video player container
 * - Right:
 *   - Eyebrow: PRODUCT SPOTLIGHT
 *   - Heading: Precision Power. Controlled Performance.
 *   - Description
 *   - Features: Precision Cutting, Effective Coagulation with double-tick icon
 *   - Button: Explore Product
 * - Responsive: Stacks on mobile/tablet up to 1035px, 2 columns on 1036px+
 */
const ProductSpotlight = () => {
  return (
    <section
      id="spotlight"
      className="w-full py-16 xl:py-24 bg-[url('/medical/amnotec/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative"
    >
      <div className="custom-container">
        <div className="flex flex-col min-[1301px]:flex-row items-center gap-10 xl:gap-14 w-full">
          
          {/* Left Column on Desktop / Second on Mobile-Tablet: 360 Video Player - Zero borders */}
          <div
            className="w-full min-[1301px]:w-1/2 order-2 min-[1301px]:order-1 aspect-video relative rounded-[5px] overflow-hidden shadow-lg"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column on Desktop / First on Mobile-Tablet: Text & Features */}
          <div
            className="w-full min-[1301px]:w-1/2 order-1 min-[1301px]:order-2 flex flex-col space-y-4 sm:space-y-5"
            data-aos="fade-left"
          >
            {/* Eyebrow */}
            <Typography
              variant="eyebrow"
              className="text-[#134093] font-semibold text-sm sm:text-base tracking-wider uppercase"
            >
              PRODUCT SPOTLIGHT
            </Typography>

            {/* Heading */}
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#000000] leading-tight"
            >
              Precision Power. Controlled Performance.
            </Typography>

            {/* Description */}
            <Typography
              variant="p"
              color="secondary"
              className="text-sm sm:text-base leading-relaxed text-[#111111]"
            >
              Explore the AMNOTEC Electrosurgical Device from every angle with an interactive 360° product view. Designed to support precise tissue cutting and coagulation, it combines advanced electrosurgical technology with reliable performance for modern surgical environments.
            </Typography>

            {/* Features with Double Tick */}
            <div className="space-y-3.5 min-[2500px]:space-y-6 min-[3800px]:space-y-8 pt-1">
              {/* Feature 1 */}
              <div className="flex items-start gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                <DoubleCheck className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 mt-0.5 min-[2500px]:mt-1" />
                <p className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-[#111111]">
                  <strong className="text-[#000000] font-bold">Precision Cutting:</strong> Enables precise and controlled tissue incision, helping surgeons perform surgical procedures with greater accuracy, consistency and confidence.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                <DoubleCheck className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 shrink-0 mt-0.5 min-[2500px]:mt-1" />
                <p className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-[#111111]">
                  <strong className="text-[#000000] font-bold">Effective Coagulation:</strong> Helps control bleeding during surgical procedures through effective coagulation, supporting improved visibility and a clearer operating field for surgeons.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <Button
                text="Explore Product"
                variant="primary"
                href="#products"
                className="bg-[#134093] hover:bg-[#0e2f6d] text-white rounded-[5px] px-6 py-2.5 font-semibold text-sm sm:text-base"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;
