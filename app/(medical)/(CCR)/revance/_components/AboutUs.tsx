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
              <Typography variant="h2" color="primary">
                A Merging Of Innovation For Over 25 Years
              </Typography>
              <div className="w-12 h-1 bg-primary hidden md:block"></div>
            </div>
            <Typography variant="p" color="dark" className="leading-relaxed ">
              From Our Start In 1999, Revance Has Embarked On A Journey Of Research And Development, Clinical Trials, Product Launches, And Portfolio-Building Acquisitions. All Pointing Toward An Inspiring Future.
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
          <img src="/revance/section2.png" alt="Revance Office" className="w-full h-auto object-cover aspect-[1680/713] " />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
