"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Quality = () => {
  return (
    <section id="quality" className="w-full py-16 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-20">

        {/* Top Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 w-full" data-aos="fade-up">
          <div className="flex flex-col gap-4 xl:max-w-[70%]">
            <Typography variant="h2" color="dark">
              Quality And Regulatory
            </Typography>
            <Typography variant="p" color="dark" className="leading-relaxed">
              At PRINCE MEDICAL, Quality, Safety, And Regulatory Compliance Guide Our Operations. With International Registration Expertise And NF EN ISO 13485 Certification, We Manufacture Products In Controlled Environments To Meet Rigorous Standards.
            </Typography>
          </div>
          <div className="shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button text="Discover Our Quality" href="#quality-details" variant="primary" />
          </div>
        </div>

        <div className="w-full h-px bg-gray-200"></div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Card 1 */}
          <div
            className="w-full relative overflow-hidden shadow-md group cursor-pointer"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src="/medical/prince-medical/quality1.jpg"
              alt="Prince Medical Quality Process 1"
              className="w-full h-full object-cover aspect-[820/489] transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 xl:p-10"
              style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(155, 213, 225, 0.89) 71.15%)' }}
            >
              <Typography variant="h4" color="dark" className="font-semibold mb-3">
                Product Registration
              </Typography>
              <Typography variant="p" color="dark" className="leading-relaxed text-sm xl:text-base">
                PRINCE MEDICAL'S Regulatory Expertise Allows It To Fully Comply With Current Standards And Anticipate Their Evolution. PRINCE MEDICAL Has Extensive Experience In Product Registration In Numerous International Markets.
              </Typography>
            </div>
          </div>
          
          {/* Card 2 */}
          <div
            className="w-full relative overflow-hidden shadow-md group cursor-pointer"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <img
              src="/medical/prince-medical/quality2.jpg"
              alt="Prince Medical Quality Process 2"
              className="w-full h-full object-cover aspect-[820/489] transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 xl:p-10"
              style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(155, 213, 225, 0.89) 71.15%)' }}
            >
              <Typography variant="h4" color="dark" className="font-semibold mb-3">
                Hygiene And Safety
              </Typography>
              <Typography variant="p" color="dark" className="leading-relaxed text-sm xl:text-base">
                Certified NF EN ISO 13485, PRINCE MEDICAL Manufactures And Packages Under Controlled Environment And Has Over A Total Of 3000 M² Numerous Grey And White Rooms Classified ISO7 And ISO8, Guaranteeing High Safety Of Our Products.
              </Typography>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Quality;
