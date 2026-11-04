"use client";

import React from "react";
import Typography from "./Typography";

const Overview = () => {
  return (
    <section id="about" className="w-full py-12 sm:py-16 lg:py-20 min-[3800px]:py-28 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8 mb-8 sm:mb-12 xl:max-w-[70%] w-full mx-auto">
          {/* Section Heading */}
          <div data-aos="fade-up">
            <h2 className="capitalize font-semibold text-inherit">
              <span className="text-[var(--color-primary)] text-[length:inherit]">TUR GmbH</span>{" "}
              <span className="text-[#2A2A2A] text-[length:inherit]">Overview</span>
            </h2>
          </div>

          {/* Section Description */}
          <div
            className="w-full mx-auto px-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Typography
              variant="p"
              color="muted"
              className="leading-relaxed sm:leading-[1.6] text-center"
            >
              The founding of TUR marks an important milestone in our ongoing commitment to providing
              comprehensive customer support and reliable medical solutions. Guided by our corporate
              philosophy, we focus on developing and delivering modern, patient-oriented equipment
              that meets the evolving needs of healthcare professionals and medical institutions. Our
              goal is to provide complete support at every stage, from product selection and
              implementation to ongoing service and assistance.
            </Typography>
          </div>
        </div>

        {/* Overview Image */}
        <div
          className="w-full rounded-2xl lg:rounded-[30px] overflow-hidden shadow-sm"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <img
            src="/medical/tum-gmbh/about.webp"
            alt="TUR GmbH Overview"
            className="w-full h-auto max-h-[565px] min-[2500px]:max-h-[850px] min-[3800px]:max-h-[1250px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;

