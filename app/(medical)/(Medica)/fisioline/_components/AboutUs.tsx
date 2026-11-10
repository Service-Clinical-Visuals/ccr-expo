"use client";

import React from "react";
import Typography from "./Typography";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 sm:gap-16">
        {/* Top Header Row - max-w-[90%] xl:max-w-[80%] */}
        <div
          className="flex flex-col min-[1036px]:flex-row min-[1036px]:items-start justify-between gap-6 min-[1036px]:gap-12 w-full"
          data-aos="fade-up"
        >
          <div className="w-full min-[1036px]:w-1/2 max-w-[90%] xl:max-w-[80%]">
            <Typography variant="h2" color="dark" className="!font-bold leading-tight">
              We Plan The Future And We Realize<br className="hidden md:inline" /> Innovation.
            </Typography>
          </div>
          <div className="w-full min-[1036px]:w-1/2 max-w-[90%] xl:max-w-[80%] min-[1036px]:ml-auto">
            <Typography variant="p" color="muted" className="text-gray-600 text-sm sm:text-base leading-relaxed text-left min-[1036px]:text-right">
              Fisioline® Is An Italian Manufacturer Of Electromedical And Electroasthetic Equipment Which Was Established In 1985 And Has Been Operating Internationally For Several Years. Within Fisioline®, The Research And Development Department Holds A Prominent Position.
            </Typography>
          </div>
        </div>

        {/* Content Row: Image 40%, Cards 60% (Tablet flex-col up to 1035px) */}
        <div className="flex flex-col min-[1036px]:flex-row items-stretch gap-10 xl:gap-12 w-full">
          {/* Image Left - 40% */}
          <div
            className="w-full min-[1036px]:w-[40%] relative rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-sm aspect-[4/3] min-[1036px]:aspect-auto min-h-[340px] md:min-h-[420px]"
            data-aos="fade-right"
          >
            <img
              src="/medical/fisioline/about.webp"
              alt="Fisioline Innovation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cards Right - 60% */}
          <div
            className="w-full min-[1036px]:w-[60%] flex flex-col justify-between gap-6"
            data-aos="fade-left"
          >
            {/* Card 1: Our Vision */}
            <div className="relative border border-gray-200/90 rounded-[20px] sm:rounded-[24px] min-[2500px]:rounded-[32px] min-[3800px]:rounded-[44px] p-6 sm:p-8 min-[2500px]:p-12 min-[3800px]:p-16 bg-white shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              {/* Blue accent shape in top-right corner matching Figma */}
              <div className="absolute top-0 right-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 bg-[#222D83] rounded-bl-[18px] sm:rounded-bl-[22px] min-[2500px]:rounded-bl-[32px] min-[3800px]:rounded-bl-[46px] pointer-events-none" />
              <Typography variant="h3" color="dark" className="!font-bold mb-3 pr-8 sm:pr-10">
                Our Vision
              </Typography>
              <Typography variant="p" color="muted" className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To Be A Leading Global Innovator In Electromedical And Aesthetic Technologies, Advancing Healthcare Through Reliable, High-Performance Equipment And Continuous Technological Development, Research Excellence, And Patient-Focused Solutions Worldwide.
              </Typography>
            </div>

            {/* Card 2: Our Mission */}
            <div className="relative border border-gray-200/90 rounded-[20px] sm:rounded-[24px] min-[2500px]:rounded-[32px] min-[3800px]:rounded-[44px] p-6 sm:p-8 min-[2500px]:p-12 min-[3800px]:p-16 bg-white shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              {/* Blue accent shape in top-right corner matching Figma */}
              <div className="absolute top-0 right-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 bg-[#222D83] rounded-bl-[18px] sm:rounded-bl-[22px] min-[2500px]:rounded-bl-[32px] min-[3800px]:rounded-bl-[46px] pointer-events-none" />
              <Typography variant="h3" color="dark" className="!font-bold mb-3 pr-8 sm:pr-10">
                Our Mission
              </Typography>
              <Typography variant="p" color="muted" className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To Design And Manufacture Innovative, High-Quality Electromedical Equipment By Combining Research, Engineering Expertise, And Advanced Technology While Ensuring Safety, Reliability, And Dedicated Technical Support For Healthcare Professionals Worldwide.
              </Typography>
            </div>

            {/* Bottom CTA */}
            <div className="flex items-center justify-between pt-2 gap-4">
              <Typography
                variant="h3"
                color="dark"
                className="!font-bold text-[#222D83] text-base sm:text-xl min-[2500px]:text-3xl min-[3800px]:text-5xl"
              >
                Discover Our Vision And Future Commitment
              </Typography>
              <a
                href="#about"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 min-[1920px]:w-14 min-[1920px]:h-14 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 bg-[#222D83] hover:bg-[#1A2368] text-white rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform active:scale-95 group"
                aria-label="Discover Our Vision And Future Commitment"
              >
                <img
                  src="/medical/fisioline/up_arrow.webp"
                  alt="arrow"
                  className="w-5 h-5 sm:w-[22px] sm:h-[22px] min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 object-contain group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
