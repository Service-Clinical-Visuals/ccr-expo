"use client";

import React from "react";
import Typography from "./Typography";

const Products = () => {
  const products = [
    { name: "Sterilization Containers", image: "/medical/innovations/p1.jpg" },
    { name: "Implant-Systems", image: "/medical/innovations/p2.jpg" },
    { name: "External Fixators", image: "/medical/innovations/p3.jpg" },
  ];

  return (
    <section id="products" className="w-full py-16 max-w-[3800px]:py-24 bg-white overflow-hidden">
      <div className="custom-container">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center xl:max-w-[70%] mx-auto mb-16 gap-4" data-aos="fade-up">
          <Typography variant="h2" color="dark">
            Our Products
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            Explore our range of specialised medical solutions, including sterilization containers, implant systems, and external fixators. Designed for diverse clinical applications, our products combine practical functionality, reliable construction, and professional medical use.
          </Typography>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-[533/419] overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] shadow-sm hover:shadow-md transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={100 * (idx + 1)}
            >
              {/* Product Image (Assuming JPGs have baked-in background as per files) */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Label Box */}
              <div className="absolute top-6 left-0 bg-white px-4 md:px-6 py-2.5 shadow-sm border border-l-0 border-gray-100 z-10">
                <Typography variant="span" color="dark" className="font-semibold text-sm md:text-base">
                  {product.name}
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
