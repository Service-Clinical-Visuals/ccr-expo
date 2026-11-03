"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14 min-[2500px]:gap-20 min-[3800px]:gap-28">
        {/* Section Header (Deleo xl:max-w-[80%] pattern) */}
        <div
          className="flex flex-col items-center text-center gap-4 w-full xl:max-w-[80%] mx-auto"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-3">
            <Typography variant="h2" color="dark" className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl">
              Driving Innovation In Respiratory Care Technology
            </Typography>
            <div className="w-8 sm:w-10 min-[2500px]:w-14 min-[3800px]:w-20 h-1 sm:h-1.5 min-[2500px]:h-2.5 min-[3800px]:h-4 gradient-accent rounded-full shrink-0" />
          </div>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-sm sm:text-base lg:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl w-full xl:max-w-[80%] mx-auto"
          >
            Since 1966, TECME has combined experience, innovation and clinical knowledge to develop
            reliable mechanical ventilation solutions, used by healthcare professionals and
            institutions in more than 100 countries.
          </Typography>
        </div>

        {/* Figma Overlapping 1680x640 Layout */}
        <div className="relative w-full flex flex-col xl:flex-row items-center justify-start">
          {/* Left: 963px wide Photo (58%) */}
          <div
            className="w-full xl:w-[58%] h-[380px] sm:h-[480px] xl:h-[640px] min-[1920px]:h-[780px] min-[2500px]:h-[1150px] min-[3800px]:h-[1600px] rounded-[20px] overflow-hidden shadow-xl border border-gray-100 shrink-0 z-10"
            data-aos="fade-right"
          >
            <img
              src="/medical/tecme/about.webp"
              alt="TECME Team and Facility"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: 820px wide Overlapping White Card (49% overlapping by ~7%) */}
          <div
            className="w-full xl:w-[49%] xl:-ml-[7%] z-20 bg-white rounded-[20px] border border-[#84bb65]/35 shadow-[0_8px_30px_rgb(0,0,0,0.16)] p-6 sm:p-8 lg:p-11 min-[2500px]:p-16 min-[3800px]:p-24 flex flex-col justify-between gap-6 sm:gap-7 min-[2500px]:gap-10 min-[3800px]:gap-14 mt-[-40px] xl:mt-0"
            data-aos="fade-left"
          >
            {/* Our Vision */}
            <div className="flex flex-col gap-3 min-[2500px]:gap-5">
              <div className="flex items-center gap-3">
                <Typography variant="h3" color="dark" className="text-xl sm:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl !font-semibold">
                  Our Vision
                </Typography>
                <div className="w-8 min-[2500px]:w-12 min-[3800px]:w-16 h-1 min-[2500px]:h-2 min-[3800px]:h-3 bg-[#005EAC] rounded-full" />
              </div>
              <Typography variant="p" color="muted" className="leading-relaxed text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl">
                To be a global leader in respiratory care technology, advancing innovative mechanical
                ventilation solutions that improve patient outcomes, enhance clinical efficiency, and
                support healthcare professionals worldwide with confidence and excellence.
              </Typography>
            </div>

            {/* Divider Line */}
            <div className="w-full h-px bg-gray-200" />

            {/* Our Mission */}
            <div className="flex flex-col gap-3 min-[2500px]:gap-5">
              <div className="flex items-center gap-3">
                <Typography variant="h3" color="dark" className="text-xl sm:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl !font-semibold">
                  Our Mission
                </Typography>
                <div className="w-8 min-[2500px]:w-12 min-[3800px]:w-16 h-1 min-[2500px]:h-2 min-[3800px]:h-3 bg-[#005EAC] rounded-full" />
              </div>
              <Typography variant="p" color="muted" className="leading-relaxed text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl">
                To develop reliable, innovative, and high-quality respiratory care solutions through
                clinical expertise, continuous technological advancement, and a commitment to
                improving patient care, supporting medical teams, and saving lives every day.
              </Typography>
            </div>

            {/* Figma Button */}
            <div className="pt-2 min-[2500px]:pt-4 min-[3800px]:pt-6">
              <Button
                text="Learn More About Us"
                href="#contact"
                variant="gradient"
                iconType="arrow-up-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
