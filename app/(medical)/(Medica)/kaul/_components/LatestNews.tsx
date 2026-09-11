"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";

const NEWS_ITEMS = [
  {
    id: 1,
    title: "The Evolution of Surgical Power Tools: Enhancing Precision in Modern Surgery",
    desc: "Surgical power tools have become an essential part of modern operating rooms, allowing surgeons to perform complex process",
    image: "/medical/kaul/i1.png",
    href: "#news-1",
  },
  {
    id: 2,
    title: "The Role of 3D Printing in Orthopedic Surgery: Advancing Patient Care",
    desc: "The integration of 3D printing into orthopedic surgery has transformed the way implants, prosthetics, and surgical tools",
    image: "/medical/kaul/i2.png",
    href: "#news-2",
  },
  {
    id: 3,
    title: "Global Trends in Trauma Surgery: What Surgeons Need to Know",
    desc: "Discover the latest global trends in trauma surgery, from minimally invasive techniques and AI-assisted diagnostics to be ...",
    image: "/medical/kaul/i3.png",
    href: "#news-3",
  },
];

export default function LatestNews() {
  return (
    <section className="py-14 sm:py-18 md:py-24 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Header Section */}
        <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="600">
            <div className="w-12 h-[1px] bg-[#FCC100]"></div>
            <span className="font-poppins text-[#FCC100] section-subtitle font-semibold tracking-wide uppercase">
              Insights & Research
            </span>
            <div className="w-12 h-[1px] bg-[#FCC100]"></div>
          </div>

          <h2 className="section-title font-semibold text-[#71797C] font-poppins tracking-tight leading-tight mb-4 sm:mb-6" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
            Advancing Healthcare through Knowledge
          </h2>

          <p className="section-text text-[#404040] font-normal font-inter leading-relaxed max-w-5xl mx-auto" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
            We combine clinical expertise with continuous research to deliver insights that drive smarter surgical decisions. Our focus on innovation, data, and real-world application helps improve outcomes and advance modern healthcare solutions.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {NEWS_ITEMS.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={(index + 1) * 100}
              className="flex flex-col group"
            >
              {/* Image Box */}
              <div className="relative w-full aspect-[1.6] rounded-xl overflow-hidden mb-6 bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Card Title */}
              <h3 className="header-link font-semibold font-poppins text-[#71797C] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#404040] font-inter section-text leading-relaxed mb-6 flex-grow">
                {item.desc}
              </p>

              {/* Read More Button */}
              <div>
                <Button href={item.href} variant="outline-primary">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
