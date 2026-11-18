"use client";

import React from "react";
import Typography from "../Typography";

const proceduralImages = [
  { id: 1, src: "/medical/zinnanti-surgical-3/about/t1.webp", alt: "LEEP Excision Procedure 1" },
  { id: 2, src: "/medical/zinnanti-surgical-3/about/t2.webp", alt: "LEEP Excision Procedure 2" },
  { id: 3, src: "/medical/zinnanti-surgical-3/about/t3.webp", alt: "LEEP Excision Procedure 3" },
  { id: 4, src: "/medical/zinnanti-surgical-3/about/t4.webp", alt: "LEEP Excision Procedure 4" },
  { id: 5, src: "/medical/zinnanti-surgical-3/about/t5.webp", alt: "LEEP Excision Procedure 5" },
  { id: 6, src: "/medical/zinnanti-surgical-3/about/t6.webp", alt: "LEEP Excision Procedure 6" },
];

/**
 * WomensHealth Section (t1 - t6) - Zinnanti Surgical About Page
 * Master Reference: Inogen Development Standards
 * - 6-image procedural grid (3 columns on desktop, 2 on tablet, 1 on mobile)
 */
const WomensHealth = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10 sm:gap-14">
        
        {/* Section Header: Centered */}
        <div
          className="text-center w-full max-w-full xl:max-w-[75%] mx-auto space-y-4"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-7 sm:w-8 h-1 bg-[#01ADEF] rounded-full inline-block shrink-0" />
            <span className="heading-blue text-[#00578E]">
              Cervical Precancer Treatment
            </span>
          </div>

          <Typography
            variant="h2"
            color="dark"
            className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight text-[#333333] leading-snug"
          >
            Women’s Health – LEEP Excision or ablation of cervical precancerous lesions
          </Typography>

          <Typography
            variant="p"
            color="dark"
            className="leading-relaxed text-[#555555] text-justify sm:text-center"
          >
            Zinnanti Surgical is known for developing specialty devices that overcome challenges in surgery by combining multiple functions into one instrument. Our design team is headed by Dr. William Zinnanti. As a physician-scientist, Dr. Zinnanti has a unique approach to assessing challenges and developing solutions that can then be validated for safety and efficacy.
          </Typography>
        </div>

        {/* 6 Procedural Images Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {proceduralImages.map((item, idx) => (
            <div
              key={item.id}
              className="w-full aspect-[4/3] rounded-[20px] min-[3800px]:rounded-[36px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-gray-100 bg-gray-50 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 150}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WomensHealth;

