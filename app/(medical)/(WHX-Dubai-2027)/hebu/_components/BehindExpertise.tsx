"use client";

import React from "react";
import Eyebrow from "./Eyebrow";

const ITEMS = [
  {
    image: "/medical/hebu/b1.webp",
    alt: "HEBUmedical laser marking workstations",
    text: "For decades, research, development, design, and production have been conducted here in this specialized field. Our affiliated manufacturing facilities employ more than 100 motivated staff members.",
  },
  {
    image: "/medical/hebu/b2.webp",
    alt: "Close-up of precision surgical instruments",
    text: "The name HEBUmedical stands for state-of-the-art manufacturing technology, highest precision and perfect function in surgical instruments with a wide range of products in our assortment.",
  },
  {
    image: "/medical/hebu/b3.webp",
    alt: "HEBUmedical technician inspecting an instrument",
    text: "Through a comprehensive quality management system, we ensure that quality is produced at every workplace, from the beginning of the production chain to the final inspection.",
  },
];

export default function BehindExpertise() {
  return (
    <section id="expertise" className="w-full bg-white py-16 sm:py-20 xl:py-[5.4vw]">
      <div className="custom-container">
        <div className="text-center max-w-[1000px] min-[1921px]:max-w-[52%] mx-auto mb-10 xl:mb-[2.6vw]" data-aos="fade-up">
          <Eyebrow className="mb-3 xl:mb-4">Behind Our Expertise</Eyebrow>
          <h2 className="section-title font-head font-semibold text-[var(--heading)] mb-4 xl:mb-6">
            Driven by Medical Innovation, Built on German Precision and Quality.
          </h2>
          <p className="section-text font-body text-[var(--body)]">
            HEBU medical brings together decades of medical technology expertise and German engineering to develop
            dependable surgical instruments and innovative healthcare solutions. Driven by quality, precision &amp;
            continuous improvement, we remain committed to supporting medical professionals with products they can
            trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-[1.9vw]">
          {ITEMS.map((item, i) => (
            <figure
              key={item.image}
              tabIndex={0}
              className={`group relative w-full aspect-[516/383] rounded-[8px] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] ${
                i === 2 ? "sm:col-span-2 sm:max-w-[calc(50%-0.75rem)] sm:mx-auto lg:col-span-1 lg:max-w-none" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Hover overlay: curved dark panel rising from the bottom */}
              <figcaption className="absolute inset-x-[-15%] bottom-0 h-[68%] flex items-end justify-center rounded-t-[50%] bg-[#121212]/80 backdrop-blur-[2px] px-[18%] pb-[6%] translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform duration-500 ease-out">
                <p className="overlay-text font-body text-white text-center">{item.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
