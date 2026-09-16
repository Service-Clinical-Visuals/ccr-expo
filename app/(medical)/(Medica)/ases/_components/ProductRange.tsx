"use client";

import React from "react";
import Link from "next/link";

export default function ProductRange() {
  return (
    <section id="products" className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12" data-aos="fade-up">
          <span className="text-[#BA0A28] font-[Inter] font-semibold text-[20px] md:text-[24px]">
            Products
          </span>
          <h2 className="text-[#333333] font-[Manrope] text-[24px] md:text-[28px] font-bold mb-1">
            Our Product Categories
          </h2>
          <div className="w-[150px] md:w-[180px] h-[2px] bg-[#BA0A28] rounded-sm" />
        </div>

        {/* Grid of 3 categories */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">

          {/* Card 1 */}
          <div className="w-full overflow-hidden rounded-[8px] border border-gray-200 shadow-md relative group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
            <img src="/medical/ases/p1.png" alt="Upper and Lower Extremities" className="w-full h-full object-cover" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#151515]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 lg:p-6">
              <div className="flex justify-between items-end w-full gap-4">
                <h3 className="text-white font-[Inter] font-bold text-[20px] md:text-[24px] leading-snug">
                  Upper and Lower<br />Extremities
                </h3>
                <Link href="#products" className="bg-[#BA0A28] text-white px-5 py-2 rounded-[4px] text-[18px] font-[Inter] font-semibold hover:bg-[#900820] transition-colors whitespace-nowrap">
                  Know More
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full overflow-hidden rounded-[8px] border border-gray-200 shadow-md relative group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
            <img src="/medical/ases/p2.png" alt="Screws" className="w-full h-full object-cover" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#151515]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 lg:p-6">
              <div className="flex justify-between items-end w-full gap-4">
                <h3 className="text-white font-[Inter] font-bold text-[20px] md:text-[24px] leading-snug">
                  Screws
                </h3>
                <Link href="#products" className="bg-[#BA0A28] text-white px-5 py-2 rounded-[4px] text-[18px] font-[Inter] font-semibold hover:bg-[#900820] transition-colors whitespace-nowrap">
                  Know More
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full overflow-hidden rounded-[8px] border border-gray-200 shadow-md relative group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
            <img src="/medical/ases/p3.png" alt="Nails" className="w-full h-full object-cover" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#151515]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 lg:p-6">
              <div className="flex justify-between items-end w-full gap-4">
                <h3 className="text-white font-[Inter] font-bold text-[20px] md:text-[24px] leading-snug">
                  Nails
                </h3>
                <Link href="#products" className="bg-[#BA0A28] text-white px-5 py-2 rounded-[4px] text-[18px] font-[Inter] font-semibold hover:bg-[#900820] transition-colors whitespace-nowrap">
                  Know More
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
