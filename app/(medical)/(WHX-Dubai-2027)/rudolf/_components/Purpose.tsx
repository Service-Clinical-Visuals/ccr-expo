"use client";

import React from "react";
import Typography from "./Typography";

const items = [
  {
    title: "Our Purpose",
    icon: "icon1.webp",
    text: "We are committed to improving productivity and effectiveness for all clinicians, some of whom are increasingly underfunded and understaffed. Our products are used globally and change people's lives - this provides a real sense of responsibility which extends throughout the company.",
  },
  {
    title: "Our Mission",
    icon: "icon2.webp",
    text: "We are proud of our German engineering heritage—our processes support and drive the excellence we demand from our products. Confidence in our products is reflected in our warranty periods. This commitment ensures dependable performance for healthcare professionals.",
  },
  {
    title: "Our Vision",
    icon: "icon3.webp",
    text: "The bar of excellence is set high at Riester. Our aim is to keep pushing boundaries to remain at the forefront of global healthcare product offerings. Our focus on the medical diagnostic market underpins all our processes and everything we do.",
  },
  {
    title: "Our Values",
    icon: "icon4.webp",
    text: "Our values are built on customer-centric partnerships, excellence in quality and reliability, continuous innovation for better diagnosis, trust in our partners and employees, and the passion that drives our purpose and inspires everything we do.",
  },
];

export default function Purpose() {
  return (
    <section id="company" className="w-full py-12 sm:py-16 lg:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center mb-8 sm:mb-10 2xl:mb-10 min-[2500px]:mb-14 min-[3800px]:mb-20"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-3 2xl:gap-4 min-[2500px]:gap-5 min-[3800px]:gap-7 mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-5 2xl:w-6 min-[2500px]:w-9 min-[3800px]:w-12 h-[3px] min-[2500px]:h-1 min-[3800px]:h-1.5 rounded-full bg-primary" />
            <Typography variant="h4" color="primary" className="uppercase">
              What Drives Us
            </Typography>
          </div>
          <Typography variant="h2" color="dark" className="mb-4 sm:mb-5 2xl:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
            Purpose, Innovation &amp; Excellence in Every Solution
          </Typography>
          <Typography variant="p" color="muted" className="max-w-[780px] 2xl:max-w-[860px] min-[2500px]:max-w-[1200px] min-[3800px]:max-w-[1650px]">
            We combine purpose, innovation, and excellence to create reliable diagnostic solutions that support
            healthcare professionals and make a meaningful difference in patients&apos; lives.
          </Typography>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 2xl:gap-9 min-[2500px]:gap-12 min-[3800px]:gap-16">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 2xl:gap-7 min-[2500px]:gap-10 min-[3800px]:gap-14 bg-white rounded-[6px] min-[2500px]:rounded-[9px] min-[3800px]:rounded-[12px] shadow-[0px_4px_20px_rgba(0,0,0,0.08)] p-5 sm:p-6 2xl:p-5 2xl:pr-6 min-[2500px]:p-8 min-[3800px]:p-12"
              data-aos="fade-up"
              data-aos-delay={(index % 2) * 100}
            >
              <span className="flex items-center justify-center shrink-0 rounded-full bg-[#1A6AFF] w-16 h-16 sm:w-20 sm:h-20 2xl:w-[92px] 2xl:h-[92px] min-[2500px]:w-32 min-[2500px]:h-32 min-[3800px]:w-44 min-[3800px]:h-44">
                <img
                  src={`/medical/rudolf/${item.icon}`}
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-12 2xl:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-22 min-[3800px]:h-22 object-contain"
                />
              </span>

              <Typography variant="p" color="body">
                <Typography variant="span" color="body">
                  {item.title} —
                </Typography>{" "}
                {item.text}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
