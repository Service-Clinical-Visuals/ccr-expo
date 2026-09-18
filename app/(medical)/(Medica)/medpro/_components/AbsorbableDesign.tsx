"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function AbsorbableDesign() {
  return (
    <section className="w-full bg-[#3BB3C3] py-14 sm:py-20 md:py-24 text-white">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div
            className="xl:col-span-5 flex flex-col gap-6 order-2 xl:order-1"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="flex flex-col gap-2.5">
              <span className="section-text font-inter text-white font-semibold tracking-wide">
                Precision Ureteral Stents
              </span>
              <h2 className="section-title font-semibold text-white tracking-tight font-fraunces leading-tight">
                Supporting Temporary Urinary Drainage with Secure Multi-Loop Ureteral Stent Design
              </h2>
            </div>

            <div className="flex flex-col gap-5 section-text text-white/95 leading-relaxed font-inter">
              <p>
                MEDpro Medical&apos;s Double J Stent &ndash; Both End Multi Loop is designed for
                urology procedures requiring temporary urinary drainage from the kidney to
                the urinary bladder. The stent is intended to help maintain ureteral patency
                when the ureter becomes compromised, including situations associated with
                kidney stones or external compression.
              </p>
              <p>
                The product is part of MEDpro&apos;s ureteral stent range and features a multi-
                loop configuration at both ends. The standard stent uses radiopaque
                Tecoflex&reg;, engineered to support ease of placement and patient
                compliance, while the Long Duro version uses Carbothane&reg; for applications
                requiring longer indwelling periods.
              </p>
            </div>

            <div className="pt-2">
              <Button href="#product-details" variant="white-outline" showArrow={false} className="!w-auto !px-7">
                View Product Details
              </Button>
            </div>
          </div>

          {/* Right Column: Video Clip Box */}
          <div
            className="xl:col-span-7 w-full order-1 xl:order-2"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <div className="relative w-full aspect-video overflow-hidden bg-[#eaeaea] shadow-2xl">
              {/* Dynamic Video Player */}
              <div className="absolute inset-0 w-full h-full z-10">
                <DynamicVideoPlayer
                  type="short-1"
                  className="absolute aspect-video inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
