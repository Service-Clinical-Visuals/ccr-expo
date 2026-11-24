/**
 * Performance / Material Section (When Material Meets Performance)
 * Master Reference: Zinnanti Surgical & Inogen Standards
 * - Scales decorative red circular ring, red solid block, badge, and overlay tags across viewports up to 4K.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Badge from "./Badge";

export default function Performance() {
  return (
    <section id="performance" className="w-full py-16 xl:py-24 2k:py-36 4k:py-48 bg-white overflow-hidden">
      <div className="custom-container">
        
        {/* Mobile & Tablet Header (<1036px): Heading appears before Image */}
        <div className="flex flex-col space-y-4 mb-8 sm:mb-10 min-[1036px]:hidden w-full" data-aos="fade-up">
          <div>
            <Badge text="WHEN MATERIAL MEETS PERFORMANCE" />
          </div>
          <Typography
            variant="h2"
            color="gray"
            className="text-xl sm:text-2xl font-bold leading-snug w-full"
          >
            Advanced Materials for Effective Hemostasis
          </Typography>
        </div>

        <div className="flex flex-col min-[1036px]:flex-row items-center gap-12 lg:gap-14 xl:gap-20 2k:gap-28 4k:gap-36">
          
          {/* Left Column: Material Image + Decorative Accents */}
          <div
            className="w-full min-[1036px]:w-1/2 flex items-center justify-center"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="relative w-full max-w-[560px] min-[1036px]:max-w-[620px] xl:max-w-[700px] 2k:max-w-[1000px] 4k:max-w-[1400px]">
              
              {/* Top-Right Decorative Red Circular Ring Accent (Scales from 128px to 448px) */}
              <div
                className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 2k:-top-14 2k:-right-14 4k:-top-20 4k:-right-20 w-32 sm:w-44 md:w-56 2k:w-80 4k:w-[28rem] h-32 sm:h-44 md:h-56 2k:h-80 4k:h-[28rem] rounded-full border-[16px] sm:border-[22px] md:border-[28px] 2k:border-[40px] 4k:border-[56px] border-[#E62730] -z-10"
                aria-hidden="true"
              />

              {/* Bottom-Left Decorative Red Solid Block (Scales up to 4K) */}
              <div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 2k:-bottom-10 2k:-left-10 4k:-bottom-16 4k:-left-16 w-32 sm:w-48 md:w-64 2k:w-96 4k:w-[32rem] h-24 sm:h-36 md:h-48 2k:h-72 4k:h-96 bg-[#E62730] rounded-[11px] 2k:rounded-2xl 4k:rounded-3xl -z-10"
                aria-hidden="true"
              />

              {/* Main Material Image Container */}
              <div className="relative rounded-[11px] 2k:rounded-2xl 4k:rounded-3xl overflow-hidden shadow-md bg-white border border-gray-100 group">
                <img
                  src="/medical/speed-care/perf.webp"
                  alt="Perforated hydrophilic nonwoven, precision-printed with halloysite dots"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Caption Tag Overlay on bottom left of image */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 2k:bottom-7 2k:left-7 4k:bottom-10 4k:left-10 max-w-[90%] bg-white/90 backdrop-blur-md px-3.5 py-2 2k:px-6 2k:py-3.5 4k:px-9 4k:py-5 rounded-md 2k:rounded-xl 4k:rounded-2xl shadow-sm border border-gray-200/60">
                  <p className="text-[11px] sm:text-xs md:text-sm 2k:text-xl 4k:text-3xl font-medium text-[#1E1E1E]">
                    Perforated hydrophilic nonwoven, precision-printed with halloysite dots
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Information & Know More CTA */}
          <div
            className="w-full min-[1036px]:w-1/2 flex flex-col space-y-5 sm:space-y-6 2k:space-y-9 4k:space-y-12"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            {/* Desktop Header (>=1036px) */}
            <div className="hidden min-[1036px]:flex flex-col space-y-5 2k:space-y-7">
              <div>
                <Badge text="WHEN MATERIAL MEETS PERFORMANCE" />
              </div>

              <Typography
                variant="h2"
                color="gray"
                className="text-xl sm:text-2xl lg:text-[1.6875rem] 2k:text-4xl 4k:text-6xl font-bold leading-snug w-full max-w-full xl:max-w-[70%]"
              >
                Advanced Materials for Effective Hemostasis
              </Typography>
            </div>

            {/* Paragraph 1 */}
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl leading-relaxed text-[#4B5563]"
            >
              Water jet bonding creates a strong, interwoven textile structure with high tensile strength. Its hydrophilic, perforated design features interconnected pores and channels that absorb water from the blood while retaining concentrated blood components at the wound site. This supports the natural clotting process and improves pressure transmission for effective mechanical hemostasis.
            </Typography>

            {/* Paragraph 2 */}
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl leading-relaxed text-[#4B5563]"
            >
              Halloysite is a unique clay mineral with a large surface area and a charge ratio that supports blood coagulation. To ensure medical suitability, it undergoes a highly controlled purification and refining process. Speed Care Mineral applies halloysite to the carrier material using a precision printing process. Each production batch is tested for rapid hemostasis and particle detachment to ensure product safety and prevent particles from entering the bloodstream.
            </Typography>

            {/* Action CTA Button */}
            <div className="pt-2 sm:pt-4 2k:pt-6 4k:pt-8">
              <Button
                text="Know More"
                variant="primary"
                href="#performance"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
