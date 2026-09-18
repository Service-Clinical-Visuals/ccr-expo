"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const NEWS_ITEMS = [
  {
    id: 1,
    date: "May – 2018",
    title: "Trauma Courses for Acıbadem University",
    image: "/medical/tasarimmed/i1.png",
    link: "#",
  },
  {
    id: 2,
    date: "2016",
    title: "Tasarimmed has attended Turkish Orthopedics",
    image: "/medical/tasarimmed/i2.png",
    link: "#",
  },
  {
    id: 3,
    date: "",
    title: "Tasarımmed at the Deformity Meeting, Istanbul.",
    image: "/medical/tasarimmed/i3.png",
    link: "#",
  },
];

export default function QualityManagement() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div
          className="text-center max-w-[95%] lg:max-w-[85%] 2xl:max-w-[75%] mx-auto mb-10 sm:mb-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-6 h-[1px] bg-[#C382B4]"></div>
            <span className="font-inter text-[#C382B4] section-text font-regular tracking-wide">
              News
            </span>
          </div>
          <h2 className="text-[32px] font-dm-sans font-bold text-[#1F2937] leading-tight mb-4">
            Latest Insights & News
          </h2>
          <p className="section-text font-inter font-regular text-[#4B5563] leading-relaxed mx-auto max-w-[90%] md:max-w-[80%] 2xl:max-w-[60%]">
            Stay updated with TASARIMMED's latest news, events, innovations, and developments in orthopaedic and neurosurgical medical solutions.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-8 xl:gap-12">
          {NEWS_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col gap-5 group"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 150}
            >
              {/* Image */}
              <Link href={item.link} className="w-full aspect-[6/5] overflow-hidden rounded-[16px] block">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover scale-[1.08] transition-transform duration-700 group-hover:scale-[1.12]"
                />
              </Link>

              {/* Content */}
              <div className="flex items-start justify-between gap-4 px-1">
                <p className="font-inter card-title text-[#4B5563] leading-snug flex-1">
                  {item.date && (
                    <strong className="font-bold text-[#0B1126]">{item.date} </strong>
                  )}
                  {item.title}
                </p>
                <Link
                  href={item.link}
                  className="w-[75px] h-[75px] shrink-0 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-md"
                  style={{ background: "linear-gradient(180deg, #0B1126 0%, #293F8C 100%)" }}
                >
                  <ArrowRight className="w-[40px] h-[40px] text-white" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
