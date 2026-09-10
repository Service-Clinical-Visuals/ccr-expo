"use client";

import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

const Quality = () => {
  return (
    <section id="quality" className="w-full py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-16">

        {/* Left Column: Text Content */}
        <div className="w-full lg:w-[48%] xl:w-[46%] flex flex-col gap-5 sm:gap-6" data-aos="fade-up">

          {/* Section Heading */}
          <div>
            <Typography
              variant="h2"
              color="dark"
              className="font-semibold text-3xl sm:text-4xl text-[#121C22] tracking-tight font-outfit"
            >
              Quality
            </Typography>
          </div>

          {/* Lead Paragraph (Navy) */}
          <Typography
            variant="p"
            color="none"
            className="font-semibold text-sm sm:text-[14.5px] lg:text-[15px] leading-relaxed text-[#1B3B6F] font-outfit"
          >
            The Numantec Group considers quality a fundamental pillar; each device is created through standardized and structured design and development processes aimed at ensuring functional safety and product reliability.
          </Typography>

          {/* Body Paragraph (Muted) */}
          <Typography
            variant="p"
            color="none"
            className="text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed text-[#555962] font-outfit"
          >
            The entire production chain is overseen through rigorous in-process and final controls, supported by adherence to internal procedures and technical regulations that guarantee compliance with the standards required for medical devices. All devices undergo periodic verification and monitoring activities that ensure performance stability and compliance with current regulatory requirements.
          </Typography>

          {/* Checkmark Bullets */}
          <div className="flex flex-col gap-3.5 my-1">
            {/* Bullet 1 */}
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#182C4A] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </div>
              <Typography
                variant="p"
                color="none"
                className="text-xs sm:text-[13.5px] lg:text-[14px] leading-snug text-[#555962] font-outfit"
              >
                <span className="font-semibold text-[#121C22]">Certified Quality Management</span> – Each company maintains its own certified quality management system.
              </Typography>
            </div>

            {/* Bullet 2 */}
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#182C4A] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                <Check className="w-3 h-3 text-white stroke-[3]" />
              </div>
              <Typography
                variant="p"
                color="none"
                className="text-xs sm:text-[13.5px] lg:text-[14px] leading-snug text-[#555962] font-outfit"
              >
                <span className="font-semibold text-[#121C22]">Documented Procedures</span> – Structured processes ensure consistent and measurable quality standards.
              </Typography>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Button text="Learn More" href="#quality-details" variant="primary" />
          </div>

        </div>

        {/* Right Column: Signature Asymmetric Image Container */}
        <div
          className="w-full lg:w-[52%] xl:w-[54%] overflow-hidden rounded-tl-[3.5rem] lg:rounded-tl-[4.5rem] xl:rounded-tl-[5rem] rounded-br-[3.5rem] lg:rounded-br-[4.5rem] xl:rounded-br-[5rem] rounded-tr-none rounded-bl-none shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative w-full aspect-[16/11] md:aspect-[16/10.5] bg-gray-100">
            <img
              src="/medical/delta-med/quality.png"
              alt="Quality Assurance Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Quality;
