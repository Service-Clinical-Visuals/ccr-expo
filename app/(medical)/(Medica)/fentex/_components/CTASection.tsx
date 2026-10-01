"use client";

import React from "react";
import Button from "./Button";

export default function CTASection() {
  return (
    <div className="w-full bg-white pt-16 sm:pt-24">
      <section
        className="w-full py-16 sm:py-20 flex items-center justify-center relative"
        style={{
          background: 'linear-gradient(101.69deg, #004E9F 11.38%, #001C39 132.81%)'
        }}
      >
        <div className="custom-container px-4 sm:px-6 md:px-8 relative z-10 text-center flex flex-col items-center">
          <h2
            className="text-white section-title font-semibold font-poppins leading-snug mb-6 max-w-[60%]"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Connect With Our Experts for Specialized ENT Surgical Solutions
          </h2>

          <p
            className="text-white/90 section-text font-inter font-regular leading-relaxed max-w-[60%] mb-10"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            Have questions about our instruments, endoscopy systems, or specialized surgical solutions? Connect with the FENTEXmedical team for detailed product information, technical guidance, application support, and personalized assistance tailored to your clinical requirements and professional needs.
          </p>

          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            <Button
              href="#contact"
              showArrow={false}
              className="!w-auto !bg-white !text-[#002040] hover:!bg-[#006AB3] hover:!text-white !px-6 !border-[#202020]"
            >
              <span className="font-inter font-semibold btn-text">Contact our Team</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
