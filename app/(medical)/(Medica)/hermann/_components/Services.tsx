"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 lg:py-40 min-[2500px]:py-52 min-[3800px]:py-64 min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden"
    >
      {/* Background Image - Clean and natural */}
      <div className="absolute inset-0 z-0">
        <img
          src="/medical/hermann/bg.webp"
          alt="Hermann Production & Services Workshop"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="custom-container relative z-10">
        <div
          className="w-full max-w-[90%] xl:max-w-[80%] flex flex-col items-start space-y-4 sm:space-y-6 min-[3800px]:space-y-10"
          data-aos="fade-right"
        >
          <Typography
            variant="h2"
            color="white"
            className="capitalize !font-semibold drop-shadow-sm text-white xl:max-w-[80%]"
          >
            Our Services
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="text-white/95 leading-relaxed text-base sm:text-[17px] min-[2500px]:text-2xl min-[3800px]:text-3xl font-medium w-full xl:max-w-[80%]"
          >
            We deliberately do not use any external services for our production, which stands for high-quality, complex and variable work. We will be glad to fulfill your individual wishes in the fields of galvanization, gold plating, polishing, laser welding and laser engraving.
          </Typography>

          <div className="pt-2 sm:pt-4">
            <Button
              text="Explore Our Services"
              variant="secondary"
              href="#services"
              showIcon={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
