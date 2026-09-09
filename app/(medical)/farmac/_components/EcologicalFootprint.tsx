"use client";

import React from "react";
import Button from "./Button";

export default function EcologicalFootprint() {
  return (
    <section id="ecological-footprint" className="py-14 sm:py-18 md:py-24 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-14 items-center">
          {/* Left Column: Information, Statistics & CTA */}
          <div
            className="xl:col-span-6"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-2">
              <span className="section-text font-bold text-[#24559c] tracking-normal font-inter">
                &mdash; Ecological commitment
              </span>
            </div>

            {/* Title */}
            <h2 className="section-title font-medium font-poppins text-slate-900 tracking-tight mb-4">
              The ecological footprint
            </h2>

            {/* Description */}
            <p className="section-text font-inter text-slate-600 font-normal mb-8 sm:mb-10 leading-relaxed">
              Farmac Zabban has been using renewable energy sources for 15 years. Over 35% of the company&apos;s energy needs come from photovoltaic systems. Furthermore, the energy produced by the plant supplies the average annual energy consumption of approximately 100 families and avoids the emission of 200,000 kg of carbon dioxide into the atmosphere each year.
            </p>

            {/* Two Statistics Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-14 max-w-4xl">
              {/* Stat 1: 35% Eco Energy */}
              <div className="flex flex-col items-center text-center ">
                <span className="stat-number font-extrabold font-poppins text-slate-900">
                  35%
                </span>
                <span className="card-title font-poppins font-semibold text-slate-900 tracking-wide mt-1 mb-2">
                  ECO ENERGY
                </span>
                <p className="section-text font-inter text-slate-600 font-normal mb-4 leading-relaxed">
                  In 2011, a photovoltaic system positioned on the warehouse roof became operational, providing 35% of the company&apos;s energy needs.
                </p>
              </div>

              {/* Stat 2: 100 Families */}
              <div className="flex flex-col items-center text-center ">
                <span className="stat-number font-extrabold font-poppins text-slate-900">
                  100
                </span>
                <span className="card-title font-poppins font-semibold text-slate-900 tracking-wide mt-1 mb-2">

                  FAMILIES
                </span>
                <p className="section-text font-inter text-slate-600 font-normal mb-4 leading-relaxed">
                  The energy produced by the plant provides energy for the average annual consumption of approximately 100 families.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10 flex justify-center sm:justify-start">
              <Button href="#ecological">Learn More</Button>
            </div>
          </div>

          {/* Right Column: Rings & Lightbulb Graphic */}
          <div
            className="xl:col-span-6 flex items-center justify-center xl:justify-end"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <div className="w-full max-w-md xl:max-w-none">
              <img
                src="/medical/farmac/eco.png"
                alt="Ecological footprint interlocking rings"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
