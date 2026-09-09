"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 xl:gap-14">

        {/* Top Content: Heading and Intro */}
        <div className="flex flex-col gap-6 w-full items-center text-center max-w-[90%] xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="secondary">
            Global Leaders in Trauma Implant Innovation
          </Typography>

          <Typography variant="p" color="muted" className="leading-relaxed">
            TRUEMED company has founded in 2012 aiming at innovating and developing, producing, promoting trauma implants on the global platform. TRUEMED is dedicated to be one of the world's largest manufacturers of trauma implants of osteosynthesis. We are a modern, efficient, organisation focused on and committed to the care and safety of the patients upon whom our products are used.
          </Typography>
        </div>

        {/* Images Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8" data-aos="fade-up" data-aos-delay="100">
          <div className="overflow-hidden shadow-sm rounded-2xl w-full">
            <img src="/truemed/s1.png" alt="TRUEMED Team and Facility" className="w-full h-full object-cover aspect-[792/500]" />
          </div>
          <div className="overflow-hidden shadow-sm rounded-2xl w-full">
            <img src="/truemed/s2.png" alt="TRUEMED Office" className="w-full h-full object-cover aspect-[792/500]" />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-4" data-aos="fade-up" data-aos-delay="200">
          <div className="md:max-w-[70%] text-center md:text-left">
            <Typography variant="p" color="muted" className="leading-relaxed">
              TRUEMED develops innovative, high-quality, and cost-effective trauma implants that prioritize patient safety, enhance recovery outcomes, improve quality of life, and meet the evolving needs of the global healthcare industry.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button text="Learn More" variant="secondary" href="#about" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
