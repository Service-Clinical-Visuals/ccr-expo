"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import Button from "./Button";
import { Calendar } from "lucide-react";

interface NewsItem {
  id: string;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: "tempocol",
    image: "/medical/will-pharma/news1.png",
    date: "FEB 12 , 2022",
    title: "RESEARCH RESULTS ON THE EFFECTIVENESS OF TEMPOCOL",
    excerpt:
      "In a recent scientific study, MUMC+ researchers studied the effect of peppermint oil, demonstrating that peppermint oil capsules can help reduce IBS symptoms.",
    link: "#news",
  },
  {
    id: "d-vital",
    image: "/medical/will-pharma/news2.png",
    date: "JAN 01 , 2020",
    title: "NEW: D-VITAL CALCIUM K 180 CAPS",
    excerpt:
      "D-vital® calcium combines calcium, vitamin D3, and vitamin K2 to support bone health. It is suitable for women during growth, pregnancy, menopause, and for older adults.",
    link: "#news",
  },
];

export default function News() {
  return (
    <section id="news" className="w-full py-16 sm:py-20 xl:py-28 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10 sm:gap-12 min-[3800px]:gap-20">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center gap-3 sm:gap-4 w-full xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <Typography
            variant="h4"
            color="accent"
            className="uppercase !font-bold tracking-wider"
          >
            PHARMA NEWS
          </Typography>

          <Typography
            variant="h2"
            color="dark"
            className="!font-bold text-[#333333]"
          >
            Information from our ever-changing market.
          </Typography>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full">
          {newsItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-[10px] min-[3800px]:rounded-[20px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row items-stretch"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="w-full sm:w-[45%] h-56 sm:h-auto min-h-[240px] relative shrink-0 bg-gray-50 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
                    item.id === "tempocol" ? "object-left" : "object-center"
                  }`}
                />
              </div>

              <div className="w-full sm:w-[55%] p-6 sm:p-7 min-[3800px]:p-10 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-[#333333]">
                    <Calendar className="w-4 h-4 min-[3800px]:w-7 min-[3800px]:h-7 text-[#698A7F] shrink-0" />
                    <span className="font-bold text-xs sm:text-sm min-[3800px]:text-xl uppercase tracking-wider text-[#333333]">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#333333] uppercase text-base sm:text-lg min-[2500px]:text-xl min-[3800px]:text-2xl leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm min-[2500px]:text-base min-[3800px]:text-xl text-[#4B5563] leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <Link
                    href={item.link}
                    className="text-[#698A7F] font-bold continue-reading-btn uppercase underline underline-offset-4 tracking-wider hover:text-[#56736A] transition-colors"
                  >
                    CONTINUE READING
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div data-aos="fade-up" className="pt-2">
          <Button
            text="View All"
            href="#news"
            variant="primary"
            showIcon={false}
            className="!px-8 !py-2.5 min-[3800px]:!py-5 min-[3800px]:!px-14 text-sm sm:text-base min-[3800px]:text-3xl"
          />
        </div>
      </div>
    </section>
  );
}
