"use client";

import React from "react";

interface Feature {
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    title: "Certified Quality",
    description:
      "Our quality management processes are supported by internationally recognized certifications.",
  },
  {
    title: "Consistent Standards",
    description:
      "We maintain controlled processes and rigorous quality practices throughout product development and manufacturing.",
  },
  {
    title: "Customer Focus",
    description:
      "Our quality approach is built around meeting customer requirements and delivering dependable solutions.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We continuously refine our processes to maintain high standards and respond to evolving clinical and market needs.",
  },
];

export default function QualityCertifications() {
  return (
    <section id="certificates" className="w-full bg-white py-14 sm:py-16 desk:py-20 2xl:py-24">
      <div className="custom-container custom-grid items-center">
        {/* Left: Content */}
        <div
          className="col-span-12 desk:col-span-7"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <span className="section-text block font-semibold uppercase tracking-wide text-[#0071ce]">
            Our Certificates
          </span>
          <h2 className="section-title mt-2 sm:mt-3 font-bold leading-tight text-[#0b1b2b]">
            Quality You Can Trust.
          </h2>
          <p className="section-text mt-5 sm:mt-6 leading-relaxed text-slate-600">
            Our commitment to quality is reflected in our certified quality management systems. We
            continuously maintain high standards across our products and processes to meet customer
            requirements and support reliable orthopaedic solutions.
          </p>

          <ul className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
            {FEATURES.map((feature, index) => (
              <li
                key={feature.title}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={`${100 + index * 100}`}
              >
                <div className="flex items-center gap-2.5">
                  <img
                    src="/medical/lux-sutures/10.png"
                    alt=""
                    aria-hidden="true"
                    className="h-auto w-6 2k:w-10 shrink-0 object-contain"
                  />
                  <h3 className="card-title font-semibold text-[#0071ce]">{feature.title}</h3>
                </div>
                <p className="section-text mt-2 leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Certificate */}
        <div
          className="col-span-12 sm:col-span-8 sm:col-start-3 desk:col-span-4 desk:col-start-9 mt-4 desk:mt-0"
          data-aos="zoom-in"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          <div className="rounded-xl p-1.5 sm:p-2 ">
            <img
              src="/medical/lux-sutures/certificate.png"
              alt="LUX Sutures EN ISO 13485:2016 Certificate"
              className="h-auto w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
