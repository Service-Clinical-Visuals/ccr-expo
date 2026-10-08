"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const PRODUCTS = [
  {
    image: "/medical/herniamesh-srl/p1.webp",
    title: "Inguinal And Abdominal Hernias",
    href: "",
  },
  {
    image: "/medical/herniamesh-srl/p2.webp",
    title: "Female Urinary Incontinence And Pelvic Floor Prolapse",
    href: "",
  },
];

export default function OurProducts() {
  return (
    <section id="products" className="py-14 sm:py-16 xl:py-20">
      <div className="custom-container xl:px-6 2xl:px-8">
        {/* Heading */}
        <div className="grid grid-cols-12" data-aos="fade-up">
          <div className="col-span-12 min-[1025px]:col-start-2 min-[1025px]:col-span-10 xl:col-start-3 xl:col-span-8 text-center">
            <h2 className="section-title font-semibold ">
              Herniamesh® Products
            </h2>
            <p className="section-text mt-3 ">
              Explore the Herniamesh® product portfolio, featuring specialised medical solutions for
              inguinal and abdominal hernias, female urinary incontinence, and pelvic floor prolapse.
              Our products are developed for professional medical use, with detailed technical
              information available for healthcare professionals.
            </p>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-12 gap-6 sm:gap-10  mt-8 sm:mt-10">
          {PRODUCTS.map((product, index) => (
            <Link
              key={product.title}
              href={product.href}
              className="group col-span-12 md:col-span-6 relative block aspect-square 
              rounded-tl-[28px] rounded-br-[28px] sm:rounded-tl-[40px] 
              sm:rounded-br-[40px] overflow-hidden  
              "
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay (always visible on touch screens below lg) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20 transition-opacity duration-300 opacity-100 min-[1025px]:opacity-0 min-[1025px]:group-hover:opacity-100 min-[1025px]:group-focus-visible:opacity-100" />

              {/* Title + Arrow */}
              <div className="absolute inset-x-0 bottom-0 grid grid-cols-12 items-end gap-4 p-5 sm:p-8 xl:p-10 transition-all duration-300 opacity-100 translate-y-0 min-[1025px]:opacity-0 min-[1025px]:translate-y-4 min-[1025px]:group-hover:opacity-100 min-[1025px]:group-hover:translate-y-0 min-[1025px]:group-focus-visible:opacity-100 min-[1025px]:group-focus-visible:translate-y-0">
                <h3 className="col-span-10 sm:col-span-9 xl:col-span-8 card-title font-semibold text-white leading-snug">
                  {product.title}
                </h3>
                <div className="col-span-2 sm:col-span-3 xl:col-span-4 flex justify-end">
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0055A6] text-white flex items-center justify-center shadow-md transition-colors duration-200 group-hover:bg-[#00448a]">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
