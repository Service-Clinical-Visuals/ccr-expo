"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const categories = [
  {
    name: "Digestive and bronchial endoscopy",
    products: [
      { title: "CPRE, Balloon Catheter", image: "/medical/prince-medical/f1.jpg", href: "#" },
      { title: "ERCP, Nasobiliary Kit", image: "/medical/prince-medical/f2.jpg", href: "#" },
      { title: "Hemostasis, Injection Needle", image: "/medical/prince-medical/f3.jpg", href: "#" },
      { title: "Hemostasis, Polypectomy", image: "/medical/prince-medical/f4.jpg", href: "#" },
      { title: "Cytological Sampling", image: "/medical/prince-medical/f5.jpg", href: "#" },
    ]
  },
  {
    name: "Gynaecology",
    products: [
      { title: "Sampling, Smear And Biopsy", image: "/medical/prince-medical/d1.jpg", href: "#" },
      { title: "Intra-Uterine Device...", image: "/medical/prince-medical/d2.jpg", href: "#" },
      { title: "Hysterography And...", image: "/medical/prince-medical/d3.jpg", href: "#" },
      { title: "Functional Exploration", image: "/medical/prince-medical/c4.jpg", href: "#" },
    ]
  },
  {
    name: "Medically Assisted Reproduction",
    products: [
      { title: "Intrauterine Insemination", image: "/medical/prince-medical/c1.jpg", href: "#" },
      { title: "Oocytepuncture", image: "/medical/prince-medical/c2.jpg", href: "#" },
      { title: "Embryo Transfer", image: "/medical/prince-medical/c3.jpg", href: "#" },
    ]
  }
];

const ProductsSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="products" className="w-full py-16 min-[3800px]:py-32 bg-white relative overflow-hidden">
      <div className="custom-container flex flex-col">

        {/* Top Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 w-full mb-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 xl:max-w-[70%]">
            <Typography variant="h2" color="dark">
              Our Products
            </Typography>
            <Typography variant="p" color="dark" className="leading-relaxed">
              Explore PRINCE MEDICAL'S Specialised Medical Devices For Diverse Clinical Applications. Our Portfolio Includes Solutions For Endoscopy, Gynecology, Medically Assisted Reproduction, And Professional Cleaning Procedures.
            </Typography>
          </div>
          <div className="shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button text="Explore Medical Devices →" href="#explore" variant="primary" />
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 mb-8 min-[3800px]:mb-16"></div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 min-[3800px]:mb-24" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2 transition-colors border border-primary ${activeTab === idx ? "bg-primary" : "bg-white hover:bg-gray-50"
                }`}
            >
              <Typography
                variant="p"
                className={`text-sm md:text-base ${activeTab === idx ? "text-white" : "text-primary"
                  }`}
              >
                {category.name}
              </Typography>
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            key={activeTab}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
              3800: { slidesPerView: 5 },
            }}
            className="w-full custom-swiper-pagination pb-12"
          >
            {categories[activeTab].products.map((prod, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex">
                <div className="flex flex-col w-full h-full bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200 p-5">
                  <div className="w-full aspect-[338/314]  flex items-center justify-center overflow-hidden mb-6">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full border border-gray-200 object-cover "
                    />
                  </div>
                  <div className="flex flex-col flex-grow justify-between gap-4">
                    <Typography variant="h4" color="dark" className="font-semibold leading-relaxed">
                      {prod.title}
                    </Typography>
                    <Link href={prod.href} className="inline-block hover:opacity-80 transition-opacity w-fit mt-auto">
                      <Typography variant="h4" color="primary" className="font-bold underline underline-offset-4 text-[15px]">
                        Review Products &gt;&gt;
                      </Typography>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default ProductsSlider;
