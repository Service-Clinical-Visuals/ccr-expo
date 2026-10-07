"use client";

import React, { useState } from "react";
import Link from "next/link";
import Typography from "./Typography";

interface Product {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  link: string;
}

const dutchProducts: Product[] = [
  {
    id: "axhidrox",
    title: "AXHIDROX",
    category: "Dermatologie",
    tag: "Medical Products",
    image: "/medical/will-pharma/p1.webp",
    link: "#products",
  },
  {
    id: "spreemyk",
    title: "SPREEMYK",
    category: "Dermatologie",
    tag: "Cosmetica",
    image: "/medical/will-pharma/p2.webp",
    link: "#products",
  },
  {
    id: "cad-1000",
    title: "CaD 1000/880 CITROEN",
    category: "Reumatologie",
    tag: "Medical Products",
    image: "/medical/will-pharma/p3.webp",
    link: "#products",
  },
];

const belgiumProducts: Product[] = [
  {
    id: "trianal-zetpil",
    title: "TRIANAL ZETPIL",
    category: "Dermatologie",
    tag: "Medical Products",
    image: "/medical/will-pharma/p4.webp",
    link: "#products",
  },
  {
    id: "c-will",
    title: "C-WILL",
    category: "Vitaminen, mineralen en tonica",
    tag: "Medical Products",
    image: "/medical/will-pharma/p5.webp",
    link: "#products",
  },
  {
    id: "donnafyta-meno",
    title: "DONNAFYTA MENO",
    category: "Gynaecologie",
    tag: "Medical Products",
    image: "/medical/will-pharma/p6.webp",
    link: "#products",
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState<"dutch" | "belgium">("dutch");
  const currentProducts = activeTab === "dutch" ? dutchProducts : belgiumProducts;

  return (
    <section id="products" className="w-full py-16 sm:py-20 xl:py-28 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-12 min-[3800px]:gap-20">
        {/* Section Header & Category Tabs */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 w-full"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 w-full lg:max-w-[65%] xl:max-w-[70%]">
            <Typography
              variant="h4"
              color="accent"
              className="uppercase !font-bold tracking-wider"
            >
              OUR PRODUCTS
            </Typography>

            <Typography
              variant="h2"
              color="dark"
              className="uppercase !font-bold text-[#333333]"
            >
              QUALITY HEALTHCARE SOLUTIONS
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="leading-relaxed text-[#4B5563]"
            >
              Our products are designed to support better healthcare and improve quality of life. We offer high-quality solutions that combine reliability, innovation, and patient-focused care.
            </Typography>
          </div>

          {/* Tab Selector */}
          <div className="shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="bg-white shadow-[0px_5px_15px_rgba(105,138,127,0.27)] rounded-[10px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[24px] p-1.5 sm:p-2 min-[2500px]:p-3 min-[3800px]:p-4 flex items-center border border-gray-100">
              <button
                type="button"
                onClick={() => setActiveTab("dutch")}
                className={`px-3.5 sm:px-5 py-2 min-[2500px]:px-8 min-[2500px]:py-3.5 min-[3800px]:px-12 min-[3800px]:py-5 category-tab-btn font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === "dutch"
                    ? "text-[#333333]"
                    : "text-[#333333]/50 hover:text-[#333333]"
                }`}
              >
                DUTCH PRODUCTS
              </button>

              <div className="w-[1.5px] h-5 min-[2500px]:h-8 min-[3800px]:h-12 bg-[#698A7F] mx-1 sm:mx-2" />

              <button
                type="button"
                onClick={() => setActiveTab("belgium")}
                className={`px-3.5 sm:px-5 py-2 min-[2500px]:px-8 min-[2500px]:py-3.5 min-[3800px]:px-12 min-[3800px]:py-5 category-tab-btn font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === "belgium"
                    ? "text-[#333333]"
                    : "text-[#333333]/50 hover:text-[#333333]"
                }`}
              >
                BELGIUM PRODUCTS
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {currentProducts.map((product, idx) => (
            <div
              key={product.id}
              className="group relative rounded-[14px] md:rounded-[18px] min-[3800px]:rounded-[30px] overflow-hidden bg-[#FAF6F2] shadow-sm transition-all duration-300 hover:shadow-xl aspect-[4/3] sm:aspect-[4/3] flex items-center justify-center cursor-pointer border border-[#EFE8DF] md:last:odd:col-span-2 md:last:odd:w-[calc(50%-0.75rem)] md:last:odd:mx-auto lg:last:odd:col-span-1 lg:last:odd:w-full"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay Card */}
              <div className="absolute inset-0 bg-[#383838]/85 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 sm:p-7 min-[3800px]:p-12 flex flex-col justify-between z-10">
                <div className="flex justify-end">
                  <span className="bg-[#698A7F] text-white text-xs sm:text-sm min-[3800px]:text-xl font-semibold px-3.5 py-1 min-[3800px]:px-7 min-[3800px]:py-2.5 rounded-[6px] min-[3800px]:rounded-[12px] shadow-xs">
                    {product.tag}
                  </span>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-white uppercase text-base sm:text-lg min-[2500px]:text-xl min-[3800px]:text-3xl leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm min-[2500px]:text-base min-[3800px]:text-2xl text-gray-200">
                      {product.category}
                    </p>
                  </div>

                  <Link
                    href={product.link}
                    className="shrink-0 text-white font-bold text-xs sm:text-sm min-[3800px]:text-xl uppercase underline underline-offset-4 tracking-wider hover:text-white/80 transition-colors whitespace-nowrap"
                  >
                    VIEW THE PRODUCT
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
