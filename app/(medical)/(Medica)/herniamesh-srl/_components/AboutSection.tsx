"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const FEATURES = [
  {
    icon: "/medical/herniamesh-srl/i1.webp",
    title: "Innovation",
    text: "R&D and design of surgical medical devices in response to the demand for a better quality of life.",
  },
  {
    icon: "/medical/herniamesh-srl/i2.webp",
    title: "Production",
    text: "Specialized in the production of surgical medical devices.",
  },
  {
    icon: "/medical/herniamesh-srl/i3.webp",
    title: "Distribution",
    text: "Herniamesh® products are distributed internationally. Request more information.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-16 xl:py-24">
      <div className="custom-container grid grid-cols-12 gap-6 xl:gap-8 items-center">
        {/* Intro Text */}
        <div
          className="col-span-12 min-[64.0625rem]:col-span-4 xl:pl-6 2xl:pl-8"
          data-aos="fade-right"
        >
          <h2 className="section-title font-semibold text-slate-900">
            Herniamesh® S.R.L.
          </h2>

          <div className="mt-4 sm:mt-5 space-y-4 ">
            <p className="section-text">
              It is an Italian company that manufactures and markets, worldwide,
              medical devices for inguinal and abdominal hernioplasty and for the
              treatment of female urinary incontinence and pelvic floor dysfunction.
            </p>
            <p className="section-text">
              Herniamesh® medical devices are the tangible result of the
              Company&apos;s commitment to research and development, which ensures
              high-quality, functionally correct products, also covered by patents.
            </p>
            <p className="section-text">
              Herniamesh® guarantees the quality of its products by dedicating great
              attention to every phase of the production process, as part of a
              certified Quality Management program.
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <Button href="" variant="primary">
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* image */}
        <div
          className="col-span-12 md:max-[64.0625rem]:col-span-6 min-[64.0625rem]:col-span-4 self-stretch"
          data-aos="fade-up"
        >
          <div className="group relative w-full h-full min-h-[320px] sm:min-h-[400px] rounded-tl-3xl rounded-br-3xl overflow-hidden">
            <img
              src="/medical/herniamesh-srl/about.webp"
              alt="About Herniamesh"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="col-span-12 md:max-[64.0625rem]:col-span-6 min-[64.0625rem]:col-span-4 grid grid-cols-1 gap-4 sm:gap-5 ">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 sm:gap-5 rounded-tl-3xl rounded-br-3xl bg-white border border-slate-100 shadow-[0_4px_14px_rgba(0,0,0,0.12)] p-5 sm:p-6 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,85,166,0.18)]"
              data-aos="fade-left"
              data-aos-delay={index * 150}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0055A6] flex items-center justify-center flex-shrink-0">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain "
                />
              </div>

              <div>
                <h3 className="card-title font-semibold  leading-tight">
                  {feature.title}
                </h3>
                <p className="card-text mt-1 ">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
