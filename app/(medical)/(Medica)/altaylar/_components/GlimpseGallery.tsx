"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";

const BLOGS = [
  {
    image: "/medical/altaylar/b1.webp",
    title: "Surgical Techniques that Requires Use of Paha...",
    description: "Polypropylene mesh is a versatile material with a wide range of applications across various industries due to its strength, durability, and resistance to chemicals and moisture.",
    link: "#"
  },
  {
    image: "/medical/altaylar/b2.webp",
    title: "Pahacel Overview",
    description: "Complementary details on WHAT / WHEN / WHERE / WHY / WHO / HOW Questions that may come to your mind!",
    link: "#"
  },
  {
    image: "/medical/altaylar/b3.webp",
    title: "Bactericidal Affect of Pahacel",
    description: "The test which shows the bactericidal effection of ORC, proves that PAHACEL ORC eliminates the growth of the microorganisms.",
    link: "#"
  }
];

export default function GlimpseGallery() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-25">

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-16 items-start">
          <div className="lg:col-span-5" data-aos="fade-right" data-aos-duration="600">
            <h4 className="text-[#07A1A8] section-text font-semibold font-inter mb-3 tracking-wide flex items-center gap-2">
              <span className="w-[12px] h-[12px] rounded-full bg-[#07A1A8]"></span> Scientific Articles
            </h4>
            <h2 className="section-title font-bold tracking-tight font-raleway text-[#202020] leading-snug">
              Altaylar Blog
            </h2>
          </div>
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-duration="600" data-aos-delay="100">
            <p className="section-text leading-relaxed font-inter font-regular text-[#404040]">
              Clinical insights, bactericidal test results, and surgical methodology guides developed by our biomedical research department. Explore evidence-based research, laboratory findings, antimicrobial efficacy data, surgical protocols, procedural methodologies.
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {BLOGS.map((blog, idx) => (
            <div
              key={idx}
              className="border-1 border-[#71717A] rounded-[10px] flex flex-col bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={idx * 150}
            >
              <div className="w-full h-full relative overflow-hidden p-5 pb-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-[8px] transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/medical/fentex/about.webp"; // Fallback image
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-raleway font-semibold text-[#202020] card-title mb-4 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="font-inter font-regular text-[#404040] section-text leading-relaxed mb-6 flex-grow line-clamp-4">
                  {blog.description}
                </p>

                <div className="mt-auto">
                  <Link href={blog.link} className="font-raleway underline font-semibold section-text text-[#07A1A8] hover:underline transition-colors">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
          <Button
            href="#all-blogs"
            variant="outline"
            showArrow={false}
            className="!w-auto !px-8 border !border-[#07A1A8] !text-[#07A1A8] hover:!bg-[#07A1A8] hover:!text-white rounded-[8px]"
          >
            <span className="font-raleway font-semibold btn-text">View All Our Blogs</span>
          </Button>
        </div>

      </div>
    </section>
  );
}
