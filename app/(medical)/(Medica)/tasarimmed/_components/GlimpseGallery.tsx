"use client";

import React from "react";
import Link from "next/link";

export default function GlimpseGallery() {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32 md:py-40 overflow-hidden border-b border-gray-100">
      {/* Top Left Decorative Circle */}
      <div
        className="absolute -top-32 -left-32 md:-top-40 md:-left-25 w-64 h-64 md:w-[350px] md:h-[350px] rounded-full bg-[#C382B445] pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Bottom Right Decorative Circle */}
      <div
        className="absolute -bottom-32 -right-25 md:-bottom-35 md:-right-25 w-64 h-64 md:w-[350px] md:h-[350px] rounded-full bg-[#C382B445] pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="custom-container relative z-10 px-4 sm:px-8 md:px-12 lg:px-24">
        <div
          className="flex flex-col items-center justify-center max-w-[95%] lg:max-w-[85%] 2xl:max-w-[75%] mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Quote / Description */}
          <p className="font-inter section-text text-[#4B5563] leading-relaxed font-regular mb-10">
            "<strong className="font-bold text-[#0B1126]">TASARIMMED</strong> is a leading designer, manufacturer, and supplier of medical devices in Turkey. Tasarimmed offers a high-quality portfolio of orthopaedic and neurosurgical products and services covering extremity reconstruction, trauma, spine, and cranio-maxillofacial surgery. With a strong commitment to quality, innovation, and reliability, TASARIMMED develops advanced medical solutions to meet the evolving needs of healthcare professionals worldwide."
          </p>

          {/* Call to Action Button */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-center text-white px-10 py-3.5 rounded-[8px] font-inter text-sm font-semibold transition-transform hover:scale-105 shadow-md"
            style={{ background: "linear-gradient(180deg, #0B1126 0%, #293F8C 100%)" }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
