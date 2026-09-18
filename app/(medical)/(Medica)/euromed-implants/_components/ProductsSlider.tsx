"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Typography from "./Typography";
import Button from "./Button";

const allProducts = [
  { category: 'Hip', name: 'Almond Modular Cementless / Cemented Stem', desc: 'Proven cementless and cemented femoral stems designed for primary hip replacement, providing stable fixation, optimal canal filling, and consistent head offset across implant sizes.', image: '/medical/euromed-implants/c1.png' },
  { category: 'Hip', name: 'Modular Straight Cementless / Cemented Stem', desc: 'Cementless and cemented stems designed for primary and revision hip replacement, offering accurate canal fit, stable fixation, and compatibility with modular heads and acetabular components.', image: '/medical/euromed-implants/c2.png' },
  { category: 'Hip', name: 'EUROFIT Primary Cementless Stem', desc: 'A proven stem designed for primary total hip replacement, providing accurate canal fit, stable bone fixation, and enhanced stability through its tapered design.', image: '/medical/euromed-implants/c3.png' },
  { category: 'Hip', name: 'EUROFIT Revision Cementless Stem', desc: 'Proven cementless and cemented femoral stems designed for primary hip replacement, providing stable fixation, optimal canal filling, and consistent head offset across implant sizes.', image: '/medical/euromed-implants/c4.png' },
  { category: 'Hip', name: 'EMR Revision Hip System', desc: 'A modular revision hip system designed for complex femoral defects, offering long stems in multiple lengths and diameters for precise fit, stable fixation, and flexible intraoperative reconstruction.', image: '/medical/euromed-implants/c5.png' },
  { category: 'Hip', name: 'Cemented Cup', desc: 'Designed for cemented fixation in the acetabulum, the polyethylene cup offers excellent tissue tolerance, low friction, and reliable wear performance. Available in multiple sizes to accommodate different anatomical requirements.', image: '/medical/euromed-implants/c6.png' },
  { category: 'Hip', name: 'Bipolar Head', desc: 'A partial hip prosthesis combining a femoral head with the cup. It features a certified stainless-steel outer shell and a durable UHMWPE inner insert.', image: '/medical/euromed-implants/c7.png' },
  { category: 'Hip', name: 'Optifit Cementless Cup', desc: 'A hemispherical Ti6Al4V acetabular cup designed for uncemented fixation, providing stable initial fixation and long-term bone integration. Optional titanium plasma spray and hydroxyapatite coatings support osseointegration.', image: '/medical/euromed-implants/c8.png' },
];

const ProductsSlider = () => {
  const [activeTab, setActiveTab] = useState("Hip");
  const tabs = ["Hip", "Knee", "Tumor"];

  // Filter products by category, fallback to all if none match (or empty array)
  const filteredProducts = allProducts.filter(p => p.category === activeTab);
  const displayProducts = filteredProducts.length > 0 ? filteredProducts : allProducts;

  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center  gap-3 mb-8" data-aos="fade-up">
          <Typography variant="h5" className="text-[#36679B] font-medium">
            • Our Products
          </Typography>

          <Typography variant="h2" color="dark" className="leading-tight">
            Advanced Solutions. Designed for Precision.
          </Typography>

          <Typography variant="p" color="dark" className="leading-relaxed xl:max-w-[70%] ">
            Euromed Implants develops high-quality implant systems and surgical instruments for modern orthopaedic care. Our portfolio covers primary, revision, tumour, and trauma solutions, combining proven technology with precision engineering and a focus on surgical requirements
          </Typography>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2 rounded-full border transition-all duration-300 ${activeTab === tab
                ? "bg-[#36679B] text-white border-[#36679B]"
                : "bg-white text-[#36679B] border-[#36679B] hover:bg-gray-50"
                }`}
            >
              <Typography variant="p" className={activeTab === tab ? "text-white font-medium" : "text-[#36679B] font-medium"}>
                {tab}
              </Typography>
            </button>
          ))}
        </div>

        {/* Slider Section */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
            className="products-swiper pb-12"
          >
            {displayProducts.map((product, idx) => (
              <SwiperSlide key={idx} className="!h-auto pb-10">
                {/* Card Body */}
                <div className="relative h-full w-full bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-t-[200px] min-[3800px]:rounded-t-[400px] rounded-b-[16px] min-[3800px]:rounded-b-[32px] flex flex-col items-center pt-10 min-[3800px]:pt-20 px-6 min-[3800px]:px-12 transition-transform hover:-translate-y-2 duration-300">

                  {/* Image Area */}
                  <div className="w-full h-60 lg:h-72 min-[3800px]:h-[600px] mb-6 min-[3800px]:mb-12 flex justify-center items-center shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-[85%] object-contain"
                    />
                  </div>

                  {/* Text Area */}
                  <div className="text-center flex flex-col flex-grow w-full">
                    <Typography variant="h3" color="dark" className="!font-bold mb-3 min-[3800px]:mb-6 flex items-center justify-center shrink-0 min-[3800px]:text-5xl">
                      {product.name}
                    </Typography>
                    <Typography variant="p" color="dark" className="text-sm min-[3800px]:text-3xl opacity-80 leading-relaxed mb-10 min-[3800px]:mb-20">
                      {product.desc}
                    </Typography>
                  </div>

                  {/* Overlaid Button */}
                  <div className="mt-auto w-max z-10 -mb-5 min-[3800px]:-mb-10 shrink-0">
                    <Button text="View Product" href="#" variant="primary" showIcon={false} />
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
