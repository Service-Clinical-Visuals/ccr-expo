/**
 * Core Values Section (What We Stand For)
 * Master Reference: Zinnanti Surgical & Inogen Standards
 * - Scales circular red icon containers and SVG icons across viewports up to 4K.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Badge from "./Badge";

// Exact Figma Vector Icons
function LifeFirstIcon({ className = "" }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 12h4.5l2.5-7.5 3.5 15.5 3-8 1.5 3.5H22" />
    </svg>
  );
}

function MineralScienceIcon({ className = "" }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z" />
    </svg>
  );
}

function HemostasisIcon({ className = "" }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 22c4.636 0 8-3.468 8-8.246C20 7.522 12.882 2.4 12.579 2.185a1 1 0 0 0-1.156-.001C11.12 2.397 4 7.503 4 13.75 4 18.53 7.364 22 12 22zm-.001-17.74C13.604 5.55 18 9.474 18 13.754 18 17.432 15.532 20 12 20s-6-2.57-6-6.25c0-4.29 4.394-8.203 5.999-9.49z" />
    </svg>
  );
}

function ScientificIntegrityIcon({ className = "" }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2a1 1 0 0 1 .894.553l1.819 3.687l4.067.591a1 1 0 0 1 .554 1.705l-2.943 2.87l.695 4.054a1 1 0 0 1-1.451 1.054L12 14.885l-3.635 1.91a1 1 0 0 1-1.451-1.054l.695-4.054l-2.943-2.87a1 1 0 0 1 .554-1.705l4.067-.591l1.819-3.687A1 1 0 0 1 12 2ZM6.5 17.5a1 1 0 0 0-1 1v1.172c0 1.096 1.259 1.681 2.086.963l2.09-1.828a1 1 0 0 1 1.308 0l2.09 1.828c.827.718 2.086.133 2.086-.963V18.5a1 1 0 0 0-1-1h-7.66Z" />
    </svg>
  );
}

const coreValues = [
  {
    title: "Life First",
    desc: "Every decision is driven by the goal of saving lives, ensuring that protecting and preserving human life remains at the heart of everything we do.",
    icon: LifeFirstIcon,
  },
  {
    title: "Mineral Science Meets Medicine",
    desc: "Combining advanced mineral processing expertise with modern medical knowledge, innovative technology, and scientific precision.",
    icon: MineralScienceIcon,
  },
  {
    title: "Hemostasis Expertise",
    desc: "Focused development of medical products for effective bleeding control. Clear, intuitive solutions for high-stress situation under toughest conditions.",
    icon: HemostasisIcon,
  },
  {
    title: "Scientific Integrity",
    desc: "We develop our products based on the latest scientific findings and continuously improve them through direct feedback from our users and patients.",
    icon: ScientificIntegrityIcon,
  },
];

export default function CoreValues() {
  return (
    <section id="values" className="w-full py-16 xl:py-24 2k:py-36 4k:py-48 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4 2k:space-y-6 4k:space-y-8"
          data-aos="fade-up"
        >
          {/* Tag Badge */}
          <Badge text="OUR CORE VALUES" />

          <Typography
            variant="h2"
            color="gray"
            className="text-xl sm:text-2xl lg:text-[1.6875rem] 2k:text-4xl 4k:text-6xl font-bold tracking-tight text-[#333333] w-full max-w-full xl:max-w-[70%] mx-auto"
          >
            What We Stand For
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl leading-relaxed text-[#4B5563] max-w-4xl 2k:max-w-6xl 4k:max-w-7xl mx-auto"
          >
            Our values shape everything we do, guiding our product development, innovation, and collaboration. We are committed to saving lives through scientific excellence, advanced mineral technology, reliable medical solutions, and continuous improvement.
          </Typography>
        </div>

        {/* 2x2 Grid of 3D Flip Value Cards */}
        <div className="w-full grid grid-cols-1 min-[1036px]:grid-cols-2 gap-6 sm:gap-8 2k:gap-12 4k:gap-16 mt-12 sm:mt-16 2k:mt-24 4k:mt-32">
          {coreValues.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <div
                key={val.title}
                className="flip-card w-full rounded-[20px] 2k:rounded-[32px] 4k:rounded-[44px] cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flip-card-inner rounded-[20px] 2k:rounded-[32px] 4k:rounded-[44px]">
                  
                  {/* FRONT FACE (White Card Theme) */}
                  <div className="flip-card-front w-full h-full bg-white rounded-[20px] 2k:rounded-[32px] 4k:rounded-[44px] p-5 sm:p-6 xl:p-7 2k:p-11 4k:p-16 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] border border-gray-100 flex items-center gap-5 sm:gap-6 2k:gap-10 4k:gap-14">
                    {/* Red Circular Icon with Responsive Scaling (56px -> 104px -> 144px) */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 2k:w-26 2k:h-26 4k:w-36 4k:h-36 rounded-full bg-[#E62730] flex items-center justify-center text-white shrink-0 shadow-md">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 2k:w-13 2k:h-13 4k:w-18 4k:h-18" strokeWidth={2.2} />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <Typography
                        variant="p"
                        color="none"
                        className="text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl leading-relaxed text-[#1E1E1E]"
                      >
                        <strong className="font-heading font-bold text-[#E62730]">
                          {val.title}
                        </strong>
                        <span className="text-[#1E1E1E]"> – </span>
                        <span className="font-normal text-[#1E1E1E]">
                          {val.desc}
                        </span>
                      </Typography>
                    </div>
                  </div>

                  {/* BACK FACE (Red Card Theme - Flipped 180deg) */}
                  <div className="flip-card-back w-full h-full bg-[#E62730] rounded-[20px] 2k:rounded-[32px] 4k:rounded-[44px] p-5 sm:p-6 xl:p-7 2k:p-11 4k:p-16 shadow-2xl border border-[#E62730] flex items-center gap-5 sm:gap-6 2k:gap-10 4k:gap-14">
                    {/* White Circular Icon with Red Icon */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 2k:w-26 2k:h-26 4k:w-36 4k:h-36 rounded-full bg-white flex items-center justify-center text-[#E62730] shrink-0 shadow-md">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 2k:w-13 2k:h-13 4k:w-18 4k:h-18" strokeWidth={2.2} />
                    </div>

                    {/* Text Content: Pure White */}
                    <div className="flex-1">
                      <Typography
                        variant="p"
                        color="none"
                        className="text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl leading-relaxed text-white"
                      >
                        <strong className="font-heading font-bold text-white">
                          {val.title}
                        </strong>
                        <span className="text-white"> – </span>
                        <span className="font-normal text-white/95">
                          {val.desc}
                        </span>
                      </Typography>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
