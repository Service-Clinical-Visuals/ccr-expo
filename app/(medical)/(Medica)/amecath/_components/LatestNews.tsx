"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleDot, ArrowRight } from "lucide-react";
import Button from "./Button";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  href: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "AMECATH Annual Meeting 2023",
    date: "08 Jun 2023",
    image: "/medical/amecath/b1.png",
    href: "#news-1",
  },
  {
    id: 2,
    title: "AMECATH 1st Annual Egypt Distributor...",
    date: "11 Oct 2022",
    image: "/medical/amecath/b2.png",
    href: "#news-2",
  },
  {
    id: 3,
    title: "AMECATH raises Breast Cancer Awaren...",
    date: "15 Nov 2022",
    image: "/medical/amecath/b3.png",
    href: "#news-3",
  },
  {
    id: 4,
    title: "Medical Fair Asia , Singapore 202...",
    date: "11 Sep 2024",
    image: "/medical/amecath/b4.png",
    href: "#news-4",
  },
];

export default function LatestNews() {
  return (
    <section className="py-14 sm:py-18 md:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Header Section */}
        <div className="text-center max-w-7xl lg:max-w-5xl mx-auto mb-10 sm:mb-14 md:mb-16">
          {/* Subtitle / Tag */}
          <div
            className="inline-flex items-center gap-2 text-[#155184] font-medium section-subtitle mb-3"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <CircleDot className="w-5 h-5 text-[#155184]" />
            <span className="font-raleway section-subtitle font-semibold tracking-wide">
              Latest News &amp; Updates
            </span>
          </div>

          {/* Section Heading in Raleway */}
          <h2
            className="section-title font-semibold text-black font-raleway tracking-tight leading-snug mb-4 sm:mb-5"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            Stay Informed with Our Latest Innovations, Events, and Industry Developments
          </h2>

          {/* Description in Inter */}
          <p
            className="section-text text-slate-600 font-inter leading-relaxed mb-6 sm:mb-8"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            Explore the latest updates from our company, including product innovations, global events, and industry insights. Stay connected with our journey as we continue to advance healthcare solutions and strengthen our presence worldwide. Discover how we are shaping the future of medical technology.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {NEWS_ITEMS.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={(index + 1) * 100}
              className="group border border-slate-200 rounded-2xl bg-white p-3 sm:p-3.5 hover:border-[#155184] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Box */}
              <div>
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3.5 bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Card Title */}
                <h3 className="section-text font-semibold font-raleway text-slate-900 group-hover:text-[#155184] transition-colors duration-200 line-clamp-1 mb-3">
                  {item.title}
                </h3>
              </div>

              {/* Bottom Row: Date & Read More Link */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-2">
                <span className="section-subtitle text-[#404040] font-inter">
                  {item.date}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#155184] font-medium section-subtitle font-inter transition-all group-hover:gap-2">
                  Read More
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Centered Read More Button */}
        <div
          className="flex justify-center mt-10 sm:mt-12 md:mt-14"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <Button href="#news" variant="outline-primary">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
}
