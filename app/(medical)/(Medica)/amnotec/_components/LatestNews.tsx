"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const newsItems = [
  {
    image: "/medical/amnotec/l1.webp",
    title: "8th Congress of Society of Urological Surgery",
    excerpt:
      "AMNOTEC will be present at the 8th Congress of the Society of Urological Surgery in Antalya from October 28 to November 1. The event brings together leading experts in urological surgery.",
    link: "#news",
  },
  {
    image: "/medical/amnotec/l2.webp",
    title: "MEDICA 2026",
    excerpt:
      "AMNOTEC will be exhibiting at MEDICA in Düsseldorf from November 16 to 19. The trade fair brings together leading experts from the medical technology industry.Take the opportunity to meet our team in person at booth F68....",
    link: "#news",
  },
  {
    image: "/medical/amnotec/l3.webp",
    title: "iSMIT 2026",
    excerpt:
      "AMNOTEC will be attending the 37th iSMIT International Congress in Nuremberg, Germany from 11 to 12 December. The event brings together leading experts from the medical technology sector.Take this opportunity to meet our team....",
    link: "#news",
  },
];

/**
 * AMNOTEC Latest News & Insights Section
 * Master Reference: Inogen Methodology
 *
 * Requirements:
 * - Centered header constrained to xl:max-w-[70%]
 * - 3 News cards grid with image header, title, excerpt, and "Read More" button
 * - Stacks on mobile, 2 cols on tablet, 3 cols on desktop (1036px+)
 */
const LatestNews = () => {
  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Centered Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="eyebrow"
            className="text-[#134093] font-semibold text-sm sm:text-base tracking-wider uppercase"
          >
            LATEST NEWS &amp; INSIGHTS
          </Typography>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#000000] leading-tight"
          >
            Stay Informed. Stay Connected.
          </Typography>

          <Typography
            variant="p"
            color="secondary"
            className="text-sm sm:text-base leading-relaxed text-[#111111]"
          >
            Discover the latest updates from AMNOTEC, including company announcements, product innovations, medical technology developments, upcoming exhibitions and industry events. Stay connected with the advancements shaping modern surgical care.
          </Typography>
        </div>

        {/* 3 News Cards Grid */}
        <div
          className="w-full mt-10 sm:mt-14 amnotec-news-grid"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className="w-full bg-white rounded-[10px] overflow-hidden border border-gray-200/80 shadow-[0px_1px_2px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Card Banner Image */}
              <div className="w-full aspect-[16/9] overflow-hidden bg-gray-50 border-b border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-3">
                  <h3 className="font-jakarta font-bold text-xl sm:text-2xl text-[#000000] leading-snug group-hover:text-[#134093] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-dmsans text-sm sm:text-base leading-relaxed text-[#111111]">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    text="Read More"
                    variant="primary"
                    href={item.link}
                    className="bg-[#134093] hover:bg-[#0e2f6d] text-white rounded-[5px] px-6 py-2.5 font-semibold text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestNews;
