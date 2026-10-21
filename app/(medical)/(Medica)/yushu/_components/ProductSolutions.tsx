"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductSolutions() {
  const products = [
    {
      name: "ENT",
      title: "ENT Solutions",
      image: "/medical/yushu/p1.webp",
      alt: "ENT Endoscopic Examination",
      link: "#products",
    },
    {
      name: "UROLOGY",
      title: "Urology Solutions",
      image: "/medical/yushu/p2.webp",
      alt: "Urology Surgical Procedure",
      link: "#products",
    },
    {
      name: "GYNECOLOGY",
      title: "Gynecology Solutions",
      image: "/medical/yushu/p3.webp",
      alt: "Gynecology Clinical Solutions",
      link: "#products",
    },
  ];

  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
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
              OUR PRODUCT SOLUTIONS
            </Typography>
          </div>

          {/* Heading */}
          <Typography variant="h2" color="dark" className="xl:max-w-[70%] max-w-[90%] mx-auto">
            Innovative Solutions for Modern Healthcare
          </Typography>

          {/* Description */}
          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed xl:max-w-[70%] max-w-[90%] mx-auto text-center"
          >
            Explore our medical devices for ENT, Urology, and Gynecology, combining innovation,
            quality, and practical solutions to support healthcare professionals and patient care.
          </Typography>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 mt-4">
          {products.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-gray-50 border border-gray-100 cursor-pointer ${
                index === products.length - 1 && products.length % 2 !== 0
                  ? "md:col-span-2 md:w-[calc(50%-0.75rem)] md:mx-auto lg:col-span-1 lg:w-full"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Card Image Container */}
              <div className="w-full aspect-[1/1.12] overflow-hidden relative">
                {/* Base Image */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0B7A75]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6 min-[2500px]:p-10">
                  {/* Floating Glass Card */}
                  <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-xl min-[2500px]:rounded-2xl p-3.5 sm:p-5 min-[2500px]:p-8 min-[3800px]:p-10 flex items-end justify-between text-white shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    {/* Left: Product Name & White Accent Bar */}
                    <div className="flex flex-col gap-1.5 min-[2500px]:gap-3">
                      <span className="font-bold text-sm sm:text-[1.0625rem] min-[2500px]:text-[1.6rem] min-[3800px]:text-[2.125rem] tracking-wider uppercase text-white font-primary leading-tight">
                        {item.name}
                      </span>
                      <div className="w-4 sm:w-5 min-[2500px]:w-9 min-[3800px]:w-14 h-[2px] min-[2500px]:h-[3px] min-[3800px]:h-[4px] bg-white rounded-full"></div>
                    </div>

                    {/* Right: View All Link */}
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1.5 sm:gap-2 min-[2500px]:gap-3 text-white hover:text-white/80 font-medium text-xs sm:text-[1.0625rem] min-[2500px]:text-[1.6rem] min-[3800px]:text-[2.125rem] tracking-wide transition-colors pb-0.5"
                    >
                      <span>View All</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 shrink-0" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
