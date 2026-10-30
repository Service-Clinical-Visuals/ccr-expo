"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 min-[1301px]:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Left Column: Image */}
          <div
            className="w-full relative aspect-[4/3] min-[1301px]:aspect-[4/3.5] min-h-[460px] sm:min-h-[540px] min-[1301px]:h-[640px] min-[2500px]:h-[860px] min-[3800px]:h-[1100px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 order-2 min-[1301px]:order-1"
            data-aos="fade-right"
          >
            <img
              src="/medical/abintrax-srl/about.webp"
              alt="Technical Training Session with OpenS Presentation"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-5 sm:gap-6 order-1 min-[1301px]:order-2" data-aos="fade-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(24,25,26,0.15)] bg-white w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] shrink-0" />
              <span className="text-xs sm:text-sm font-secondary font-normal uppercase text-[#4B5563] tracking-wide">
                WHO WE ARE
              </span>
            </div>

            {/* Heading */}
            <Typography
              variant="h2"
              color="dark"
              className="text-xl sm:text-2xl lg:text-[28px] min-[2500px]:text-[42px] min-[3800px]:text-[56px] font-bold leading-snug"
            >
              Technology Driven by Purpose. Innovation Designed for Everyone.
            </Typography>

            {/* Description - Deleo width pattern */}
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-[#4B5563] xl:max-w-[95%]"
            >
              Abintrax was born from established companies with extensive experience in the
              technology markets. It combines highly specialized skills and professionalism to offer
              solutions in line with the dynamics of an increasingly global market. The heart of the
              company is the software and hardware research and development department, which
              creates the products of the two divisions: education and healthcare.
            </Typography>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Mission Card */}
              <div className="bg-white border border-[rgba(24,25,26,0.15)] rounded-xl p-5 sm:p-6 min-[2500px]:p-8 min-[3800px]:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3 min-[2500px]:gap-5">
                <div className="flex items-center gap-3.5 sm:gap-4 min-[2500px]:gap-6">
                  {/* Bullseye / Target Icon - Scaled across big & 4K screens */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 min-[2500px]:w-22 min-[2500px]:h-22 min-[3800px]:w-30 min-[3800px]:h-30 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11 md:w-13 md:h-13 lg:w-15 lg:h-15 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 text-[#FFCC00]" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                    </svg>
                  </div>
                  <Typography variant="h4" color="dark" className="uppercase font-semibold text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl">
                    MISSION
                  </Typography>
                </div>
                <Typography variant="p" color="muted" className="text-xs sm:text-sm lg:text-base min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-[#4B5563]">
                  Develop innovative solutions that help overcome economic and social disparities
                  through sustainable and inclusive technological development.
                </Typography>
              </div>

              {/* Vision Card */}
              <div className="bg-white border border-[rgba(24,25,26,0.15)] rounded-xl p-5 sm:p-6 min-[2500px]:p-8 min-[3800px]:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3 min-[2500px]:gap-5">
                <div className="flex items-center gap-3.5 sm:gap-4 min-[2500px]:gap-6">
                  {/* Eye Icon - Scaled across big & 4K screens */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 min-[2500px]:w-22 min-[2500px]:h-22 min-[3800px]:w-30 min-[3800px]:h-30 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-11 sm:h-11 md:w-13 md:h-13 lg:w-15 lg:h-15 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 text-[#FFCC00]" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <Typography variant="h4" color="dark" className="uppercase font-semibold text-base sm:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl">
                    VISION
                  </Typography>
                </div>
                <Typography variant="p" color="muted" className="text-xs sm:text-sm lg:text-base min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-[#4B5563]">
                  Progress, technology, and innovation at the service of citizens and the wider
                  community: sustainable tools capable of bridging social gaps.
                </Typography>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Button text="Know About Us" href="#about" variant="pill" iconType="arrow-up-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
