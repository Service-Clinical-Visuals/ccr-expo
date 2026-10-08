"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";

const UPDATES = [
  {
    image: "/medical/altaylar/i1.webp",
    tag: "CLINICAL FEEDBACK",
    title: "ORC Customer Satisfaction Survey",
    description: "We invite hospital procurement officers, surgeons, and healthcare professionals to evaluate the intraoperative handling, hemostatic efficacy, ease of application, and overall performance of PAHACEL.",
    link: "#"
  },
  {
    image: "/medical/altaylar/i2.webp",
    tag: "SURGICAL ACCREDITATION",
    title: "Mesh Customer Satisfaction Survey",
    description: "Share clinical outcomes and practical insights regarding PAHA polypropylene mesh, including its elasticity, tensile endurance, tissue adherence, handling characteristics, and performance in hernioplasty procedures.",
    link: "#"
  }
];

export default function CTASection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-25">

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-12 items-start">
          <div className="lg:col-span-5" data-aos="fade-right" data-aos-duration="600">
            <h4 className="text-[#07A1A8] section-text font-semibold font-inter mb-3 tracking-wide flex items-center gap-2">
              <span className="w-[8px] h-[8px] rounded-full bg-[#07A1A8]"></span> Latest Updates & Industry Insights
            </h4>
            <h2 className="section-title font-semibold tracking-tight font-raleway text-[#202020] leading-snug">
              Discover Our Latest Medical Product News and Developments
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-8" data-aos="fade-left" data-aos-duration="600" data-aos-delay="100">
            <p className="section-text leading-relaxed font-inter font-regular text-[#404040]">
              Stay informed with Altaylar Medikal's latest updates, product developments, customer insights, industry activities, and company news, reflecting our continued commitment to quality and innovation.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {UPDATES.map((update, idx) => (
            <div
              key={idx}
              className="border-1 border-[#71717A] rounded-[10px] bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col sm:flex-row p-6 gap-6 group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={idx * 150}
            >
              <div className="w-auto h-auto relative overflow-hidden rounded-[8px] flex-shrink-0">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/medical/fentex/about.webp";
                  }}
                />
              </div>

              <div className="flex flex-col flex-grow justify-center py-2">
                <div className="mb-2">
                  <span className="inline-block bg-[#E8F7F7] text-[#07A1A8] text-[10px] font-bold tracking-wider px-2 py-1 rounded">
                    {update.tag}
                  </span>
                </div>
                <h3 className="font-raleway font-semibold text-[#202020] card-title mb-3 leading-snug">
                  {update.title}
                </h3>
                <p className="font-inter font-regular text-[#404040] section-text leading-relaxed mb-6 flex-grow">
                  {update.description}
                </p>

                <div className="mt-auto">
                  <Link href={update.link} className="font-raleway font-semibold section-text text-[#07A1A8] hover:underline transition-colors">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
          <Button
            href="#all-updates"
            variant="outline"
            showArrow={false}
            className="!w-auto !px-8 border !border-[#07A1A8] !text-[#07A1A8] hover:!bg-[#07A1A8] hover:!text-white rounded-[8px]"
          >
            <span className="font-raleway font-semibold btn-text">View All Latest Updates</span>
          </Button>
        </div>

      </div>
    </section>
  );
}
