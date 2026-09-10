"use client";

import React from "react";
import Container from "./Container";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    title: "3D EMlift",
    desc: "Give your clients the ultimate #fivestarfacial treatment with our advanced multi-technology facial device",
    image: "/moto/3d-aesthetics/products/1.png",
  },
  {
    title: "3D Powerform V",
    desc: "3D Visage is a comprehensive face scanner designed to complement all cosmetic facial treatments",
    image: "/moto/3d-aesthetics/products/2.png",
  },
  {
    title: "3D Visage",
    desc: "Boost your client's confidence with a significant new technology proven to provide accelerated muscle stimulation",
    image: "/moto/3d-aesthetics/products/3.png",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="products">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span
            className="text-[#C99E88]! heading tracking-wide text-sm!"
            data-aos="fade-up"
          >
            Products
          </span>
          <div className="mt-2 flex flex-col items-center" data-aos="fade-up" data-aos-delay="50">
            <h2 className="heading inline-block">
              Our Product Portfolio
            </h2>
            <div className="h-[3px] w-14 bg-accent mt-3" />
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: "swiper-bullet",
            bulletActiveClass: "swiper-bullet-active",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="featured-swiper w-full"
        >
          {products.map((product, idx) => (
            <SwiperSlide key={idx} className="pb-12">
              <div
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="flex flex-col h-full bg-white border border-gray-100 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow group p-3"
              >
                {/* Image */}
                <div className="w-full overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="subheading font-semibold text-[20px]! mb-1">
                    {product.title}
                  </h3>
                  <div className="h-[2px] w-10 bg-accent mb-3" />
                  <p className="content text-[15px]! leading-[24px]! mb-6 flex-1">
                    {product.desc}
                  </p>
                  <Button
                    text="View Product"
                    href="#products"
                    variant="secondary"
                    className="navlink text-white! self-start"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      <style>{`
        .featured-swiper .swiper-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 0;
        }
        .featured-swiper .swiper-bullet {
          display: inline-block;
          width: 28px;
          height: 6px;
          background: #e5e0da;
          cursor: pointer;
          transition: background 0.3s;
        }
        .featured-swiper .swiper-bullet-active {
          background: #C08552;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;
