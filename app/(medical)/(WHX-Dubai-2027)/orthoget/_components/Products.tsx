/**
 * Products Section - OrthoGet
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Centered Header Pattern:
 *    - Uses optimal desktop measure (`w-full max-w-full xl:max-w-[75%] mx-auto`).
 * 2. 3-Card Responsive Grid Layout:
 *    - 3 columns on desktop (>=1024px), 2 on tablet, 1 on mobile.
 * 3. Individual Product Card Structure:
 *    - Top container: Light neutral background (#F8F8F8) housing product imagery (`p1.webp`, `p2.webp`, `p3.webp`).
 *    - Bottom container: Clean typography hierarchy (Category Tag -> Product Name -> Detailed Description).
 *    - Card boundary: Crisp border (#71717A/40) with subtle elevation on hover.
 */
"use client";

import React from "react";
import Typography from "./Typography";

const productList = [
  {
    image: "/medical/orthoget/p1.webp",
    tag: "Long bone implant",
    title: "Orthonail",
    description:
      "OrthoNail is a patented hybrid magneto-mechanical intramedullary implant designed for precise lower-limb lengthening up to 85 mm, featuring magnetic power transmission, high structural strength, and a compact, reliable drive mechanism.",
  },
  {
    image: "/medical/orthoget/p2.webp",
    tag: "Magnetic growth activator",
    title: "Orthowheel",
    description:
      "OrthoWheel is a patented external controller that activates OrthoNail's lengthening mechanism using a magnetic field, ensuring precise bone extension through positioning feedback and physician monitoring.",
  },
  {
    image: "/medical/orthoget/p3.webp",
    tag: "system for doctors",
    title: "Orthomed",
    description:
      "OrthoMed is a remote monitoring system that enables physicians to track bone growth, rehabilitation progress, and patient medical records through RFID technology and a mobile app.",
  },
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Centered Section Header */}
        <div
          className="text-center w-full max-w-[90%] xl:max-w-[70%] mx-auto space-y-3 sm:space-y-4"
          data-aos="fade-up"
        >
          <Typography variant="tag" color="primary">
            _ Our Product Portfolio
          </Typography>

          <Typography
            variant="h2"
            color="secondary"
            className="text-[#202020]"
          >
            Integrated Technologies for Advanced Orthopedic Treatment
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="font-dmsans leading-relaxed text-[#404040] w-full xl:max-w-[70%] mx-auto"
          >
            Discover OrthoGet’s comprehensive range of orthopedic implants, magnetic activation devices, and intelligent digital monitoring systems, designed to support precise bone lengthening and improve treatment management.
          </Typography>
        </div>

        {/* 3 Products Grid */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 mt-12 sm:mt-16 min-[2500px]:mt-20 min-[3800px]:mt-28"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {productList.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[10px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[26px] border border-[#71717A]/40 group-hover:border-[#5166D3] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer md:last:col-span-2 md:last:w-[calc(50%-1rem)] md:last:mx-auto lg:last:col-span-1 lg:last:w-full lg:last:mx-0"
            >
              {/* Product Visual Container */}
              <div className="w-full h-[260px] sm:h-[300px] lg:h-[320px] min-[2500px]:h-[450px] min-[3800px]:h-[600px] bg-[#F8F8F8] flex items-center justify-center p-6 sm:p-8 overflow-hidden border-b border-gray-200">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Product Details Content */}
              <div className="relative overflow-hidden p-6 sm:p-7 min-[2500px]:p-10 min-[3800px]:p-14 flex flex-col flex-1 bg-white">
                {/* Smooth Slide-up Blue Background from Bottom */}
                <div
                  className="absolute inset-0 bg-[#5166D3] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col flex-1 gap-2.5 sm:gap-3">
                  <Typography
                    variant="tag"
                    color="primary"
                    className="transition-colors duration-300 group-hover:!text-white"
                  >
                    {product.tag}
                  </Typography>

                  <Typography
                    variant="h3"
                    color="secondary"
                    className="transition-colors duration-300 group-hover:!text-white"
                  >
                    {product.title}
                  </Typography>

                  <Typography
                    variant="p"
                    color="muted"
                    className="mt-1 flex-1 transition-colors duration-300 group-hover:!text-white"
                  >
                    {product.description}
                  </Typography>
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

