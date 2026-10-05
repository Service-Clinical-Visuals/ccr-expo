"use client";

import React from "react";
import Link from "next/link";

interface Certificate {
  title: string;
  image: string;
  href: string;
}

const CERTIFICATES: Certificate[] = [
  {
    title: "EC CERTIFICATE - Full Quality Assurance System",
    image: "/medical/smi-sutures/c1.png",
    href: "",
  },
  {
    title: "ISO 13485",
    image: "/medical/smi-sutures/c2.png",
    href: "",
  },
  {
    title: "EC-CERTIFICATE – Notified Body Confirmation Letter",
    image: "/medical/smi-sutures/c3.png",
    href: "",
  },
];

export default function QualityCertifications() {
  return (
    <section  className="py-14 sm:py-16 lg:py-20">
      <div className="custom-container px-0 sm:px-2 lg:px-4">
        {/* Section Heading */}
        <div className="text-center max-w-5xl mx-auto" data-aos="fade-up">
          <h2 className="section-title font-semibold  inline-flex items-center gap-3">
            Quality &amp; Certifications
            <span className="inline-block w-6 sm:w-7 h-[3px] rounded-full bg-[#3a5da8] flex-shrink-0" />
          </h2>
          <p className="section-text mt-3">
            SMI maintains a strong commitment to quality, safety, and regulatory compliance across its surgical
            suture products. Our certifications and quality documentation reflect the standards and controls
            applied throughout our manufacturing and quality management processes.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 lg:mt-12">
          {CERTIFICATES.map((cert, index) => (
            <div
              key={cert.title}
              className={`group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-[0_4px_14px_rgba(0,0,0,0.10)] p-4 sm:p-5 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)] ${index === CERTIFICATES.length - 1
                ? "sm:col-span-2 sm:justify-self-center sm:w-[calc(50%-12px)] lg:col-span-1 lg:w-full"
                : ""
                }`}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              {/* Certificate Image */}
              <div className="w-full  overflow-hidden rounded-xl border border-gray-200 bg-slate-50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h3 className="card-title font-semibold  mt-5">{cert.title}</h3>

              {/* Read More */}
              <div className="mt-auto pt-5">
                <Link
                  href={cert.href}
                  className="card-link font-semibold text-[#3a5da8] underline underline-offset-4 hover:text-[#2f4d8f] transition-colors"
                >
                  Read More &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
