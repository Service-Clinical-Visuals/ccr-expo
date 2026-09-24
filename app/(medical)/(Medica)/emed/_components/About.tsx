"use client";

import React from "react";
import Typography from "./Typography";

export default function About() {
  return (
    <section id="about" className="w-full py-14 sm:py-18 lg:py-24 min-[2500px]:py-32 bg-white overflow-hidden">
      <div className="custom-container">

        {/* Main Content Layout */}
        <div className="relative flex flex-col min-[1500px]:flex-row items-center w-full">

          {/* Overview Card */}
          <div
            className="w-full min-[1500px]:w-[58.5%] bg-white shadow-[0px_3px_8px_rgba(0,0,0,0.24)] rounded-[26px_0px] sm:rounded-[36px_0px] min-[1500px]:rounded-[50px_0px] min-[2500px]:rounded-[70px_0px] min-[3800px]:rounded-[90px_0px] px-6 sm:px-10 min-[1500px]:pl-[4.5%] min-[1500px]:pr-[2%] min-[2500px]:pl-[5%] py-8 sm:py-10 min-[1500px]:py-[4%] min-[2500px]:py-[4.5%] flex flex-col justify-between min-[1500px]:justify-center z-10 min-[1500px]:aspect-[983/577]"
            data-aos="fade-right"
          >
            {/* Text Content Wrapper */}
            <div className="w-full min-[1500px]:max-w-[82%] min-[1920px]:max-w-[88%] min-[2500px]:max-w-[83%] min-[3800px]:max-w-[83.5%] flex flex-col justify-center h-full gap-y-4 min-[1920px]:gap-y-6 min-[2500px]:gap-y-8">

              {/* Our Mission */}
              <div className="space-y-2 sm:space-y-2.5 min-[2000px]:space-y-3.5 min-[2500px]:space-y-4">
                <div className="flex items-center gap-3 min-[2000px]:gap-4">
                  {/* Icon */}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 min-[2000px]:w-8 min-[2000px]:h-8 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-[#006B96] flex items-center justify-center shrink-0 shadow-xs">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 min-[2000px]:w-4.5 min-[2000px]:h-4.5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <Typography
                    variant="h3"
                    color="dark"
                    className="font-['Outfit'] font-semibold text-[22px] sm:text-[24px] min-[1500px]:text-[26px] min-[2000px]:text-[30px] min-[2500px]:text-[38px] min-[3800px]:text-[50px] text-[#2A2A2A] capitalize"
                  >
                    Our Mission
                  </Typography>
                </div>

                <div className="pl-9 sm:pl-10 min-[2000px]:pl-12 min-[2500px]:pl-14 space-y-1.5 min-[2000px]:space-y-2 min-[2500px]:space-y-2.5">
                  <h4 className="font-['Outfit'] font-semibold text-[16px] sm:text-[17.5px] min-[1500px]:text-[19px] min-[2000px]:text-[22px] min-[2500px]:text-[28px] min-[3800px]:text-[36px] text-[#006B96] leading-snug">
                    Advancing Electrosurgery Through Precision & Safety
                  </h4>
                  <Typography
                    variant="p"
                    color="muted"
                    className="font-['Outfit'] text-[#4A4A4A] text-sm sm:text-[15px] min-[1500px]:text-[17px] min-[2000px]:text-[19px] min-[2500px]:text-[24px] min-[3800px]:text-[30px] leading-[150%]"
                  >
                    EMED is committed to developing high-quality electrosurgical solutions designed to support surgical precision, patient safety, and reliable clinical performance. Since 1995, the company has combined modern technologies, specialised expertise, and continuous development to meet the evolving needs of healthcare professionals.
                  </Typography>
                </div>
              </div>

              {/* Section Divider */}
              <div className="w-full h-px bg-[#111111]/20 my-1 min-[1500px]:my-1.5" />

              {/* Our Vision */}
              <div className="space-y-2 sm:space-y-2.5 min-[2000px]:space-y-3.5 min-[2500px]:space-y-4">
                <div className="flex items-center gap-3 min-[2000px]:gap-4">
                  {/* Icon */}
                  <div className="w-6 h-6 sm:w-7 sm:h-7 min-[2000px]:w-8 min-[2000px]:h-8 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 rounded-full bg-[#006B96] flex items-center justify-center shrink-0 shadow-xs">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 min-[2000px]:w-4.5 min-[2000px]:h-4.5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <Typography
                    variant="h3"
                    color="dark"
                    className="font-['Outfit'] font-semibold text-[22px] sm:text-[24px] min-[1500px]:text-[26px] min-[2000px]:text-[30px] min-[2500px]:text-[38px] min-[3800px]:text-[50px] text-[#2A2A2A] capitalize"
                  >
                    Our Vision
                  </Typography>
                </div>

                <div className="pl-9 sm:pl-10 min-[2000px]:pl-12 min-[2500px]:pl-14 space-y-1.5 min-[2000px]:space-y-2 min-[2500px]:space-y-2.5">
                  <h4 className="font-['Outfit'] font-semibold text-[16px] sm:text-[17.5px] min-[1500px]:text-[19px] min-[2000px]:text-[22px] min-[2500px]:text-[28px] min-[3800px]:text-[36px] text-[#006B96] leading-snug">
                    Leading the Future of Electrosurgical Solutions
                  </h4>
                  <Typography
                    variant="p"
                    color="muted"
                    className="font-['Outfit'] text-[#4A4A4A] text-sm sm:text-[15px] min-[1500px]:text-[17px] min-[2000px]:text-[19px] min-[2500px]:text-[24px] min-[3800px]:text-[30px] leading-[150%]"
                  >
                    EMED aims to advance electrosurgery through innovative technologies and comprehensive solutions, from compact outpatient devices to complete electrosurgical systems. With a global network and expertise in electrosurgery, Argon coagulation, and vessel sealing, EMED continues to deliver reliable solutions for healthcare professionals worldwide.
                  </Typography>
                </div>
              </div>

            </div>
          </div>

          {/* Showcase Image */}
          <div
            className="w-full min-[1500px]:w-[48.8%] min-[1500px]:-ml-[7.32%] mt-8 min-[1500px]:mt-0 z-20 shrink-0"
            data-aos="fade-left"
          >
            <div className="w-full aspect-[820/513] rounded-[22px_0px] sm:rounded-[26px_0px] min-[1500px]:rounded-[30px_0px] min-[2500px]:rounded-[44px_0px] min-[3800px]:rounded-[56px_0px] overflow-hidden border border-[#006B96]/25 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-neutral-100 group">
              <img
                src="/medical/emed/about.jpg"
                alt="EMED — Twój partner w elektrochirurgii"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}