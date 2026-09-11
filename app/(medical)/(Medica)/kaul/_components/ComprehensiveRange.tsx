"use client";

import React from "react";
import Image from "next/image";

const ITEMS = [
  {
    id: 1,
    title: "Advanced Orthopedic Implants",
    desc: "Precision-engineered solutions for trauma, spine, and joint reconstruction surgeries.",
    icon: "/medical/kaul/ki1.png",
    img: "/medical/kaul/key1.png",
  },
  {
    id: 2,
    title: "Surgical Power Tools",
    desc: "High-performance oscillating saws and drills for enhanced surgical accuracy.",
    icon: "/medical/kaul/ki2.png",
    img: "/medical/kaul/key2.png",
  },
  {
    id: 3,
    title: "Minimally Invasive Arthroscopy Solutions",
    desc: "State-of-the-art arthroscopy instruments designed for optimal visualization and precision.",
    icon: "/medical/kaul/ki3.png",
    img: "/medical/kaul/key3.png",
  },
  {
    id: 4,
    title: "Custom Surgical Innovations",
    desc: "Tailored solutions developed in collaboration with surgeons and hospitals to address unique surgical needs.",
    icon: "/medical/kaul/ki4.png",
    img: "/medical/kaul/key4.png",
  },
  {
    id: 5,
    title: "Regulatory Compliance & Certifications",
    desc: "FDA & ISO-certified medical devices ensuring global quality and patient safety standards.",
    icon: "/medical/kaul/ki5.png",
    img: "/medical/kaul/key5.png",
  },
  {
    id: 6,
    title: "Global Distribution & Support",
    desc: "Serving healthcare professionals across 50+ countries with trusted partnerships and expert assistance.",
    icon: "/medical/kaul/ki6.png",
    img: "/medical/kaul/key6.png",
  },
];

export default function ComprehensiveRange() {
  return (
    <section className="py-14 sm:py-18 md:py-20 bg-white relative">
      <div className="custom-container">
        {/* Header Section */}
        <div className="text-center max-w-7xl lg:max-w-7xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="600">
            <div className="w-12 h-[1px] bg-[#FDC200]"></div>
            <span className="font-poppins text-[#FDC200] section-subtitle font-semibold tracking-wide uppercase">
              Our Key Offerings
            </span>
            <div className="w-12 h-[1px] bg-[#FDC200]"></div>
          </div>

          <h2 className="section-title font-semibold text-[#71797C] font-poppins tracking-tight leading-tight mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
            Advancing Surgical Precision, One Innovation at a Time
          </h2>

          <p className="section-text font-regular font-inter leading-relaxed max-w-7xl mx-auto" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
            We deliver cutting-edge medical solutions designed to enhance surgical efficiency and improve patient outcomes. From advanced orthopedic implants to precision surgical instruments, our products are built on innovation, accuracy, and a deep understanding of modern healthcare needs.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          {ITEMS.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-slate-200 p-6 flex shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col w-[80%] pr-4">
                <div className="relative h-12 mb-4">
                  <img src={item.icon} alt="icon" className="h-full w-auto object-contain object-left" />
                </div>
                <h3 className="font-poppins font-semibold text-[#71797C] mt-5 card-title leading-snug mb-5">
                  {item.title}
                </h3>
                <p className="font-inter section-text text-[#404040] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="w-[50%] h-auto relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#FCC100]/10 rounded-full scale-90 blur-sm"></div>
                <div className="relative w-full aspect-square">
                  <Image src={item.img} alt={item.title} fill className="h-auto object-contain" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
