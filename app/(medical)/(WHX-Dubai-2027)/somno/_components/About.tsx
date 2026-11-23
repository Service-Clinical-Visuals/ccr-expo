/**
 * About Section (Who is SOMNOmedics AG & History and Milestones)
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Two-Column Split Layout for About intro:
 *    - Left: Responsive image frame with rounded-[24px] corners.
 *    - Right: Descriptive text block with Squada One headings and League Spartan paragraphs.
 * 2. Full-Width History and Milestones Card:
 *    - Styled with brand color #005781, rounded-[36px], and 4-column timeline milestone structure.
 */
"use client";

import React from "react";
import Link from "next/link";

const milestones = [
  {
    year: "2000",
    description: "SOMNOmedics history and milestones of SOMNOmedics ends where it all began with the founding of the company in Kist",
  },
  {
    year: "2003",
    description: "Launch of the SOMNOscreen™ PSG – 28 Channel PSG with Wireless Data Transfer, digital Synchronised and Wireless Video",
  },
  {
    year: "2004",
    description: "Release of different Options such as Capnography, EDA (electro dermal activity), pH, Oesophageal Pressure and NPT",
  },
];

export default function About() {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 lg:gap-16">

        {/* 1. About Company: Split Layout (Tablet layout kept up to 1035px, 2-column grid from 1036px) */}
        <div className="flex flex-col min-[1036px]:grid min-[1036px]:grid-cols-2 gap-8 min-[1036px]:gap-12 xl:gap-16 items-center">

          {/* Mobile/Tablet Only Heading: Appears FIRST before image on screens up to 1035px */}
          <div className="min-[1036px]:hidden space-y-1.5 w-full max-w-full text-left" data-aos="fade-up">
            <span className="font-primary text-[#005781] text-lg sm:text-[20px] uppercase tracking-wide">
              About Company
            </span>
            <h2 className="font-primary text-[#212121] text-2xl sm:text-3xl leading-tight">
              Who is SOMNOmedics AG
            </h2>
          </div>

          {/* Column: Image (Appears NEXT after heading on screens up to 1035px) */}
          <div
            className="w-full aspect-[4/3] sm:aspect-[16/10] min-[1036px]:aspect-[4/3] rounded-[24px] overflow-hidden shadow-lg border border-gray-100 group cursor-pointer"
            data-aos="fade-right"
          >
            <img
              src="/medical/somno/about.webp"
              alt="SOMNOmedics Office Headquarters"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Column: Text & CTA */}
          <div className="flex flex-col gap-4 sm:gap-5 w-full" data-aos="fade-left">
            {/* Desktop Only Heading: Appears on desktop screens from 1036px in right column */}
            <div className="hidden min-[1036px]:block space-y-1.5 w-full max-w-full">
              <span className="font-primary text-[#005781] text-lg sm:text-[20px] uppercase tracking-wide">
                About Company
              </span>

              <h2 className="font-primary text-[#212121] text-2xl sm:text-3xl lg:text-[34px] leading-tight">
                Who is SOMNOmedics AG
              </h2>
            </div>

            <div className="flex flex-col gap-4 font-secondary text-[#585858] text-base sm:text-lg leading-[1.45] text-justify">
              <p>
                Nowadays, medical technology has to try to keep up with medical research and respond to the increased demands of both doctors and patients. The rapidly developing field of sleep medicine in particular requires innovative solutions.
              </p>
              <p>
                Coming from the sleep medicine field we see ourselves as specialists for polysomnography and polygraphy screenings. Additional to that, our experience from the last 25 years also allowed us to tap into cardiology and neurology. Today we provide sophisticated solutions for long-term diagnostic EEGs, long-term ECG or innovative continuous, ambulatory blood pressure measurement. At the same time, we strive to keep our solutions easy to apply, reliable in their results and durable during the daily routine.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="#about"
                className="inline-flex items-center justify-center text-center font-primary font-bold text-white bg-[#005781] hover:bg-[#004567] text-base sm:text-lg lg:text-[20px] px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 leading-none"
              >
                <span className="font-primary font-bold text-center leading-none">Know About Us</span>
              </Link>
            </div>
          </div>

        </div>

        {/* 2. History and Milestones Card (Exact Figma Frame 10: 36px radius, 24px 56px padding, 3 vertical dividers) */}
        <div
          className="w-full bg-[#005781] rounded-[24px] sm:rounded-[36px] p-6 sm:p-8 min-[1036px]:py-6 min-[1036px]:px-14 min-[2500px]:py-10 min-[2500px]:px-20 min-[3800px]:py-16 min-[3800px]:px-28 text-white shadow-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 min-[1036px]:flex min-[1036px]:flex-row items-stretch justify-between gap-8 min-[1036px]:gap-0 w-full max-w-full">

            {/* Col 1: Overview (History and Milestones + Text + Button) */}
            <div className="flex flex-col justify-between gap-4 w-full max-w-full min-[1036px]:w-[31%] min-[1036px]:pr-8 min-[2500px]:pr-12">
              <div className="space-y-2.5 sm:space-y-3 w-full max-w-full">
                <h3 className="font-primary text-white text-2xl sm:text-3xl lg:text-[32px] min-[2500px]:text-4xl min-[3800px]:text-5xl leading-tight">
                  History and Milestones
                </h3>
                <p className="font-secondary text-white/90 text-sm sm:text-base lg:text-[18px] min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed w-full max-w-full">
                  Our history starts with our latest additions to our family of devices and works backwards from there.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="#about"
                  className="inline-flex items-center justify-center text-center font-primary font-bold text-[#005781] bg-white hover:bg-gray-100 text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl px-7 min-[2500px]:px-10 min-[3800px]:px-14 py-2.5 min-[2500px]:py-4 min-[3800px]:py-6 rounded-full shadow-md transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 leading-none shrink-0"
                >
                  <span className="font-primary font-bold text-center leading-none">View History</span>
                </Link>
              </div>
            </div>

            {/* Vertical Divider 1 between Col 1 and 2000 on Desktop */}
            <div className="hidden min-[1036px]:block w-[1.5px] bg-[rgba(217,217,217,0.35)] self-stretch shrink-0" />

            {/* Milestone 1: 2000 */}
            <div className="flex flex-col justify-center items-center text-center gap-2.5 w-full max-w-full min-[1036px]:w-[23%] min-[1036px]:px-6 min-[2500px]:px-8">
              <h3 className="font-primary text-white text-2xl sm:text-3xl lg:text-[32px] min-[2500px]:text-4xl min-[3800px]:text-5xl leading-tight">
                2000
              </h3>
              <p className="font-secondary text-white/90 text-xs sm:text-sm lg:text-[17px] min-[2500px]:text-lg min-[3800px]:text-xl leading-relaxed w-full max-w-full">
                SOMNOmedics history and milestones of SOMNOmedics ends where it all began with the founding of the company in Kist
              </p>
            </div>

            {/* Vertical Divider 2 between 2000 and 2003 on Desktop */}
            <div className="hidden min-[1036px]:block w-[1.5px] bg-[rgba(217,217,217,0.35)] self-stretch shrink-0" />

            {/* Milestone 2: 2003 */}
            <div className="flex flex-col justify-center items-center text-center gap-2.5 w-full max-w-full min-[1036px]:w-[23%] min-[1036px]:px-6 min-[2500px]:px-8">
              <h3 className="font-primary text-white text-2xl sm:text-3xl lg:text-[32px] min-[2500px]:text-4xl min-[3800px]:text-5xl leading-tight">
                2003
              </h3>
              <p className="font-secondary text-white/90 text-xs sm:text-sm lg:text-[17px] min-[2500px]:text-lg min-[3800px]:text-xl leading-relaxed w-full max-w-full">
                Launch of the SOMNOscreen™ PSG – 28 Channel PSG with Wireless Data Transfer, digital Synchronised and Wireless Video
              </p>
            </div>

            {/* Vertical Divider 3 between 2003 and 2004 on Desktop */}
            <div className="hidden min-[1036px]:block w-[1.5px] bg-[rgba(217,217,217,0.35)] self-stretch shrink-0" />

            {/* Milestone 3: 2004 */}
            <div className="flex flex-col justify-center items-center text-center gap-2.5 w-full max-w-full min-[1036px]:w-[23%] min-[1036px]:pl-6 min-[2500px]:pl-8">
              <h3 className="font-primary text-white text-2xl sm:text-3xl lg:text-[32px] min-[2500px]:text-4xl min-[3800px]:text-5xl leading-tight">
                2004
              </h3>
              <p className="font-secondary text-white/90 text-xs sm:text-sm lg:text-[17px] min-[2500px]:text-lg min-[3800px]:text-xl leading-relaxed w-full max-w-full">
                Release of different Options such as Capnography, EDA (electro dermal activity), pH, Oesophageal Pressure and NPT
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

