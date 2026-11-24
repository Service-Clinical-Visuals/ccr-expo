/**
 * About Section (ABOUT NONIN MEDICAL)
 * Master Reference: Inogen Development Standards
 * Design: 3-column split on desktop:
 * - Left column: Tagline, Heading, Founder Story, "Learn More" button
 * - Center column: Historical archive photo (`about.webp`) with clean border radius
 * - Right column: 3 Feature highlights (Reliable Accuracy, Motion Tolerance, Advanced Monitoring) with dividing lines
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  {
    title: "Reliable Accuracy",
    description:
      "Precise oxygen saturation measurements through advanced signal processing. Designed to deliver consistent readings across diverse patient conditions.",
  },
  {
    title: "Motion Tolerance",
    description:
      "PureSAT technology helps identify true pulse signals during patient movement. Ensures reliable monitoring even in challenging clinical conditions.",
  },
  {
    title: "Advanced Monitoring",
    description:
      "Solutions for pulse, regional oxygen and respiratory monitoring. Designed to support comprehensive patient assessment across diverse healthcare settings.",
  },
];

const About = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        
        {/* 3-Column Layout: Stacks on mobile/tablet up to 1035px (min-[1036px]:flex-row) */}
        <div className="flex flex-col min-[1036px]:flex-row items-center min-[1036px]:items-stretch gap-10 xl:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24">
          
          {/* Column 1: Left Story & CTA (approx 28% width above 1035px) */}
          <div
            className="w-full min-[1036px]:w-[28%] flex flex-col justify-between space-y-6"
            data-aos="fade-right"
          >
            <div className="space-y-4">
              <span className="text-[#2A96C2] font-heading font-bold text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl uppercase tracking-wider block">
                ABOUT NONIN MEDICAL
              </span>

              <Typography
                variant="h2"
                color="dark"
                className="text-2xl sm:text-3xl lg:text-[32px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold leading-tight"
              >
                Advancing Patient Care Through Innovation
              </Typography>

              <Typography
                variant="p"
                color="muted"
                className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-[#111111]"
              >
                Nonin Medical was founded in 1986 by Phil Isaacson and a team of three engineers. Their goal was to make noninvasive healthcare measuring devices more reliable and affordable. Today, Nonin is a global leader in medical monitoring with partners and customers in more than 125 countries. Our commitment to technical innovation, design quality, and product reliability has helped us grow year after year.
              </Typography>
            </div>

            <div className="pt-2">
              <Button
                text="Learn More"
                href="#technologies"
                showIcon={true}
                className="px-6 py-2.5 min-[2500px]:px-9 min-[2500px]:py-3.5 min-[3800px]:px-14 min-[3800px]:py-5"
              />
            </div>
          </div>

          {/* Column 2: Center Image (about.webp) (approx 40% width above 1035px) */}
          <div
            className="w-full min-[1036px]:w-[40%] flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="w-full h-[360px] sm:h-[450px] min-[1036px]:h-full min-h-[380px] min-[1036px]:min-h-[500px] min-[2500px]:min-h-[700px] min-[3800px]:min-h-[1000px] rounded-lg overflow-hidden shadow-sm group">
              <img
                src="/medical/nonin/about.webp"
                alt="Nonin Founders in 1986"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Column 3: Right Feature List (approx 32% width above 1035px) */}
          <div
            className="w-full min-[1036px]:w-[32%] flex flex-col justify-center gap-6 sm:gap-7 min-[2500px]:gap-10 min-[3800px]:gap-14"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <Typography
                  variant="h3"
                  color="dark"
                  className="text-lg sm:text-xl lg:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl font-bold text-black"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="p"
                  color="muted"
                  className="text-xs sm:text-sm lg:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-[#111111]"
                >
                  {item.description}
                </Typography>

                {idx < features.length - 1 && (
                  <div className="w-full h-[1px] bg-[#293646]/20 mt-4" />
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

