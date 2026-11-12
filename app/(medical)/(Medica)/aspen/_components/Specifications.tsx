"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import { Check, ArrowRight } from "lucide-react";

const Specifications = () => {
  return (
    <section
      id="specifications"
      className="w-full bg-white relative overflow-hidden pt-6 sm:pt-8 pb-14 sm:pb-18 xl:pb-24"
    >
      {/* Dark Blue Horizontal Textured Banner at the Top (~207px in Figma) */}
      <div className="absolute top-0 left-0 w-full h-[180px] sm:h-[200px] lg:h-[220px] xl:h-[240px] min-[2500px]:h-[320px] bg-[#082755] bg-[url('/medical/aspen/bg.webp')] bg-cover bg-center z-0" />

      <div className="custom-container relative z-10">
        {/* Tablet layout up to 1500px (flex-col), Side-by-side row from 1501px (flex-row) */}
        <div className="flex flex-col min-[1501px]:flex-row items-center gap-6 xl:gap-8 pt-4 sm:pt-6">
          
          {/* Left Card: Video Player - Full width up to 1500px, 67.5% from 1501px */}
          <div
            className="w-full min-[1501px]:w-[67.5%] flex flex-col justify-center"
            data-aos="fade-right"
          >
            <div className="w-full aspect-video rounded-[20px] overflow-hidden shadow-xl relative">
              <DynamicVideoPlayer
                type="short-2"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Card: White Spec Box - Full width up to 1500px, 32.5% from 1501px */}
          <div
            className="w-full min-[1501px]:w-[32.5%] flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="w-full bg-white rounded-[20px] p-6 sm:p-7 xl:p-8 min-[2500px]:p-12 shadow-xl border border-gray-100 flex flex-col justify-center gap-5 sm:gap-6 text-gray-900">
              
              {/* Header Title */}
              <div>
                <Typography
                  variant="h3"
                  color="dark"
                  className="!font-bold text-xl sm:text-2xl min-[2500px]:text-4xl text-gray-900 xl:max-w-[85%]"
                >
                  Bovie® Specialist | PRO
                </Typography>
                <div className="w-12 h-1 bg-[#0B2F61] rounded-full mt-2" />
              </div>

              {/* Subtitle Copy */}
              <Typography
                variant="p"
                color="muted"
                className="text-gray-600 text-xs sm:text-sm min-[2500px]:text-lg leading-relaxed xl:max-w-[90%]"
              >
                The Bovie® Specialist | PRO 120W Electrosurgical Generator is designed to deliver reliable and versatile performance for busy physician offices and specialty healthcare facilities.
              </Typography>

              {/* Feature Checklist */}
              <div className="flex flex-col gap-2.5 sm:gap-3 my-1">
                <div className="flex items-start gap-2.5 min-[1920px]:gap-3.5 min-[2500px]:gap-4">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-[#0B2F61] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-white" strokeWidth={3} />
                  </div>
                  <Typography variant="p" color="dark" className="text-xs sm:text-sm min-[1920px]:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-700 leading-snug">
                    <strong className="text-gray-900">Multiple Surgical Applications</strong> – Supports a broad range of monopolar and bipolar procedures.
                  </Typography>
                </div>

                <div className="flex items-start gap-2.5 min-[1920px]:gap-3.5 min-[2500px]:gap-4">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-[#0B2F61] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-white" strokeWidth={3} />
                  </div>
                  <Typography variant="p" color="dark" className="text-xs sm:text-sm min-[1920px]:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-700 leading-snug">
                    <strong className="text-gray-900">Integrated Safety Monitoring</strong> – Combines pad sensing, error detection, and audible alerts
                  </Typography>
                </div>

                <div className="flex items-start gap-2.5 min-[1920px]:gap-3.5 min-[2500px]:gap-4">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-[#0B2F61] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-white" strokeWidth={3} />
                  </div>
                  <Typography variant="p" color="dark" className="text-xs sm:text-sm min-[1920px]:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-gray-700 leading-snug">
                    <strong className="text-gray-900">Flexible Electrical Compatibility</strong> – Supports 100–240 VAC input and 50–60 Hz line frequency.
                  </Typography>
                </div>
              </div>

              {/* Advanced Safety Description */}
              <Typography
                variant="p"
                color="muted"
                className="text-gray-600 text-xs sm:text-sm min-[2500px]:text-lg leading-relaxed xl:max-w-[90%]"
              >
                The Bovie® Specialist | PRO also incorporates advanced safety features, including BovieNEM™ neutral electrode monitoring, BovieDED™ digital error detection, audible alert tones, and self-test circuits.
              </Typography>

              {/* Action CTA Button */}
              <div className="pt-2">
                <a
                  href="#specs"
                  className="inline-flex items-center gap-2 min-[1920px]:gap-3 min-[2500px]:gap-4 bg-[#0B2F61] text-white font-medium text-xs sm:text-sm min-[1920px]:text-base min-[2500px]:text-xl min-[3800px]:text-2xl px-6 min-[1920px]:px-8 min-[2500px]:px-10 min-[3800px]:px-14 py-2.5 min-[1920px]:py-3.5 min-[2500px]:py-4.5 min-[3800px]:py-6 rounded-full hover:bg-[#072147] transition-all active:scale-95 shadow-md group w-fit"
                >
                  <span>View Technical Specifications</span>
                  <ArrowRight className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:w-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-white group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Specifications;
