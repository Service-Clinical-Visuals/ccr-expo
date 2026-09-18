"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    title: "Stents",
    desc: "Reliable support for optimal urinary flow.",
    icon: "/medical/medpro/q1.png",
    color: "#728FBC4D", // Slate blue
  },
  {
    title: "Catheters",
    desc: "Safe, comfortable and efficient drainage solutions.",
    icon: "/medical/medpro/q2.png",
    color: "#C4CD4B4D", // Lime green
  },
  {
    title: "Dilators",
    desc: "Precision tools for smooth access.",
    icon: "/medical/medpro/q3.png",
    color: "#8B41994D", // Purple
  },
  {
    title: "Guide Wires",
    desc: "Enhanced control and flexibility.",
    icon: "/medical/medpro/q4.png",
    color: "#359B9B4D", // Teal
  },
  {
    title: "Stone Retriever",
    desc: "For safer and more effective stone management.",
    icon: "/medical/medpro/q5.png",
    color: "#00A1E44D", // Cyan
  },
  {
    title: "Electrodes",
    desc: "Reliable power for precise results.",
    icon: "/medical/medpro/q6.png",
    color: "#2C5DAB4D", // Dark blue
  },
  {
    title: "General Purpose",
    desc: "Versatile products for diverse urology needs.",
    icon: "/medical/medpro/q7.png",
    color: "#C54F954D", // Magenta
  },
  {
    title: "Innovation",
    desc: "Advancing urology with tomorrow's solutions.",
    icon: "/medical/medpro/q8.png",
    color: "#E4A8184D", // Orange
  }
];

export default function ProductSolutions() {
  return (
    <section id="product-solutions" className="relative w-full bg-white pb-24 pt-10 overflow-hidden">
      {/* Background Decoratives */}
      <img src="/medical/medpro/bg1.png" alt="Background decoration left" className="absolute top-0 left-0 w-auto h-auto object-contain pointer-events-none z-0" />
      <img src="/medical/medpro/bg2.png" alt="Background decoration right" className="absolute bottom-0 right-0 w-auto h-auto object-contain pointer-events-none z-0" />

      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-20">
        {/* Section Heading & Subtitle */}
        <div
          className="text-center max-w-7xl mx-auto mb-5 sm:mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h4 className="text-[#3BB3C3] section-text font-semibold font-fraunces mb-3 tracking-wide">
            The MEDpro Urology Products from Holland
          </h4>
          <h2 className="section-title font-semibold tracking-tight font-fraunces text-[#202020] mb-6">
            Quality Solutions for Better Urological Care
          </h2>
          <p className="section-text leading-relaxed font-inter text-[#404040]">
            Innovative, reliable, and patient-focused products designed to support every step of urological treatment. Our solutions combine advanced technology, dependable performance, and thoughtful design to help healthcare professionals deliver effective care while prioritizing patient comfort, safety, and well-being throughout the treatment journey.
          </p>
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {PRODUCTS.map((product, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-200/60 overflow-hidden group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-start min-h-[160px] pl-[96px] pr-5 pt-5 pb-5 sm:pb-0"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={idx * 50}
            >
              {/* Light Background Shape */}
              <div
                className="absolute top-0 left-0 w-[105px] h-[105px] rounded-br-[105px] transition-transform duration-500 group-hover:scale-105 origin-top-left"
                style={{ backgroundColor: product.color }}
              />

              {/* Dark Icon Circle */}
              <div
                className="absolute top-[20px] left-[18px] w-[52px] h-[52px] flex items-center justify-center"
              >
                <img src={product.icon} alt={product.title} className="w-auto h-auto object-contain" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-3 w-full relative z-10 pl-10">
                <h3 className="card-title font-bold font-fraunces text-[#202020] tracking-tight leading-tight">
                  {product.title}
                </h3>
                <p className="section-text font-inter text-[#7B8B9C] leading-snug">
                  {product.desc}
                </p>
              </div>

              {/* Right Arrow Button (Bottom Right) */}
              <div
                className="absolute bottom-3.5 right-3.5 w-[30px] h-[30px] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                style={{ backgroundColor: product.color.slice(0, 7) }}
              >
                <ArrowRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>

              {/* Colored Bottom Line */}
              <div
                className="absolute bottom-0 left-4 w-20 h-[4px] rounded-t-full transition-all duration-300 group-hover:w-24"
                style={{ backgroundColor: product.color.slice(0, 7) }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
