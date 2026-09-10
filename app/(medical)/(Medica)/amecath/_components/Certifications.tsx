"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CircleDot } from "lucide-react";

interface CertificateItem {
  id: number;
  title: string;
  image: string;
  aspectRatio: string;
}

const CERTIFICATES: CertificateItem[] = [
  {
    id: 1,
    title: "FDA 510(k) Premarket Notification",
    image: "/medical/amecath/c1.png",
    aspectRatio: "aspect-[1/1.42]",
  },
  {
    id: 2,
    title: "ISO 14001:2015 Environmental Management",
    image: "/medical/amecath/c2.png",
    aspectRatio: "aspect-[1/1.45]",
  },
  {
    id: 3,
    title: "Health Canada Medical Device Licence",
    image: "/medical/amecath/c3.png",
    aspectRatio: "aspect-[1/1.42]",
  },
];

export default function Certifications() {
  // Default focused certificate is the center image (index 1)
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-14 sm:py-18 md:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Header Section */}
        <div className="text-center max-w-7xl  mx-auto mb-10 sm:mb-14 md:mb-16">
          {/* Subtitle / Tag */}
          <div
            className="inline-flex items-center gap-2 text-[#155184] font-medium section-subtitle mb-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <CircleDot className="w-5 h-5 text-[#155184]" />
            <span className="font-raleway section-subtitle font-semibold tracking-wide">
              Our Certifications
            </span>
          </div>

          {/* Heading in Raleway */}
          <h2
            className="section-title font-semibold text-black font-raleway tracking-tight leading-snug mb-4 sm:mb-5"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            Globally Recognized Certifications Ensuring Quality, Safety, and Regulatory Compliance Standards
          </h2>

          {/* Description in Inter */}
          <p
            className="section-text text-slate-600 font-normal font-inter leading-relaxed max-w-7xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            Our commitment to excellence is validated through internationally recognized certifications and strict regulatory compliance. We adhere to global quality standards to ensure the safety, reliability, and performance of every product. These certifications reflect our dedication to delivering trusted medical solutions worldwide.
          </p>
        </div>

        {/* 3-Certificate Showcase Container */}
        <div
          className="relative  px-4 sm:px-6"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="250"
          onMouseLeave={() => setActiveIndex(1)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-14 items-center justify-center">
            {CERTIFICATES.map((cert, index) => {
              const isSelected = activeIndex === index;

              return (
                <div
                  key={cert.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`relative transition-all duration-500 ease-out transform cursor-pointer flex justify-center ${isSelected
                    ? "scale-100 sm:scale-105 md:scale-110 z-20 "
                    : "scale-95 sm:scale-95 md:scale-95 z-10 "
                    }`}
                >
                  <div
                    className={`relative w-full max-w-[340px] md:max-w-none  rounded-lg transition-all duration-500 ${isSelected
                      ? "shadow-2xl ring-1 ring-slate-200"
                      : "shadow-md "
                      }`}
                  >
                    <div className={`relative w-full ${cert.aspectRatio} overflow-hidden `}>
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain object-center"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={index === 1}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Indicators */}
          {/* <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12">
            {CERTIFICATES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`View Certificate ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === i
                  ? "w-10 bg-[#155184]"
                  : "w-6 bg-slate-200 hover:bg-slate-300"
                  }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
