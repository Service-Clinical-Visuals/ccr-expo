"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    image: "/moto/bardahl/n1.webp",
    title: "ELVI HYGIENE HOME CARE We At ELVI Bardahl...",
    date: "2021-06-30",
    link: "#",
  },
  {
    image: "/moto/bardahl/n2.webp",
    title: "ELVI Bardahl Launches CERAFENCE Ceramic Coat",
    date: "2020-10-30",
    link: "#",
  },
  {
    image: "/moto/bardahl/n3.webp",
    title: "ELVI Bardahl Supports Computer Shiksha...",
    date: "2019-08-05",
    link: "#",
  },
];

const News = () => {
  return (
    <section id="news" className="w-full pt-16 xl:pt-24 pb-8 xl:pb-12 bg-[#121111] overflow-hidden relative">
      <div className="custom-container relative z-10 flex flex-col gap-8 xl:gap-10">
        {/* Top Header Block with Watermark */}
        <div className="relative pt-6 sm:pt-8 md:pt-10 pb-0" data-aos="fade-up">
          {/* Giant Watermark directly positioned behind header text on mobile/tablet, keeping desktop layout */}
          <div className="absolute top-1 sm:top-2 md:top-4 xl:top-auto xl:bottom-0 left-0 pointer-events-none select-none z-0 max-w-[95%] sm:max-w-[90%] xl:max-w-[80%] overflow-hidden flex items-start xl:items-end">
            <span className="watermark !text-[clamp(44px,8.5vw,185px)] min-[2500px]:!text-[270px] min-[3800px]:!text-[380px] leading-none">
              latest news
            </span>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-[90%] xl:max-w-[80%]">
              <Typography
                variant="h2"
                color="white"
                className="text-2xl sm:text-3xl lg:text-[38px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-normal uppercase tracking-wide leading-tight w-full max-w-[90%] xl:max-w-[80%]"
              >
                Elvi Bardahl - Latest News
              </Typography>

              <Typography
                variant="p"
                color="muted"
                className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl leading-relaxed text-gray-300 font-normal w-full max-w-[90%] xl:max-w-[80%]"
              >
                Stay updated with the latest developments, product innovations, and company initiatives from ELVI
                Bardahl. Explore updates on automotive care solutions, advanced coating technologies, hygiene
                products, and community initiatives, reflecting the company’s ongoing commitment to quality,
                innovation, and customer satisfaction.
              </Typography>
            </div>

            {/* Circular Action Button */}
            <div className="shrink-0 self-start lg:self-center">
              <Button
                variant="circle"
                href="#news"
                iconDirection="up-right"
                aria-label="View all news"
              />
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/20" />

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {newsItems.map((item, index) => {
            const isOddOnMd = newsItems.length % 2 !== 0 && index === newsItems.length - 1;
            const isOddOnLg = newsItems.length % 3 === 1 && index === newsItems.length - 1;

            return (
              <div
                key={index}
                className={`bg-[#121111] border border-white/20 hover:border-white/40 rounded-[20px] p-5 sm:p-6 shadow-xl flex flex-col justify-between gap-5 transition-all duration-300 hover:-translate-y-1 group ${isOddOnMd ? "md:col-span-2 md:w-full md:max-w-[calc(50%-12px)] md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0" : ""
                  } ${isOddOnLg ? "lg:col-span-3 lg:max-w-[calc(33.333%-16px)] lg:mx-auto" : ""
                  }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Card Image */}
                <div className="w-full aspect-[16/10] rounded-[15px] overflow-hidden bg-black/40 border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Title */}
                <Typography
                  variant="h4"
                  color="white"
                  className="font-primary text-lg sm:text-xl min-[2500px]:text-2xl tracking-wide uppercase line-clamp-1"
                >
                  {item.title}
                </Typography>

                {/* Date with yellow calendar icon */}
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-5 h-5 text-[#F8EA17] shrink-0" strokeWidth={2} />
                  <span className="font-secondary text-sm sm:text-base text-white/90">
                    {item.date}
                  </span>
                </div>

                {/* Read More Link */}
                <div className="pt-1">
                  <Link
                    href={item.link}
                    className="text-[#F8EA17] hover:text-[#fffb40] font-secondary font-semibold text-base sm:text-lg underline decoration-[#F8EA17] underline-offset-4 transition-colors inline-flex items-center gap-1"
                  >
                    Read More &gt;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
