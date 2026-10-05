"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Product {
  name: string;
  image: string;
  href: string;
}

const PRODUCTS: Product[] = [
  { name: "Polypropylene Mesh", image: "/medical/smi-sutures/1.png", href: "" },
  { name: "Surgical Blades", image: "/medical/smi-sutures/2.png", href: "" },
  { name: "Scalpel Handles", image: "/medical/smi-sutures/3.png", href: "" },
  { name: "Flex – Bandage", image: "/medical/smi-sutures/4.png", href: "" },
  { name: "Pilomat", image: "/medical/smi-sutures/5.png", href: "" },
  { name: "Skin Marker", image: "/medical/smi-sutures/6.png", href: "" },
  { name: "Bone Wax", image: "/medical/smi-sutures/7.png", href: "" },
  { name: "SMI Spon", image: "/medical/smi-sutures/8.png", href: "" },
  { name: "Hoof Care", image: "/medical/smi-sutures/9.png", href: "" },
  { name: "Stitch Cutter", image: "/medical/smi-sutures/10.png", href: "" },
  { name: "Tablet Introducer", image: "/medical/smi-sutures/11.png", href: "" },
  { name: "Cassette Holder", image: "/medical/smi-sutures/12.png", href: "" },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.href}
      className="group relative block w-full aspect-[446/367] rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-[0_4px_14px_rgba(0,0,0,0.10)]"
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover Gradient Overlay (#FFFFFF -> #37589E): white wash fades the product, blue rises from the bottom */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.5)_35%,rgba(55,88,158,0.55)_75%,rgba(55,88,158,0.95)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 [@media(hover:none)]:opacity-100" />

      {/* Hover Title + Arrow */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-3 px-5 pb-5 sm:px-6 sm:pb-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 [@media(hover:none)]:opacity-100 [@media(hover:none)]:translate-y-0">
        <h3 className="card-title font-semibold text-white">{product.name}</h3>
        <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#3a5da8] flex items-center justify-center flex-shrink-0 shadow-md">
          <ChevronRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

export default function OurProducts() {
  return (
    <section id="products" className="py-14 sm:py-16 min-[1025px]:py-20">
      <div className="custom-container px-0 sm:px-2 min-[1025px]:px-4">
        {/* Section Heading */}
        <div className="text-center max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="section-title font-semibold  inline-flex items-center gap-3">
            Our Products
            <span className="inline-block w-6 sm:w-7 h-[3px] rounded-full bg-[#3a5da8]" />
          </h2>
          <p className="section-text  mt-3">
            Explore SMI&apos;s comprehensive range of surgical sutures designed for medical, dental, ophthalmic,
            and veterinary applications. Our specialised products are developed to meet diverse procedural
            requirements, combining quality materials, precise needle options, and reliable performance.
          </p>
        </div>

        {/* Products Carousel */}
        <div className="mt-10 min-[1025px]:mt-12" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Pagination, Autoplay]}
            className="smi-products-swiper"
            spaceBetween={16}
            slidesPerView={1}
            slidesPerGroup={1}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
              1025: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
            }}
          >
            {PRODUCTS.map((product) => (
              <SwiperSlide key={product.name} className="p-1.5">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
