"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Typography from "./Typography";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  { title: "Fetal Monitoring", image: "/medical/medical-econet/p1.png" },
  { title: "ECG", image: "/medical/medical-econet/p2.png" },
  { title: "Pulse Oxymetry", image: "/medical/medical-econet/p3.png" },
  { title: "Patient Monitoring", image: "/medical/medical-econet/p4.png" },
  { title: "BDM", image: "/medical/medical-econet/p5.png" },
  { title: "Emergency Care", image: "/medical/medical-econet/p6.png" },
  { title: "Digital Radiography", image: "/medical/medical-econet/p7.png" },
  { title: "Veterinary Imaging", image: "/medical/medical-econet/p8.png" },
];

// Bullet styles live on the pagination container so no global CSS is needed
const paginationClass =
  "econet-product-pagination flex items-center justify-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3.5 mt-8 2xl:mt-10 min-[2500px]:mt-14 min-[3800px]:mt-20 " +
  "[&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!bg-[#D9D9D9] [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 " +
  "[&_.swiper-pagination-bullet]:!w-2 [&_.swiper-pagination-bullet]:!h-2 min-[2500px]:[&_.swiper-pagination-bullet]:!w-3 min-[2500px]:[&_.swiper-pagination-bullet]:!h-3 min-[3800px]:[&_.swiper-pagination-bullet]:!w-4 min-[3800px]:[&_.swiper-pagination-bullet]:!h-4 " +
  "[&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination-bullet-active]:!w-12 min-[2500px]:[&_.swiper-pagination-bullet-active]:!w-[72px] min-[3800px]:[&_.swiper-pagination-bullet-active]:!w-24";

export default function Products() {
  return (
    <section id="products" className="w-full py-12 sm:py-16 lg:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center gap-3 2xl:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 mb-6 sm:mb-8 2xl:mb-10 min-[2500px]:mb-14 min-[3800px]:mb-20"
          data-aos="fade-up"
        >
          <Typography variant="h1" color="dark">
            Quality Medical Products
          </Typography>
          <Typography variant="p" color="muted" className="max-w-[1040px] 2xl:max-w-[1240px] min-[2500px]:max-w-[1720px] min-[3800px]:max-w-[2400px]">
            The products of medical ECONET GmbH are as diverse as our customers&apos; demands. We cover all important
            medical fields with high-quality, professional equipment designed for reliable clinical performance and
            patient care.
          </Typography>
        </div>

        {/* Slider */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ el: ".econet-product-pagination", clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              2500: { slidesPerView: 3, spaceBetween: 48 },
              3800: { slidesPerView: 3, spaceBetween: 64 },
            }}
            className="w-full !px-1 !pt-1 !pb-4 min-[2500px]:!pb-6"
          >
            {products.map((item) => (
              <SwiperSlide key={item.title}>
                <Link
                  href="#products"
                  className="group w-full aspect-[533/485] flex flex-col bg-white rounded-tr-[6px] rounded-br-[18px] min-[2500px]:rounded-tr-[9px] min-[2500px]:rounded-br-[27px] min-[3800px]:rounded-tr-[12px] min-[3800px]:rounded-br-[36px] shadow-[2px_3px_8px_rgba(0,0,0,0.18)] p-4 2xl:p-[18px] min-[2500px]:p-6 min-[3800px]:p-9"
                >
                  {/* Image */}
                  <div className="w-full aspect-[491/352] overflow-hidden rounded-[14px] min-[2500px]:rounded-[21px] min-[3800px]:rounded-[28px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  </div>

                  {/* Title + arrow */}
                  <div className="flex-1 flex items-center justify-between gap-3">
                    <Typography variant="h2" color="dark" className="group-hover:text-primary transition-colors">
                      {item.title}
                    </Typography>
                    <span className="flex items-center justify-center shrink-0 w-9 h-9 sm:w-10 sm:h-10 2xl:w-12 2xl:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-primary text-white group-hover:bg-primary-hover transition-colors">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={2} />
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={paginationClass} />
        </div>
      </div>
    </section>
  );
}
