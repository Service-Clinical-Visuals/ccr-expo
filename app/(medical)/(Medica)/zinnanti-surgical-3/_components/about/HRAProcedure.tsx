"use client";

import React from "react";
import Typography from "../Typography";

const hraFeatures = [
  {
    number: "01",
    title: "Enhancing Surgical Efficiency",
    description:
      "We know that in the fast-paced world of healthcare, every second counts. That's why our devices are designed to be fast, easy, and convenient by offering disposable attachments for streamlined workflows.",
  },
  {
    number: "02",
    title: "Ensuring Compliance and Safety",
    description:
      "With increasing regulations around surgical smoke evacuation, compliance is more critical than ever. Our integrated devices help medical professionals meet these safety regulations seamlessly.",
  },
  {
    number: "03",
    title: "Cost-Effective Solutions",
    description:
      "We are committed to offering high-quality, cost-effective solutions. Our disposable attachments and comprehensive smoke evacuation packages are competitively priced for clinical practice.",
  },
];

/**
 * HRAProcedure Section (p1) - Zinnanti Surgical About Page
 * Master Reference: Inogen Development Standards
 * - Redesigned Showcase Layout:
 *   1. Centered Header Row with tagline and clinical title
 *   2. Large Cinematic Media Presentation Container (p1.webp)
 *   3. 3 Benefit Pillar Cards in a single row on desktop, centered 3rd card on tablet
 */
const HRAProcedure = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-[#4F6744] bg-[url('/medical/zinnanti-surgical-3/bg.webp?v=2')] bg-cover bg-center bg-no-repeat overflow-hidden text-white relative">
      <div className="custom-container flex flex-col items-center gap-10 sm:gap-14">
        
        {/* 1. Section Header: Centered */}
        <div
          className="text-center w-full max-w-full xl:max-w-[75%] mx-auto space-y-3 sm:space-y-4"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-7 sm:w-8 h-1 bg-[#38315E] rounded-full inline-block shrink-0" />
            <span className="heading-blue text-white">
              Precancerous Lesion Treatment
            </span>
          </div>

          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight leading-snug"
          >
            HRA – High Resolution Anoscopy Ablation of Precancerous Lesions
          </Typography>
        </div>

        {/* 2. Cinematic Showcase Image Frame: True landscape spanning full custom-container */}
        <div
          className="w-full aspect-[16/9] sm:aspect-[16/8] lg:aspect-[21/9] rounded-[24px] min-[3800px]:rounded-[48px] overflow-hidden shadow-2xl border border-white/20 bg-[#001D33] group cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img
            src="/medical/zinnanti-surgical-3/about/p1.webp"
            alt="HRA High Resolution Anoscopy Clinical Procedure"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
          />
        </div>

        {/* 3. Three Benefit Pillar Cards: Spanning full custom-container width */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1036px]:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {hraFeatures.map((item, idx) => (
            <div
              key={item.number}
              className={`w-full bg-white text-[#333333] rounded-[20px] min-[3800px]:rounded-[36px] p-6 sm:p-7 shadow-xl border border-white/10 flex flex-col justify-start gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group ${
                idx === 2
                  ? "md:col-span-2 md:w-full md:max-w-[calc(50%-1rem)] md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 min-[1036px]:col-span-1 min-[1036px]:max-w-none min-[1036px]:mx-0"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Badge & Title Row */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 min-[2500px]:w-16 min-[2500px]:h-16 rounded-full bg-[#38315E] text-white font-bold text-sm sm:text-base min-[2500px]:text-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  {item.number}
                </div>
                <h3 className="text-base sm:text-lg min-[2500px]:text-xl font-bold text-[#4F6744] leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm min-[2500px]:text-base text-[#555555] leading-relaxed text-justify pt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HRAProcedure;
