/**
 * Treatment Process Section - OrthoGet
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Process Timeline Layout:
 *    - 3-step sequential progression with numbered circular badges (#0624BF) and dashed connecting lines.
 * 2. Responsive Transformation:
 *    - Horizontal flex layout with connecting dashed lines on tablet/desktop (>=768px).
 *    - Clean vertical stack on mobile with consistent spacing and alignment.
 * 3. 4K & Responsive Scaling:
 *    - Typography and circular dimensions adapt proportionally via standardized multipliers.
 */
"use client";

import React from "react";
import Typography from "./Typography";

const steps = [
  {
    number: "1",
    title: "Preparation",
    description: "Create a tailored plan for your treatment.",
  },
  {
    number: "2",
    title: "Stabilization",
    description: "Insert advanced instrument elements.",
  },
  {
    number: "3",
    title: "Recovery",
    description: "Achieve long-term mobility and comfort.",
  },
];

const TreatmentProcess = () => {
  return (
    <section id="treatment-process" className="w-full py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Centered Section Header */}
        <div
          className="text-center w-full max-w-[90%] xl:max-w-[70%] mx-auto space-y-3 sm:space-y-4"
          data-aos="fade-up"
        >
          <Typography variant="tag" color="primary">
            _ Treatment Process
          </Typography>

          <Typography
            variant="h2"
            color="secondary"
            className="text-[#202020]"
          >
            Comprehensive 3-stage Therapy
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="font-dmsans leading-relaxed text-[#404040] w-full xl:max-w-[70%] mx-auto"
          >
            Our treatment plan begins with a qualifying test for a customized 3-stage Orthopedic system, followed by the insertion of instrument stability elements. The procedure is designed to ensure long-term stability and improved mobility.
          </Typography>
        </div>

        {/* 3 Steps Row */}
        <div
          className="w-full max-w-[1100px] min-[2500px]:max-w-[1600px] min-[3800px]:max-w-[2200px] mx-auto mt-14 sm:mt-18 min-[2500px]:mt-24 min-[3800px]:mt-36"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
            
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative z-10 group">
                
                {/* Connecting Arrow Image (Desktop only, connecting 1->2 and 2->3) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-[48px] lg:top-[52px] 2k:top-[80px] 4k:top-[110px] -translate-y-1/2 left-[50%] w-full items-center justify-center pointer-events-none z-0 px-10 lg:px-14 2k:px-20 4k:px-28">
                    <img
                      src="/medical/orthoget/arrow.webp"
                      alt="Next step"
                      className="w-full max-w-[130px] lg:max-w-[170px] xl:max-w-[200px] 2k:max-w-[300px] 4k:max-w-[420px] h-auto object-contain"
                    />
                  </div>
                )}

                {/* Number Circle */}
                <div className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] md:w-[96px] md:h-[96px] lg:w-[104px] lg:h-[104px] 2k:w-[160px] 2k:h-[160px] 4k:w-[220px] 4k:h-[220px] rounded-full bg-[#0624BF] flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <span className="font-exo2 font-semibold text-2xl sm:text-3xl lg:text-[32px] 2k:text-5xl 4k:text-7xl">
                    {step.number}
                  </span>
                </div>

                {/* Step Title */}
                <Typography variant="h3" color="secondary" className="mt-6 sm:mt-8 2k:mt-10 4k:mt-14">
                  {step.title}
                </Typography>

                {/* Step Description */}
                <Typography variant="p" color="muted" className="max-w-[280px] 2k:max-w-[400px] 4k:max-w-[550px] mt-2 sm:mt-3 leading-relaxed text-center">
                  {step.description}
                </Typography>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default TreatmentProcess;

