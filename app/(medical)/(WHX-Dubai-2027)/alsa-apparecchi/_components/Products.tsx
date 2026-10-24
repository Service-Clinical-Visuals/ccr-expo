"use client";

import React from "react";
import Typography from "./Typography";

interface Product {
  title: string;
  image: string;
  link: string;
}

const products: Product[] = [
  {
    title: "EXCELL NHP/T",
    image: "/medical/alsa-apparecchi/p1.webp",
    link: "#product-nhp",
  },
  {
    title: "EXCELL MCDSe",
    image: "/medical/alsa-apparecchi/p2.webp",
    link: "#product-mcdse",
  },
  {
    title: "ALSATOM SU MPC",
    image: "/medical/alsa-apparecchi/p3.webp",
    link: "#product-alsatom",
  },
];

const Products = () => {
  return (
    <section id="products" className="w-full pt-8 pb-20 xl:pb-28 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center gap-3 w-full xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <Typography variant="h4" color="muted" className="!font-bold tracking-wide">
            Our Medical Technology
          </Typography>
          <Typography variant="h2" color="dark" className="!font-bold leading-tight">
            Advanced Electrosurgical Solutions for Modern Healthcare
          </Typography>
          <Typography variant="p" color="dark" className="text-sm sm:text-base text-[#111111] leading-relaxed mt-1">
            Explore ALSA’s advanced electrosurgical units, combining precision engineering, reliable
            performance, and innovative technology to meet the evolving needs of modern surgical
            care. Each solution is designed to support diverse surgical applications with a focus on
            quality, safety, and ease of use.
          </Typography>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 sm:gap-20 md:gap-3 lg:gap-6 xl:gap-10 items-stretch pb-16 sm:pb-20 md:pb-14 lg:pb-20 w-full">
          {products.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative flex flex-col items-center justify-center bg-white rounded-[16px] min-[2500px]:rounded-[24px] min-[3800px]:rounded-[32px] border border-gray-200 shadow-[0_4px_20px_rgba(60,64,67,0.08)] hover:shadow-2xl transition-all duration-500 w-full min-w-0 aspect-[535/380] cursor-pointer before:absolute before:-bottom-12 sm:before:-bottom-14 md:before:-bottom-10 lg:before:-bottom-14 before:inset-x-0 before:h-16 before:content-['']"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Product Image Container */}
              <div className="w-full h-full p-4 sm:p-5 md:p-2.5 lg:p-4 xl:p-5 pb-8 sm:pb-10 md:pb-6 lg:pb-8 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Dark Backdrop Overlay on Hover */}
              <div className="absolute inset-0 rounded-[16px] min-[2500px]:rounded-[24px] min-[3800px]:rounded-[32px] bg-black/60 backdrop-blur-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Product Info Badge */}
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 group-hover:bottom-1/2 group-hover:translate-y-1/2 w-[90%] max-w-[365px] h-[95px] sm:h-[105px] md:h-[86px] lg:h-[110px] xl:h-[121px] min-[2500px]:h-[170px] min-[3800px]:h-[240px] z-20 bg-[#0B192C] group-hover:bg-white rounded-[16px] min-[2500px]:rounded-[22px] min-[3800px]:rounded-[30px] py-2 md:py-1.5 lg:py-3.5 px-3 md:px-1.5 lg:px-4 flex flex-col items-center justify-center gap-1.5 md:gap-1 lg:gap-2 text-center shadow-lg group-hover:shadow-2xl transition-all duration-500 ease-out"
              >
                <Typography
                  variant="h3"
                  color="none"
                  className="!font-bold text-base sm:text-lg md:text-xs lg:text-base xl:text-xl min-[2500px]:text-3xl min-[3800px]:text-5xl tracking-normal md:tracking-tight lg:tracking-wide text-white group-hover:text-[#0B192C] transition-colors duration-500 leading-snug whitespace-nowrap"
                >
                  {item.title}
                </Typography>

                <span className="inline-flex items-center justify-center py-1 sm:py-1.5 md:py-0.5 lg:py-1.5 px-4 sm:px-6 md:px-2.5 lg:px-5 rounded-full text-xs sm:text-sm md:text-[10px] lg:text-xs xl:text-sm min-[2500px]:text-lg min-[3800px]:text-2xl font-medium tracking-wide transition-all duration-500 bg-[#132238] border border-white/10 text-white/80 group-hover:bg-[#24AEE7] group-hover:border-[#24AEE7] group-hover:text-white group-hover:font-semibold group-hover:shadow-md">
                  View Product
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
