"use client";

import Link from "next/link";

const PRODUCTS = [
  { image: "/medical/tekno/p1.png", alt: "Open surgery", title: "Open surgery" },
  { image: "/medical/tekno/p2.png", alt: "Endoscopy", title: "Endoscopy" },
  { image: "/medical/tekno/p3.png", alt: "OR Equipment", title: "OR Equipment" },
  { image: "/medical/tekno/p4.png", alt: "HF Surgery", title: "HF Surgery" },
];

export default function ProductSolutions() {
  return (
    <section id="product-solutions" className="relative w-full bg-white py-24 overflow-hidden">
      <div className="custom-container relative z-10 px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Section Heading & Subtitle */}
        <div
          className="text-center max-w-7xl mx-auto mb-10 sm:mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="section-title font-medium tracking-tight font-exo2 text-[#111111] mb-4 sm:mb-6 leading-snug">
            Comprehensive Solutions for Modern Healthcare
          </h2>
          <p className="section-text leading-relaxed font-outfit font-light text-[#111111] max-w-7xl mx-auto">
            Explore a comprehensive range of precision-engineered medical instruments and technologies designed to support healthcare professionals across diverse surgical and clinical applications. From everyday surgical instruments to advanced minimally invasive solutions, TEKNO-MEDICAL combines precision, quality, and innovation.
          </p>
        </div>

        {/* 4-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PRODUCTS.map((product, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden group cursor-pointer w-full aspect-[3/4]"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={idx * 150}
            >
              <img
                src={product.image}
                alt={product.alt}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#00000080] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-12">
                <div className="flex items-center justify-between">
                  <h3 className="text-[#FFFFFF] font-outfit font-medium card-title">
                    {product.title}
                  </h3>
                  <div className="w-auto h-auto flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <img src="/medical/tekno/arrow.png" alt="View" className="w-auto h-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-end mt-10 mr-20">
          <Link href="#view-all" className="text-[#D22840] font-outfit hover:underline section-text underline font-medium">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}

