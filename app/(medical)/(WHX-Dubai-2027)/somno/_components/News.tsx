/**
 * News Section (n1, n2, n3)
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Centered Section Header:
 *    - Subtitle and title structured with Squada One font.
 * 2. 3 News Cards:
 *    - n1: DGSM 2026 Congress
 *    - n2: ESRS Sleep Europe Congress
 *    - n3: ERS Congress Barcelona
 * 3. Consistent aspect ratio, date badge, and "Read More ↗" underline link.
 */
"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const newsItems = [
  {
    image: "/medical/somno/n1.webp",
    date: "11.11.2026",
    text: "DGSM 2026: New Perspectives in Sleep Diagnostics and Therapy At the 34th Annual Meeting of the German Society for Sleep Research and Sleep Medicine (DGSM), held from November 5–7, 2026, [...]",
    link: "#",
    alt: "DGSM 2026 Sleep Diagnostics Congress",
  },
  {
    image: "/medical/somno/n2.webp",
    date: "28.10.2026",
    text: "The ESRS Sleep Europe Congress 2026 in Maastricht provided SOMNOmedics with a valuable platform to showcase innovative solutions and exchange views with experts on the latest developments in sleep medicine. [...]",
    link: "#",
    alt: "ESRS Sleep Europe Congress 2026",
  },
  {
    image: "/medical/somno/n3.webp",
    date: "11.09.2026",
    text: "Innovative solutions for modern sleep diagnostics At the ERS Congress 2026 in Barcelona, SOMNOmedics presented the latest solutions for comfortable, reliable and efficient sleep diagnostics. The focus was on the [...]",
    link: "#",
    alt: "ERS Congress 2026 Barcelona",
  },
];

export default function News() {
  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">

        {/* Section Header with Deleo xl:max-w-[70%] standard */}
        <div className="text-center space-y-1.5 w-full max-w-full xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <span className="font-primary font-bold text-[#585858] text-lg sm:text-[20px] uppercase tracking-wide">
            SOMNOtouch™ RESP eco
          </span>
          <h2 className="font-primary text-[#212121] text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Comprehensive insights for accurate sleep assessment and personalised patient care.
          </h2>
        </div>

        {/* 3 News Cards Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F7F7F7] rounded-[16px] p-4 sm:p-5 flex flex-col gap-3.5 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              {/* Image Frame */}
              <div className="w-full aspect-[16/10] rounded-[16px] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Date */}
              <h4 className="font-primary font-bold text-[#212121] text-lg sm:text-[20px] leading-tight">
                {item.date}
              </h4>

              {/* Excerpt */}
              <p className="font-secondary text-[#585858] text-sm leading-[1.45] text-justify flex-1 w-full max-w-full">
                {item.text}
              </p>

              {/* Read More Link */}
              <div className="pt-1 mt-auto">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1 min-[2500px]:gap-2 font-primary font-bold text-[#005781] hover:text-[#004567] text-xl sm:text-2xl min-[2500px]:text-3xl min-[3800px]:text-4xl underline underline-offset-4 transition-colors group/link"
                >
                  <span className="font-primary font-bold">Read More</span>
                  <ArrowUpRight className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

