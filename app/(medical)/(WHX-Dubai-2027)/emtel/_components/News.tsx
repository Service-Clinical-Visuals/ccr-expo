"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { Calendar } from "lucide-react";

interface NewsItem {
  id: string;
  category: string;
  date: string;
  title: string;
  image: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    id: "medica-2026",
    category: "EVENT",
    date: "01/10/2026",
    title: "The MEDICA 2026 trade fair is ahead of us",
    image: "/medical/emtel/n1.webp",
    link: "#news",
  },
  {
    id: "whx-dubai-2025",
    category: "EVENT",
    date: "17/12/2025",
    title: "Invitation to the World Health Expo in Dubai",
    image: "/medical/emtel/n2.webp",
    link: "#news",
  },
  {
    id: "medica-thank-you",
    category: "EVENT",
    date: "25/11/2025",
    title: "Thank you for visiting us at MEDICA",
    image: "/medical/emtel/n3.webp",
    link: "#news",
  },
];

/**
 * News Section - EMTEL
 *
 * ARCHITECTURAL REFERENCE:
 * 1. 70% Max-Width Strategy:
 *    - Applied specifically to the headings and subheadings text (`xl:max-w-[70%]`).
 * 2. 3-Card Events Grid:
 *    - Event badges, dates, and titles with clean hover transitions.
 */
const News = () => {
  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Two-Column Layout: Left content vertically centered with right cards */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-12 w-full">
          
          {/* Left Column: Heading & Intro Copy (Vertically centered) */}
          <div
            className="w-full lg:w-[29%] flex flex-col gap-5 sm:gap-6 justify-center"
            data-aos="fade-right"
          >
            {/* Tag / Eyebrow: 70% max-width on xl */}
            <p className="text-[#0F78AF] text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase font-primary w-full max-w-full xl:max-w-[70%]">
              LATEST NEWS &amp; UPDATES
            </p>

            {/* Section Heading: 70% max-width on xl */}
            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#111827] w-full max-w-full xl:max-w-[70%]"
            >
              The Latest from EMTEL
            </Typography>

            {/* Paragraph: Natural column width */}
            <Typography
              variant="p"
              color="secondary"
              className="text-sm sm:text-base leading-relaxed text-[#0F2744]/80 w-full"
            >
              Stay up to date with EMTEL's latest developments, product innovations, medical exhibitions and company activities. Explore our news and announcements to discover how we continue to contribute to the evolving medical technology industry.
            </Typography>

            <div className="pt-2">
              <Button
                text="View All News"
                variant="primary"
                href="#news"
                className="bg-[#0F78AF] hover:bg-[#0C6492] text-white px-7 py-3 rounded-[20px] font-semibold text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Right Column: 3 News Cards (Expanded size) */}
          <div
            className="w-full lg:w-[71%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6"
            data-aos="fade-left"
          >
            {newsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Visual Image Banner (Figma: n1, n2, n3) */}
                <div className="w-full aspect-[364/195] rounded-xl overflow-hidden bg-gray-100 shadow-inner group-hover:scale-[1.02] transition-transform relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Event Tag + Date */}
                <div className="flex items-center justify-between gap-2 mt-4 sm:mt-5">
                  <span className="bg-[#E0F2FE] text-[#0F2744] text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-md tracking-wider">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs text-[#0F2744]/75">
                    <Calendar className="w-3.5 h-3.5 text-[#0F78AF]" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg lg:text-[19px] font-bold font-primary text-[#111827] mt-3 group-hover:text-[#0F78AF] transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>

                {/* Read More Link */}
                <div className="mt-4 pt-2">
                  <Link
                    href={item.link}
                    className="text-sm font-medium text-[#0F78AF] hover:text-[#0C6492] underline underline-offset-4 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default News;
