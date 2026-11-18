"use client";

import React from "react";
import Typography from "../Typography";
import Button from "../Button";
import { Lightbulb, ShieldCheck, Activity } from "lucide-react";

const valueCards = [
  {
    title: "Purpose-Built Innovation",
    description:
      "Innovative technology has been created to address the unique requirements of specialized surgical procedures. This advancement aims to enhance precision and improve patient outcomes in the operating room.",
    icon: Lightbulb,
  },
  {
    title: "Clinical Confidence",
    description:
      "Innovative strategies and approaches embraced by top-tier academic medical centers are transforming healthcare delivery and enhancing patient outcomes. These institutions are at the forefront of medical research and education, implementing cutting-edge technologies.",
    icon: ShieldCheck,
  },
  {
    title: "Better Surgical Environments",
    description:
      "We are committed to promoting cleaner and more controlled procedures that enhance efficiency and sustainability in our operations. By implementing best practices and innovative solutions, we aim to create a safer and more environmentally friendly workplace.",
    icon: Activity,
  },
];

/**
 * Why Zinnanti Surgical Section
 * Master Reference: Inogen Development Standards
 * - Stacks cleanly up to 1035px
 * - Top hero split with why.jpg and detailed technical copy
 * - Bottom 3 value pillars centered when odd on tablet
 */
const WhyZinnanti = () => {
  return (
    <section id="why" className="w-full overflow-hidden">
      
      {/* 1. Top Section: Patterned Background */}
      <div className="w-full py-16 xl:py-24 bg-[#4F6744] bg-[url('/medical/zinnanti-surgical-3/bg.webp?v=2')] bg-cover bg-center bg-no-repeat text-white relative">
        <div className="custom-container flex flex-col gap-12 sm:gap-16">
          
          {/* Section Header */}
          <div
            className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center gap-2.5">
              <span className="w-8 h-1 bg-white rounded-full inline-block" />
              <span className="heading-blue text-white">
                Why Zinnanti Surgical
              </span>
            </div>

            <Typography
              variant="h2"
              color="white"
              className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight"
            >
              Advancing Surgical Care Through Purpose-Built Innovation
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="leading-relaxed text-white/90 text-center"
            >
              At Zinnanti Surgical Design Group, we believe that true innovation begins with a deep understanding of the challenges that healthcare professionals encounter daily.
            </Typography>
          </div>

          {/* Two-Column Split Layout (stacked up to 1035px) */}
          <div className="flex flex-col min-[1036px]:flex-row items-center gap-10 xl:gap-14 w-full">
            
            {/* Left: Image (stacked up to 1035px) */}
            <div
              className="w-full min-[1036px]:w-1/2 relative rounded-[24px] min-[3800px]:rounded-[48px] overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
              data-aos="fade-right"
            >
              <div className="w-full h-[360px] sm:h-[460px] lg:h-[520px] xl:h-[560px] min-[2500px]:h-[750px] min-[3800px]:h-[1050px] overflow-hidden">
                <img
                  src="/medical/zinnanti-surgical-3/why.webp"
                  alt="Establishing Innovative Benchmarks in Surgical Smoke Management"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right: Technical Narrative */}
            <div
              className="w-full min-[1036px]:w-1/2 flex flex-col gap-5 sm:gap-6"
              data-aos="fade-left"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl min-[2500px]:text-4xl min-[3800px]:text-6xl font-bold tracking-tight text-white leading-snug">
                Establishing Innovative Benchmarks in the Management of Surgical Smoke
              </h3>

              <Typography
                variant="p"
                color="white"
                className="leading-relaxed text-white/90 text-justify"
              >
                The Zinnanti Surgical Smoke Evacuator Unit (ZSE01) is a high-flow, high-efficiency smoke evacuation system specifically designed to support High-Resolution Anoscopy (HRA) procedures. Engineered to provide effective smoke management during surgical applications, this advanced unit helps maintain a cleaner procedural environment by efficiently removing surgical smoke generated during electrosurgical treatments. Its dedicated design supports healthcare professionals in maintaining visibility, improving procedural conditions, and focusing on precision throughout the procedure.
              </Typography>

              <Typography
                variant="p"
                color="white"
                className="leading-relaxed text-white/90 text-justify"
              >
                Equipped with a 35-hour filter and designed for 100–120V operation, the ZSE01 combines dependable performance with practical functionality for clinical environments. Its advanced smoke evacuation technology is supported by multiple granted patents and additional patents pending, reflecting Zinnanti Surgical's continued commitment to innovation and specialized surgical solutions.
              </Typography>

              <div className="pt-2">
                <Button
                  text="Read More"
                  variant="white"
                  href="#contact"
                  className="bg-white hover:bg-gray-100 text-[#212121] shadow-lg"
                />
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 2. Bottom Section: 3 Value Pillar Cards (Single row on desktop, 2-col with centered 3rd card on tablet) */}
      <div className="w-full py-16 xl:py-20 bg-[#F9F9F9]">
        <div className="custom-container">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1036px]:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {valueCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className={`w-full bg-[#F9F9F9] rounded-[24px] min-[3800px]:rounded-[40px] p-7 sm:p-9 min-[2500px]:p-12 min-[3800px]:p-16 border border-black/10 shadow-[3px_6px_12px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-start gap-4 group ${
                    idx === 2
                      ? "md:col-span-2 md:w-full md:max-w-[calc(50%-1rem)] md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 min-[1036px]:col-span-1 min-[1036px]:max-w-none min-[1036px]:mx-0"
                      : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-[#4F6744] shadow-[4px_6px_8px_rgba(0,0,0,0.2)] flex items-center justify-center shrink-0 text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 stroke-[2.2]" />
                    </div>
                    <h4 className="text-lg sm:text-xl min-[2500px]:text-2xl min-[3800px]:text-4xl font-bold text-[#333333]">
                      {card.title}
                    </h4>
                  </div>

                  <p className="text-[#555555] leading-relaxed text-justify mt-2">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};

export default WhyZinnanti;
