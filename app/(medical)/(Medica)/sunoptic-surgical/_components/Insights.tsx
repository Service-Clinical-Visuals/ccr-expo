"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const blogs = [
  {
    title: "Surgical Lighting Built for Long-Term Performance",
    desc: "Investing in surgical lighting equipment means investing in consistent performance, surgeon confidence, and patient...",
    image: "/medical/sunoptic-surgical/l1.webp",
    link: "#",
  },
  {
    title: "Employee Spotlight: Edina — 28 Years of Getting It Right",
    desc: "Some people do their jobs well. Others help raise the standard for everyone around them. Edina is one of those",
    image: "/medical/sunoptic-surgical/l2.webp",
    link: "#",
  },
  {
    title: "LED vs. Xenon: Why Choose Xenon Light",
    desc: "Accurate visualization is essential in medical procedures. When surgeons and other team members can see clearly, their work produces the",
    image: "/medical/sunoptic-surgical/l3.webp",
    link: "#",
  },
];

/**
 * Insights Section - Sunoptic Surgical
 * Matches Figma specifications:
 * - White Background.
 * - Centered Header.
 * - 3 Blog Cards (l1.png, l2.png, l3.png) with aspect-[16/10] and object-cover.
 * - Read All underline links in sky blue #0284C7.
 * - Bottom right Read All Blogs link.
 */
const Insights = () => {
  return (
    <section id="insights" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Section Header: Centered with xl:max-w-[70%] line measure */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="eyebrow"
            className="!text-[#409BBD] font-semibold text-sm sm:text-base tracking-wider"
          >
            LATEST INSIGHTS &amp; UPDATES
          </Typography>

          <Typography
            variant="h2"
            color="secondary"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Palanquin',sans-serif] text-[#0A192F]"
          >
            Explore Insights in Surgical Innovation
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#444444] font-['DM_Sans',sans-serif]"
          >
            Stay informed with the latest articles, industry developments and expert insights from Sunoptic Surgical. Explore topics covering surgical illumination, advanced visualization technologies, product innovations and developments shaping the future of modern healthcare.
          </Typography>
        </div>

        {/* 3 Blog Cards Grid */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 2k:gap-12 mt-12 sm:mt-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[5px] overflow-hidden shadow-[0px_1px_2px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image with explicit aspect-[16/10] and object-cover */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 2k:p-8">
                  <h3 className="font-['Palanquin',sans-serif] font-bold text-lg sm:text-xl 2k:text-2xl 4k:text-3xl text-[#0B1C30] mb-3 leading-snug line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="font-['DM_Sans',sans-serif] text-sm 2k:text-base 4k:text-lg text-[#111111]/80 leading-relaxed line-clamp-3">
                    {blog.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 2k:px-8 pb-6 2k:pb-8 pt-0">
                <Link
                  href={blog.link}
                  className="font-['Palanquin',sans-serif] font-semibold text-sm sm:text-base 2k:text-xl 4k:text-2xl text-[#0284C7] underline underline-offset-4 hover:text-[#0A192F] transition-colors"
                >
                  Read All
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Right "Read All Blogs" Link */}
        <div className="w-full flex justify-end mt-8 2k:mt-12">
          <Link
            href="#insights"
            className="text-[#0284C7] hover:text-[#0A192F] font-['Palanquin',sans-serif] font-semibold text-base 2k:text-xl 4k:text-2xl underline underline-offset-4 transition-colors"
          >
            Read All Blogs
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Insights;
