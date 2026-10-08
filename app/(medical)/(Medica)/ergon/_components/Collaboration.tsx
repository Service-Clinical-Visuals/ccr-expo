"use client";

import React from "react";
import Typography from "./Typography";

const Collaboration = () => {
  return (
    <section id="collaboration" className="w-full py-12 sm:py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8 sm:gap-12">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center gap-3 sm:gap-4 w-full xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="dark"
            className="capitalize !font-semibold text-2xl sm:text-3xl md:text-[28px] min-[2500px]:text-[42px] min-[3800px]:text-[64px]"
          >
            Improving Lives Through Collaboration.
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-sm sm:text-base min-[2500px]:text-lg min-[3800px]:text-2xl text-[#4A4A4A]"
          >
            Ergon Sutramed is constantly dedicated to creating cutting-edge products and solutions to improve the lives of patients. We collaborate with all professionals and figures in the healthcare sector to offer innovative solutions, responding to the different needs to promote the well-being of patients.
          </Typography>
        </div>

        {/* Collaboration Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full mt-2">
          {/* Card 1: Facility Lab */}
          <div
            className="relative rounded-[20px] md:rounded-[25px] min-[3800px]:rounded-[40px] overflow-hidden shadow-[0px_4px_16px_rgba(0,0,0,0.15)] group bg-gray-100"
            data-aos="fade-right"
          >
            <img
              src="/medical/ergon/c1.webp"
              alt="Ergon Sutramed Production and Laboratory"
              className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Card 2: Healthcare Innovation */}
          <div
            className="relative rounded-[20px] md:rounded-[25px] min-[3800px]:rounded-[40px] overflow-hidden shadow-[0px_4px_16px_rgba(0,0,0,0.15)] group bg-gray-100"
            data-aos="fade-left"
          >
            <img
              src="/medical/ergon/c2.webp"
              alt="Medical and Surgical Innovation"
              className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
