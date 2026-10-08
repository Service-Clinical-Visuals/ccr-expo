"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Products() {
  const products = [
    {
      title: "DUZEY SURGICAL BRAIN PAD",
      image: "/medical/duzey-medikal/p1.webp",
    },
    {
      title: "DUZEY DUAL MESH",
      image: "/medical/duzey-medikal/p2.webp",
    },
    {
      title: "DUZEY SVT PROLAPSE MESH",
      image: "/medical/duzey-medikal/p3.webp",
    },
    {
      title: "DUZEY PRE-SHAPED MESH",
      image: "/medical/duzey-medikal/p4.webp",
    },
    {
      title: "DUZEY POLYPROPYLENE MESH",
      image: "/medical/duzey-medikal/p5.webp",
    },
    {
      title: "DUZEY SVT VAGINAL TAPE MESH",
      image: "/medical/duzey-medikal/p6.webp",
    },
  ];

  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">
        {/* Header */}
        <div
          className="flex flex-col items-center text-center gap-3 w-full xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-[5px] bg-[var(--color-primary)] rounded-[10px]" />
            <Typography
              variant="h4"
              color="primary"
              className="uppercase tracking-wider !font-bold text-sm"
            >
              PRODUCTS
            </Typography>
          </div>

          <Typography variant="h2" color="dark" className="leading-snug">
            Advanced Solutions for Surgical Excellence
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed pt-1"
          >
            Discover Duzey Medical’s reliable range of surgical products, developed to support urology, urogynecology, hernia repair, and soft-tissue procedures with quality and precision.
          </Typography>
        </div>

        {/* Products Slider */}
        <div
          className="w-full mt-4"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-product-bullet"></span>`;
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
            }}
            className="w-full !pb-14"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="group relative flex flex-col h-full rounded-[10px] overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6">
                      <div className="flex items-end justify-between gap-3 w-full">
                        <div className="flex flex-col gap-1">
                          <Typography
                            variant="h4"
                            color="white"
                            className="uppercase !font-bold text-sm sm:text-base leading-tight max-w-[210px]"
                          >
                            {item.title}
                          </Typography>
                        </div>
                        <span className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase hover:text-[var(--color-primary)] transition-colors shrink-0 underline underline-offset-4">
                          DETAILS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .custom-product-bullet {
          width: 28px !important;
          height: 8px !important;
          border-radius: 4px !important;
          background-color: #ffffff !important;
          border: 1.5px solid #c40c10 !important;
          opacity: 0.7 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .swiper-pagination-bullet-active.custom-product-bullet {
          background-color: #c40c10 !important;
          border-color: #c40c10 !important;
          opacity: 1 !important;
          width: 36px !important;
        }
        #products .swiper-pagination {
          bottom: 0px !important;
        }

        @media (min-width: 2500px) and (max-width: 3799px) {
          .custom-product-bullet {
            width: 44px !important;
            height: 12px !important;
            border-radius: 6px !important;
            border-width: 2.5px !important;
            margin: 0 6px !important;
          }
          .swiper-pagination-bullet-active.custom-product-bullet {
            width: 58px !important;
          }
        }

        @media (min-width: 3800px) {
          .custom-product-bullet {
            width: 60px !important;
            height: 18px !important;
            border-radius: 9px !important;
            border-width: 3px !important;
            margin: 0 8px !important;
          }
          .swiper-pagination-bullet-active.custom-product-bullet {
            width: 80px !important;
          }
        }
      `}</style>
    </section>
  );
}
