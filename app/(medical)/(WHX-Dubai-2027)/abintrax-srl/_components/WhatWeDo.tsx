"use client";

import React from "react";
import Typography from "./Typography";

interface DivisionItem {
  number: string;
  title: string;
  description: string;
}

const didactItems: DivisionItem[] = [
  {
    number: "01",
    title: "STEM Labs",
    description: "Equipped environments for science, technology, and making, from nursery school to university",
  },
  {
    number: "02",
    title: "Robotics and Coding",
    description: "Kits and courses for computational thinking, creativity, and hands-on problem-solving skills.",
  },
  {
    number: "03",
    title: "School furniture",
    description: "Modular and flexible furniture for classrooms and learning spaces, designed for comfort, functionality, and durability.",
  },
  {
    number: "04",
    title: "Immersive environments",
    description: "Immersive spaces and classrooms for engaging teaching, encouraging learning, creativity, collaboration, and educational experiences.",
  },
];

const healthItems: DivisionItem[] = [
  {
    number: "01",
    title: "Telemedicine",
    description: "Remote care and monitoring that bring healthcare closer to patients, enablingconvenient access, timely support, and improved patient management.",
  },
  {
    number: "02",
    title: "Digital PDTA",
    description: "Diagnostic and therapeutic care pathways managed end-to-end for coordinated, efficient, patient-centered healthcare delivery.",
  },
  {
    number: "03",
    title: "Systems Integration",
    description: "Connection with hospital systems: HIS, LIS, RIS, PACS, enabling seamless data exchange and coordinated workflows.",
  },
  {
    number: "04",
    title: "Medical devices",
    description: "Integration with clinical devices and the data they generate, ensuring seamless connectivity and accurate information sharing.",
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="w-full py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        {/* Header - Deleo xl:max-w-[70%] pattern */}
        <div className="flex flex-col items-center text-center gap-3 w-full xl:max-w-[70%] mx-auto" data-aos="fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(24,25,26,0.15)] bg-white w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00] shrink-0" />
            <span className="text-xs sm:text-sm font-secondary font-normal uppercase text-[#4B5563] tracking-wide">
              What we do
            </span>
          </div>

          {/* Heading */}
          <Typography
            variant="h2"
            color="dark"
            className="text-xl sm:text-2xl lg:text-[28px] min-[2500px]:text-[42px] min-[3800px]:text-[56px] font-bold"
          >
            Integrated Solutions for Every Industry
          </Typography>

          {/* Description */}
          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base lg:text-[18px] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-[#4B5563]"
          >
            Discover our two specialized divisions, offering innovative products and integrated
            solutions across education technology and healthcare to meet diverse professional
            needs.
          </Typography>
        </div>

        {/* 2 Columns: Didact & Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14">
          {/* Left Column: Teaching Division */}
          <div className="flex flex-col gap-5" data-aos="fade-right">
            {/* Column Header - Parallely vertical to the card starting edge */}
            <div className="flex flex-col gap-1 mb-2 ml-7 sm:ml-8 md:ml-9 lg:ml-10 min-[2500px]:ml-14 min-[3800px]:ml-18">
              <span className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl font-bold uppercase text-[#333333]/85 font-secondary tracking-wider">
                TEACHING DIVISION
              </span>
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 rounded-full bg-[#3AA5DD] shrink-0" />
                <Typography variant="h3" color="dark" className="text-xl sm:text-2xl min-[2500px]:text-3xl min-[3800px]:text-4xl font-bold font-primary">
                  Abintrax Didact
                </Typography>
              </div>
            </div>

            {/* List of 4 Items */}
            <div className="flex flex-col gap-4">
              {didactItems.map((item) => (
                <div
                  key={item.number}
                  className="relative ml-7 sm:ml-8 md:ml-9 lg:ml-10 min-[2500px]:ml-14 min-[3800px]:ml-18 p-4 sm:p-5 pl-10 sm:pl-12 md:pl-13 lg:pl-15 min-[2500px]:pl-20 min-[3800px]:pl-26 rounded-xl border border-[rgba(24,25,26,0.15)] bg-white shadow-sm hover:shadow-md transition-shadow flex items-center min-h-[90px] sm:min-h-[100px] min-[2500px]:min-h-[140px] min-[3800px]:min-h-[180px]"
                >
                  {/* Number Badge - 50% Outside / 50% Inside, scaled up on big / 4K screens */}
                  <div className="absolute -left-7 sm:-left-8 md:-left-9 lg:-left-10 min-[2500px]:-left-14 min-[3800px]:-left-18 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 min-[2500px]:w-28 min-[2500px]:h-28 min-[3800px]:w-36 min-[3800px]:h-36 rounded-full bg-[#3AA5DD] flex items-center justify-center text-white font-bold font-primary text-lg sm:text-xl md:text-2xl lg:text-2xl min-[2500px]:text-4xl min-[3800px]:text-5xl shrink-0 shadow-md z-10 select-none">
                    {item.number}
                  </div>
                  {/* Text */}
                  <Typography
                    variant="p"
                    color="muted"
                    className="text-xs sm:text-sm lg:text-base min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-[#4B5563]"
                  >
                    <strong className="font-bold text-[#4B5563]">{item.title}</strong> – {item.description}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Health Division */}
          <div className="flex flex-col gap-5" data-aos="fade-left">
            {/* Column Header - Parallely vertical to the card starting edge */}
            <div className="flex flex-col gap-1 mb-2 ml-7 sm:ml-8 md:ml-9 lg:ml-10 min-[2500px]:ml-14 min-[3800px]:ml-18">
              <span className="text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl font-bold uppercase text-[#333333]/85 font-secondary tracking-wider">
                HEALTH DIVISION
              </span>
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7 rounded-full bg-[#DC64A1] shrink-0" />
                <Typography variant="h3" color="dark" className="text-xl sm:text-2xl min-[2500px]:text-3xl min-[3800px]:text-4xl font-bold font-primary">
                  Abintrax Health
                </Typography>
              </div>
            </div>

            {/* List of 4 Items */}
            <div className="flex flex-col gap-4">
              {healthItems.map((item) => (
                <div
                  key={item.number}
                  className="relative ml-7 sm:ml-8 md:ml-9 lg:ml-10 min-[2500px]:ml-14 min-[3800px]:ml-18 p-4 sm:p-5 pl-10 sm:pl-12 md:pl-13 lg:pl-15 min-[2500px]:pl-20 min-[3800px]:pl-26 rounded-xl border border-[rgba(24,25,26,0.15)] bg-white shadow-sm hover:shadow-md transition-shadow flex items-center min-h-[90px] sm:min-h-[100px] min-[2500px]:min-h-[140px] min-[3800px]:min-h-[180px]"
                >
                  {/* Number Badge - 50% Outside / 50% Inside, scaled up on big / 4K screens */}
                  <div className="absolute -left-7 sm:-left-8 md:-left-9 lg:-left-10 min-[2500px]:-left-14 min-[3800px]:-left-18 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 min-[2500px]:w-28 min-[2500px]:h-28 min-[3800px]:w-36 min-[3800px]:h-36 rounded-full bg-[#DC64A1] flex items-center justify-center text-white font-bold font-primary text-lg sm:text-xl md:text-2xl lg:text-2xl min-[2500px]:text-4xl min-[3800px]:text-5xl shrink-0 shadow-md z-10 select-none">
                    {item.number}
                  </div>
                  {/* Text */}
                  <Typography
                    variant="p"
                    color="muted"
                    className="text-xs sm:text-sm lg:text-base min-[2500px]:text-2xl min-[3800px]:text-3xl leading-relaxed text-[#4B5563]"
                  >
                    <strong className="font-bold text-[#4B5563]">{item.title}</strong> – {item.description}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
