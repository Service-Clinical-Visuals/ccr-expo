"use client";

import React from "react";
import Typography from "../Typography";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamData: TeamMember[] = [
  {
    name: "William Zinnanti MD PhD",
    role: "CEO & President",
    bio: "Dr. Zinnanti graduated from UCLA with a degree in molecular, cell, and developmental biology. He then completed both Medicine and Neuroscience Doctorates at Pennsylvania State College of Medicine, physician scientist training program for both MD & PhD degrees.",
    image: "/medical/zinnanti-surgical-3/about/teams1.webp",
  },
  {
    name: "Stacey Boscoe Zinnanti",
    role: "COO & Creative Director",
    bio: "Stacey Boscoe Zinnanti is an award winning Art Director and Graphic Designer with extensive experience in branding and creative strategy. Stacey has over 18 years of combined design agency and corporate in-house experience.",
    image: "/medical/zinnanti-surgical-3/about/teams2.webp",
  },
  {
    name: "Colleen Levine",
    role: "General Manager",
    bio: "Colleen Levine began as Zinnanti Surgical Design Group's sole production staff and has grown the company to become the General Manager. As a medical assistant for Zinnanti Institute of Neuroscience.",
    image: "/medical/zinnanti-surgical-3/about/teams3.webp",
  },
];

/**
 * OurTeam Section (teams1, teams2, teams3) - Zinnanti Surgical About Page
 * Master Reference: Inogen Development Standards
 * - 3 Member Cards in a single row on desktop (>=1036px)
 * - Odd 3rd card centered on 2-column tablet layout
 */
const OurTeam = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-12 sm:gap-16">

        {/* Section Header: Centered */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-7 sm:w-8 h-1 bg-[#38315E] rounded-full inline-block shrink-0" />
            <span className="heading-blue text-[#4F6744]">
              Our Teams
            </span>
          </div>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-[#333333] leading-snug"
          >
            Zinnanti Surgical&apos;s experts focus on improving medical procedures
          </Typography>
        </div>

        {/* 3 Team Member Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1036px]:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {teamData.map((member, idx) => (
            <div
              key={member.name}
              className={`w-full bg-white rounded-[20px] min-[3800px]:rounded-[36px] p-5 sm:p-6 border border-gray-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${idx === 2
                ? "md:col-span-2 md:w-full md:max-w-[calc(50%-1rem)] md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 min-[1036px]:col-span-1 min-[1036px]:max-w-none min-[1036px]:mx-0"
                : ""
                }`}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div>
                {/* Photo */}
                <div className="w-full aspect-[4/3.2] rounded-[16px] min-[3800px]:rounded-[28px] overflow-hidden bg-black mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Name & Role Row */}
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-gray-100 pb-3 mb-3">
                  <h3 className="text-base sm:text-lg min-[2500px]:text-xl font-bold text-[#4F6744]">
                    {member.name}
                  </h3>
                  <span className="text-xs sm:text-sm font-semibold text-[#555555]">
                    {member.role}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm min-[2500px]:text-base text-[#555555] leading-relaxed text-justify">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;

