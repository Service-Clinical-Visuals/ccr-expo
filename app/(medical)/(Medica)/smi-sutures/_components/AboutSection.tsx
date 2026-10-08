"use client";

import React from "react";
import { CircleCheck } from "lucide-react";
import Button from "./Button";

const HIGHLIGHTS = [
  "Extensive Industry Experience – Since 1987, SMI has built extensive expertise as a specialised manufacturer of high-quality surgical sutures, serving healthcare professionals and customers worldwide.",
  "International Quality Standards – SMI complies with recognised international quality standards, including EN ISO 13485, supporting consistent quality across its products and manufacturing processes.",
  "Advanced Manufacturing Technology – Surgical sutures are manufactured using modern techniques and high-level technical materials to meet demanding medical requirements.",
];

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-16 min-[1025px]:py-20">
      <div className="custom-container px-0 sm:px-2 min-[1025px]:px-4">
        {/* Section Heading */}
        <div className="text-center max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="section-title font-semibold  inline-flex items-center gap-3">
            About SMI
            <span className="inline-block w-6 sm:w-7 h-[3px] rounded-full bg-[#3a5da8]" />
          </h2>
          <p className="section-text  mt-3">
            SMI AG was established in 1987 – the First Belgian company to manufacture surgical sutures – since
            when it has grown rapidly. Today it is recognized as an experienced and world-wide supplier of
            surgical sutures. The company is situated in St. Vith, Belgium.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 min-[1025px]:grid-cols-2 gap-8 min-[1025px]:gap-10 items-center mt-10 min-[1025px]:mt-12">
          {/* Image */}
          <div
            className="w-full overflow-hidden rounded-2xl border border-gray-200"
            data-aos="fade-right"
          >
            <img
              src="/medical/smi-sutures/abt.webp"
              alt="SMI surgical suture manufacturing"
              className="w-full h-full aspect-[3/2] object-cover"
            />
          </div>

          {/* Text */}
          <div data-aos="fade-left">
            <p className="section-text ">
              Founded in 1987 as Belgium&apos;s first surgical suture manufacturer, SMI has grown into an
              experienced worldwide supplier of high-quality surgical sutures. Based in St. Vith, Belgium, the
              company combines advanced manufacturing techniques, stringent quality control, and
              customer-focused service to deliver reliable suture solutions.
            </p>

            <ul className="mt-6 flex flex-col gap-4">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 mt-0.5 flex-shrink-0 fill-slate-900 text-white" />
                  <p className="section-text">{item}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="" variant="primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
