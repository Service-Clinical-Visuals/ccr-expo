"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface ProductItem {
  id: number;
  title: string;
  image: string;
}

const traumaProducts: ProductItem[] = [
  { id: 1, title: "Locking LCP Superior Anterior Clavicle Plate, With Lateral Extension", image: "/medical/seles/o1.png" },
  { id: 2, title: "Locking LCP Superior Anterior Clavicle Plate", image: "/medical/seles/o2.png" },
  { id: 3, title: "Locking LCP Clavicle Hook Plate", image: "/medical/seles/o3.png" },
  { id: 4, title: "Locking Proximal Humerus Plate (1)", image: "/medical/seles/o4.png" },
  { id: 5, title: "Locking Proximal Humerus Plate V2", image: "/medical/seles/o5.png" },
  { id: 6, title: "Locking Distal Lateral Dorsal Humerus Plate", image: "/medical/seles/o6.png" },
];

const spineProducts: ProductItem[] = [
  { id: 1, title: "Spine Fixation System", image: "/medical/seles/s1.png" },
  { id: 2, title: "Pedicle Screw System", image: "/medical/seles/s2.png" },
  { id: 3, title: "Cervical Plate System", image: "/medical/seles/s3.png" },
  { id: 4, title: "PEEK Cage Lumbar", image: "/medical/seles/s4.png" },
  { id: 5, title: "PEEK Cage Cervical", image: "/medical/seles/s5.png" },
  { id: 6, title: "Transpedicular Screw", image: "/medical/seles/s6.png" },
];

const instrumentsProducts: ProductItem[] = [
  { id: 1, title: "Surgical Drill", image: "/medical/seles/i1.png" },
  { id: 2, title: "Bone Rongeur", image: "/medical/seles/i2.png" },
  { id: 3, title: "Orthopedic Mallet", image: "/medical/seles/i3.png" },
  { id: 4, title: "Bone Rasp", image: "/medical/seles/i4.png" },
  { id: 5, title: "Screwdriver Set", image: "/medical/seles/i5.png" },
  { id: 6, title: "Plate Bender", image: "/medical/seles/i6.png" },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState("Trauma");

  const getActiveProducts = () => {
    if (activeTab === "Spine") return spineProducts;
    if (activeTab === "Instruments") return instrumentsProducts;
    return traumaProducts;
  };

  const activeProducts = getActiveProducts();

  return (
    <section id="products" className="w-full relative z-10 py-14 sm:py-20 md:py-24 min-[2000px]:py-32 min-[3000px]:py-40 bg-black">
      <div className="custom-container mx-auto min-[2000px]:max-w-[1700px] min-[2500px]:max-w-[1900px] min-[3000px]:max-w-[2200px] min-[3840px]:max-w-[2600px] transition-all">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-8 sm:mb-10">
          <div className="mb-4 min-[2000px]:mb-8 min-[3000px]:mb-10" data-aos="fade-up">
            <h2 className="mb-4 capitalize text-center text-white text-[24px] sm:text-[32px] min-[2000px]:text-[44px] min-[3000px]:text-[56px] font-orbitron font-semibold">
              Comprehensive Orthopedic Solutions
            </h2>
          </div>

          <p
            className="text-[16px] sm:text-[18px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] leading-[150%] text-[#D1D1D1] max-w-7xl min-[2000px]:max-w-[80%] min-[3000px]:max-w-[70%] mx-auto px-2 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore our complete range of trauma, spine, and instrumentation solutions, carefully designed to deliver precision, reliability, and excellent results in the surgical domain. Orthopedics procedures and surgical applications, requiring robust trauma solutions with dependable solutions for every critical need.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-4 min-[2000px]:gap-6 min-[3000px]:gap-8 mb-12 min-[2000px]:mb-16 min-[3000px]:mb-20 flex-wrap" data-aos="fade-up" data-aos-delay="200">
          {["Trauma", "Spine", "Instruments"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-8 min-[2000px]:px-12 min-[3000px]:px-16 py-1.5 min-[2000px]:py-2 min-[3000px]:py-3 border border-[#DBA018] transition-all duration-300 font-orbitron text-[14px] min-[2000px]:text-[20px] min-[3000px]:text-[26px]
                ${activeTab === tab
                  ? "bg-[#DBA018] text-white font-medium"
                  : "bg-transparent text-white font-normal hover:bg-[#DBA018]/10"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Carousel */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="300">
          <Swiper
            key={activeTab} // Force re-render of swiper when tab changes
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop={false}
            rewind={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full !pb-16"
          >
            {activeProducts.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div
                  className="group relative bg-[#050505] border border-white/10 flex flex-col h-full transition-all duration-300 hover:border-[#DBA018]/50 cursor-pointer"
                >

                  {/* Product Image Box (Inner) */}
                  <div className="relative w-full flex items-center p-4 min-[2000px]:p-8 min-[3000px]:p-12 justify-center min-[2000px]:min-h-[300px] min-[3000px]:min-h-[400px]">

                    {/* Yellow Icon (Absolute to the image box, overlapping it) */}
                    <div className="absolute top-4 right-4 w-[44px] h-[44px] min-[2000px]:w-[60px] min-[2000px]:h-[60px] min-[3000px]:w-[80px] min-[3000px]:h-[80px] shrink-0 rounded-full bg-[#DBA018] flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="min-[2000px]:scale-125 min-[3000px]:scale-150">
                        <path d="M7 17L17 7M17 7v9M17 7H8" />
                      </svg>
                    </div>

                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-auto max-h-auto min-[2000px]:max-h-[350px] min-[3000px]:max-h-[450px] object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Product Title */}
                  <div className="flex items-center justify-center px-5 min-[2000px]:px-8 pt-5 min-[2000px]:pt-8 pb-10 min-[2000px]:pb-14 min-[3000px]:pb-16">
                    <h3 className="font-orbitron font-normal text-[13px] sm:text-[14px] min-[2000px]:text-[18px] min-[3000px]:text-[24px] leading-[1.5] text-white text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Global override for Swiper Pagination in products */}
      <style dangerouslySetInnerHTML={{
        __html: `
        #products .swiper-pagination {
          bottom: 0px !important;
        }
        #products .swiper-pagination-bullet {
          width: 18px;
          height: 4px;
          border-radius: 4px;
          background: #D1D1D1;
          opacity: 0.7;
          transition: all 0.3s ease;
          margin: 0 4px !important;
        }
        #products .swiper-pagination-bullet-active {
          background: #DBA018;
          width: 40px;
          opacity: 1;
        }
      `}} />
    </section>
  );
}