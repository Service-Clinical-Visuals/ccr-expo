"use client";

import React from "react";
import Link from "next/link";

export default function MedicaExhibition() {
  return (
    <section id="objective" className="w-full py-20 md:py-28 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center text-center max-w-[900px] min-[1920px]:max-w-[65%]">

        {/* Title */}
        <div className="flex flex-col items-center text-center" data-aos="fade-up">
          <h2 className="text-[#333333] font-[Manrope] text-[24px] md:text-[32px] font-bold mb-2">
            Our sole objective is to be a leader in this expanding sector.
          </h2>
          <div className="w-[180px] h-[2px] bg-[#BA0A28] rounded-sm mb-4" />
        </div>

        {/* Description */}
        <p className="text-[#404040] font-[Inter] text-[15px] md:text-[17px] leading-relaxed mt-2 mb-8 max-w-6xl min-[1920px]:max-w-[80%]" data-aos="fade-up" data-aos-delay="100">
          "Our goal is to provide exemplary healthcare services by maintaining the highest level of patient satisfaction, continuously adding new
          values to our approach to reach a wider audience, and offering high-quality products and services to everyone."
        </p>

        {/* Button */}
        <Link
          href="#contact"
          data-aos="fade-up" data-aos-delay="200"
          className="bg-[#BA0A28] text-white px-8 py-3 rounded-[4px] font-[Inter] font-bold text-[16px] md:text-[18px] hover:bg-[#900820] transition-colors shadow-sm"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
