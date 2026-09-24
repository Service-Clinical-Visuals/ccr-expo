"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full pt-24 pb-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12">
        {/* Top Text Content & Button */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 w-full" data-aos="fade-up">
          <div className="flex flex-col gap-4 xl:max-w-[60%]">
            <div className="flex items-center gap-4">
              <Typography variant="h2" color="dark">
                30 years of expertise
              </Typography>

            </div>
            <Typography variant="p" color="dark" className="leading-relaxed ">
              PRINCE MEDICAL, certified NF EN ISO 13485 , designs and manufactures single-use medical devices for gastroenterology, gynecology, and assisted reproductive technology .
            </Typography>
          </div>
          <div className="shrink-0 pt-2" data-aos="fade-left" data-aos-delay="100">
            <Button text="Learn More" href="#about" variant="primary" />
          </div>
        </div>

        {/* Full width Image */}
        <div
          className="w-full relative shadow-lg overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src="/medical/prince-medical/section2.png" alt="Prince Medical Office" className="w-full h-auto object-cover aspect-[1680/713] " />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
