"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";

const NEWS_EVENTS = [
  {
    id: "ers-course",
    image: "/medical/cosmed/n1.webp",
    date: "November 11–13, 2026",
    title: "ERS Clinical Exercise Testing Course",
    description:
      "COSMED is proud to sponsor the ERS Clinical Exercise Testing Course, taking place in Rome, Italy, from November 11–13, 2026. Exercise testing plays a key ...",
    link: "#",
  },
  {
    id: "sinpe-congress",
    image: "/medical/cosmed/n2.webp",
    date: "November 05–07, 2026",
    title: "SINPE National Congress",
    description:
      'COSMED is pleased to participate in the SINPE National Congress 2026, taking place in Palermo, Italy, from November 5–7, under the theme "Clinical Nutrition 4.0: Integration into Care Pathways."',
    link: "#",
  },
  {
    id: "endurance-training",
    image: "/medical/cosmed/n3.webp",
    date: "October 10, 2026",
    title: "Endurance Training in Cardiorespiratory ...",
    description:
      'COSMED will participate in the Advanced Theoretical-Practical Course "Endurance Training in Cardiorespiratory Diseases: From Physiology to Exercise Programming",',
    link: "#",
  },
];

export default function CTASection() {
  return (
    <section id="news" className="w-full bg-white py-16 sm:py-20 md:py-20">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-16 2xl:px-24">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-7xl" data-aos="fade-right" data-aos-duration="800">
            {/* Subtitle with vertical blue bar */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1 h-5 bg-[#0066B2] rounded-full inline-block"></span>
              <span className="text-[#0066B2] section-text font-semibold font-plus-jakarta tracking-wide">
                Latest News & Events
              </span>
            </div>

            {/* Section Title */}
            <h2 className="section-title font-bold text-[#1E293B] font-plus-jakarta leading-snug mb-3">
              Stay Connected with COSMED's Latest Developments
            </h2>

            {/* Description */}
            <p className="section-text text-[#64748B] font-inter leading-relaxed">
              Explore the latest company updates, industry events, scientific collaborations, and innovations shaping COSMED's cardiopulmonary and metabolic diagnostic solutions.
            </p>
          </div>

          {/* View All Button */}
          <div
            className="flex-shrink-0 self-start lg:self-center"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <Button href="#news" variant="outline">
              View All
            </Button>
          </div>
        </div>

        {/* 3 News & Events Cards Grid (1 column on mobile, 3 columns on tablet & desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16">
          {NEWS_EVENTS.map((item, idx) => (
            <Link
              key={item.id}
              href={item.link}
              className="group flex flex-col cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay={idx * 150}
            >
              {/* Image Box */}
              <div className="relative w-full aspect-[516/262] rounded-[10px] overflow-hidden bg-slate-100 mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Date */}
              <span className="text-[#64748B] text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-xl font-inter font-medium mb-1.5 block">
                {item.date}
              </span>

              {/* Title */}
              <h3 className="font-plus-jakarta font-bold text-[#1E293B] text-base sm:text-lg lg:text-[19px] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-snug mb-2 group-hover:text-[#0066B2] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="section-text text-[#64748B] font-inter leading-relaxed text-sm min-[2500px]:text-lg min-[3800px]:text-xl line-clamp-3">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
