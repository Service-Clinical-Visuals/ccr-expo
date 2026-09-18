"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function ServiceBanner() {
  return (
    <section
      id="services"
      className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[677px] min-[2500px]:min-h-[920px] min-[3800px]:min-h-[1250px] py-14 sm:py-16 lg:py-0 overflow-hidden flex items-center bg-gray-900"
    >
      {/* Background Image: Woman on phone in office (bg.png) */}
      <img
        src="/medical/rz-medizintechnik/bg.png"
        alt="RZ Medizintechnik customer service"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Subtle overlay for consistent text contrast */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* Content Container */}
      <div className="custom-container relative z-10 w-full flex items-center justify-center xl:justify-start">
        {/* Glassmorphism Card: Centered on mobile & tablets, left-aligned on desktop */}
        <div
          className="w-full max-w-[650px] lg:max-w-[703px] min-[2500px]:max-w-[1050px] min-[3800px]:max-w-[1550px] rounded-[16px] min-[2500px]:rounded-[26px] min-[3800px]:rounded-[36px] bg-white/50 backdrop-blur-md border border-white/60 p-7 sm:p-9 lg:p-11 min-[2500px]:p-16 min-[3800px]:p-20 shadow-2xl flex flex-col items-start space-y-4 sm:space-y-5 min-[2500px]:space-y-8 min-[3800px]:space-y-11 mx-auto xl:mx-0"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {/* Title */}
          <Typography
            variant="h2"
            color="dark"
            className="font-semibold leading-tight tracking-tight"
          >
            Because we know the answer
          </Typography>

          {/* Service Description Paragraph */}
          <Typography
            variant="p"
            color="secondary"
            className="leading-relaxed"
          >
            The operation, use, and maintenance of medical devices are subject to
            strict legal regulations and require a high degree of reliability
            and experience. At RZ Medizintechnik, we combine our technical
            expertise with a passion for supporting you. That&apos;s why our
            service team is your competent partner when it comes to important
            purchasing decisions, such as the trouble-free delivery of spare
            parts and accessories, rapid problem diagnosis, and technical
            training.
          </Typography>

          {/* Action CTA Button */}
          <div className="pt-2 min-[2500px]:pt-4 min-[3800px]:pt-6">
            <Button variant="primary" href="#contact">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
