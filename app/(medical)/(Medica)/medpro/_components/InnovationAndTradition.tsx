"use client";

import React from "react";
import Button from "./Button";

export default function InnovationAndTradition() {
  return (
    <section
      id="about"
      className="custom-container py-12 sm:py-16 md:py-20 xl:py-28 px-4 sm:px-6 md:px-8 xl:px-12 bg-white"
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center">
        {/* Left Column: Overlapping Images */}
        <div
          className="xl:col-span-5 w-full relative min-h-[400px] sm:min-h-[500px]"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          {/* Back Image */}
          <div className="absolute top-0 left-0 shadow-[#3BB3C3]/100 bg-transparent overflow-hidden transform -rotate-3 z-10 transition-transform hover:rotate-0 hover:z-30 duration-300">
            <img
              src="/medical/medpro/about1.png" // Placeholder or composite source
              alt="Medpro Office"
              className="w-auto h-auto object-cover"
            />
          </div>
          {/* Front Image */}
          <div className="absolute top-[50%] right-0 overflow-hidden transform rotate-3 z-20 transition-transform hover:rotate-0 duration-300">
            <img
              src="/medical/medpro/about.png" // Placeholder or composite source
              alt="Medpro Facility"
              className="w-auto h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div
          className="xl:col-span-7 flex flex-col gap-6"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div>
            <h4 className="text-[#3BB3C3] section-text font-semibold font-fraunces mb-2 tracking-wide">
              About Med Pro
            </h4>
            <h2 className="section-title font-semibold tracking-tight font-fraunces text-slate-900 leading-snug">
              Trusted Urology Expertise Built on Experience and Innovation
            </h2>
          </div>

          <div className="flex flex-col gap-5 text-[#404040]">
            <p className="section-text leading-relaxed font-inter text-[#404040]">
              MEDpro Medical has been manufacturing high-quality disposable urology products since 2010, with its facilities based in Veenendaal, the Netherlands. The company's founding team brings more than 40 years of combined medical-industry experience, with a particular focus on urology.
            </p>

            <p className="section-text leading-relaxed font-inter text-[#404040]">
              With strong connections to medical specialists and leading academic hospitals in the Netherlands, MEDpro combines clinical knowledge with advanced manufacturing techniques to develop practical solutions for urological procedures. Its product development and manufacturing are supported by an independent medical advisory board, helping ensure that innovation remains closely connected to clinical needs.
            </p>

            <p className="section-text leading-relaxed font-inter text-[#404040]">
              The company focuses on delivering high-quality urological disposables at competitive prices, while serving customers and healthcare markets internationally. Its approach combines experienced people, efficient manufacturing processes, product development expertise, and close collaboration with medical professionals and suppliers.
            </p>
          </div>

          <div className="pt-2">
            <Button href="#company" variant="outline" className="!w-auto">
              Learn More About Our Company
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
