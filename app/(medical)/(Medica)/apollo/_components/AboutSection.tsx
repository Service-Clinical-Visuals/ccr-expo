"use client";

import React from "react";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const POINTS = [
  "Developing reliable healthcare equipment designed to improve patient comfort, safety and everyday clinical experiences.",
  "Supporting healthcare professionals with innovative solutions tailored to diverse patient care requirements.",
  "Combining product expertise, quality standards and responsive support to strengthen healthcare delivery.",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white py-16 sm:py-20 xl:py-[4.2vw]">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-[48%_1fr] max-xl:portrait:grid-cols-1 gap-10 xl:gap-[2.3vw] items-center">
          {/* Image */}
          <div data-aos="fade-right">
            <img
              src="/medical/apollo/about.webp"
              alt="Apollo Healthcare Technologies team at healthcare exhibitions"
              className="w-full max-w-[640px] lg:max-w-none mx-auto h-auto object-contain"
            />
          </div>

          {/* Text */}
          <div data-aos="fade-left" data-aos-delay="150">
            <Eyebrow className="mb-4 xl:mb-6">Who We Are</Eyebrow>
            <h2 className="section-title font-head font-bold text-[var(--heading)] mb-4 xl:mb-5 xl:max-w-[80%]">
              Innovative Healthcare Solutions for Patient Comfort, Safety &amp; Wellbeing
            </h2>
            <p className="section-text font-inter text-[var(--body)] mb-6 xl:mb-7">
              Apollo Healthcare Technologies is dedicated to developing and supplying advanced healthcare equipment that
              supports better patient outcomes. Through innovative product design, clinical expertise and dependable
              service, the company helps healthcare professionals deliver safer, more comfortable and effective patient
              care.
            </p>
            <ul className="apollo-list section-text font-inter text-[var(--body)] mb-8 xl:mb-10">
              {POINTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Button href="#services">Discover Our Story</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
