"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const WhyTecme = () => {
  const stats = [
    {
      number: "60+",
      line1: "Years of",
      line2: "experience",
    },
    {
      number: "100+",
      line1: "Countries",
      line2: "served",
    },
    {
      number: "100+",
      line1: "Official",
      line2: "distributors",
    },
  ];

  return (
    <section id="why-tecme" className="w-full py-16 min-[1300px]:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 min-[1300px]:grid-cols-12 gap-10 min-[1300px]:gap-14 min-[2500px]:gap-20 min-[3800px]:gap-28 items-center w-full">
          {/* Left Column: Why Tecme Content & Stats */}
          <div className="min-[1300px]:col-span-6 flex flex-col gap-6 min-[2500px]:gap-8 min-[3800px]:gap-12" data-aos="fade-right">
            {/* Header */}
            <div className="flex items-center gap-3">
              <Typography variant="h2" color="dark" className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl">
                Why TECME
              </Typography>
              <div className="w-8 sm:w-10 min-[2500px]:w-14 min-[3800px]:w-20 h-1 sm:h-1.5 min-[2500px]:h-2.5 min-[3800px]:h-4 gradient-accent rounded-full shrink-0" />
            </div>

            {/* Paragraphs */}
            <Typography variant="p" color="muted" className="leading-relaxed text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl">
              For more than 60 years, TECME has developed mechanical ventilators that meet the real
              needs of intensive care units worldwide. We design and manufacture reliable,
              high-quality equipment that complies with the highest international standards: FDA,
              CE-MDR, ANVISA, among others.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl">
              Our commitment goes beyond manufacturing: we support healthcare professionals with
              specialized technical service, ongoing training and a distribution network that ensures
              an immediate, reliable and effective response.
            </Typography>

            {/* Stats Cards Box (Horizontal layout: first number | next text) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 my-2">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl px-4 py-4 sm:px-4 sm:py-5 min-[2500px]:px-8 min-[2500px]:py-8 min-[3800px]:px-12 min-[3800px]:py-12 border border-gray-100 shadow-[0_3px_8px_rgba(0,0,0,0.10)] flex items-center justify-center gap-3 sm:gap-3.5 lg:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8"
                >
                  {/* First: Big Heading Size Number */}
                  <span className="stat-number font-bold text-3xl sm:text-4xl lg:text-5xl min-[2500px]:text-6xl min-[3800px]:text-8xl gradient-text tracking-tight shrink-0">
                    {stat.number}
                  </span>

                  {/* Next: Text - Exactly matches normal paragraph text size */}
                  <div className="flex flex-col text-left leading-tight justify-center">
                    <p className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-[#4A4A4A] font-normal leading-snug whitespace-nowrap">
                      {stat.line1}
                    </p>
                    <p className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-[#4A4A4A] font-normal leading-snug whitespace-nowrap">
                      {stat.line2}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Typography variant="p" color="muted" className="leading-relaxed text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl font-normal">
              TECME combines decades of engineering expertise with continuous innovation to develop
              advanced ventilation solutions for critical care environments
            </Typography>

            {/* Button */}
            <div className="pt-2 min-[2500px]:pt-4 min-[3800px]:pt-6">
              <Button
                text="Explore Our Solutions"
                href="#products"
                variant="gradient"
                iconType="arrow-up-right"
              />
            </div>
          </div>

          {/* Right Column: Facility Image */}
          <div
            className="min-[1300px]:col-span-6 self-stretch relative rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-xl border border-gray-100 min-h-[380px] sm:min-h-[460px] min-[1300px]:min-h-full min-[2500px]:min-h-[680px] min-[3800px]:min-h-[900px] w-full"
            data-aos="fade-left"
          >
            <img
              src="/medical/tecme/why.webp"
              alt="TECME Facility"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTecme;
