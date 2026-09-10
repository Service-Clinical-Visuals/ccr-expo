"use client";

import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "./Button";

const NEWS_ITEMS = [
  {
    title: "Farmac Zabban present at Medica 2026",
    date: "July 16, 2026",
    desc: "We are pleased to inform you that Farmac Zabban will be exhibiting again at the upcoming MEDICA FAIR which [...]",
    image: "/medical/farmac/n1.png",
    href: "#medica-2026",
  },
  {
    title: "Farmac Zabban Present at Arab Health 2020",
    date: "January 16, 2020",
    desc: "We are pleased to inform you that Farmac Zabban will be exhibiting again at the upcoming ARAB HEALTH 2020 [...]",
    image: "/medical/farmac/n2.png",
    href: "#arab-health-2020",
  },
  {
    title: "Farmac Zabban Present at Arab Health 2022",
    date: "January 10, 2022",
    desc: "We are pleased to inform you that Farmac Zabban will be exhibiting again at the upcoming ARAB HEALTH 2022 [...]",
    image: "/medical/farmac/n3.png",
    href: "#arab-health-2022",
  },
];

export default function LatestNews() {
  return (
    <section id="news-section" className="py-14 sm:py-18 md:py-24 bg-white">
      <div className="custom-container">
        {/* Centered Heading */}
        <div
          className="max-w-2xl mx-auto text-center mb-10 sm:mb-14"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="section-text font-bold text-[#24559c] tracking-normal font-inter">
              &mdash; News
            </span>
          </div>
          <h2 className="section-title font-medium font-poppins text-slate-900 tracking-tight mb-5">
            Latest News
          </h2>
        </div>

        {/* 3-Column News Cards Grid */}
        <div className="custom-grid-3">
          {NEWS_ITEMS.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={idx * 120}
              className={`flex flex-col h-full ${
                idx === 2
                  ? "sm:col-span-2 sm:w-full sm:max-w-[calc(50%-0.75rem)] sm:mx-auto xl:col-span-1 xl:max-w-none xl:mx-0"
                  : ""
              }`}
            >
              <Link
                href={item.href}
                className="flex flex-col h-full bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-1 pt-4">
                  {/* Date with Calendar Icon */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <Calendar className="w-5 h-5 text-[#24559c] flex-shrink-0" />
                    <span className="section-text font-bold font-inter text-[#24559c]">
                      {item.date}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="card-title font-semibold font-poppins text-slate-800 tracking-tight mb-2.5 group-hover:text-[#24559c] transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="section-text font-inter text-black font-normal mb-4 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Read More Link */}
                  <div className="pt-2">
                    <span className="section-text font-semibold text-[#24a6a8] underline underline-offset-4">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Centered View All CTA Button */}
        <div
          className="mt-10 sm:mt-14 flex justify-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <Button href="#all-news" className="px-8">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
