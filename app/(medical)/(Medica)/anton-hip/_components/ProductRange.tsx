"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface Product {
  id: string;
  title: string;
  image: string;
  href: string;
}

const PRODUCTS: Product[] = [
  {
    id: "surgical-instruments",
    title: "Surgical Instruments",
    image: "/medical/anton-hip/p1.webp",
    href: "#contact",
  },
  {
    id: "patient-specific-implants",
    title: "Patient Specific Implants",
    image: "/medical/anton-hip/p2.webp",
    href: "#contact",
  },
  {
    id: "sterilization-container",
    title: "Sterilization Container",
    image: "/medical/anton-hip/p3.webp",
    href: "#contact",
  },
  {
    id: "implants-and-implants-systems",
    title: "Implants and Implants Systems",
    image: "/medical/anton-hip/p4.webp",
    href: "#contact",
  },
  {
    id: "endoscopic-ymj-surgery ",
    title: "Endoscopic YMJ Surgery ",
    image: "/medical/anton-hip/p5.webp",
    href: "#contact",
  },
  {
    id: "surgi-tec-products",
    title: "Surgi-Tec Products",
    image: "/medical/anton-hip/p6.webp",
    href: "#contact",
  },
];

export default function ProductRange() {
  return (
    <section id="products" className="w-full py-16 md:py-24 min-[3800px]:py-36 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[70%] min-[3800px]:max-w-6xl mb-10 sm:mb-14 min-[3800px]:mb-20" data-aos="fade-up">
          <Typography variant="h2" color="dark" weight="bold" className="text-center">
            Our Product Portfolio
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-center mt-3 sm:mt-4 min-[3800px]:mt-6 leading-relaxed"
          >
            Explore Anton Hipp&apos;s range of high-quality surgical instruments, implant systems, and specialized medical technology. Combining precision engineering, innovative manufacturing, and decades of experience, we deliver reliable solutions tailored to the needs of medical professionals.
          </Typography>
        </div>

        {/* Products Carousel Slider */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1026: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              2500: {
                slidesPerView: 3,
                spaceBetween: 36,
              },
              3800: {
                slidesPerView: 3,
                spaceBetween: 48,
              },
            }}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".product-range-pagination",
            }}
            className="w-full !pb-2"
          >
            {PRODUCTS.map((product) => (
              <SwiperSlide key={product.id} className="h-auto pb-4">
                <div className="w-full h-full rounded-[14px] min-[3800px]:rounded-[24px] overflow-hidden border border-gray-200/90 shadow-md flex flex-col group transition-all duration-300 hover:shadow-xl bg-white">
                  {/* Top Image Container: aspect-[533/236] as specified */}
                  <div className="w-full  bg-white flex items-center justify-center  overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full aspect-[533/236] object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Bottom Dark Box with Title and CTA Button */}
                  <div className="w-full bg-[#111111] p-5 sm:p-6 min-[3800px]:p-10 flex flex-col items-center justify-center gap-3.5 sm:gap-4 min-[3800px]:gap-7 text-center flex-grow">
                    <Typography
                      variant="h3"
                      color="white"
                      weight="semibold"
                      className="text-center line-clamp-1"
                    >
                      {product.title}
                    </Typography>

                    <Button
                      text="View Products"
                      href={product.href}
                      variant="primary"
                      showArrow={true}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Dots Pagination */}
          <div className="product-range-pagination custom-pagination mt-6 sm:mt-8 min-[3800px]:mt-14" />
        </div>
      </div>
    </section>
  );
}
