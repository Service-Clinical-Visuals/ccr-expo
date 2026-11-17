"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full bg-[var(--color-quote-bg)] pt-16 xl:pt-24 min-[2500px]:pt-36 min-[3800px]:pt-48 overflow-hidden"
    >
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center">
          {/* Left: Image */}
          <div
            className="w-full lg:w-[52%] relative z-0 rounded-2xl min-[2500px]:rounded-3xl overflow-hidden shadow-md"
            data-aos="fade-right"
          >
            <img
              src="/medical/zinnanti-surgical-2/about.webp"
              alt="Zinnanti Surgical engineer refining a surgical instrument"
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-[5/4]"
            />
          </div>

          {/* Right: Overlapping Blue Card */}
          <div
            className="w-full lg:w-[52%] lg:-ml-[4%] -mt-10 lg:mt-0 relative z-10 bg-[var(--color-navy)] text-white rounded-2xl lg:rounded-[2rem] min-[2500px]:rounded-[3rem] shadow-xl p-6 sm:p-8 xl:p-12 min-[2500px]:p-16 min-[3800px]:p-24 flex flex-col items-start gap-4 sm:gap-5 min-[2500px]:gap-8 lg:self-stretch lg:justify-center lg:-my-6"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <Eyebrow text="Our Heritage & Mission" tone="light" />

            <Typography variant="h2" color="white" className="leading-tight">
              Advancing Surgical Innovation Across Multiple Medical Specialties
            </Typography>

            <Typography variant="p" color="white" className="text-white/90 leading-relaxed font-normal">
              We are proud to serve a diverse range of medical specialties including
              High-Res Anoscopy (HRA), Dermatology, Gynecology, Otolaryngology, and
              Plastic Surgery. Our comprehensive offerings provide enhancements rather
              than hindrances to achieve compliance with evolving regulations. No other
              smoke evacuation system provides the ability to suction smoke, blood, and
              fluid directly through the active electrode. Our enhanced devices have
              been adopted at most top academic centers. Partnering with these centers
              of excellence, we continue to expand our impact, supporting healthcare
              providers with tools that make a real difference in patient care. At
              Zinnanti Surgical Design Group, we are dedicated to advancing the field
              of surgery through innovation, quality, and a dedicated focus on
              improving healthcare outcomes.
            </Typography>

            <div className="pt-2 sm:pt-3">
              <Button text="Request Samples" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
