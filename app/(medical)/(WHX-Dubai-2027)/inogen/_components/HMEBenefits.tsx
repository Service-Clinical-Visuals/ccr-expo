"use client";

import React from "react";
import Typography from "./Typography";
import { Check } from "lucide-react";
import Link from "next/link";

const hmePoints = [
  "No oxygen tanks to worry about, deliveries to schedule, or space required to house extra inventory",
  "Powered by a rechargeable battery or standard AC or DC power sources",
  "Replaceable sieve beds that can be easily removed and replaced by customers",
];

/**
 * HMEBenefits Section
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Responsive Header Row:
 *    - Split layout with header copy constrained to `w-full max-w-full xl:max-w-[70%]` and CTA on the right.
 * 2. Asymmetric Two-Column Split Layout:
 *    - Left Column (65% width): Large media presentation container with `aspect-[16/10]` ratio.
 *    - Right Column (35% width): Supporting descriptive copy and feature checklist.
 *    - Responsive breakpoint: Stacks into single-column layout on screens below 1300px (`min-[1300px]:flex-row`).
 * 3. Asymmetric Corner Geometry:
 *    - Image container uses `rounded-tl-[48px] sm:rounded-tl-[64px]` and `rounded-br-[48px] sm:rounded-br-[64px]`.
 */
const HMEBenefits = () => {
  return (
    <section id="hme-benefits" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">

        {/* Section Header Row: Title & description constrained to xl:max-w-[70%], action button aligned on right */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-full xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827]"
            >
              Benefits For HME Providers
            </Typography>
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base leading-relaxed text-[#555555]"
            >
              Inogen works closely with Home Medical Equipment (HME) providers to understand their operational needs and deliver practical, cost-effective oxygen therapy solutions. Inogen helps providers reduce costs, simplify operations, and improve patient experiences through innovative solutions.
            </Typography>
          </div>

          <div className="shrink-0 self-start md:self-center">
            <Link
              href="#hme-benefits"
              className="inline-flex items-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 bg-[#0B3090] hover:bg-[#082470] text-white font-medium px-6 py-2.5 min-[2500px]:px-9 min-[2500px]:py-3.5 min-[3800px]:px-14 min-[3800px]:py-5 rounded-lg min-[2500px]:rounded-xl min-[3800px]:rounded-2xl shadow-sm hover:shadow-lg hover:shadow-[#0B3090]/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl transition-all duration-300 ease-in-out group cursor-pointer"
            >
              <span>Learn More</span>
              <img
                src="/medical/inogen/wa.webp"
                alt="arrow"
                className="w-[14px] h-[10px] min-[2500px]:w-[22px] min-[2500px]:h-[16px] min-[3800px]:w-[32px] min-[3800px]:h-[24px] group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0 object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Two Column Content: Divided 65% | 35% (stacked up to 1300px) */}
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-8 min-[1300px]:gap-10 w-full">

          {/* Left Column: Consultation Image (65%) */}
          <div className="w-full min-[1300px]:w-[65%]" data-aos="fade-right">
            <div className="relative w-full aspect-[16/10] rounded-tl-[48px] sm:rounded-tl-[64px] rounded-br-[48px] sm:rounded-br-[64px] rounded-tr-none rounded-bl-none overflow-hidden shadow-lg border border-gray-200/80 group cursor-pointer">
              <img
                src="/medical/inogen/why.webp"
                alt="Healthcare professional consulting with patient"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Cost-Effective Solutions (35%) */}
          <div className="w-full min-[1300px]:w-[35%] flex flex-col gap-4 sm:gap-5" data-aos="fade-left">
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827]"
            >
              Cost-Effective Solutions For HME Providers
            </Typography>

            <Typography
              variant="p"
              color="primary"
              className="!text-[#0B3090] font-medium text-sm sm:text-base leading-relaxed"
            >
              In addition, replaceable sieve beds allow customers to conveniently remove and replace components, helping simplify maintenance and reduce service requirements. Through continuous product innovation and a focus on total cost of ownership, Inogen aims to help HME providers streamline operations while delivering reliable oxygen therapy solutions to their patients.
            </Typography>

            <div className="flex flex-col gap-3.5 sm:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-9 mt-1">
              {hmePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7">
                  <div className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 rounded-full bg-[#0B3090] flex items-center justify-center shrink-0 mt-0.5 min-[2500px]:mt-1 text-white shadow-sm">
                    <Check className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={3} />
                  </div>
                  <p className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl leading-relaxed text-[#444444]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 min-[2500px]:pt-5 min-[3800px]:pt-8">
              <Link
                href="#hme-benefits"
                className="inline-flex items-center justify-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 bg-[#0B3090] hover:bg-[#082470] text-white font-medium px-6 py-3 min-[2500px]:px-9 min-[2500px]:py-4 min-[3800px]:px-14 min-[3800px]:py-6 rounded-[10px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[22px] shadow-[0_3px_8px_rgba(0,0,0,0.24)] hover:shadow-lg hover:shadow-[#0B3090]/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl transition-all duration-300 ease-in-out group cursor-pointer"
              >
                <span>Explore HME Provider Benefits</span>
                <img
                  src="/medical/inogen/wa.webp"
                  alt="arrow"
                  className="w-[14px] h-[10px] min-[2500px]:w-[22px] min-[2500px]:h-[16px] min-[3800px]:w-[32px] min-[3800px]:h-[24px] group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0 object-contain"
                />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HMEBenefits;
