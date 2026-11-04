"use client";

import React, { useState } from "react";
import Link from "next/link";
import Typography from "./Typography";

interface ProductItem {
  id: string;
  name: string;
  image: string;
  link?: string;
}

interface Category {
  id: string;
  name: string;
  products: ProductItem[];
}

const categories: Category[] = [
  {
    id: "shockwave",
    name: "Shockwave",
    products: [
      { id: "p11", name: "kimatur PRIME", image: "/medical/tum-gmbh/p11.webp", link: "#" },
      { id: "p12", name: "kimatur DUO", image: "/medical/tum-gmbh/p12.webp", link: "#" },
      { id: "p13", name: "kimatur GO", image: "/medical/tum-gmbh/p13.webp", link: "#" },
      { id: "p14", name: "kimatur DOUBLE", image: "/medical/tum-gmbh/p14.webp", link: "#" },
    ],
  },
  {
    id: "electrotherapy",
    name: "Electrotherapy & Ultrasound",
    products: [
      { id: "p21", name: "curatur", image: "/medical/tum-gmbh/p21.webp", link: "#" },
      { id: "p22", name: "sonotur", image: "/medical/tum-gmbh/p22.webp", link: "#" },
      { id: "p23", name: "sonotur lite", image: "/medical/tum-gmbh/p23.webp", link: "#" },
      { id: "p24", name: "stimutur", image: "/medical/tum-gmbh/p24.webp", link: "#" },
    ],
  },
  {
    id: "isokinetic",
    name: "Isokinetic",
    products: [
      { id: "p31", name: "isoforce", image: "/medical/tum-gmbh/p31.webp", link: "#" },
    ],
  },
  {
    id: "cryotherapy",
    name: "Cryotherapy",
    products: [
      { id: "p41", name: "cryotur Stream", image: "/medical/tum-gmbh/p41.webp", link: "#" },
    ],
  },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("shockwave");

  const currentCategory =
    categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <section id="products" className="w-full py-12 sm:py-16 lg:py-24 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 mb-8 sm:mb-12 xl:max-w-[70%] w-full mx-auto" data-aos="fade-up">
          <h2 className="capitalize font-semibold text-inherit">
            <span className="text-[#2A2A2A] text-[length:inherit]">Our </span>
            <span className="text-[var(--color-primary)] text-[length:inherit]">Products</span>
          </h2>

          <div className="w-full mx-auto px-2">
            <Typography variant="p" color="muted" className="leading-relaxed text-center">
              TUR offers a comprehensive range of innovative rehabilitation equipment, including
              shockwave therapy, electrotherapy and ultrasound, isokinetic systems, and cryotherapy
              solutions. Designed to support healthcare professionals, our products combine modern
              technology, reliable performance, and patient-focused functionality.
            </Typography>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-4">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 min-[3800px]:px-10 min-[3800px]:py-5 rounded-[4px] border border-[var(--color-primary)] transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[var(--color-primary)] text-white shadow-sm"
                      : "bg-transparent text-[#2A2A2A] hover:bg-[var(--color-primary)]/10"
                  }`}
                >
                  <p className="m-0 font-medium whitespace-nowrap leading-tight">
                    {cat.name}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div
          className={`w-full grid gap-6 sm:gap-8 justify-center ${
            currentCategory.products.length === 1
              ? "grid-cols-1 max-w-[420px]"
              : currentCategory.products.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-[840px]"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {currentCategory.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-[0px_3px_8px_rgba(0,0,0,0.18)] p-5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Product Image Frame */}
              <div className="w-full aspect-[348/340] border border-black/10 rounded-md bg-white p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="pt-4 flex flex-col gap-2">
                <Typography variant="h4" color="dark" className="font-semibold text-lg sm:text-xl">
                  {product.name}
                </Typography>
                <div>
                  <Link
                    href={product.link || "#"}
                    className="inline-block text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-semibold transition-colors"
                  >
                    <p className="m-0 font-semibold leading-normal underline underline-offset-4">
                      View More
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots Indicator */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-10 sm:mt-14">
          <div className="w-16 sm:w-20 h-2 sm:h-2.5 bg-[var(--color-primary)] rounded-full transition-all" />
          <div className="w-7 sm:w-8 h-2 sm:h-2.5 bg-[#D9D9D9] rounded-full" />
          <div className="w-7 sm:w-8 h-2 sm:h-2.5 bg-[#D9D9D9] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Products;

