"use client";

import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";

interface HighlightItem {
  title: string;
  description: string;
}

const OVERVIEW_HIGHLIGHTS: HighlightItem[] = [
  {
    title: "GMP Compliance",
    description:
      "Medicinal products are manufactured according to Good Manufacturing Practice (GMP) standards and continuously monitored by competent authorities.",
  },
  {
    title: "GMP Compliance",
    description:
      "Medicinal products are manufactured according to Good Manufacturing Practice (GMP) standards and continuously monitored by competent authorities.",
  },
  {
    title: "GMP Compliance",
    description:
      "Medicinal products are manufactured according to Good Manufacturing Practice (GMP) standards and continuously monitored by competent authorities.",
  },
];

export default function EuromedOverview() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Section Heading & Centered Subtitle */}
        <div
          className="text-center max-w-5xl mx-auto mb-10 sm:mb-14 md:mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="section-title font-semibold tracking-tight font-outfit ">
            <span className="text-[#d40708]">Euromed</span> Overview
          </h2>
          <p className="section-text  mt-3 sm:mt-4 leading-relaxed font-outfit">
            Euromed is an Egyptian leading manufacturer, which offers a wide range of
            medical products established in 2002 and has considerably grown over the years.
            Euromed head office is located in Cairo, the business capital, in the industrial
            zone of Nasr City, which is considered by government institutions to be a
            reference center of industry in the state, covering an area of 2200m as class
            8(D) clean room.
          </p>
        </div>

        {/* Two-Column Grid: Skyscraper Image (Left) & Content (Right) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Facility / Architectural Visual */}
          <div
            className="xl:col-span-8 w-full"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="relative w-full h-full overflow-hidden shadow-lg group">
              <img
                src="/medical/euromed/abt.png"

                alt="Euromed Corporate Facilities and Architectural Vision"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Detailed Explanations & Key Checkpoint Highlights */}
          <div
            className="xl:col-span-4 flex flex-col gap-5 sm:gap-6"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            {/* Paragraph 1 */}
            <p className="section-text leading-relaxed font-outfit">
              Euromed owns and operates 23,000 square feet manufacturing facility in the
              industrial zone in Cairo, Egypt, with a clean room area class 8(D) including an
              in-house ETO sterilization facility where highly standards of quality aspects
              are applied in the manufacturing of the world&apos;s high-class medical
              products.
            </p>

            {/* Paragraph 2 */}
            <p className="section-text  leading-relaxed font-outfit">
              Quality control is central to every phase of Euromed&apos;s operations, from raw
              materials to finished products. Our monitoring team ensures consistent quality
              through careful process control and monitoring.
            </p>

            {/* 3 Checkpoint Bullets */}
            <div className="flex flex-col gap-4 pt-1 sm:pt-2">
              {OVERVIEW_HIGHLIGHTS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-3.5"
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 200}
                  data-aos-duration="600"
                >
                  {/* Circular Red Badge with Check Icon */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#d40708] flex items-center justify-center flex-shrink-0 text-white mt-0.5 shadow-sm shadow-[#d40708]/30">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                  </div>

                  {/* Bullet Content */}
                  <p className="section-text  leading-relaxed font-outfit flex-1">
                    <strong className="font-semibold text-slate-900 font-outfit">
                      {item.title}
                    </strong>{" "}
                    – {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-3">
              <Button href="#about" variant="primary" rounded="sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
