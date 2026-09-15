"use client";

import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";

const QUALITY_HIGHLIGHTS = [
  {
    title: "Certified Quality Management",
    description:
      "Maintained through an accredited quality management system and regular DIN EN ISO 13485 audits.",
  },
  {
    title: "GMP Compliance",
    description:
      "Medicinal products are manufactured according to Good Manufacturing Practice (GMP) standards and continuously monitored by competent authorities.",
  },
  {
    title: "Environmental Management",
    description:
      "Our environmental management system is regularly certified according to DIN EN ISO 14001.",
  },
];

export default function QualityManagement() {
  return (
    <section
      className="w-full bg-white py-14 sm:py-20 md:py-24"
    >
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Section Header */}
        <div
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-14"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="section-title font-semibold tracking-tight font-exo2">
            Quality Management And Environmental Management
          </h2>
          <p className="section-text mt-3 sm:mt-4 leading-relaxed font-outfit">
            We hold several certifications for our accredited quality management system,
            ensuring that our high standards are consistently maintained and reflected
            across all our products and processes, supporting safety, reliability, and
            continuous improvement.
          </p>
        </div>

        {/* Two-Column Content: Laboratory Equipment Image (Left) & Content (Right) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Column: Quality Control Laboratory Equipment Image */}
          <div
            className="xl:col-span-7 w-full"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="relative w-full h-full overflow-hidden group">
              <img
                src="/medical/serag-wiessner/Quality.png"
                alt="SERAG-WIESSNER Quality and Environmental Management Laboratory Spectrometer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Detailed Explanations & Bullet Highlights */}
          <div
            className="xl:col-span-5 flex flex-col gap-5 sm:gap-6"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {/* Paragraph 1 */}
            <p className="section-text leading-relaxed font-outfit">
              The quality management system regularly undergoes DIN EN ISO 13485 audits.
              We also have certification for our medical devices in accordance with the
              EU directive on medical devices. Medicinal products are manufactured in
              compliance with good manufacturing practice (GMP), and this is monitored
              continuously by the competent authorities.
            </p>

            {/* Paragraph 2 */}
            <p className="section-text leading-relaxed font-outfit">
              In addition to quality management, we have an environment management system
              that integrates health and safety at work. Conformity to DIN EN ISO 14001 is
              confirmed regularly by an independent certification body. We consider
              environmental protection to be a long-term company objective and implement
              our commitment by saving energy, limiting emissions, separating and
              recycling waste material.
            </p>

            {/* 3 Bullet Highlights with Pink Check Badges */}
            <div className="flex flex-col gap-3.5 pt-1 sm:pt-2">
              {QUALITY_HIGHLIGHTS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-3.5"
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 200}
                  data-aos-duration="600"
                >
                  {/* Pink Badge with White Checkmark */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#e2007a] flex items-center justify-center flex-shrink-0 text-white mt-0.5 shadow-sm shadow-[#e2007a]/30">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                  </div>

                  {/* Bullet Content */}
                  <p className="section-text text-slate-700 leading-relaxed font-outfit flex-1">
                    <strong className="font-semibold text-slate-900 font-exo2">
                      {item.title}
                    </strong>{" "}
                    – {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-3">
              <Button href="#quality" variant="primary">
                Explore our Quality
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
