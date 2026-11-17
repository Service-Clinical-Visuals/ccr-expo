"use client";

import React from "react";
import Typography from "./Typography";
import { Check } from "lucide-react";
import Link from "next/link";

const whyFeatures = [
  {
    title: "Advanced Oxygen Delivery",
    description: "Designed to deliver oxygen within the first 250 milliseconds of inspiration.",
  },
  {
    title: "Portable Oxygen Solutions",
    description: "Supports greater mobility and flexibility for everyday oxygen therapy.",
  },
  {
    title: "Replaceable Sieve Beds",
    description: "Allows convenient replacement to help save time and maintenance costs.",
  },
  {
    title: "Patient-Focused Innovation",
    description: "Uses continuous technological development to address evolving oxygen therapy needs.",
  },
];

/**
 * WhyInogen Section
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Two-Column Asymmetric Ratio (35% | 65%):
 *    - Left Column (35%): Key value propositions, bulleted checklist with icons, and primary action button.
 *    - Right Column (65%): Featured media frame using `aspect-[16/10]` ratio with zoom-on-hover interaction.
 * 2. Breakpoint Stacking:
 *    - Uses `min-[1300px]:flex-row` to maintain comfortable breathing room for both columns,
 *      stacking vertically (`flex-col`) on viewports narrower than 1300px.
 * 3. Corner Geometry:
 *    - Media card adheres to the asymmetrical corner style (`rounded-tl-[48px] sm:rounded-tl-[64px] rounded-br-[48px] sm:rounded-br-[64px]`).
 */
const WhyInogen = () => {
  return (
    <section id="why-inogen-section" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Two-Column Content: Divided 35% | 65% (stacked below 1300px) */}
        <div className="flex flex-col min-[1300px]:flex-row items-center gap-8 min-[1300px]:gap-10 w-full">

          {/* Left Column: Text & Features (35%) */}
          <div className="w-full min-[1300px]:w-[35%] flex flex-col gap-6" data-aos="fade-right">
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827]"
            >
              Why Inogen
            </Typography>

            <Typography
              variant="p"
              color="primary"
              className="!text-[#0B3090] font-medium text-sm sm:text-base leading-relaxed"
            >
              Inogen combines advanced oxygen delivery technology, replaceable sieve beds, and cost-effective portable solutions to support patients and healthcare providers. Our focus on performance, convenience, and continuous innovation helps simplify oxygen therapy while promoting greater mobility and independence.
            </Typography>

            <div className="flex flex-col gap-4 sm:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10 mt-1">
              {whyFeatures.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 min-[2500px]:gap-5 min-[3800px]:gap-7">
                  <div className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 rounded-full bg-[#0B3090] flex items-center justify-center shrink-0 mt-0.5 min-[2500px]:mt-1 text-white shadow-sm">
                    <Check className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={3} />
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#444444]">
                    <strong className="text-gray-900 font-semibold">{item.title}</strong> – {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 min-[2500px]:pt-6 min-[3800px]:pt-10">
              <Link
                href="#why-inogen-section"
                className="inline-flex items-center justify-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 bg-[#0B3090] hover:bg-[#082470] text-white font-medium px-5 py-3 min-[2500px]:px-8 min-[2500px]:py-4 min-[3800px]:px-12 min-[3800px]:py-6 rounded-[10px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[22px] shadow-[0_3px_8px_rgba(0,0,0,0.24)] hover:shadow-lg hover:shadow-[#0B3090]/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl transition-all duration-300 ease-in-out group cursor-pointer"
              >
                <span>Discover Why Inogen</span>
                <img
                  src="/medical/inogen/wa.webp"
                  alt="arrow"
                  className="w-[14px] h-[10px] min-[2500px]:w-[22px] min-[2500px]:h-[16px] min-[3800px]:w-[32px] min-[3800px]:h-[24px] group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0 object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Doctor Consultation Image (65%) */}
          <div className="w-full min-[1300px]:w-[65%]" data-aos="fade-left">
            <div className="relative w-full aspect-[16/10] rounded-tl-[48px] sm:rounded-tl-[64px] rounded-br-[48px] sm:rounded-br-[64px] rounded-tr-none rounded-bl-none overflow-hidden shadow-lg border border-gray-200/80 group cursor-pointer">
              <img
                src="/medical/inogen/why.webp"
                alt="Doctor consulting with patient regarding Inogen oxygen concentrator"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyInogen;
