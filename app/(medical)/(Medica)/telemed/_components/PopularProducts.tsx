"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
}

const PRODUCTS: Product[] = [
  {
    id: "artus-oem-1h",
    name: "ArtUs OEM-1H",
    description:
      "ArtUs OEM-1H is an ultrasound medical beamformer designed for developers, manufacturers and researchers.",
    image: "/medical/telemed/pp1.png",
    link: "#products",
  },
  {
    id: "artus-ext-1h",
    name: "ArtUs EXT-1H",
    description:
      "ArtUs EXT-1H is a compact and highly powerful application-based ultrasound device.",
    image: "/medical/telemed/pp2.png",
    link: "#products",
  },
  {
    id: "smartus-ext-1m",
    name: "SmartUs EXT-1M",
    description:
      "SmartUs EXT-1M is a new generation of portable ultrasound color Doppler scanners. It employs the latest technologies...",
    image: "/medical/telemed/pp3.png",
    link: "#products",
  },
  {
    id: "micrus-pro-l40s",
    name: "MicrUs Pro-L40S",
    description:
      "MicrUs Pro-L40S, Point of Care USB Smart probe for tablet and smartphone. Telemedicine applications, training...",
    image: "/medical/telemed/pp4.png",
    link: "#products",
  },
  {
    id: "micrus-pro-c60s",
    name: "MicrUs Pro-C60S",
    description:
      "High-definition portable convex smart probe designed for deep abdominal and general clinical diagnostic imaging.",
    image: "/medical/telemed/pp5.png",
    link: "#products",
  },
  {
    id: "clarus-ext-1m",
    name: "ClarUs EXT-1M",
    description:
      "Versatile open-architecture ultrasound imaging platform engineered for high-throughput clinical workflows.",
    image: "/medical/telemed/pp6.jpg",
    link: "#products",
  },
];

export default function PopularProducts() {
  return (
    <section
      id="products"
      className="w-full bg-white pt-14 sm:pt-20 xl:pt-24 pb-16 sm:pb-20 xl:pb-24 overflow-hidden"
    >
      <div className="custom-container">
        {/* Header & Intro */}
        <div
          className="flex flex-col min-[1025px]:flex-row min-[1025px]:items-end justify-between gap-6 min-[1025px]:gap-12 min-[3800px]:gap-20 mb-10 sm:mb-12 xl:mb-14 min-[3800px]:mb-20"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Left Text Block */}
          <div className="flex-1 xl:max-w-[70%] min-[3800px]:max-w-[75%]">
            <Typography
              variant="h2"
              weight="semibold"
              color="dark"
              className="font-['Exo_2'] tracking-tight capitalize"
            >
              Popular <span className="text-[#0F3E7B]">Products</span>
            </Typography>

            <Typography
              variant="p"
              color="body"
              className="mt-3.5 sm:mt-4 min-[3800px]:mt-6 leading-relaxed"
            >
              Explore Our Advanced Ultrasound Solutions, Including Point-Of-Care
              Smart Probes And OEM Beamformers For Medical Imaging, Telemedicine,
              Research, And System Development. Our Products Combine
              High-Resolution Imaging, Compact Designs, Connectivity, And
              Reliable Performance For Diverse Applications.
            </Typography>
          </div>

          {/* Right View all Products Button */}
          <div className="shrink-0 pt-1 min-[1025px]:pt-0">
            <Button
              variant="primary"
              href="#products"
              showArrow
              className="whitespace-nowrap"
            >
              View all Products
            </Button>
          </div>
        </div>

        {/* Single Row Swiper Carousel: 1 slide on mobile, 2 slides on tablet up to 1025px, 3 slides on desktop */}
        <div
          className="w-full relative"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1025: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".products-custom-pagination",
            }}
            className="w-full !pb-4"
          >
            {PRODUCTS.map((product) => (
              <SwiperSlide key={product.id} className="h-auto pb-2">
                <div className="w-full h-full bg-white p-5 sm:p-6 xl:p-7 min-[3800px]:p-12 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] border border-black/10 flex flex-col justify-between transition-all duration-500 hover:shadow-[0px_6px_20px_rgba(0,0,0,0.15)] group">
                  {/* Product Image Card Box */}
                  <div className="relative w-full aspect-[484/314] overflow-hidden border border-black/15 bg-white flex items-center justify-center p-4 mb-5 sm:mb-6 min-[3800px]:mb-10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-['Exo_2'] font-[600] text-[22px] sm:text-[24px] min-[3800px]:text-[42px] text-[#2A2A2A] capitalize">
                        {product.name}
                      </h3>

                      <p className="font-['Outfit'] font-[400] text-[15px] sm:text-[16px] xl:text-[17px] min-[3800px]:text-2xl text-[#727272] leading-relaxed mt-2 sm:mt-2.5 min-[3800px]:mt-5 line-clamp-3">
                        {product.description}
                      </p>
                    </div>

                    {/* Review Products Link */}
                    <div className="pt-4 sm:pt-5 min-[3800px]:pt-8">
                      <Link
                        href={product.link}
                        className="inline-flex items-center gap-1 min-[3800px]:gap-3 font-['Exo_2'] font-[600] text-[20px] sm:text-[22px] min-[3800px]:text-3xl text-[#0F3E7B] underline underline-offset-4 capitalize hover:text-[#0a2d59] transition-colors group/link"
                      >
                        <span>Review Products</span>
                        <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
                          &gt;&gt;
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pill Pagination Container */}
          <div className="products-custom-pagination"></div>
        </div>
      </div>
    </section>
  );
}
