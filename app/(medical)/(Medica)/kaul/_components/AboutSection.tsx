"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="custom-container">
        {/* Header Content */}
        <div className="text-center max-w-8xl mx-auto">
          {/* Subtitle / Tag */}
          <div
            className="flex items-center justify-center gap-4 mb-10 sm:mb-4"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className="w-12 h-[1px] bg-[#FDC200]"></div>
            <span className="font-poppins text-[#FDC200] section-subtitle font-semibold tracking-wide uppercase">
              Who We Are
            </span>
            <div className="w-12 h-[1px] bg-[#FDC200]"></div>
          </div>

          {/* Main Section Heading */}
          <h2
            className="section-title font-semibold text-[#71797C] font-poppins tracking-tight leading-tight mb-10 mt-5 sm:mb-6"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            Engineering Innovation. Advancing Patient Care.
          </h2>

          {/* Descriptive Paragraph */}
          <p
            className="section-text font-normal mt-5 text-[#404040] font-inter leading-relaxed max-w-7xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            From cutting-edge orthopedic solutions to precision-engineered surgical tools, KAULMED combines advanced technology, specialized expertise, and global experience to redefine patient care. Our team of skilled engineers, researchers, and medical professionals is dedicated to driving innovation in orthopedic solutions, continuously enhancing surgical efficiency, precision, and patient outcomes. With a strong commitment to FDA- and ISO-certified quality, our implants and surgical instruments are designed for precision, reliability, and optimal performance, earning the trust of healthcare professionals worldwide and helping set new standards in orthopedic and trauma surgery.
          </p>
        </div>

        {/* Large Team / Company Photo */}
        <div
          className="mt-8 sm:mt-12 md:mt-15"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="250"
        >
          <div className="relative max-w-7xl mx-auto w-full h-[300px] sm:h-[400px] md:h-[500px] h-auto rounded-[10px] sm:rounded-[10px] overflow-hidden">
            <Image
              src="/medical/kaul/about.png"
              alt="KAULMED Surgery"
              fill
              className="object-cover object-center"
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
            Know More
          </Button>
        </div>
      </div>
    </section>
  );
}
