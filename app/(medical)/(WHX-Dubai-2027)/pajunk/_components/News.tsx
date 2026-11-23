/**
 * News / Latest Insights Section - PAJUNK
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Section Header:
 *    - Constrained to `w-full max-w-full xl:max-w-[70%] mx-auto` for readable typography measure.
 * 2. 4-Card Responsive Grid:
 *    - Articles rendered using l1.png, l2.png, l3.png, l4.png.
 *    - Standardized image frame (aspect-[16/10] / aspect-[4/3]), date label in #5D6300, Title, Snippet, and "Read More" primary button.
 * 3. Bottom Action:
 *    - "Read All" navigation link with underline.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";

const newsArticles = [
  {
    image: "/medical/pajunk/l1.webp",
    date: "JULY 14, 2026",
    title: "In Memory of Heinrich Pajunk",
    snippet: "We mourn the passing of our co-founder Heinrich Pajunk.",
    link: "#news",
  },
  {
    image: "/medical/pajunk/l2.webp",
    date: "JULY 02, 2026",
    title: "PAJUNK® Recognized as TOP100 Innovator",
    snippet: "The award underscores PAJUNK’s long-term commitment to innovation.",
    link: "#news",
  },
  {
    image: "/medical/pajunk/l3.webp",
    date: "JAN 21, 2026",
    title: "PAJUNK® Recognized by NYSORA for Innovation.",
    snippet: "30,000+ NYSORA members voted: Recognition for Innovation in Regional Anesthesia.",
    link: "#news",
  },
  {
    image: "/medical/pajunk/l4.webp",
    date: "DEC 22, 2025",
    title: "PAJUNK® Among Germany’s Best Employers 2025",
    snippet: "Handelsblatt ranking highlights PAJUNK’s strong corporate culture and…",
    link: "#news",
  },
];

const News = () => {
  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 sm:gap-14">
        
        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="tag-badge"
            color="primary"
            className="tracking-widest text-xs sm:text-sm font-semibold !text-[#144835]"
          >
            LATEST INSIGHTS &amp; UPDATES
          </Typography>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#000000]"
          >
            Exploring Innovation. Sharing Knowledge.
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#111111]"
          >
            Stay informed with the latest developments, expert perspectives and innovations in medical technology. Explore PAJUNK's updates, clinical insights and industry advancements.
          </Typography>
        </div>

        {/* 4 Article Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 2k:gap-10 4k:gap-14 items-stretch">
          {newsArticles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[6px] 2k:rounded-xl 4k:rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Media Frame */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content Body */}
              <div className="p-4 sm:p-5 lg:p-6 2k:p-9 4k:p-12 flex flex-col justify-between flex-1 gap-3 sm:gap-4 2k:gap-8 4k:gap-10">
                <div className="space-y-1.5 sm:space-y-2 2k:space-y-4 4k:space-y-6">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#5D6300] uppercase block">
                    {article.date}
                  </span>

                  <Typography
                    variant="h3"
                    color="dark"
                    className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-[#000000] leading-snug line-clamp-2"
                  >
                    {article.title}
                  </Typography>

                  <Typography
                    variant="p"
                    color="muted"
                    className="text-xs sm:text-sm text-[#111111] leading-relaxed line-clamp-3"
                  >
                    {article.snippet}
                  </Typography>
                </div>

                <div className="pt-2 2k:pt-4 4k:pt-6">
                  <Button
                    text="Read More"
                    variant="primary"
                    href={article.link}
                    showIcon={true}
                    className="!py-1.5 !px-3 sm:!py-2 sm:!px-4 2k:!py-3.5 2k:!px-8 4k:!py-5 4k:!px-12 text-xs font-semibold"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="text-right pt-2" data-aos="fade-up">
          <Link
            href="#news"
            className="inline-flex items-center gap-1.5 text-base sm:text-lg font-semibold text-[#144835] hover:text-[#0E3225] underline underline-offset-4 transition-colors"
          >
            Read All
          </Link>
        </div>

      </div>
    </section>
  );
};

export default News;

