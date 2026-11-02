"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  image: string;
  category: "hospital" | "nursing";
}

const hospitalProducts: Product[] = [
  {
    id: "bariatric",
    name: "Bariatric beds",
    image: "/medical/proma-reha/p1.webp",
    category: "hospital",
  },
  {
    id: "intensive-care",
    name: "Intensive care beds",
    image: "/medical/proma-reha/p2.webp",
    category: "hospital",
  },
  {
    id: "hospital-beds",
    name: "Hospital beds",
    image: "/medical/proma-reha/p3.webp",
    category: "hospital",
  },
];

const nursingProducts: Product[] = [
  {
    id: "hestia",
    name: "Hestia",
    image: "/medical/proma-reha/p4.webp",
    category: "nursing",
  },
  {
    id: "grano",
    name: "Grano",
    image: "/medical/proma-reha/p5.webp",
    category: "nursing",
  },
  {
    id: "domeo-e",
    name: "Domeo E",
    image: "/medical/proma-reha/p6.webp",
    category: "nursing",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<"hospital" | "nursing">("hospital");

  const currentProducts = activeCategory === "hospital" ? hospitalProducts : nursingProducts;

  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-12">
        {/* Header Block - Centered */}
        <div
          className="flex flex-col items-center text-center gap-3.5 max-w-4xl xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 min-[2500px]:w-3.5 min-[2500px]:h-3.5 min-[3800px]:w-5 min-[3800px]:h-5 rounded-full bg-[var(--color-secondary)]"></span>
            <Typography
              variant="h4"
              color="secondary"
              className="uppercase tracking-wider !font-semibold text-base min-[2500px]:text-2xl min-[3800px]:text-3xl"
            >
              EXPLORE OUR PRODUCTS
            </Typography>
          </div>

          <Typography
            variant="h2"
            color="dark"
            className="leading-tight !font-semibold text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-6xl"
          >
            Designed to Meet the Needs of Modern Healthcare
          </Typography>

          <Typography
            variant="p"
            color="dark"
            className="text-gray-700 leading-relaxed max-w-3xl xl:max-w-[70%] font-secondary mt-1"
          >
            Explore our range of advanced medical and nursing beds, designed to enhance
            patient comfort, ensure reliable performance and support healthcare
            professionals with practical, high-quality solutions.
          </Typography>

          {/* Category Tabs */}
          <div className="flex items-center gap-4 mt-4">
            <button
              type="button"
              onClick={() => setActiveCategory("hospital")}
              className={`px-6 py-2.5 rounded-[10px] min-[3800px]:rounded-[16px] text-base font-primary font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === "hospital"
                  ? "bg-[var(--color-primary)] text-white shadow-md border border-transparent"
                  : "bg-white text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
              }`}
            >
              Hospital Beds
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("nursing")}
              className={`px-6 py-2.5 rounded-[10px] min-[3800px]:rounded-[16px] text-base font-primary font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === "nursing"
                  ? "bg-[var(--color-primary)] text-white shadow-md border border-transparent"
                  : "bg-white text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
              }`}
            >
              Nursing Beds
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 min-[2500px]:gap-14 w-full mt-2">
          {currentProducts.map((product, index) => {
            const isOddLast =
              currentProducts.length % 2 !== 0 && index === currentProducts.length - 1;
            return (
              <div
                key={product.id}
                className={`relative flex flex-col pb-8 sm:pb-10 ${
                  isOddLast
                    ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto lg:col-span-1 lg:w-full lg:mx-0"
                    : ""
                }`}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 120}
              >
              {/* Product Image Card (Clean image card, no white box below) */}
              <div className="relative w-full aspect-[4/3] rounded-2xl shadow-lg border border-gray-200/80 bg-white group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />

                {/* Violet Box: 50% inside the img card and 50% outside below the img card */}
                <div className="absolute top-full -translate-y-1/2 left-4 right-4 sm:left-6 sm:right-6 min-[2500px]:left-8 min-[2500px]:right-8 min-[3800px]:left-12 min-[3800px]:right-12 z-10 flex items-center justify-between px-5 py-3 sm:py-3.5 min-[2500px]:px-8 min-[2500px]:py-5 min-[3800px]:px-12 min-[3800px]:py-7 rounded-[10px] min-[3800px]:rounded-[20px] bg-gradient-to-r from-[#878AAA] via-[#67659B] via-66%-[#5B5896] via-81%-[#545092] to-[#312782] shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Typography
                    variant="h4"
                    color="white"
                    className="!font-semibold text-base min-[2500px]:text-2xl min-[3800px]:text-3xl truncate mr-2"
                  >
                    {product.name}
                  </Typography>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 min-[2500px]:w-16 min-[2500px]:h-16 min-[3500px]:w-26 min-[3500px]:h-26 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110">
                    <img
                      src="/medical/proma-reha/arrow.webp"
                      alt="Arrow"
                      className="w-4 sm:w-5 min-[2500px]:w-8 min-[3500px]:w-14 min-[3500px]:h-auto min-[3800px]:w-16 h-auto object-contain transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* View All Products Link */}
        <div className="flex justify-center mt-2" data-aos="fade-up">
          <Link
            href="#products"
            className="text-[var(--color-primary)] font-secondary font-medium text-base underline underline-offset-4 hover:text-[var(--color-primary-hover)] transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
