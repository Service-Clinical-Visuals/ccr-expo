"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

/**
 * AMNOTEC Surgical Performance (360 Video) Section
 * Master Reference: Inogen Methodology
 *
 * Requirements:
 * - Background: #E2ECF3
 * - Left: Eyebrow, Heading, 2 descriptive paragraphs, Button
 * - Right: 360 Degree Video player container
 * - Stacks on mobile/tablet up to 1035px, 2 columns from 1036px onwards
 */
const SurgicalPerformance = () => {
  return (
    <section
      id="performance"
      className="w-full py-16 xl:py-24 bg-[#E2ECF3] overflow-hidden relative"
      style={{ backgroundColor: "#E2ECF3" }}
    >
      <div className="custom-container">
        <div className="flex flex-col min-[1301px]:flex-row items-center gap-10 xl:gap-14 w-full">
          
          {/* Left Column: Text & Information (First on mobile/tablet/desktop) */}
          <div
            className="w-full min-[1301px]:w-1/2 order-1 flex flex-col space-y-4 sm:space-y-5"
            data-aos="fade-right"
          >
            {/* Eyebrow */}
            <Typography
              variant="eyebrow"
              className="text-[#134093] font-semibold text-sm sm:text-base tracking-wider uppercase"
            >
              PRECISION IN SURGICAL PERFORMANCE
            </Typography>

            {/* Heading */}
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#000000] leading-tight"
            >
              Designed for Control. Engineered for Confidence.
            </Typography>

            {/* Paragraph 1 */}
            <Typography
              variant="p"
              color="secondary"
              className="text-sm sm:text-base leading-relaxed text-[#111111]"
            >
              Experience the functionality of AMNOTEC&apos;s Electrosurgical Device through a closer look at its advanced operating features and practical applications. Designed to support precise cutting and coagulation, it offers healthcare professionals greater control and flexibility throughout surgical procedures.
            </Typography>

            {/* Paragraph 2 */}
            <Typography
              variant="p"
              color="secondary"
              className="text-sm sm:text-base leading-relaxed text-[#111111]"
            >
              AMNOTEC&apos;s Electrosurgical Device supports a wide range of surgical applications with dedicated cutting and coagulation modes for precise tissue incision and effective bleeding management. Its intuitive controls allow healthcare professionals to adjust operating settings with ease, while flexible performance options accommodate different surgical techniques and procedural requirements.
            </Typography>

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

          {/* Right Column: 360 Video Player (Second on mobile/tablet/desktop) - Zero borders */}
          <div
            className="w-full min-[1301px]:w-1/2 order-2 aspect-video relative rounded-[5px] overflow-hidden shadow-lg"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SurgicalPerformance;
