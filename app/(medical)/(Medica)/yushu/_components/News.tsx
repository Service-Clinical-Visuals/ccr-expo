"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function News() {
  const newsItems = [
    {
      image: "/medical/yushu/n1.webp",
      tag: "NEWS #1",
      date: "NOVEMBER 17 - 20",
      title: "We will be present at MEDICA 2025!",
      description:
        "We're pleased to announce that Yushu Healthcare will be attending the MEDICA trade show in November!",
      link: "#",
    },
    {
      image: "/medical/yushu/n2.webp",
      tag: "NEWS #2",
      date: "OCTOBER 28 - 31",
      title: "We will be at the 99th SIU National Congress!",
      description:
        "We will introduce you to the LUCIO System®, our integrated cystoscopy system with the sterile disposable Cover-URO®",
      link: "#",
    },
    {
      image: "/medical/yushu/n3.webp",
      tag: "NEWS #3",
      date: "May 24th",
      title: "SIO National Congress 2024",
      description:
        "Yushu Healthcare will be present with a major event on May 24th; from 12:00 PM to 1:00 PM,...",
      link: "#",
    },
  ];

  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-16">
        {/* Header Content */}
        <div
          className="flex flex-col items-center text-center gap-3 w-full xl:max-w-[70%] max-w-[90%] mx-auto"
          data-aos="fade-up"
        >
          {/* Eyebrow Tag */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-[3px] bg-[var(--color-primary)] rounded-full"></div>
            <Typography
              variant="h4"
              color="primary"
              className="uppercase !font-semibold tracking-wider text-sm sm:text-base"
            >
              NEWS & UPDATES
            </Typography>
          </div>

          {/* Heading */}
          <Typography variant="h2" color="dark" className="xl:max-w-[70%] max-w-[90%] mx-auto">
            Discover the Latest from YUSHU Healthcare
          </Typography>

          {/* Description */}
          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed xl:max-w-[70%] max-w-[90%] mx-auto text-center"
          >
            Stay updated with the latest news, innovations, product developments, and events from
            YUSHU Healthcare. Discover our latest activities and advancements in medical technology.
          </Typography>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 mt-4">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`group flex flex-col rounded-2xl p-4 sm:p-5 bg-white border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 ${
                index === newsItems.length - 1 && newsItems.length % 2 !== 0
                  ? "md:col-span-2 md:w-[calc(50%-0.75rem)] md:mx-auto lg:col-span-1 lg:w-full"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Card Image */}
              <div className="w-full aspect-[2/1] rounded-xl overflow-hidden bg-gray-100 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Meta Row: Tag & Date */}
              <div className="flex items-center justify-between pt-4 pb-2">
                <span className="text-[var(--color-primary)] text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-semibold tracking-wide uppercase">
                  {item.tag}
                </span>
                <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3.5 text-gray-500 text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl">
                  <Calendar className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-gray-400 shrink-0" />
                  <span>{item.date}</span>
                </div>
              </div>

              {/* Title */}
              <Typography
                variant="h3"
                color="dark"
                className="font-bold text-base sm:text-lg leading-snug line-clamp-2 mt-1"
              >
                {item.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="p"
                color="muted"
                className="text-sm sm:text-base leading-relaxed text-gray-600 line-clamp-3 mt-2 font-normal"
              >
                {item.description}
              </Typography>

              {/* Read More Link */}
              <div className="mt-auto pt-5 flex justify-end">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3.5 text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-bold font-primary underline underline-offset-4 transition-all duration-200 group-hover:gap-2.5"
                >
                  <span className="font-primary">Read More</span>
                  <ArrowRight className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
