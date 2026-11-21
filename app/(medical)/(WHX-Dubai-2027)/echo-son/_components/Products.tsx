"use client";

import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "./Button";

interface Product {
  name: string;
  type: string;
  image: string;
  width: number;
  height: number;
}

const products: Product[] = [
  { name: "Albit", type: "Ultrasound Scanner", image: "/medical/echo-son/p1.webp", width: 361, height: 413 },
  { name: "Pirop", type: "Ophthalmic Scanner", image: "/medical/echo-son/p2.webp", width: 361, height: 413 },
  { name: "Pinit", type: "Bladder Scanner", image: "/medical/echo-son/p3.webp", width: 351, height: 401 },
];

/**
 * Products: heading row (title, intro, CTA) over a divider, then a 1 / 2 / 3 column grid
 * of product cards. Each card is a light-grey frame with a teal corner wedge at the top
 * right, holding a white inner card with the product image, an arrow badge and the name.
 */
const Products = () => {
  return (
    <section
      id="solutions"
      className="relative w-full pb-14 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-36 min-[3800px]:pb-48"
    >
      <div className="custom-container">
        {/* Heading row */}
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10 min-[2500px]:gap-16 pb-6 sm:pb-7 2xl:pb-9 min-[2500px]:pb-12 border-b border-[#D9D9D9]"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-2 2xl:gap-3 min-[2500px]:gap-5 lg:max-w-[72%]">
            <h2 className="text-[#1A1A1A]">Advanced Ultrasound Solutions For Specialized Diagnostics</h2>
            <p className="text-[#4A4A4A]">
              Discover innovative diagnostic equipment designed to support healthcare
              professionals across various medical specialties. Combining advanced ultrasound
              technology, practical functionality, and reliable performance, Echo-Son delivers
              solutions that meet diverse clinical requirements.
            </p>
          </div>
          <div className="shrink-0">
            <Button text="Explore Our Products" href="#products" />
          </div>
        </div>

        {/* Product cards */}
        <div id="products" className="custom-grid md:!grid-cols-3 md:!gap-4 lg:!gap-6 xl:!gap-8 min-[2500px]:!gap-12 min-[3800px]:!gap-16 mt-6 sm:mt-7 2xl:mt-9 min-[2500px]:mt-12">
          {products.map((product, i) => (
            <a
              key={product.name}
              href="#"
              aria-label={`${product.name} ${product.type}`}
              className={`group relative block bg-[#F1F1F1] p-3 md:p-2 lg:p-3 2xl:p-4 min-[2500px]:p-6 min-[3800px]:p-8 rounded-tl-4xl rounded-br-4xl shadow-md transition-transform duration-300 hover:-translate-y-1 ${
                // On the 2-column (large phone) grid, centre a lone last card
                i === products.length - 1 && products.length % 2 === 1
                  ? "sm:col-span-2 sm:w-[calc(50%-0.75rem)] sm:mx-auto md:col-span-1 md:w-auto md:mx-0"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              {/* Teal corner wedge */}
              <span
                aria-hidden
                className="absolute top-0 right-0 w-[26%] h-[27%] bg-primary [clip-path:polygon(0_0,100%_0,100%_100%)]"
              />

              {/* Inner white card */}
              <div className="relative flex flex-col aspect-[278/288] bg-white rounded-tl-4xl rounded-br-4xl shadow-md px-5 md:px-3 lg:px-4 xl:px-5 2xl:px-6 min-[2500px]:px-9 min-[3800px]:px-12 pt-5 md:pt-3 lg:pt-4 xl:pt-5 2xl:pt-6 min-[2500px]:pt-9 pb-5 md:pb-4 xl:pb-5 2xl:pb-6 min-[2500px]:pb-9 min-[3800px]:pb-12">
                {/* Arrow badge */}
                <span className="absolute top-4 right-4 md:top-3 md:right-3 lg:top-4 lg:right-4 2xl:top-5 2xl:right-5 min-[2500px]:top-8 min-[2500px]:right-8 min-[3800px]:top-11 min-[3800px]:right-11 flex items-center justify-center w-9 h-9 md:w-8 md:h-8 lg:w-9 lg:h-9 2xl:w-11 2xl:h-11 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-primary text-white transition-colors duration-300 group-hover:bg-primary-hover">
                  <FiArrowUpRight
                    strokeWidth={2.5}
                    className="w-[18px] h-[18px] 2xl:w-5 2xl:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>

                {/* Product image */}
                <div className="relative flex-1 min-h-0 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={`${product.name} ${product.type}`}
                    width={product.width}
                    height={product.height}
                    className="block max-w-[75%] md:max-w-[88%] xl:max-w-[75%] max-h-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Name — a centred two-line block, sitting towards the right */}
                <h3 className="card-title self-end mt-3 2xl:mt-4 min-[2500px]:mt-6 text-center text-[#1A1A1A] mr-[6%] md:mr-[2%] lg:mr-[4%] xl:mr-[6%]">
                  {product.name}
                  <br />
                  {product.type}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
