/**
 * Products Section (OUR PRODUCT PORTFOLIO)
 * Master Reference: Inogen Development Standards
 * Visuals: 4 Product Cards (Fingertips p1, Handheld p2, OEM p3, Sensors p4)
 * Header with xl:max-w-[70%] width limit, responsive grid, "View All" link.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";

const productList = [
  {
    title: "Fingertips",
    description: "Compact fingertip devices for quick, reliable oxygen monitoring.",
    image: "/medical/nonin/p1.webp",
    link: "#",
  },
  {
    title: "Handheld",
    description: "Portable handheld devices for accurate and reliable patient oxygen monitoring.",
    image: "/medical/nonin/p2.webp",
    link: "#",
  },
  {
    title: "OEM",
    description: "Integrated monitoring technologies for reliable medical device solutions.",
    image: "/medical/nonin/p3.webp",
    link: "#",
  },
  {
    title: "Sensors",
    description: "Reliable sensors designed for accurate and consistent patient monitoring.",
    image: "/medical/nonin/p4.webp",
    link: "#",
  },
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10 sm:gap-14">

        {/* Section Header: Centered with xl:max-w-[70%] desktop width limit */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <span className="text-[#2A96C2] font-heading font-bold text-xs sm:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl uppercase tracking-widest block">
            OUR PRODUCT PORTFOLIO
          </span>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-[32px] min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-black"
          >
            Innovative Solutions for Every Monitoring Need
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-[#111111]"
          >
            Discover Nonin's range of noninvasive patient monitoring devices, designed to deliver dependable measurements, advanced performance and reliable patient care across diverse healthcare environments.
          </Typography>
        </div>

        {/* 4 Cards Grid: 1 col on mobile, 2 cols on tablet up to 1023px, 4 cols on desktop (lg:grid-cols-4) */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {productList.map((product, idx) => (
            <div
              key={idx}
              className="bg-[#F2F3F4] rounded-[10px] p-5 sm:p-6 shadow-[0px_1px_2px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] flex flex-col items-center justify-between text-center transition-all duration-300 hover:shadow-xl group"
            >
              {/* Product Image Frame with light blue (#2A96C2) and dark blue (#020F1E) double layer at bottom */}
              <div className="relative w-full aspect-[4/3] sm:aspect-square max-h-[280px] rounded-[20px] bg-white border-b-[3px] border-[#2A96C2] flex items-center justify-center p-6 overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-300 shadow-[0_4px_0_0_#020F1E]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title & Description */}
              <div className="flex flex-col items-center gap-2 mb-6">
                <Typography
                  variant="h3"
                  color="dark"
                  className="text-xl sm:text-2xl font-semibold text-black"
                >
                  {product.title}
                </Typography>

                <Typography
                  variant="p"
                  color="muted"
                  className="text-xs sm:text-sm text-[#111111] leading-relaxed line-clamp-3"
                >
                  {product.description}
                </Typography>
              </div>

              {/* Button */}
              <div className="mt-auto w-full flex justify-center">
                <Button
                  text="View Products"
                  href={product.link}
                  showIcon={true}
                  className="w-full justify-center px-4 py-2"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Link on Right */}
        <div className="w-full flex justify-end pt-2">
          <Link
            href="#products"
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

export default Products;

