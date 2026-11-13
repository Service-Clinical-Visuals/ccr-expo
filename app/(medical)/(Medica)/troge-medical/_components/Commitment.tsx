"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";

const commitmentItems = [
  {
    title: "Uncompromising quality is our promise",
    image: "/medical/troge-medical/q1.webp",
    link: "#commitment",
  },
  {
    title: "Logistics Refined",
    image: "/medical/troge-medical/q2.webp",
    link: "#commitment",
  },
  {
    title: "PHARMACEUTICALS YOU CAN TRUST Thoroughly tested",
    image: "/medical/troge-medical/q3.webp",
    link: "#commitment",
  },
];

const Commitment = () => {
  return (
    <section id="commitment" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 xl:gap-16">
        {/* Top Header Row */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 xl:max-w-[70%] max-w-3xl">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Quality, Trust & Responsibility At Every Step
            </Typography>
            <Typography
              variant="p"
              color="muted"
              className="leading-relaxed text-gray-600 font-normal"
            >
              TROGE® is committed to delivering trusted healthcare solutions through strict quality standards, reliable pharmaceutical products, efficient global logistics, and responsible business practices.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button
              text="Discover Our Commitment"
              variant="primary"
              href="#commitment"
              showIcon={true}
            />
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {commitmentItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-none overflow-hidden bg-white border-0 border-none shadow-none hover:shadow-none transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Card Image */}
              <div className="w-full aspect-[16/11] overflow-hidden bg-gray-50 border-0 border-none shadow-none">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content & Action */}
              <div className="flex items-center justify-between gap-4 py-5 px-1 sm:px-2 flex-1 bg-white border-0 border-none shadow-none">
                <Typography
                  variant="p"
                  color="dark"
                  className="font-bold text-base sm:text-lg leading-snug line-clamp-2"
                >
                  {item.title}
                </Typography>

                <Link
                  href={item.link}
                  aria-label={`Learn more about ${item.title}`}
                  className="w-11 h-11 min-[2500px]:w-18 min-[2500px]:h-18 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300"
                >
                  <img
                    src="/medical/troge-medical/white_arrow.webp"
                    alt=""
                    className="w-3.5 h-auto min-[2500px]:w-6 min-[3800px]:w-9 -rotate-45 object-contain"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;

