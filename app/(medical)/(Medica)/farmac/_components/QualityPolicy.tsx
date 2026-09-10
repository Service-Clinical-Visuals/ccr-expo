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
                &mdash; Quality
              </span>
            </div>

            {/* Heading */}
            <h2 className="section-title font-medium font-poppins text-white tracking-tight mb-5">
              The Quality Policy
            </h2>

            {/* Paragraph 1 */}
            <p className="section-text font-inter text-white font-normal mb-4 leading-relaxed">
              Farmac Zabban was the first Italian dressing company to obtain the first CE marking for its medical devices, issued by the Istituto Superiore di Sanit&agrave; in March 1997 (Directive 93/42/EEC), and has published research and studies in international specialized journals, particularly identifying a method for calculating the bioburden of gauze.
            </p>

            {/* Paragraph 2 */}
            <p className="section-text font-inter text-white font-normal mb-4 leading-relaxed">
              Constant attention to quality has led to continuous improvement , as demonstrated by the ISO 9002 + EN 46002 certification, followed by UNI EN ISO 9001:2015 and EN ISO 13485:2021 standards.
            </p>

            {/* Paragraph 3 */}
            <p className="section-text font-inter text-white font-normal mb-4 leading-relaxed">
              This has led to the development, monitoring , and refinement of a series of procedures, controls, and inspections to produce and market safe medical devices that comply with all applicable laws and regulations.
            </p>

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
