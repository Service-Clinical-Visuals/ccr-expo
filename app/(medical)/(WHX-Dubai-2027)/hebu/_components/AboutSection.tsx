"use client";

import React from "react";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const POINTS = [
  "German engineering excellence focused on precision, durability, and dependable performance across medical applications.",
  "Extensive product portfolio designed to support diverse surgical specialties and clinical requirements.",
  "Continuous innovation and strict quality standards ensure confidence throughout every stage of manufacturing.",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white py-16 sm:py-20 xl:py-[5vw]">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-[48.9%_1fr] max-xl:portrait:grid-cols-1 gap-10 xl:gap-[1.9vw] items-center">
          {/* Image */}
          <div data-aos="fade-right">
            <img
              src="/medical/hebu/Rectangle 2.webp"
              alt="HEBUmedical headquarters in Tuttlingen, Germany"
              className="w-full max-w-[720px] lg:max-w-none mx-auto aspect-[792/600] object-cover"
            />
          </div>

          {/* Text */}
          <div data-aos="fade-left" data-aos-delay="150">
            <Eyebrow className="mb-3 xl:mb-4">Our Expertise</Eyebrow>
            <h2 className="section-title font-head font-semibold text-[var(--heading)] mb-4 xl:mb-6">
              Advancing Medical Precision Through Innovation &amp; Excellence
            </h2>
            <p className="section-text font-body text-[var(--body)] mb-5 xl:mb-6">
              HEBUmedical combines German engineering expertise with decades of medical manufacturing experience to
              deliver reliable surgical instruments and innovative healthcare solutions. With a strong commitment to
              precision, functionality, and quality, the company supports medical professionals with products designed
              to meet the evolving demands of modern healthcare.
            </p>
            <ul className="hebu-list section-text font-body text-[var(--body)] mb-8 xl:mb-10">
              {POINTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <Button href="#expertise">Our Expertise</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
