"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function ExperienceIntra() {
  return (
    <section
      id="experience"
      className="relative w-full py-16 sm:py-20 xl:py-24 overflow-hidden"
    >
      {/* Background Image with Dark Gradient Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="/medical/intra-special/bg.png"
          alt="Experience INTRA"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay from Figma: linear-gradient(0deg, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)) */}
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-10 flex flex-col items-center text-center">
        <div
          className="flex flex-col items-center gap-3.5 sm:gap-4 xl:max-w-[70%] max-w-[90%] mx-auto"
          data-aos="fade-up"
        >
          {/* Subtitle / Tag */}
          <Typography
            variant="h4"
            color="white"
            weight="semibold"
            className="tracking-[0.02em]"
          >
            Experience INTRA
          </Typography>

          {/* Description Paragraph */}
          <Typography
            variant="p"
            color="white"
            className="leading-relaxed opacity-95"
          >
            Get a closer look at INTRA’s specialized catheter solutions and understand how their features, configurations, and applications can support your clinical requirements. Connect with our team to arrange a personalized product demonstration and receive expert guidance tailored to your needs.
          </Typography>

          {/* Button: Request a Demo */}
          <div className="pt-2 sm:pt-4">
            <Button variant="outline-white" href="#contact">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
