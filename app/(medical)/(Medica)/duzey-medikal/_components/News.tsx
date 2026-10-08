"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { Calendar } from "lucide-react";

interface NewsItem {
  id: number;
  image: string;
  alt: string;
  date: string;
  title: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    image: "/medical/duzey-medikal/news1.webp",
    alt: "Medica Trade Fair",
    date: "13 Oct 2023",
    title: "We are at Medica Fair from November 15 to November 18, 2021",
    link: "#news",
  },
  {
    id: 2,
    image: "/medical/duzey-medikal/news2.webp",
    alt: "Arab Health Fair",
    date: "09 Aug 2019",
    title: "We are at Arab Health Fair from January 25 to January 28, 2016",
    link: "#news",
  },
];

export default function News() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeNews = newsData[selectedIndex];

  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">
        {/* Header */}
        <div
          className="flex flex-col items-center text-center gap-3 w-full xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-[5px] bg-[var(--color-primary)] rounded-[10px]" />
            <Typography
              variant="h4"
              color="primary"
              className="uppercase tracking-wider !font-bold text-sm"
            >
              NEWS &amp; UPDATES
            </Typography>
          </div>

          <Typography variant="h2" color="dark" className="leading-snug">
            Latest News &amp; Insights from Duzey Medical
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-sm sm:text-base pt-1"
          >
            Stay updated with Düzey Medical’s latest news, events, innovations, and developments across the global medical industry.
          </Typography>
        </div>

        {/* News Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 items-center w-full mt-2"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          {/* Featured News */}
          <div className="flex flex-col bg-white rounded-[10px] p-5 sm:p-6 shadow-[0_5px_15px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-full rounded-[6px] overflow-hidden border border-gray-200 bg-white p-3 min-h-[260px] sm:min-h-[290px] flex items-center justify-center">
              <img
                src={activeNews.image}
                alt={activeNews.alt}
                className="w-full h-auto object-contain max-h-[300px] transition-all duration-300"
              />
            </div>

            <div className="flex items-center gap-2 mt-5 text-[#333333] text-sm font-bold">
              <Calendar className="w-4 h-4 text-[#191919]" />
              <span>{activeNews.date}</span>
            </div>

            <Typography
              variant="h4"
              color="dark"
              className="!font-bold text-lg sm:text-xl leading-snug mt-2"
            >
              {activeNews.title}
            </Typography>

            <div className="mt-4 flex justify-end">
              <Link
                href={activeNews.link}
                className="text-[var(--color-primary)] font-bold text-sm sm:text-base underline uppercase tracking-wide hover:text-[var(--color-primary-hover)] transition-colors"
              >
                READ MORE
              </Link>
            </div>
          </div>

          {/* News List */}
          <div className="flex flex-col justify-center gap-5 sm:gap-6 w-full">
            {newsData.map((item, index) => {
              const isSelected = selectedIndex === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedIndex(index)}
                  className={`flex flex-col sm:flex-row items-center gap-5 p-4 sm:p-5 bg-white rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? "border border-[var(--color-primary)]"
                      : "border border-gray-100 hover:border-gray-300"
                  }`}
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 min-[2500px]:w-44 min-[2500px]:h-44 aspect-square shrink-0 rounded-[6px] overflow-hidden border border-gray-200 p-2 bg-white flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col flex-1 w-full gap-2">
                    <div className="flex items-center gap-2 text-[#333333] text-sm font-bold">
                      <Calendar className="w-4 h-4 text-[#191919]" />
                      <span>{item.date}</span>
                    </div>
                    <Typography
                      variant="p"
                      color="dark"
                      className="!font-bold text-base leading-snug"
                    >
                      {item.title}
                    </Typography>
                    <div className="mt-1 flex justify-end">
                      <span className="text-[var(--color-primary)] font-bold text-sm underline uppercase tracking-wide hover:text-[var(--color-primary-hover)] transition-colors">
                        READ MORE
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-1">
              <Button
                text="View All"
                variant="primary"
                href="#news"
                showIcon={false}
                className="px-8 py-3 rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
