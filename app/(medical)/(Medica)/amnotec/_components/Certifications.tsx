"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const certificates = [
  { image: "/medical/amnotec/c1.webp", alt: "AMNOTEC mdc Certificate" },
  { image: "/medical/amnotec/c2.webp", alt: "AMNOTEC EC Certificate" },
  { image: "/medical/amnotec/c3.webp", alt: "AMNOTEC Quality System Certificate" },
  { image: "/medical/amnotec/c4.webp", alt: "AMNOTEC GS1 Certificate 2026" },
];

/**
 * AMNOTEC Quality & Certifications Section
 * Master Reference: Inogen Methodology
 *
 * Requirements:
 * - Centered header with xl:max-w-[70%] limit
 * - 4 Certificate cards grid
 * - Link at bottom: "View All" (underline in #134093)
 */
const Certifications = () => {
  return (
    <section id="certifications" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Centered Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="eyebrow"
            className="text-[#134093] font-semibold text-sm sm:text-base tracking-wider uppercase"
          >
            QUALITY &amp; CERTIFICATIONS
          </Typography>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#000000] leading-tight"
          >
            Commitment to Quality, Safety and Excellence
          </Typography>

          <Typography
            variant="p"
            color="secondary"
            className="text-sm sm:text-base leading-relaxed text-[#111111]"
          >
            At AMNOTEC, quality and reliability are at the core of everything we do. Our certifications reflect our commitment to maintaining high standards in medical technology, product quality and regulatory compliance, ensuring confidence across every stage of our operations.
          </Typography>
        </div>

        {/* 4 Certificates Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div
          className="w-full mt-10 sm:mt-14 amnotec-certs-grid"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="w-full aspect-[3/4] bg-white rounded-none overflow-hidden border border-gray-200/80 shadow-[0px_1px_2px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 sm:p-5 flex items-center justify-center group cursor-pointer"
            >
              <img
                src={cert.image}
                alt={cert.alt}
                className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Bottom View All Link */}
        <div className="w-full flex justify-end mt-6 sm:mt-8">
          <Link
            href="#certifications"
            className="font-semibold text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl text-[#134093] hover:text-[#0e2f6d] underline transition-colors cursor-pointer"
          >
            View All
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
