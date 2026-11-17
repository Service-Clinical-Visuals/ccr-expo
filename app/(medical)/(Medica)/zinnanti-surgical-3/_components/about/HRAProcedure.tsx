"use client";

import React from "react";
import Typography from "../Typography";

const hraFeatures = [
  {
    number: "01",
    title: "Enhancing Surgical Efficiency",
    description:
      "We know that in the fast-paced world of healthcare, every second counts. That’s why our devices are designed to be fast, easy, and convenient. By offering disposable attachments.",
  },
  {
    number: "02",
    title: "Ensuring Compliance and Safety",
    description:
      "With increasing regulations around surgical smoke evacuation, compliance is more important than ever. Our devices help medical professionals meet these regulations seamlessly.",
  },
  {
    number: "03",
    title: "Cost-Effective Solutions",
    description:
      "We are committed to offering high-quality, cost-effective solutions. Our disposable attachments and comprehensive smoke evacuation packages are competitively priced.",
  },
];

/**
 * HRAProcedure Section (p1) - Zinnanti Surgical About Page
 * Master Reference: Inogen Development Standards
 * - Image p1 on left, technical benefits & numbered cards on right
 */
const HRAProcedure = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-[#00578E] bg-[url('/medical/zinnanti-surgical-3/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden text-white relative">
      <div className="custom-container">
        <div className="flex flex-col min-[1036px]:flex-row items-center gap-10 xl:gap-14 w-full">
          
          {/* Left Column: p1 Image */}
          <div
            className="w-full min-[1036px]:w-1/2 relative rounded-[24px] min-[3800px]:rounded-[48px] overflow-hidden shadow-2xl border border-white/10 group order-2 min-[1036px]:order-1"
            data-aos="fade-right"
          >
            <div className="w-full h-[380px] sm:h-[480px] lg:h-[560px] xl:h-[620px] min-[2500px]:h-[800px] min-[3800px]:h-[1100px] overflow-hidden">
              <img
                src="/medical/zinnanti-surgical-3/about/p1.webp"
                alt="HRA High Resolution Anoscopy Procedure"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Title & 3 Numbered White Cards */}
          <div
            className="w-full min-[1036px]:w-1/2 flex flex-col gap-5 sm:gap-6 order-1 min-[1036px]:order-2"
            data-aos="fade-left"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 sm:w-8 h-1 bg-[#01ADEF] rounded-full inline-block shrink-0" />
              <span className="heading-blue text-white">
                Precancerous Lesion Treatment
              </span>
            </div>

            {/* Heading */}
            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight leading-snug"
            >
              HRA – High Resolution Anoscopy Ablation of Precancerous Lesions
            </Typography>

            {/* 3 Numbered Feature Cards */}
            <div className="flex flex-col gap-3.5 sm:gap-4 mt-2">
              {hraFeatures.map((item, idx) => (
                <div
                  key={item.number}
                  className="w-full bg-white text-[#333333] rounded-[16px] min-[3800px]:rounded-[28px] p-4 sm:p-5 shadow-lg flex items-start gap-4 sm:gap-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  {/* Cyan Circular Number Badge */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 min-[2500px]:w-14 min-[2500px]:h-14 rounded-full bg-[#01ADEF] text-white font-bold text-sm sm:text-base min-[2500px]:text-xl flex items-center justify-center shrink-0 shadow-sm mt-0.5 group-hover:scale-105 transition-transform">
                    {item.number}
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-base sm:text-lg min-[2500px]:text-xl font-bold text-[#00578E]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HRAProcedure;

