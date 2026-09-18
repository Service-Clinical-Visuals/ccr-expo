"use client";

import React from "react";
import { Download } from "lucide-react";

const CERTIFICATES = [
  { id: 1, src: "/medical/medpro/c1.png", alt: "ISO 13485:2016 Certificate" },
  { id: 2, src: "/medical/medpro/c2.png", alt: "EC Certificate Annex" },
  { id: 3, src: "/medical/medpro/c3.png", alt: "EC Certificate" },
];

export default function QualityManagement() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Section Header */}
        <div
          className="text-center mx-auto mb-10 sm:mb-10 flex flex-col gap-3 sm:gap-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="section-text font-semibold text-[#3BB3C3] font-inter">
            Verified Standards for Consistent MEDpro Quality
          </span>
          <h2 className="section-title font-semibold text-[#202020] font-fraunces leading-tight tracking-tight">
            Committed to Recognized Standards, Regulatory Compliance, and Reliable Medical Device Manufacturing
          </h2>
          <p className="section-text text-[#404040] font-normal font-inter leading-relaxed mt-2 max-w-7xl mx-auto">
            MEDpro Medical places strong emphasis on quality, safety, and regulatory compliance throughout its product development and manufacturing processes. Its certification and regulatory documentation provides healthcare professionals, distributors, and partners with supporting evidence of the company&apos;s commitment to established medical-device requirements.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start mx-auto">
          {CERTIFICATES.map((cert, index) => (
            <div
              key={cert.id}
              className="relative w-fit mx-auto group overflow-hidden cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 150}
            >
              {/* Certificate Image */}
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-auto h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-[10px] border border-white/100 text-white font-fraunces bg-[#3BB3C3] btn-text font-medium hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                  Download <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
