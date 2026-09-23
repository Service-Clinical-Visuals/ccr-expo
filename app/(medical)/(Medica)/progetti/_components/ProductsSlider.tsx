"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";

const products = [
  {
    title: "Defibrillators",
    desc: "Reliable defibrillation technology designed for rapid, safe, and effective cardiac emergency care.",
    image: "/medical/progetti/product1.png"
  },
  {
    title: "Multi-Parameter Monitors",
    desc: "Reliable monitoring systems designed to support continuous patient assessment.",
    image: "/medical/progetti/product2.png"
  },
  {
    title: "Infusion Pumps",
    desc: "Precise and controlled solutions for safe medication and fluid delivery.",
    image: "/medical/progetti/product3.png"
  },
  {
    title: "Ventilators",
    desc: "Advanced respiratory support systems for critical care environments.",
    image: "/medical/progetti/product4.png"
  }
];

const ProductsSlider = () => {
  return (
    <section id="products" className="w-full py-20 xl:py-32 bg-white relative overflow-hidden">

      {/* Top-Left Diagonal Polygon */}
      <div
        className="absolute top-0 left-0 w-64 h-64 md:w-72 md:h-72 polygon-4k bg-[#ED1C24] z-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 10% 20%, 0 100%)' }}
      ></div>

      {/* Bottom-Right Diagonal Polygon */}
      <div
        className="absolute bottom-0 right-0 w-64 h-64 md:w-72 md:h-72 polygon-4k bg-[#ED1C24] z-0"
        style={{ clipPath: 'polygon(100% 100%, 0 100%, 90% 80%, 100% 0)' }}
      ></div>

      <div className="custom-container relative z-10">

        {/* Header Content */}
        <div className="flex flex-col items-center justify-center text-center mb-24 min-[3800px]:mb-48" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 min-[3800px]:gap-8 mb-4 w-full">
            <div className="h-[3.5px] min-[3800px]:h-[7px] rounded-full w-[100px] min-[3800px]:w-[200px] bg-[var(--color-primary)]"></div>
            <Typography variant="h2" color="dark" className="whitespace-nowrap">
              Our Products
            </Typography>
            <div className="h-[3.5px] min-[3800px]:h-[7px] rounded-full w-[100px] min-[3800px]:w-[200px] bg-[var(--color-primary)]"></div>
          </div>
          <Typography variant="p" color="dark" className="xl:max-w-[80%] min-[3800px]:max-w-7xl leading-relaxed mt-2 min-[3800px]:mt-6 opacity-90">
            Explore our comprehensive range of medical devices, designed with advanced technology, precision, and reliability to meet the evolving needs of healthcare professionals. From emergency care and patient monitoring to infusion therapy and respiratory support, our solutions are developed to deliver dependable performance across diverse clinical environments.
          </Typography>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-24 gap-x-8 min-[3800px]:gap-x-16 min-[3800px]:gap-y-64">
          {products.map((prod, idx) => (
            <div
              key={idx}
              className="relative rounded-tl-none rounded-tr-[3rem] min-[3800px]:rounded-tr-[6rem] rounded-b-2xl min-[3800px]:rounded-b-[3rem] z-10"
              data-aos="fade-up"
              data-aos-delay={100 * idx}
            >

              {/* Slanting Shadow Background */}
              <div
                className="absolute inset-0 bg-[#C8C8C8] -z-10 translate-x-0 translate-y-6 skew-y-3 min-[3800px]:translate-y-12 rounded-tl-none rounded-tr-[3rem] min-[3800px]:rounded-tr-[6rem] rounded-b-2xl min-[3800px]:rounded-b-[3rem]"
              ></div>

              {/* White Card Surface */}
              <div className="bg-white rounded-tl-none rounded-tr-[3rem] min-[3800px]:rounded-tr-[6rem] rounded-b-2xl min-[3800px]:rounded-b-[3rem] px-6 pb-8 pt-28 min-[3800px]:px-12 min-[3800px]:pb-24 product-card-4k flex flex-col items-end text-right border border-gray-100 shadow-[0_0_25px_rgba(0,0,0,0.1)] h-full">

                {/* Overlapping Image Circular Container */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-36 h-36 md:w-40 md:h-40 product-circle-4k rounded-full border-4 border-[var(--color-primary)] bg-white overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.15)] z-20">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col h-full justify-between items-end w-full">
                  <div className="w-full">
                    <Typography variant="h3" color="dark" className="font-bold mb-3 min-[3800px]:mb-12 text-right">
                      {prod.title}
                    </Typography>
                    <Typography variant="p" color="dark" className="opacity-80 leading-relaxed mb-6 min-[3800px]:mb-16 text-right">
                      {prod.desc}
                    </Typography>
                  </div>

                  <div className="mt-auto">
                    <Button text="View Products" variant="primary" showIcon={false} className="px-6 py-2 min-[3800px]:px-16 min-[3800px]:py-6" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-end mt-16 min-[3800px]:mt-32 xl:pr-16 min-[3800px]:pr-32" data-aos="fade-up">
          <Link href="#" className="border-b border-[#ED1C24]">
            <Typography variant="p" color="primary" className="hover:opacity-80 transition-opacity">
              View All
            </Typography>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProductsSlider;
