"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const products = [
  {
    title: "Medical Devices",
    description:
      "Our medical devices are designed with the healthcare professionals of today in mind. Quality and safety is always our top priority so we can deliver...",
    image: "/medical/troge-medical/p1.webp",
    link: "#products",
  },
  {
    title: "Pharmaceuticals",
    description:
      "Our range of essential medicines are produced to the highest standards and subjected to rigorous testing for assured quality at every stage...",
    image: "/medical/troge-medical/p2.webp",
    link: "#products",
  },
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 xl:gap-16">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center gap-4 xl:max-w-[70%] max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <Typography variant="h2" color="dark" className="font-bold">
            Our Products
          </Typography>
          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-gray-600 font-normal"
          >
            We deliver a comprehensive portfolio of certified Medical Devices and Pharmaceuticals to trusted distributors for local redistribution.
            <br className="hidden sm:block" />
            Explore our range of products.
          </Typography>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-200/80 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 group p-6 sm:p-8"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Product Image Area */}
              <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Content */}
              <div className="flex items-end justify-between gap-4 mt-6">
                <div className="flex flex-col gap-2">
                  <Typography variant="h3" color="dark" className="!font-bold">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="p"
                    color="muted"
                    className="leading-relaxed text-gray-600 text-sm sm:text-base line-clamp-3"
                  >
                    {item.description}
                  </Typography>
                </div>

                {/* Circular Action Button */}
                <Link
                  href={item.link}
                  aria-label={`View ${item.title}`}
                  className="w-12 h-12 min-[2500px]:w-18 min-[2500px]:h-18 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300"
                >
                  <img
                    src="/medical/troge-medical/white_arrow.webp"
                    alt=""
                    className="w-4 h-auto min-[2500px]:w-6 min-[3800px]:w-9 -rotate-45 object-contain"
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

export default Products;

