"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const Products = () => {
  const products = [
    {
      title: "Knee Systems",
      description: "Proven knee implant solutions for diverse surgical needs.",
      image: "/medical/covision/p1.webp",
      link: "#products",
    },
    {
      title: "Hip Systems",
      description: "Versatile cemented and cementless hip systems.",
      image: "/medical/covision/p2.webp",
      link: "#products",
    },
    {
      title: "Trauma Systems",
      description: "Titanium trauma plates, screws, and instruments.",
      image: "/medical/covision/p3.webp",
      link: "#products",
    },
    {
      title: "Spine Systems",
      description: "Proven spinal solutions with pedicle screws, connectors, and bars.",
      image: "/medical/covision/p4.webp",
      link: "#products",
    },
  ];

  return (
    <section id="products" className="w-full py-16 xl:py-24 min-[3800px]:py-36 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10">
        {/* Header - Deleo xl:max-w-[70%] concept */}
        <div className="flex flex-col items-center gap-3 text-center w-full" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <div className="w-[27px] min-[3800px]:w-14 h-[4px] min-[3800px]:h-2 bg-[#FB8021] rounded-full shrink-0"></div>
            <Typography
              variant="h4"
              color="primary"
              className="!font-bold tracking-wider uppercase"
            >
              PRODUCTS
            </Typography>
          </div>

          <Typography variant="h2" color="dark" className="!font-bold">
            Advanced Orthopaedic Solutions
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-center w-full xl:max-w-[70%] mx-auto mt-1"
          >
            Explore Covision’s comprehensive range of knee, hip, trauma, and spine systems, delivering
            precision-engineered solutions to meet diverse orthopaedic surgical needs.
          </Typography>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-200/90 rounded-xl p-3.5 sm:p-4 bg-white shadow-xs hover:shadow-lg transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Product Image Frame */}
              <div className="w-full aspect-[4/3] rounded-lg border border-gray-200 overflow-hidden flex items-center justify-center p-4 bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1 pt-5 pb-2 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <Typography variant="h3" color="dark" className="!font-bold text-lg md:text-xl">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="p"
                    color="muted"
                    className="text-sm md:text-base leading-relaxed"
                  >
                    {item.description}
                  </Typography>
                </div>

                <div className="flex justify-end pt-2">
                  <Link
                    href={item.link}
                    className="text-[#FB8021] hover:text-[var(--color-primary-hover)] text-sm md:text-base font-bold uppercase transition-colors tracking-wide underline underline-offset-4"
                  >
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
