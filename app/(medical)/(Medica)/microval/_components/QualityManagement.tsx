"use client";

import React from "react";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

const NEWS_DATA = [
  {
    image: "/medical/microval/news1.webp",
    alt: "MEDICA",
    date: "Nov 16-19, 2026",
    location: "Düsseldorf, Germany",
    description: "Microval will be present at MEDICA Düsseldorf, one of the largest international events in the medical sector.",
  },
  {
    image: "/medical/microval/news2.webp",
    alt: "MEDICAL FAIR ASIA",
    date: "Sept 9-11, 2026",
    location: "Marina Bay Sands, Singapore",
    description: "Microval will be present at Medical Fair Asia 2026, the unmissable event for the medical sector in Southeast Asia.",
  },
  {
    image: "/medical/microval/news3.webp",
    alt: "WHX Dubai",
    date: "Jan 25-28, 2027",
    location: "Dubai Exhibition Centre",
    description: "Microval will begin the year 2027 in Dubai, at WHX Dubai, one of the major international health events.",
  },
];

export default function QualityManagement() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-10 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-[30px] h-[5px] bg-[#DF0001] rounded-full shadow-[0px_5px_15px_0px_#DF00018C]"></div>
            <span className="font-dmsans font-bold text-[#DF0001] section-text tracking-widest uppercase">
              NEWS & UPDATES
            </span>
          </div>

          <h2 className="section-title font-semibold tracking-tight font-dmsans text-[#111111] mb-5 leading-snug">
            Latest News & Insights from MicroVal
          </h2>
          <p className="section-text leading-relaxed font-inter font-regular text-[#4B5563]">
            Stay up to date with the latest MicroVal news, innovations, events, and developments in medical devices and digestive surgery.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          {NEWS_DATA.map((news, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white border border-[#4B55634D] rounded-[8px] overflow-hidden transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={idx * 150}
            >
              {/* Image Container */}
              <div className="h-full w-full p-5 flex items-center justify-center">
                <img
                  src={news.image}
                  alt={news.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Content Box */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">

                {/* Meta Data */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-5">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-[22px] h-[22px] text-[#DF0001]" />
                    <span className="font-inter font-semibold text-[#111111] section-text">
                      {news.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-[22px] h-[22px] text-[#DF0001]" />
                    <span className="font-inter font-semibold text-[#111111] section-text">
                      {news.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-inter font-regular text-[#4B5563] section-text leading-relaxed mb-8">
                  {news.description}
                </p>

                {/* Read More */}
                <div className="mt-auto text-right">
                  <Link href="#readmore" className="font-dmsans font-bold text-[#DF0001] section-text tracking-wider uppercase hover:underline underline">
                    READ MORE
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
