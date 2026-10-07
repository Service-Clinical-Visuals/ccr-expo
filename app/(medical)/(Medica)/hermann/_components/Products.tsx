"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Products() {
  const products = [
    {
      title: "Laparoscopy",
      image: "/medical/hermann/p1.webp",
      href: "#products",
    },
    {
      title: "Endoscopic Devices",
      image: "/medical/hermann/p2.webp",
      href: "#products",
    },
    {
      title: "Electrosurgery",
      image: "/medical/hermann/p3.webp",
      href: "#products",
    },
    {
      title: "Arthroscopy",
      image: "/medical/hermann/p4.webp",
      href: "#products",
    },
    {
      title: "Urology / Hysteroscopy",
      image: "/medical/hermann/p5.webp",
      href: "#products",
    },
    {
      title: "Titanium systems",
      image: "/medical/hermann/p6.webp",
      href: "#products",
    },
  ];

  return (
    <section id="products" className="w-full py-14 sm:py-18 lg:py-24 min-[3800px]:py-36 bg-[#F5F5F5] overflow-hidden">
      <div className="custom-container flex flex-col gap-8 sm:gap-10">
        {/* Header Row: Title, Subtitle & Button */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="w-full max-w-[1000px] xl:max-w-[80%] space-y-3 sm:space-y-4">
            <Typography variant="h2" className="!font-semibold capitalize text-3xl sm:text-4xl lg:text-[42px] min-[2500px]:text-5xl leading-tight xl:max-w-[80%]">
              <span className="text-[var(--color-secondary)]">Our </span>
              <span className="text-[var(--color-primary)]">Products</span>
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="text-[#4A4A4A] leading-relaxed w-full xl:max-w-[80%]"
            >
              Explore Hermann Medizintechnik’s Range Of Medical Instruments And Systems, Designed To Support Diverse Surgical Applications. Our Portfolio Covers Laparoscopy, Endoscopy, Electrosurgery, Arthroscopy, Urology, Implants, Plastic Surgery, And General Surgery.
            </Typography>
          </div>

          <div className="shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button
              text="Explore All Products"
              variant="primary"
              href="#products"
              showIcon={true}
            />
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[rgba(30,30,30,0.18)]" />

        {/* Products Swiper Slider */}
        <div className="w-full mt-2" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} hermann-product-bullet"></span>`;
              },
            }}
            breakpoints={{
              540: { slidesPerView: 2, spaceBetween: 20 },
              900: { slidesPerView: 3, spaceBetween: 24 },
              1200: { slidesPerView: 4, spaceBetween: 28 },
              2000: { slidesPerView: 4, spaceBetween: 32 },
              3000: { slidesPerView: 4, spaceBetween: 40 },
            }}
            className="w-full !pb-14 min-[3800px]:!pb-20"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <div className="group w-full bg-white rounded-[20px] min-[3800px]:rounded-[36px] p-5 sm:p-6 min-[3800px]:p-10 shadow-[0px_3px_8px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between gap-5 border border-gray-100/80">
                  {/* Image Container with Inner Border */}
                  <div className="w-full aspect-square bg-white border border-[rgba(17,17,17,0.18)] rounded-[20px] min-[3800px]:rounded-[32px] p-6 min-[3800px]:p-10 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Bottom Row: Title & Action Arrow */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <h3 className="font-semibold text-lg lg:text-[20px] min-[3800px]:text-3xl text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <Link
                      href={item.href}
                      aria-label={`View ${item.title}`}
                      className="w-10 h-10 sm:w-11 sm:h-11 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary-hover)] group-hover:rotate-45 transition-all duration-300 shadow-sm"
                    >
                      <ArrowUpRight className="w-5 h-5 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Hermann Slider Pagination Styling */}
      <style jsx global>{`
        .hermann-product-bullet {
          width: 8px !important;
          height: 8px !important;
          border-radius: 9999px !important;
          background-color: #d9d9d9 !important;
          opacity: 1 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s ease;
        }
        .hermann-product-bullet.swiper-pagination-bullet-active {
          width: 44px !important;
          background-color: #bc0e33 !important;
        }
        @media (min-width: 3800px) {
          .hermann-product-bullet {
            width: 16px !important;
            height: 16px !important;
            margin: 0 8px !important;
          }
          .hermann-product-bullet.swiper-pagination-bullet-active {
            width: 80px !important;
          }
        }
      `}</style>
    </section>
  );
}
