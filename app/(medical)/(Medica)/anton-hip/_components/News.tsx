"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    id: "eacmfs-pre-congress",
    title: "28th EACMFS Pre Congress Day Advanced Workshop in TMJ Arthroscopy",
    description:
      "Anton Hipp highlights the importance of advanced surgical techniques and medical innovation at the 28th EACMFS Pre-Congress Day Advanced Workshop in TMJ Arthroscopy.",
    image: "/medical/anton-hip/n1.png",
    href: "#contact",
  },
  {
    id: "eacmfs-congress",
    title: "28th EACMFS Congress",
    description:
      "The 28th EACMFS Congress brings together experts in oral and maxillofacial surgery to share knowledge, explore clinical advancements, and discuss emerging technologies in the field. Discover the latest developments in surgical practice and connect with professionals dedicated to advancing patient care.",
    image: "/medical/anton-hip/n1.png",
    href: "#contact",
  },
];

export default function News() {
  return (
    <section id="news" className="w-full py-16 md:py-24 min-[3800px]:py-36 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[85%] min-[3800px]:max-w-6xl mx-auto mb-10 sm:mb-14 min-[3800px]:mb-20" data-aos="fade-up">
          <Typography variant="h2" color="dark" weight="bold" className="text-center">
            Latest from Anton
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-center mt-3.5 sm:mt-4 min-[3800px]:mt-6 leading-relaxed"
          >
            Stay informed about the latest developments at Anton Hipp, including company updates, product innovations, industry events, and advancements in medical technology. Discover the milestones and initiatives shaping our commitment to precision and quality.
          </Typography>
        </div>

        {/* 2 News Cards Grid: each card locked to the 820x442 design ratio */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8 min-[3800px]:gap-12">
          {NEWS_ITEMS.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-[12px] min-[3800px]:rounded-[20px] overflow-hidden border border-gray-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:aspect-[820/442] w-full max-w-[820px] min-[2500px]:max-w-none mx-auto group"
            >
              {/* Left Column: Image */}
              <div className="w-full md:w-1/2 aspect-[410/442] md:aspect-auto md:h-full relative overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Right Column: Content */}
              <div className="w-full md:w-1/2 md:h-full p-6 sm:p-7 min-[3800px]:p-12 flex flex-col justify-between relative bg-white overflow-hidden">
                {/* Signature Vertical Accent Bar */}
                <div className="absolute top-6 right-6 min-[3800px]:top-12 min-[3800px]:right-12 w-[3px] min-[3800px]:w-[5px] h-14 sm:h-16 min-[3800px]:h-28 bg-[var(--color-primary)] rounded-full shrink-0" />

                <div>
                  <Typography
                    variant="h4"
                    color="dark"
                    weight="bold"
                    className="pr-6 min-[3800px]:pr-10 leading-snug"
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="p"
                    color="muted"
                    className="text-sm sm:text-base min-[3800px]:text-xl mt-3 sm:mt-4 min-[3800px]:mt-6 leading-relaxed line-clamp-4"
                  >
                    {item.description}
                  </Typography>
                </div>

                {/* Read More Link */}
                <div className="mt-5 sm:mt-6 min-[3800px]:mt-10 pt-2">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[var(--color-primary)] font-medium text-sm sm:text-base min-[3800px]:text-xl hover:opacity-85 transition-all group/link"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 min-[3800px]:w-7 min-[3800px]:h-7 transition-transform group-hover/link:translate-x-1" strokeWidth={2.2} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link (Bottom Right) */}
        <div className="w-full flex justify-end mt-6 sm:mt-8 min-[3800px]:mt-12">
          <Link
            href="#contact"
            className="text-[var(--color-primary)] text-sm sm:text-base min-[3800px]:text-xl font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
