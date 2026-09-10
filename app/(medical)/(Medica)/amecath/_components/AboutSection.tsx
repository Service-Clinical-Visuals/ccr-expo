"use client";

import React from "react";
import Image from "next/image";
import { CircleDot } from "lucide-react";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="custom-container">
        {/* Header Content */}
        <div className="text-center max-w-7xl  mx-auto">
          {/* Subtitle / Tag */}
          <div
            className="inline-flex items-center gap-2 text-[#155184] font-medium section-subtitle mb-3 sm:mb-4"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <CircleDot className="w-5 h-5 text-[#155184]" />
            <span className="font-raleway section-subtitle font-semibold tracking-wide">
              About Our Company
            </span>
          </div>

          {/* Main Section Heading in Raleway */}
          <h2
            className="section-title font-semibold text-slate-900 font-raleway tracking-tight leading-tight mb-4 sm:mb-6"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            Leading Global Manufacturer of Advanced Catheter Solutions for Modern Healthcare Needs
          </h2>

          {/* Descriptive Paragraph in Inter */}
          <p
            className="section-text text-slate-600 font-normal font-inter leading-relaxed max-w-7xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            We specialize in designing and manufacturing high-quality catheter solutions that meet global healthcare standards. With a strong focus on innovation, precision engineering, and patient safety, our products are trusted by medical professionals worldwide. Our commitment to excellence drives us to continuously improve clinical outcomes and support healthcare advancements.
          </p>
        </div>

        {/* Large Team / Company Photo */}
        <div
          className="mt-8 sm:mt-12 md:mt-14"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="250"
        >
          <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[680px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/medical/amecath/abt.png"
              alt="AMECATH Leadership and Team"
              fill
              className="object-cover object-center "
              priority
            />
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div
          className="mt-8 sm:mt-10 md:mt-12 flex justify-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="350"
        >
          <Button href="#about" variant="outline-primary">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}
