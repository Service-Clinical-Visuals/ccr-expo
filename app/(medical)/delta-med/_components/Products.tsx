"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Rotary Shaft Seals",
    desc: "Our rotary shaft seals provide reliable sealing for rotating components across automotive and industrial applications. Designed to prevent lubricant leakage and protect against dust and contaminants, they ensure efficient operation and extended component life.",
    image: "/moto/skt/p1.jpg"
  },
  {
    title: "Gasket Sets",
    desc: "Our gasket sets provide reliable sealing solutions for automotive and industrial applications. Designed for precise fit and dependable performance, they help prevent leaks and ensure effective protection of critical components.",
    image: "/moto/skt/p2.jpg"
  },
  {
    title: "Shaft Bearing & Bushing Group",
    desc: "Our shaft bearings and bushings provide reliable support, smooth movement, and reduced friction for automotive and industrial components. Designed for precise fit and durability, they ensure efficient operation and extended component life.",
    image: "/moto/skt/p3.jpg"
  },
  {
    title: "Other Sealing Products",
    desc: "Our other sealing products offer reliable solutions for diverse automotive and industrial applications. Designed for precise fit, durability, and dependable sealing performance, they help protect components and ensure efficient operation.",
    image: "/moto/skt/p4.jpg"
  }
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 items-center">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 w-full md:w-[90%] xl:w-[75%]" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold">
            Our Products
          </Typography>
          <Typography variant="p" color="dark" className="leading-relaxed">
            SKT offers an extensive portfolio of high-quality sealing and rubber products developed to meet the demanding requirements of modern automotive and industrial applications. With more than seven decades of experience, advanced production technologies, and a strong commitment to continuous improvement, we deliver products designed for precision, durability, and dependable performance. SKT combines technical expertise, innovative manufacturing, and extensive product coverage to deliver trusted sealing solutions worldwide.
          </Typography>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow  rounded-tl-[3rem] rounded-br-[3rem]  p-3 sm:p-4 flex flex-col sm:flex-row gap-6 items-center"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Image Container with Hover Overlay */}
              <div className="w-full sm:w-[45%] aspect-[4/3]  rounded-tl-[3rem] rounded-br-[3rem] overflow-hidden relative group cursor-pointer shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <ArrowUpRight className="text-[#171717] w-6 h-6" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full sm:w-[55%] flex flex-col gap-3 py-2 sm:pr-4">
                <Typography variant="h4" color="dark" className="font-bold">
                  {product.title}
                </Typography>
                <Typography variant="p" color="dark" className="text-sm leading-relaxed">
                  {product.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
