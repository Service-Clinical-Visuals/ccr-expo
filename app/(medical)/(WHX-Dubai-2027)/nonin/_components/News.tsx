/**
 * News Section (What's New at Nonin)
 * Master Reference: Inogen Development Standards
 * Visuals: 4 News Cards (n1, n2, n3, n4), category/date, headline, excerpt, "Read More" button with yellow arrow.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";

const newsArticles = [
  {
    date: "October 15, 2026",
    title: "Forty Years of Building Trust in Medical Technology",
    excerpt: "By Aaron Lobbestael, Sr. Director of Advanced Technology Healthcare te...",
    image: "/medical/nonin/n1.webp",
    link: "#",
  },
  {
    date: "July 6, 2026",
    title: "Engineering the Standard",
    excerpt: "40 Years of Pulse Oximetry Innovation with Nonin Medical In 1986, Ph...",
    image: "/medical/nonin/n2.webp",
    link: "#",
  },
  {
    date: "June 23, 2026",
    title: "Clinical Perspectives: Gustavo Olguin",
    excerpt: "About the Series Clinical Perspectives is a series of interviews featu...",
    image: "/medical/nonin/n3.webp",
    link: "#",
  },
  {
    date: "June 2, 2026",
    title: "Nonin at 40: Strengthening a Legacy of Innovation and Trust",
    excerpt: "For four decades, Nonin Medical has helped shape the standard for non...",
    image: "/medical/nonin/n4.webp",
    link: "#",
  },
];

const News = () => {
  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10 sm:gap-14">

        {/* Section Header: Centered with xl:max-w-[70%] width limit */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <span className="text-[#2A96C2] font-heading font-bold text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl uppercase tracking-widest block">
            LATEST NEWS &amp; UPDATES
          </span>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-[32px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-black"
          >
            What's New at Nonin
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-[#111111]"
          >
            Stay updated with Nonin's latest announcements, product innovations and industry developments, showcasing our ongoing commitment to advancing patient monitoring and improving healthcare worldwide.
          </Typography>
        </div>

        {/* 4 Cards Grid: 1 col on mobile, 2 cols on tablet up to 1023px, 4 cols on desktop (lg:grid-cols-4) */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {newsArticles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[5px] overflow-hidden shadow-[0px_1px_2px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] flex flex-col justify-between group hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="w-full h-[220px] sm:h-[250px] overflow-hidden bg-gray-50 border-b border-[#2A96C2]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="space-y-2">
                  <span className="text-[#2A96C2] text-xs font-bold font-body uppercase tracking-wider block">
                    {article.date}
                  </span>

                  <Typography
                    variant="h4"
                    color="dark"
                    className="text-base sm:text-lg lg:text-xl font-semibold text-black leading-snug line-clamp-2"
                  >
                    {article.title}
                  </Typography>

                  <Typography
                    variant="p"
                    color="muted"
                    className="text-xs sm:text-sm text-[#111111] leading-relaxed line-clamp-2"
                  >
                    {article.excerpt}
                  </Typography>
                </div>

                <div className="pt-2">
                  <Button
                    text="Read More"
                    href={article.link}
                    showIcon={true}
                    className="px-4 py-2 text-xs sm:text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link on Right */}
        <div className="w-full flex justify-end pt-2">
          <Link
            href="#news"
            className="text-[#2A96C2] hover:text-[#1e7ba2] transition-colors inline-block"
          >
            <Typography
              variant="p"
              className="!text-[#2A96C2] hover:!text-[#1e7ba2] font-bold underline transition-colors"
            >
              View All
            </Typography>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default News;

