"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const products = [
  {
    title: "NeedleVue Lite Cart",
    text: "FDA cleared NeedleVue LC1 Ultrasound System - stand-alone ultrasound cart system delivering powerful ultrasound imaging plus the potential to support advanced NeedleVue and OnPoint guidance capabilities.",
    image: "p1.webp",
  },
  {
    title: "NeedleVue Embedded",
    text: "Full-featured ultrasound system with or without advanced NeedleVue guidance that can be integrated into any medical or surgical device.",
    image: "p2.webp",
  },
  {
    title: "NeedleVue Lite Cart",
    text: "FDA cleared NeedleVue LC1 Ultrasound System - stand-alone ultrasound cart system delivering powerful ultrasound imaging plus the potential to support advanced NeedleVue and OnPoint guidance capabilities.",
    image: "p3.webp",
  },
];

export default function Products() {
  return (
    <section id="products" className="w-full bg-white py-12 sm:py-16 lg:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center mb-10 sm:mb-12 2xl:mb-14 min-[2500px]:mb-20 min-[3800px]:mb-28"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4 mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 min-[3800px]:w-3 min-[3800px]:h-3 rounded-full bg-secondary" />
            <Typography variant="h6" color="secondary" className="uppercase">
              Explore Our Solutions
            </Typography>
          </div>
          <Typography variant="h2" color="primary" className="mb-4 sm:mb-5 2xl:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
            Discover the NeedleVue Product Family
          </Typography>
          <Typography variant="p" color="primary" className="xl:max-w-[80%]">
            Explore our range of advanced medical imaging solutions, designed to enhance ultrasound-guided procedures
            through innovative technology and intelligent instrument visualization. Discover versatile systems tailored
            to different clinical environments, combining thoughtful design, functional flexibility, and advanced
            imaging capabilities to support procedural needs.
          </Typography>
        </div>

        {/* Arched product cards; the button sits half over the bottom edge */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 xl:gap-x-8 2xl:gap-x-8 min-[2500px]:gap-x-12 min-[2500px]:gap-y-20 min-[3800px]:gap-x-16 min-[3800px]:gap-y-28 pb-5 min-[2500px]:pb-8 min-[3800px]:pb-10">
          {products.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={`group relative flex flex-col items-center text-center bg-white border border-[#EEEEEE] shadow-[0px_4px_14px_rgba(0,0,0,0.08)] rounded-t-[400px] min-[2500px]:rounded-t-[600px] min-[3800px]:rounded-t-[800px] rounded-b-[16px] min-[2500px]:rounded-b-[24px] min-[3800px]:rounded-b-[32px] px-6 sm:px-8 2xl:px-9 min-[2500px]:px-12 min-[3800px]:px-16 pt-12 2xl:pt-14 min-[2500px]:pt-20 min-[3800px]:pt-28 pb-10 2xl:pb-11 min-[2500px]:pb-16 min-[3800px]:pb-22 ${index === 2 ? "md:col-span-2 lg:col-span-1 md:max-lg:w-[calc(50%-0.75rem)] md:max-lg:mx-auto" : ""
                }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full h-[220px] sm:h-[240px] 2xl:h-[260px] min-[2500px]:h-[370px] min-[3800px]:h-[520px] flex items-center justify-center">
                <img
                  src={`/medical/deepsight/${item.image}`}
                  alt={item.title}
                  className="max-w-[85%] max-h-full object-contain mix-blend-multiply group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>

              <Typography variant="h3" color="primary" className="mt-6 2xl:mt-7 min-[2500px]:mt-10 min-[3800px]:mt-14 mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
                {item.title}
              </Typography>
              <Typography variant="p" color="primary">
                {item.text}
              </Typography>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <Button text="View Product" variant="primary" href="#products" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
