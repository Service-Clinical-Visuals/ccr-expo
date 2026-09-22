"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Product = {
  name: string;
  image: string;
  link: string;
};

type CategoryData = {
  [key: string]: Product[];
};

const PRODUCTS: CategoryData = {
  "Medical Equipment": [
    { name: "Neonatal Equipments", image: "/medical/elektro/p1.png", link: "#" },
    { name: "Electrosurgical Units", image: "/medical/elektro/p2.png", link: "#" },
    { name: "Sterilizers", image: "/medical/elektro/p3.png", link: "#" },
    { name: "Negatoscopes (X-Ray Film...)", image: "/medical/elektro/p4.png", link: "#" },
  ],
  "Laboratory Equipment": [
    { name: "Bio Safety Cabinet", image: "/medical/elektro/p5.png", link: "#" },
    { name: "Bacteriological Incubators", image: "/medical/elektro/p6.png", link: "#" },
    { name: "Laboratory Ovens", image: "/medical/elektro/p7.png", link: "#" },
    { name: "Laboratory Centrifuge", image: "/medical/elektro/p8.png", link: "#" },
    { name: "Water Still", image: "/medical/elektro/p9.png", link: "#" },
  ],
  "Industrial Ovens": [
    { name: "M 1071 P Industrial Oven", image: "/medical/elektro/p10.png", link: "#" },
    { name: "M 1071 Industrial Oven", image: "/medical/elektro/p11.png", link: "#" },
    { name: "M 1074 Industrial Oven", image: "/medical/elektro/p12.png", link: "#" },
    { name: "M 1075 Industrial Oven", image: "/medical/elektro/p13.png", link: "#" },
  ],
};

const CATEGORIES = Object.keys(PRODUCTS);

const Solutions = () => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0]);

  return (
    <section id="solutions" className="w-full py-16 lg:py-24 bg-white overflow-hidden text-[#252525]">
      <div className="custom-container flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center mb-10 xl:max-w-[75%]" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold mb-4">
            Our Products
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            Discover Elektro-mag's comprehensive range of professional equipment designed to support healthcare, laboratory, and industrial applications. Our product portfolio combines practical functionality, reliable performance, and quality-focused solutions to meet the diverse needs of professionals across different sectors.
          </Typography>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 text-sm md:text-base transition-colors border ${activeCategory === category
                ? "bg-[#10253D] text-white border-[#10253D]"
                : "bg-white text-[#252525] border-gray-300 hover:border-[#10253D] hover:text-[#10253D]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Slider */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="200">
          <style>{`
            .swiper-custom-bullet {
              width: 24px;
              height: 6px;
              background-color: #D1D5DB; /* gray-300 */
              border-radius: 9999px;
              display: inline-block;
              cursor: pointer;
              transition: all 0.3s ease;
              margin: 0 4px;
            }
            .swiper-custom-bullet.swiper-pagination-bullet-active {
              width: 40px;
              background-color: #10253D;
            }
          `}</style>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={35}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              renderBullet: function (index, className) {
                return '<span class="' + className + ' swiper-custom-bullet"></span>';
              }
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full pb-12"
          >
            {PRODUCTS[activeCategory].map((product, idx) => (
              <SwiperSlide key={idx} className="h-auto pb-6">
                <div className="bg-white border border-gray-100 shadow-[0_5px_5px_rgba(0,0,0,0.10)] transition-shadow p-5 flex flex-col h-full">

                  {/* Image Container */}
                  <div className="w-full mb-6 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-contain"
                      onError={(e) => (e.currentTarget.src = "/adamo/section2.png")}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col flex-grow justify-between">
                    <Typography variant="h4" color="dark" className="font-semibold mb-6 text-lg">
                      {product.name}
                    </Typography>

                    <Link href={product.link} className="inline-block mt-auto">
                      <span className="font-bold text-[#10253D] hover:text-[#173556] transition-colors text-sm md:text-base border-b border-transparent hover:border-[#173556] pb-0.5 inline-flex">
                        Review Products &gt;&gt;
                      </span>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Container */}
        <div className="flex justify-center custom-pagination mt-10 gap-2" data-aos="fade-up" data-aos-delay="300"></div>

      </div>
    </section>
  );
};

export default Solutions;
