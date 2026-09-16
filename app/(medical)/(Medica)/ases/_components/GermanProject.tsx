"use client";

import React from "react";
import Link from "next/link";
import { Eye, Target } from "lucide-react"; // Fallbacks for icons if not using images

export default function GermanProject() {
  return (
    <section id="vision-mission" className="w-full py-20 bg-[#FAFAFA]">
      <div className="custom-container flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <span className="text-[#BA0A28] font-[Inter] font-bold text-[16px] md:text-[18px]">
            Our Purpose
          </span>
          <h2 className="text-[#333333] font-[Manrope] text-[24px] md:text-[28px] font-bold mb-2">
            Vision & Mission
          </h2>
          <div className="w-[180px] h-[2px] bg-[#BA0A28] rounded-sm" />
        </div>

        {/* Cards Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {/* Vision Card */}
          <div className="relative rounded-[8px] overflow-hidden group min-h-[320px] md:min-h-[380px] flex flex-col p-8 md:p-10" data-aos="fade-right">
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 z-0 bg-[url('/medical/ases/v1.png')] bg-center bg-cover
            " />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-auto h-auto flex items-center justify-center shrink-0 shadow-md">
                  <img src="/medical/ases/i3.png" alt="Vision" className="auto h-auto object-contain" />
                </div>
                <h3 className="text-white font-[Manrope] font-bold text-[20px] md:text-[24px]">Vision</h3>
              </div>

              <p className="text-white/80 font-[Inter] text-[14px] leading-[1.7] flex-1">
                <strong className="text-white font-semibold">ASES ORTHOPEDICS</strong> aims to provide world-class services to its domestic and international
                clients, in line with the requirements of the age, without compromising on the principles of
                quality, trust, human health, reputation, and patient and physician satisfaction; and to
                establish itself as a sought-after company in the market by diversifying and improving service
                quality and making professional investments with its dynamic team.
              </p>

              <div className="mt-6 flex justify-end">
                <Link href="#vision" className="text-white font-[Inter] font-bold text-[16px] md:text-[18px] uppercase underline underline-offset-4 hover:text-[#BA0A28] transition-colors">
                  READ MORE
                </Link>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative rounded-[8px] overflow-hidden group min-h-[320px] md:min-h-[380px] flex flex-col p-8 md:p-10" data-aos="fade-left" data-aos-delay="100">
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 z-0 bg-[url('/medical/ases/v2.png')] bg-center bg-cover" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-auto h-auto flex items-center justify-center shrink-0 shadow-md">
                  <img src="/medical/ases/i4.png" alt="Mission" className="auto h-auto object-contain" />
                </div>
                <h3 className="text-white font-[Manrope] font-bold text-[20px] md:text-[24px]">Mission</h3>
              </div>

              <p className="text-white/80 font-[Inter] text-[14px] leading-[1.7] flex-1">
                With an awareness of the responsibility that <strong className="text-white font-semibold">human health places</strong> upon us, and with our
                production philosophy that does not compromise on quality and control; with our
                technological equipment, our experienced employees, our strong capital structure that
                supports our confidence in our work, and the machine technologies that we continuously
                improve thanks to this structure, we aim to be one of the few companies ...
              </p>

              <div className="mt-6 flex justify-end">
                <Link href="#mission" className="text-white font-[Inter] font-bold text-[16px] md:text-[18px] uppercase underline underline-offset-4 hover:text-[#BA0A28] transition-colors">
                  READ MORE
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
