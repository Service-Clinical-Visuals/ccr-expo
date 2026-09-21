"use client";

import React from "react";
import Button from "./Button";
import { Calendar } from "lucide-react";

export default function QualityManagement() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h4 className="text-[#0287DC] section-text font-bold font-inter mb-2 text-sm sm:text-base tracking-wide">
            News
          </h4>
          <h2 className="section-title font-bold tracking-tight font-dmsans text-[#333333] mb-4 sm:mb-6 leading-snug">
            Latest Insights & News
          </h2>
          <p className="section-text leading-relaxed font-inter text-[#666666] text-sm sm:text-base max-w-3xl mx-auto font-regular">
            Explore the latest innovations, technologies, and developments from Medelcom International, featuring advances in medical imaging, diagnostics, and healthcare solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-10">

          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row bg-white rounded-[5px] overflow-hidden shadow-md hover:shadow-md transition-shadow gap-3">
            <div className="flex-shrink-0 relative">
              <img src="/medical/medelcom/n1.png" alt="Sonoporosis Drugs" className="w-full sm:w-auto h-full object-cover sm:max-h-full" />
            </div>
            <div className="p-5 sm:py-6 sm:pr-6 sm:pl-4 flex flex-col gap-3 justify-center flex-grow">
              <div className="flex items-center gap-2 mb-5">
                <Calendar className="w-[37px] h-[37px] text-[#0287DC]" />
                <span className="text-[#4B5563] font-inter font-bold section-text">September 8, 2020</span>
              </div>
              <h3 className="font-dmsans font-bold text-[#333333] card-title leading-snug mb-2 uppercase">
                INNOVATION – ARTERY DOPPLEROGRAPHY DEVICE
              </h3>
              <p className="font-inter text-[#4B5563] section-text leading-relaxed mb-5 font-regular">
                An ultrasound device that directly measures aortic pulse wave velocity and arterial stiffness, supporting cardiovascular assessment and prevention.
              </p>
              <div>
                <Button href="#news" variant="primary" showArrow={false} className="!w-auto !px-6 !py-2 !text-sm !rounded-md">
                  Read More
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-[5px] overflow-hidden border border-slate-200 shadow-md hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 relative">
              <img src="/medical/medelcom/n2.png" alt="Sonoporosis Drugs" className="w-full sm:w-auto h-full object-cover sm:max-h-full" />
            </div>
            <div className="p-5 sm:py-6 sm:pr-6 sm:pl-4 flex flex-col gap-3 justify-center flex-grow">
              <div className="flex items-center gap-2 mb-5">
                <Calendar className="w-[37px] h-[37px] text-[#0287DC]" />
                <span className="text-[#4B5563] font-inter font-bold section-text">September 8, 2020</span>
              </div>
              <h3 className="font-dmsans font-bold text-[#333333] card-title leading-snug mb-2 uppercase">
                INNOVATION - THE TECHNOLOGY OF
                SONOPOROSIS DRUGS AND GENE TRANSFER

              </h3>
              <p className="font-inter text-[#4B5563] section-text leading-relaxed mb-5 font-regular">
                Medelcom develops advanced ultrasound technology for targeted drug delivery and gene transfer using microbubble-based solutions.
              </p>
              <div>
                <Button href="#news" variant="primary" showArrow={false} className="!w-auto !px-6 !py-2 !text-sm !rounded-md">
                  Read More
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
