"use client";

import React from "react";
import Button from "./Button";

export default function InnovationAndTradition() {
  return (
    <section
      id="about"
      className="custom-container py-12 sm:py-16 md:py-20 xl:py-24 px-4 sm:px-6 md:px-8 xl:px-12 bg-white"
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14 items-center">
        {/* Left Column: Text Content */}
        <div
          className="xl:col-span-6 flex flex-col gap-4 order-2 xl:order-1"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div>
            <h2 className="section-title font-medium tracking-tight font-exo2 text-[#111111] leading-snug mb-1">
              TEKNO Makes The Difference
            </h2>
          </div>

          <div className="flex flex-col gap-5 text-[#111111]">
            <p className="section-text leading-relaxed font-outfit text-[#111111] font-light">
              Tekno-Medical Optik-Chirurgie GmbH is an internationally active medical technology company headquartered in Tuttlingen – the global center of the medical technology industry. The company has been successfully operating in over 130 countries for more than 50 years.
            </p>

            <p className="section-text leading-relaxed font-outfit text-[#111111] font-light">
              Since 1976, Tekno-Medical has developed into a global partner for medical instruments and solutions. Health is at the heart of everything we do. Our complete product range includes all instruments for general surgery and endoscopy, as well as a wide variety of specialized disciplines.
            </p>

            <p className="section-text leading-relaxed font-outfit text-[#111111] font-light">
              Strong sales networks, a dedicated team, and a passion for medical technology drive TEKNO-MEDICAL's success. Close partnerships and collaboration with development experts ensure intelligent functionality, exceptional quality, and continuous innovation.
            </p>

            <p className="section-text leading-relaxed font-outfit text-[#111111] font-light">
              Today, this family-run company with around 100 employees combines a comprehensive product range with personalized advice and dedicated customer service. The expertise, experience, and commitment of our team form the basis for reliable service and on-time deliveries worldwide – thus creating long-term trust and strong partnerships with customers around the globe.
            </p>
          </div>

          <div className="pt-2">
            <Button href="#company" variant="primary">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Column: Image with Corner Borders */}
        <div
          className="xl:col-span-6 w-full relative flex items-center justify-center order-1 xl:order-2"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="relative p-3 sm:p-5 w-full">
            {/* Image */}
            <div className="relative z-10 w-full overflow-hidden rounded-[4px]">
              <img
                src="/medical/tekno/about.png"
                alt="Tekno"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

