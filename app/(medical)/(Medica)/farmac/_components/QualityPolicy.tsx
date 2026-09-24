"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function QualityPolicy() {
  return (
    <section
      id="quality-policy"
      className="relative w-full py-16 sm:py-20 md:py-24 bg-[#24559c] overflow-hidden text-white bg-quality-stethoscope"
    >


      <div className="relative z-10 custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center">
          {/* Left Column: Video 02 Player Card */}
          <div
            className="xl:col-span-7 order-2 xl:order-1"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
              <DynamicVideoPlayer
                type="short-2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Copy & CTA */}
          <div
            className="xl:col-span-5 order-1 xl:order-2"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-2">
              <span className="section-text font-bold text-[#ffffff] tracking-normal font-inter">
                &mdash; Size & Specifications
              </span>
            </div>

            {/* Heading */}
            <h2 className="section-title font-medium font-poppins text-white tracking-tight mb-5">
              Flexible Catheter Options
            </h2>

            {/* Paragraph 1 */}
            <p className="section-text font-inter text-white font-normal mb-4 leading-relaxed">
              The Farmac 2-Way Foley Catheter is available in a comprehensive range of sizes, from CH 6 to CH 24, offering suitable options for different clinical requirements. The range includes 3/5 cc and 5/15 cc balloon configurations for added flexibility in product selection and patient care.  </p>

            {/* Paragraph 2 */}
            <p className="section-text font-inter text-white font-normal mb-4 leading-relaxed">
              Each catheter size is assigned a specific product code, making the range easy to identify and select. Clearly defined size and balloon specifications support efficient product handling and help healthcare professionals . </p>

            {/* Paragraph 3 */}
            <p className="section-text font-inter text-white font-normal mb-4 leading-relaxed">
              For added convenience, the clearly organised size and balloon specifications make it easier to compare available options. This structured range supports quick identification, accurate product selection, and efficient handling according to requirments.</p>

            {/* CTA Button */}
            <div>
              <Button href="#quality-details">know More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
