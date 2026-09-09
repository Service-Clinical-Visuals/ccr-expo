"use client";

import React, { useRef } from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { FaCrosshairs, FaLink, FaCheckCircle } from "react-icons/fa";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "Distal Tibia Medial Anatomic Locking Plate",
      desc: "It is designed to stabilize fractures and deformities occurring in the distal part of the tibia.",
      img: "/truemed/s3.png",
      features: [
        { icon: "/truemed/icon1.png", label: "Anatomic Design" },
        { icon: "/truemed/icon2.png", label: "Locking Stability" },
        { icon: "/truemed/icon3.png", label: "Enhance Fixation" },
        { icon: "/truemed/icon4.png", label: "Reliable Outcome" },
      ]
    },
    {
      id: 2,
      title: "Proximal Humerus Anatomic Locking Plate",
      desc: "It is designed to stabilize fractures and deformities in the proximal part of the humeral bone.",
      img: "/truemed/s3.png",
      features: [
        { icon: "/truemed/icon1.png", label: "Anatomic Design" },
        { icon: "/truemed/icon2.png", label: "Locking Stability" },
        { icon: "/truemed/icon3.png", label: "Enhance Fixation" },
        { icon: "/truemed/icon4.png", label: "Reliable Outcome" },
      ]
    }
  ];

  return (
    <section className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, el: ".products-pagination" }}
          navigation={{
            prevEl: ".products-button-prev",
            nextEl: ".products-button-next",
          }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="pb-10">
              <div className="relative w-full bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row min-h-[500px]">

                {/* Top-Left Gradient Shape */}
                <div className="absolute top-0 left-0 w-[65%] md:w-[45%] lg:w-[40%] xl:w-[35%] py-4 px-8 z-10 flex items-center">
                  <div
                    className="absolute top-0 bottom-0 -left-10 right-0 z-[-1] rounded-br-[2rem] origin-bottom-left"
                    style={{
                      background: "linear-gradient(90.62deg, #26A6AF 0.64%, #83EBF8 100.07%)",
                      transform: "skewX(-25deg)"
                    }}
                  />
                  <Typography variant="h2" color="white" weight="semibold" className="text-center items-center relative z-10">
                    New Products
                  </Typography>
                </div>

                {/* Bottom-Right Gradient Shape */}
                <div className="absolute bottom-0 right-0 w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] py-4 px-6 md:px-10 z-10 flex flex-wrap justify-between items-center gap-4">
                  <div
                    className="absolute top-0 bottom-0 -right-10 left-0 z-[-1] rounded-tl-[3rem] origin-bottom-right"
                    style={{
                      background: "linear-gradient(90.62deg, #26A6AF 0.64%, #83EBF8 100.07%)",
                      transform: "skewX(-25deg)"
                    }}
                  />
                  <div className="flex items-center gap-2 relative z-10">
                    <FaCrosshairs className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    <Typography variant="h3" color="white">Anatomic Fit</Typography>
                  </div>
                  <div className="flex items-center gap-2 relative z-10">
                    <FaLink className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    <Typography variant="h3" color="white">Strong & Durable</Typography>
                  </div>
                  <div className="flex items-center gap-2 relative z-10">
                    <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    <Typography variant="h3" color="white">Trusted Fixation</Typography>
                  </div>
                </div>

                {/* Left Content (Text) */}
                <div className="w-full lg:w-[45%] xl:w-[60%] p-8 md:p-12 lg:p-16 lg:pr-4 flex flex-col justify-center pt-24 lg:pt-32 z-0 relative">
                  <div className="border-b-2 border-gray-300 pb-4 mb-6 w-fit">
                    <Typography variant="h2" color="secondary">
                      {product.title}
                    </Typography>
                  </div>

                  <Typography variant="p" color="muted" className="leading-relaxed max-w-full mb-8">
                    {product.desc}
                  </Typography>

                  {/* Feature Icons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 rounded-2xl p-6 mb-8 w-full">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center gap-3">
                        <div className="h-10 xl:h-12 flex items-center justify-center">
                          <img src={feat.icon} alt={feat.label} className="h-full w-auto object-contain" />
                        </div>
                        <Typography variant="h4" color="dark" className="text-gray-600 font-medium">
                          {feat.label.split(' ').map((word, i) => (
                            <React.Fragment key={i}>
                              {word}
                              {i < feat.label.split(' ').length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </Typography>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="mb-10 lg:mb-20">
                    <button className="bg-[#44BCE2] hover:bg-[#35a5c9] text-white rounded-xl px-6 py-3 flex items-center gap-3 transition-colors shadow-sm active:scale-95 duration-200 group">
                      <div className="text-left leading-tight pr-4">
                        <Typography variant="h5" color="white" weight="semibold" className="">
                          Explore {product.title.replace(' Locking Plate', '')} <br /> Locking Plate
                        </Typography>
                      </div>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right Content (Image) */}
                <div className="w-full lg:w-[55%] xl:w-[60%] relative min-h-[400px] lg:min-h-full pb-24 lg:pb-0 flex items-center justify-center lg:justify-start lg:-ml-6 z-0">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-[100%] h-auto max-h-[90%] object-contain scale-105"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation & Pagination Area */}
        <div className="absolute bottom-12 lg:bottom-16 left-8 md:left-12 lg:left-16 z-20 flex flex-col gap-6">
          <div className="products-pagination flex items-center gap-2"></div>

          <div className="flex items-center gap-4">
            <button className="products-button-prev w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-400 flex items-center justify-center text-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white transition-all cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="products-button-next w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-400 flex items-center justify-center text-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white transition-all cursor-pointer">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
