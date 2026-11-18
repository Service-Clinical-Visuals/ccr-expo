"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

// `contain` keeps wide product shots (white background) whole instead of cropping them
const categories: { title: string; image: string; contain?: boolean }[] = [
  { title: "High-Res Anoscopy", image: "/medical/zinnanti-surgical-2/derm-tips.webp" },
  { title: "Dermatology", image: "/medical/zinnanti-surgical-2/derm-setup.webp", contain: true },
  { title: "Gynecology", image: "/medical/zinnanti-surgical-2/acu-evac-adapter.webp", contain: true },
];

const ProductCategories = () => {
  return (
    <section
      id="products"
      className="w-full bg-[var(--color-quote-bg)] py-12 sm:py-14 xl:py-16 min-[2500px]:py-28 min-[3800px]:py-40 overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-12 xl:gap-16 min-[2500px]:gap-24">
        {/* Centered Header */}
        <div
          className="flex flex-col items-center text-center max-w-5xl xl:max-w-[84%] mx-auto"
          data-aos="fade-up"
        >
          <Eyebrow text="Our Product Categories" />
          <Typography variant="h2" color="dark" className="leading-tight mt-3 min-[2500px]:mt-5">
            Advanced Surgical Solutions, Designed for Precision
          </Typography>
          <Typography variant="p" color="dark" className="leading-[1.8] font-normal mt-4 min-[2500px]:mt-6">
            Discover innovative surgical instruments and smoke evacuation systems
            engineered to support precision, efficiency, and enhanced visibility.
            Explore thoughtfully designed solutions that meet the demands of modern
            surgical environments.
          </Typography>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-6 md:gap-4 lg:gap-6 xl:gap-8 min-[2500px]:gap-12">
          {categories.map((cat, index) => (
            <div
              key={cat.title}
              className={`flex flex-col items-center group ${
                // Odd last card: centre it on the 2-column (large phone) layout
                categories.length % 2 === 1 && index === categories.length - 1
                  ? "sm:col-span-2 sm:justify-self-center sm:w-[calc(50%-0.75rem)] md:col-span-1 md:w-auto md:justify-self-stretch"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Image — centred, ~76% of card width, only top-left rounded, sits flush on the base */}
              <div className="w-[76%] aspect-[10/9] overflow-hidden rounded-tl-[2.5rem] min-[2500px]:rounded-tl-[4rem] min-[3800px]:rounded-tl-[5rem] bg-white">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className={`w-full h-full ${cat.contain ? "object-contain p-3 min-[2500px]:p-6" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                />
              </div>

              {/* Blue Base — top-left + bottom-right rounded */}
              <div className="w-full bg-[var(--color-navy)] rounded-tl-[2.5rem] rounded-br-[2.5rem] min-[2500px]:rounded-tl-[4rem] min-[2500px]:rounded-br-[4rem] min-[3800px]:rounded-tl-[5rem] min-[3800px]:rounded-br-[5rem] min-h-[7.5rem] min-[2500px]:min-h-[11rem] min-[3800px]:min-h-[15rem] px-6 py-6 min-[2500px]:py-10 flex flex-col items-center justify-center gap-4 min-[2500px]:gap-6 text-center">
                <Typography variant="h3" color="white" className="leading-tight">
                  {cat.title}
                </Typography>
                <Button text="View Products" variant="outline" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
