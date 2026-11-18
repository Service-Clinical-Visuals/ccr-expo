"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full bg-[var(--color-quote-bg)] py-12 xl:py-16 min-[2500px]:py-24 min-[3800px]:py-32 overflow-hidden"
    >
      <div className="custom-container">
        {/* Image + card sit flush side by side; the card extends above and below the image */}
        <div className="flex flex-col xl:flex-row xl:items-stretch">
          {/* Left: Image (only top-left corner rounded) */}
          <div
            className="relative w-full xl:w-[51%] aspect-[4/3] xl:aspect-auto xl:my-8 min-[2500px]:my-12 min-[3800px]:my-16 overflow-hidden rounded-tl-[2.5rem] min-[2500px]:rounded-tl-[4rem] min-[3800px]:rounded-tl-[5rem]"
            data-aos="fade-right"
          >
            <img
              src="/medical/zinnanti-surgical-2/about.webp"
              alt="Zinnanti Surgical engineer refining a surgical instrument"
              className="absolute inset-0 w-full h-full object-cover object-left"
            />
          </div>

          {/* Right: Blue Card (top-left + bottom-right rounded) */}
          <div
            className="w-full xl:w-[49%] bg-[var(--color-navy)] text-white rounded-br-[2.5rem] xl:rounded-tl-[3.5rem] xl:rounded-br-[3.5rem] min-[2500px]:rounded-tl-[5rem] min-[2500px]:rounded-br-[5rem] min-[3800px]:rounded-tl-[7rem] min-[3800px]:rounded-br-[7rem] px-6 py-10 sm:px-10 sm:py-12 xl:px-14 xl:py-24 min-[2500px]:px-24 min-[2500px]:py-36 min-[3800px]:px-32 min-[3800px]:py-48 flex flex-col items-start justify-center"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <Eyebrow text="Our Heritage & Mission" tone="light" />

            <Typography
              variant="h2"
              color="white"
              className="leading-snug mt-4 sm:mt-5 min-[2500px]:mt-8"
            >
              Advancing Surgical Innovation Across Multiple Medical Specialties
            </Typography>

            <Typography
              variant="p"
              color="white"
              className="text-white/95 leading-[1.9] font-normal mt-5 sm:mt-6 min-[2500px]:mt-10"
            >
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

            <div className="mt-8 sm:mt-10 min-[2500px]:mt-14">
              <Button text="Request Samples" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
