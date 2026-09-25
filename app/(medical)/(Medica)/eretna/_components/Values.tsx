"use client";

import React from "react";
import Typography from "./Typography";

const valueCards = [
  {
    title: "Quality",
    desc: "With our production approach that conforms to international standards, we always prioritize high quality and reliability.",
    image: "/medical/eretna/v1.png",
  },
  {
    title: "Trust",
    desc: "We consider the trust of our customers, business partners, and healthcare professionals to be our most valuable asset.",
    image: "/medical/eretna/v2.png",
  },
  {
    title: "Innovation",
    desc: "We closely follow developing technologies and produce innovative and value-added solutions.",
    image: "/medical/eretna/v3.png",
  },
  {
    title: "Sustainability",
    desc: "We develop solutions that add value to the future by acting with environmental and social responsibility awareness.",
    image: "/medical/eretna/v4.png",
  },
];

export default function Values() {
  return (
    <section
      id="values"
      className="w-full py-16 xl:py-24 min-[2500px]:py-36 bg-white overflow-hidden"
    >
      <div className="custom-container">
        {/* Section Header */}
        <div
          className="xl:max-w-[70%] max-w-[90%] mx-auto text-center space-y-4 mb-12 sm:mb-16"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <Typography variant="h2" color="dark">
            Our <span className="text-[#3452A7]">Values</span>
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            At ERETNA, our values guide how we design, develop, and deliver medical technologies. We focus on creating dependable solutions that combine innovation, quality, and practical usability to support healthcare professionals and better patient care.
          </Typography>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 min-[2500px]:gap-10 min-[3800px]:gap-14 w-full">
          {valueCards.map((card, idx) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl min-[2500px]:rounded-3xl figma-card-shadow p-6 sm:p-7 min-[2500px]:p-10 min-[3800px]:p-14 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl border border-gray-100 group min-h-[294px] min-[2500px]:min-h-[420px] min-[3800px]:min-h-[520px] justify-start"
              data-aos="fade-up"
              data-aos-delay={idx * 120}
            >
              <div className="relative w-[84px] h-[84px] sm:w-[93px] sm:h-[93px] min-[2500px]:w-[130px] min-[2500px]:h-[130px] min-[3800px]:w-[160px] min-[3800px]:h-[160px] mb-5 min-[2500px]:mb-8 flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <Typography variant="h3" color="dark" className="mb-3 min-[2500px]:mb-5">
                {card.title}
              </Typography>

              {/* Description */}
              <Typography variant="p" color="muted" className="leading-relaxed">
                {card.desc}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
