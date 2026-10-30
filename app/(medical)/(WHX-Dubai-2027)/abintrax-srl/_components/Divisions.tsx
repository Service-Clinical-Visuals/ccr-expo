"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

const Divisions = () => {
  return (
    <section id="divisions" className="w-full py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        {/* Header - Deleo xl:max-w-[70%] pattern */}
        <div className="flex flex-col items-center text-center gap-3 w-full xl:max-w-[70%] mx-auto" data-aos="fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(24,25,26,0.15)] bg-white w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] shrink-0" />
            <span className="text-xs sm:text-sm font-secondary font-normal uppercase text-[#4B5563] tracking-wide">
              DIVISION
            </span>
          </div>

          {/* Heading */}
          <Typography
            variant="h2"
            color="dark"
            className="text-xl sm:text-2xl lg:text-[28px] min-[2500px]:text-[42px] min-[3800px]:text-[56px] font-bold"
          >
            One Vision, Two Areas of Excellence
          </Typography>
        </div>

        {/* Two Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 w-full">
          {/* Card 1: Abintrax Didact */}
          <div
            className="rounded-2xl p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-between shadow-xl min-h-[380px] lg:min-h-[420px] relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(180deg, #3AA5DD 0%, #074667 100%)",
            }}
            data-aos="fade-right"
          >
            {/* Top Row: Title on Left, 01 on Right */}
            <div className="flex items-center justify-between gap-4">
              <Typography
                variant="h3"
                color="white"
                className="text-xl sm:text-2xl min-[2500px]:text-3xl font-bold font-primary"
              >
                Abintrax Didact
              </Typography>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl min-[2500px]:text-[120px] min-[3800px]:text-[160px] font-bold font-primary text-white/60 leading-none select-none shrink-0 tracking-tight">
                01
              </div>
            </div>

            {/* Description */}
            <Typography
              variant="p"
              color="white"
              className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl font-bold leading-relaxed my-6 text-white/95"
            >
              Educational innovation 5.0: STEM, robotics, and coding labs, school furniture, and
              immersive environments for nurseries, schools, technical institutes, and universities.
              Modular and turnkey solutions, with expert financing consulting and dedicated technical
              support for every educational environment.
            </Typography>

            {/* Bottom Link */}
            <div className="flex justify-end pt-2">
              <a
                href="#what-we-do"
                className="inline-flex items-center gap-2 text-white font-bold text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl underline hover:opacity-90 transition-opacity group"
              >
                <span>View Abintrax Didact</span>
                <ArrowRight className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: Abintrax Health */}
          <div
            className="rounded-2xl p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-between shadow-xl min-h-[380px] lg:min-h-[420px] relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(180deg, #DC64A1 0%, #AC2369 100%)",
            }}
            data-aos="fade-left"
          >
            {/* Top Row: 02 on Left, Title on Right */}
            <div className="flex items-center justify-between gap-4">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl min-[2500px]:text-[120px] min-[3800px]:text-[160px] font-bold font-primary text-white/90 leading-none select-none shrink-0 tracking-tight">
                02
              </div>
              <Typography
                variant="h3"
                color="white"
                className="text-xl sm:text-2xl min-[2500px]:text-3xl font-bold font-primary text-right"
              >
                Abintrax Health
              </Typography>
            </div>

            {/* Description */}
            <Typography
              variant="p"
              color="white"
              className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl font-bold leading-relaxed my-6 text-white/95"
            >
              Abintrax Health organizes full-cycle healthcare: telemedicine, PDTA, integration with
              healthcare information systems (HIS, LIS, RIS, PACS), and medical devices to support
              efficient, connected, and coordinated patient care, improving accessibility, clinical
              workflows, and communication across healthcare providers and communities.
            </Typography>

            {/* Bottom Link */}
            <div className="flex justify-end pt-2">
              <a
                href="#what-we-do"
                className="inline-flex items-center gap-2 text-white font-bold text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl underline hover:opacity-90 transition-opacity group"
              >
                <span>View Abintrax Health</span>
                <ArrowRight className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Summary Text - Deleo xl:max-w-[70%] */}
        <div className="w-full xl:max-w-[70%] mx-auto text-center mt-2" data-aos="fade-up">
          <Typography
            variant="h3"
            color="muted"
            className="text-lg sm:text-xl lg:text-[26px] min-[2500px]:text-[38px] min-[3800px]:text-[48px] font-medium leading-relaxed text-[#4B5563]"
          >
            Bringing education and healthcare together through innovative products and integrated
            solutions that enhance learning, improve patient care, and create meaningful impact
            across both industries.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Divisions;
