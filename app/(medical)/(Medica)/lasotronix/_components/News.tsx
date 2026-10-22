"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Calendar } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      title: "Lasotronix At The 13th International Conference...",
      date: "October 20, 2026",
      image: "/medical/lasotronix/news1.webp",
      link: "#news",
    },
    {
      title: "Lasotronix At The 17th International Congress...",
      date: "October 20, 2026",
      image: "/medical/lasotronix/news2.webp",
      link: "#news",
    },
    {
      title: "Lasotronix At WawaDent 2026",
      date: "October 19, 2026",
      image: "/medical/lasotronix/news3.webp",
      link: "#news",
    },
  ];

  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-[#272727] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 xl:gap-14">
        {/* Centered Header */}
        <div
          className="flex flex-col items-center text-center gap-4 max-w-full lg:max-w-[75%] mx-auto"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-3">
            <Typography variant="h2" color="white" className="capitalize tracking-[0.8px]">
              Latest News & Events
            </Typography>
            <div className="w-[62px] h-[6px] bg-[var(--color-primary)] rounded-full shrink-0"></div>
          </div>

          <Typography variant="p" color="white" className="leading-relaxed font-normal">
            Stay up to date with the latest news, industry events, and innovations from LASOTRONIX.
            Discover our participation in international conferences, exhibitions, and professional
            gatherings shaping the future of medical and dental laser technology.
          </Typography>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20"></div>

        {/* 3 News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-[#121111] border border-white/40 rounded-[20px] p-5 shadow-lg group hover:border-[var(--color-primary)] transition-all duration-300 md:last:col-span-2 md:last:w-[calc(50%-12px)] md:last:mx-auto lg:last:w-full lg:last:col-span-1"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Inner Image Container */}
              <div className="w-full aspect-[4/3] rounded-[15px] overflow-hidden border border-white/15 bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Block */}
              <div className="flex flex-col gap-3 mt-5">
                <Typography variant="h3" color="white" className="tracking-[0.8px] font-normal line-clamp-1">
                  {item.title}
                </Typography>

                <div className="flex items-center gap-2 text-white/80">
                  <Calendar className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  <Typography variant="p" color="white" className="font-normal text-white/80">
                    {item.date}
                  </Typography>
                </div>

                <div className="pt-2">
                  <Link href={item.link} className="inline-block group/link">
                    <Typography
                      variant="p"
                      color="primary"
                      className="font-semibold underline underline-offset-4 group-hover/link:text-[var(--color-primary-hover)] transition-colors"
                    >
                      Read More &gt;
                    </Typography>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
