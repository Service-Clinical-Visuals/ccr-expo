"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-12">
        {/* Top Text Content & Button */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 w-full" data-aos="fade-up">
          <div className="flex flex-col gap-6 lg:max-w-[70%] xl:max-w-[75%] order-1 lg:order-none">
            <div className="flex items-center gap-4">
              <Typography variant="h2" color="dark">
                Together For A Better Future
              </Typography>
              <div className="w-10 sm:w-16 h-1.5 bg-[#0C71C3] rounded-xl"></div>
            </div>
            <div className="flex flex-col">
              <Typography variant="p" color="muted" className="leading-relaxed">
                At Surgival, We Have Been Developing And Manufacturing Surgical Implants And Instruments For Orthopedic Surgery And Traumatology For Over 30 Years.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed">
                Our Systems Are Designed, In Consultation With Specialist Surgeons, To Facilitate The Daily Work Of Traumatologists And Their Teams During Surgeries.
              </Typography>
            </div>
          </div>

          <div className="shrink-0 pt-2 order-2 lg:order-none" data-aos="fade-left" data-aos-delay="100">
            <Button text="Learn More" href="#about" variant="primary" />
          </div>
        </div>

        {/* Full width Image */}
        <div
          className="w-full relative shadow-sm overflow-hidden order-3 lg:order-none"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src="/medical/surgival/section2.png" alt="Surgival Building" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
