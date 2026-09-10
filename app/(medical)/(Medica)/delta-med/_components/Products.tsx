"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    title: "VASCULAR ACCESS",
    image: "/medical/delta-med/1.png",
    link: "#",
  },
  {
    title: "INFUSION",
    image: "/medical/delta-med/2.png",
    link: "#",
  },
  {
    title: "PRE-FILLED SYRINGES",
    image: "/medical/delta-med/3.png",
    link: "#",
  },
  {
    title: "SYRINGES",
    image: "/medical/delta-med/4.png",
    link: "#",
  },
  {
    title: "OPERATION ROOM",
    image: "/medical/delta-med/5.png",
    link: "#",
  },
  {
    title: "UROLOGY",
    image: "/medical/delta-med/6.png",
    link: "#",
  },
  {
    title: "URODYNAMICS",
    image: "/medical/delta-med/7.png",
    link: "#",
  },
  {
    title: "GINECOLOGY",
    image: "/medical/delta-med/8.png",
    link: "#",
  },
  {
    title: "SUBCUTANEOUS INFUSION",
    image: "/medical/delta-med/9.png",
    link: "#",
  },
  {
    title: "BABY BOTTLE",
    image: "/medical/delta-med/10.png",
    link: "#",
  },
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-14 items-center">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 w-full md:w-[90%] xl:w-[75%]" data-aos="fade-up">
          <Typography
            variant="h2"
            color="dark"
            className="font-semibold text-3xl sm:text-4xl text-[#121C22] tracking-tight font-outfit"
          >
            Our Healthcare Solutions
          </Typography>
          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-sm sm:text-[15px] text-[#555962] max-w-7xl font-outfit"
          >
            Explore our comprehensive portfolio of medical devices and healthcare solutions, developed to support healthcare professionals across a wide range of clinical applications. From vascular access and infusion to urology, gynecology, operating room solutions, and more, our products combine quality, reliability, innovation, and patient-focused design to meet the evolving needs of modern healthcare.
          </Typography>
        </div>

        {/* Auto Slide Swiper Carousel */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".products-custom-pagination",
            }}
            breakpoints={{
              540: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 26,
              },
            }}
            className="w-full !pb-4"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto pb-3">
                <div className="bg-white border border-gray-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-xl rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-none rounded-bl-none p-5 sm:p-6 flex flex-col items-center gap-4 transition-all duration-300 h-full group">

                  {/* Inner Image Frame with matching diagonal corners */}
                  <div className="w-full aspect-square border border-gray-200/80 rounded-tl-[2rem] rounded-br-[2rem] rounded-tr-none rounded-bl-none p-6 flex items-center justify-center bg-white overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col items-center gap-2 pt-1 pb-1">
                    <h3 className="font-bold text-md sm:text-[18px] text-[#1A1A1A] tracking-wider text-center font-outfit uppercase">
                      {product.title}
                    </h3>
                    <Link
                      href={product.link}
                      className="text-[#1980AA] hover:text-[#12688b] underline decoration-[#1980AA] decoration-1 underline-offset-2 font-semibold text-sm sm:text-[16px] transition-colors font-outfit inline-flex items-center gap-1"
                    >
                      <span>View More &gt;</span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pill Pagination */}
          <div className="products-custom-pagination flex justify-center items-center gap-2 mt-8"></div>
        </div>

      </div>

      <style jsx global>{`
        .products-custom-pagination .swiper-pagination-bullet {
          width: 20px;
          height: 6px;
          border-radius: 9999px;
          background-color: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 4px;
          cursor: pointer;
        }
        .products-custom-pagination .swiper-pagination-bullet-active {
          width: 44px;
          background-color: #1b2a4a;
        }
      `}</style>
    </section>
  );
};

export default Products;
