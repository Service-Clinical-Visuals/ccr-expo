"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-16 w-full">
          {/* Left Text Content */}
          <div
            className="flex flex-col gap-6 w-full xl:w-1/2 xl:max-w-[90%] order-1"
            data-aos="fade-right"
          >
            {/* Tagline */}
            <div>
              <Typography
                variant="h4"
                className="!text-[#0059A4] text-xs sm:text-sm font-bold tracking-widest uppercase"
              >
                ABOUT US
              </Typography>
            </div>

            {/* Heading */}
            <Typography
              variant="h2"
              color="dark"
              className="text-[#0B1C30] font-bold leading-tight"
            >
              Advanced Orthopedic Solutions &amp; Trusted Surgical Partnership Services
            </Typography>

            {/* Paragraphs */}
            <div className="space-y-4">
              <Typography variant="p" color="muted" className="text-[#414752] leading-relaxed">
                Hipokrat A.Ş. was founded in 1972 by three visionary orthopedic surgeons and a
                master technician. Established to locally manufacture vital orthopedic surgical
                implants that were previously imported and hard to source, Hipokrat now meets all
                orthopedic specialty demands with comprehensive production capacity and over half a
                century of engineering experience.
              </Typography>

              <Typography variant="p" color="muted" className="text-[#414752] leading-relaxed">
                Starting from bone fixation plates in 1972, we elevated our product range to global
                medical benchmarks with state-of-the-art machinery, ISO Class 7 cleanrooms, and
                bioengineering teams. We invest continuously not only in automated production lines.
              </Typography>
            </div>

            {/* Accreditation Badge Card */}
            <div className="bg-[#ECF7FD] border border-[#d3ecfc] rounded-2xl min-[2500px]:rounded-3xl p-4 sm:p-5 min-[2500px]:p-7 min-[3800px]:p-9 flex items-center justify-between gap-4 transition-all duration-300 hover:shadow-sm">
              <div className="flex items-center gap-3.5 sm:gap-4 min-[2500px]:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-20 min-[3800px]:h-20 rounded-xl min-[2500px]:rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 text-[#0059A4]">
                  <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-12 min-[3800px]:h-12" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base min-[2500px]:text-2xl min-[3800px]:text-3xl font-bold text-[#0B1C30] leading-tight">
                    MDR &amp; ISO 13485:2016
                  </h4>
                  <p className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl text-[#414752] mt-0.5 min-[2500px]:mt-2">
                    International Biomedical Accreditation
                  </p>
                </div>
              </div>
              <div className="shrink-0 text-[#717783] pr-2">
                <ArrowRight className="w-5 h-5 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 text-[#0059A4]" />
              </div>
            </div>

            {/* Button */}
            <div className="pt-2 min-[2500px]:pt-6">
              <Button
                text="Learn More"
                variant="primary"
                href="#about"
                showIcon={false}
                className="!bg-[#0082CB] hover:!bg-[#006fae] !px-8 !py-3 min-[2500px]:!px-12 min-[2500px]:!py-5 min-[3800px]:!px-16 min-[3800px]:!py-6 !rounded-full text-base min-[2500px]:text-2xl min-[3800px]:text-3xl font-semibold shadow-sm"
              />
            </div>
          </div>

          {/* Right Image Card */}
          <div
            className="w-full xl:w-1/2 relative order-2 mt-4 xl:mt-0"
            data-aos="fade-left"
          >
            <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-[0px_2px_8px_rgba(60,64,67,0.15),0px_1px_3px_rgba(60,64,67,0.25)] border border-gray-100">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/medical/hipokrat/about.webp"
                  alt="Hipokrat KOSBI Izmir Manufacturing Campus"
                  className="w-full h-full object-cover"
                />

                {/* Floating Campus Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#213145]/90 backdrop-blur-md px-3.5 py-1.5 rounded-md shadow-md border border-white/10">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#EAF1FF] uppercase">
                    KOSBI IZMIR MANUFACTURING CAMPUS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
