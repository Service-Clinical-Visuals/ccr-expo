"use client";

import React from "react";
import Button from "./Button";

const PARAGRAPHS = [
  "LUXSUTURES is specialized in the manufacturing of surgical sutures. The company is located in Luxemburg, in the heart of Europe, between Belgium, France and Germany. Our surgical sutures are recognized by surgeons around the world, enjoying market and surgeon acceptance based on our high quality standards, growing range of suture materials, as well as fair and competitive prices.",
  "LUXSUTURES maintains quality standards based on the most demanding international regulations, such as EN ISO 13485. All raw materials and finished products are submitted to stringent quality control by a highly qualified team. Excellence in quality and service are our key to customer satisfaction.",
  "This catalogue contains information about the full range of LUXSUTURES suture materials with details of all standard presentations held in stock.",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#deeefa] bg-cover bg-center bg-no-repeat py-12 sm:py-16 desk:py-20 2xl:py-24"
      style={{ backgroundImage: "url('/medical/lux-sutures/bg.webp')" }}
    >
      {/* Light overlay on small screens so the card stands out over the busy image */}
      <div className="absolute inset-0 bg-white/40 desk:bg-transparent pointer-events-none" />

      <div className="relative z-10 custom-container custom-grid">
        <div
          className="col-span-12 desk:col-span-6  rounded-2xl border border-[#0071ce] bg-white p-6 sm:p-8 xl:p-10 2k:p-14 shadow-2xl shadow-black/25"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <span className="section-text block font-semibold uppercase tracking-wide text-[#0071ce]">
            About Us
          </span>

          <h2 className="section-title mt-2 sm:mt-3 font-bold leading-tight text-[#0b1b2b]">
            European Expertise. Surgical Precision.
          </h2>

          <div className="mt-5 sm:mt-6 space-y-4">
            {PARAGRAPHS.map((text) => (
              <p key={text.slice(0, 24)} className="section-text leading-relaxed text-slate-600">
                {text}
              </p>
            ))}
          </div>

          <div className="mt-7 sm:mt-9">
            <Button href="" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
