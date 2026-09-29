"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Explore360() {
  const features = [
    {
      title: "Adult to Neonatal Ventilation",
      description: "Supports a wide range of patient requirements."
    },
    {
      title: "Advanced NIV Modes",
      description: "High-performance non-invasive ventilation with NIV APCV and NIV PSV."
    },
    {
      title: "HFNC Option",
      description: "High-flow oxygen therapy for selected clinical applications."
    },
    {
      title: "Lung-Protective Ventilation",
      description: "APCV-TV mode supports protective ventilation strategies."
    },
    {
      title: "Automatic Weaning",
      description: "PSV-TV mode assists with automatic weaning across the patient range."
    }
  ];

  return (
    <section className="w-full bg-[#F7F7F7] py-14 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left Column: 360 Video Player Box */}
          <div
            className="xl:col-span-6 relative w-full h-full overflow-hidden flex items-center justify-center bg-transparent aspect-video"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            {/* Dynamic Video Player */}
            <div className="absolute inset-0 w-full h-full z-10">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Information Box */}
          <div
            className="xl:col-span-6 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <div className="mb-4">
              <h2 className="section-title font-medium tracking-tight text-[#111111] leading-snug">
                Advanced Ventilation. Designed Around Patient Care.
              </h2>
            </div>

            <p className="text-[#111111] leading-relaxed font-regular section-text mb-6 text-sm sm:text-base">
              Explore the ARIA 150 C from every angle. Its high-performance ventilation technology, intuitive 15-inch touchscreen interface, and advanced monitoring capabilities support critical-care professionals across adult, paediatric, and neonatal applications.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <img src="/medical/siare/icon5.png" alt="Icon" className="w-auto h-auto object-contain" />
                  </div>
                  <p className="section-text text-[#111111] font-regular leading-tight mt-2">
                    <span className="font-semibold">{feature.title}</span> — {feature.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button href="#explore-product" variant="primary">
                Explore Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
