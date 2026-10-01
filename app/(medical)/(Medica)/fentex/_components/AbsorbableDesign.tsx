"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export default function AbsorbableDesign() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#006AB3] to-[#002E4D] py-14 sm:py-20 md:py-24 text-white overflow-hidden">
      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-25">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-20 items-center">

          {/* Left Column: Text Content */}
          <div
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h4 className="text-white section-text font-bold font-inter text-sm mb-3 tracking-wide uppercase">
              Tuttlingen Craftsmanship & Medical Heritage
            </h4>
            <h2 className="section-title font-bold text-white tracking-tight font-poppins leading-snug mb-6">
              Precision Made in Germany for Head & Neck Specialists
            </h2>

            <p className="section-text text-white/90 leading-relaxed font-inter mb-8 text-sm sm:text-base">
              FENTEX medical GmbH is a specialized medical technology company manufacturing and marketing surgical instruments and endoscopy systems for ENT and Head & Neck surgeons worldwide. Located near Tuttlingen—the world-renowned epicenter of surgical instrumentation—our surgical instruments and endoscopes are primarily made in Germany. High-quality components and painstaking attention to detail result in uncompromising precision, reliability, and durability.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-inter font-semibold text-sm">Tuttlingen Production Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-inter font-semibold text-sm">MDR & ISO 13485 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="font-inter font-semibold text-sm">Distribution in 80+ Countries</span>
              </div>
            </div>
          </div>

          {/* Right Column: Grid Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-12"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col justify-center h-full min-h-[11rem] sm:min-h-[10rem]">
              <h3 className="font-poppins font-bold text-[#006AB3] italic text-[28px] mb-2">100%</h3>
              <h4 className="font-poppins font-bold text-[#202020] section-title mb-2 leading-tight">German Engineering</h4>
              <p className="font-inter text-[#475569] section-text leading-snug">Precision machined stainless alloys and optics.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col justify-center h-full min-h-[11rem] sm:min-h-[10rem]">
              <h3 className="font-poppins font-bold text-[#006AB3] italic text-[28px] mb-2">80+</h3>
              <h4 className="font-poppins font-bold text-[#202020] section-title mb-2 leading-tight">Global Markets</h4>
              <p className="font-inter text-[#475569] section-text leading-snug">Trusted by leading university clinics & ENT hospitals.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col justify-center h-full min-h-[11rem] sm:min-h-[10rem]">
              <h3 className="font-poppins font-bold text-[#006AB3] italic text-[28px] mb-2">ISO 13485</h3>
              <h4 className="font-poppins font-bold text-[#202020] section-title mb-2 leading-tight">Full Compliance</h4>
              <p className="font-inter text-[#475569] section-text leading-snug">Audited quality management and sterile safety.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col justify-center h-full min-h-[11rem] sm:min-h-[10rem]">
              <h3 className="font-poppins font-bold text-[#006AB3] italic text-[28px] mb-2">24-48h</h3>
              <h4 className="font-poppins font-bold text-[#202020] section-title mb-2 leading-tight">Rapid Dispatch</h4>
              <p className="font-inter text-[#475569] section-text leading-snug">Emergency loaner exchange endoscopes ready.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
