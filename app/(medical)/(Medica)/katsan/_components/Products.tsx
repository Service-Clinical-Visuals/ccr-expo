"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface ProductItem {
  title: string;
  image: string;
  link: string;
}

const products: ProductItem[] = [
  {
    title: "Surgical Sutures",
    image: "/medical/katsan/s1.png",
    link: "#products",
  },
  {
    title: "Laparoscopic Surgery",
    image: "/medical/katsan/s2.png",
    link: "#products",
  },
  {
    title: "Sports Medicine",
    image: "/medical/katsan/s3.png",
    link: "#products",
  },
  {
    title: "Hemostats",
    image: "/medical/katsan/s4.png",
    link: "#products",
  },
  {
    title: "Meshes",
    image: "/medical/katsan/s5.png",
    link: "#products",
  },
];

export default function Products() {
  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10">
        

        <div className="flex flex-col items-center text-center gap-3 w-full max-w-[90%] xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-semibold text-2xl sm:text-3xl md:text-4xl">
            Comprehensive Solutions For{" "}
            <span className="!text-[#00425E] font-inherit" style={{ color: "#00425E", fontSize: "inherit", fontWeight: "inherit" }}>
              Modern Surgical Care
            </span>
          </Typography>
          <Typography variant="p" color="muted" className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed mt-1">
            Explore Katsan’s diverse range of medical products, including surgical sutures, laparoscopic surgery supplies, sports medicine solutions, hemostats, and surgical meshes. Developed with a focus on quality, innovation, and reliable performance, our portfolio supports healthcare professionals across various surgical applications and clinical environments with specialised medical solutions.
          </Typography>
        </div>

        <div className="w-full mt-4" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            loop={false}
            initialSlide={0}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} katsan-line-bullet"></span>`;
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="w-full !pb-16"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">

                <div className="group relative flex-1 w-full bg-white border border-[rgba(0,66,94,0.28)] shadow-[0px_3px_8px_rgba(0,0,0,0.12)] aspect-[533/549] min-h-[480px] sm:min-h-[520px] p-[21px] flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
                  

                  <svg
                    className="absolute top-0 right-0 w-[133px] h-[140px] pointer-events-none z-0"
                    viewBox="0 0 133 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0 L133 0 L133 140 L112 119 L112 21 L21 21 Z"
                      fill="#00425E"
                    />
                  </svg>

                  <div className="relative z-10 w-full h-full bg-white border border-[rgba(0,66,94,0.28)] p-5 sm:p-7 flex flex-col justify-between items-stretch">
                    

                    <div className="w-full flex justify-end">
                      <a
                        href={item.link}
                        aria-label={`View ${item.title}`}
                        className="w-[50px] h-[50px] min-[3800px]:w-[80px] min-[3800px]:h-[80px] rounded-full bg-[#00425E] text-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 shrink-0"
                      >
                        <ArrowUpRight className="w-5 h-5 min-[3800px]:w-9 min-[3800px]:h-9" strokeWidth={2.5} />
                      </a>
                    </div>

                    <div className="w-full flex-1 flex items-center justify-center py-2 px-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-[270px] sm:max-h-[310px] w-auto max-w-[95%] object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="w-full text-right pb-1 pr-1">
                      <Typography
                        variant="h4"
                        color="dark"
                        className="!font-semibold text-[20px] sm:text-[22px] min-[2500px]:text-[32px] min-[3800px]:text-[48px] !leading-[1.4] text-[#2A2A2A] tracking-normal"
                      >
                        {item.title}
                      </Typography>
                    </div>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <style jsx global>{`
        .katsan-line-bullet {
          width: 10px !important;
          height: 10px !important;
          border-radius: 50% !important;
          background-color: #D9D9D9 !important;
          opacity: 1 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active.katsan-line-bullet {
          width: 50px !important;
          height: 10px !important;
          border-radius: 20px !important;
          background-color: #00425E !important;
        }
        @media (min-width: 2500px) and (max-width: 3799px) {
          .katsan-line-bullet {
            width: 18px !important;
            height: 18px !important;
            margin: 0 8px !important;
          }
          .swiper-pagination-bullet-active.katsan-line-bullet {
            width: 80px !important;
            height: 18px !important;
            border-radius: 30px !important;
          }
        }
        @media (min-width: 3800px) {
          .katsan-line-bullet {
            width: 26px !important;
            height: 26px !important;
            margin: 0 12px !important;
          }
          .swiper-pagination-bullet-active.katsan-line-bullet {
            width: 120px !important;
            height: 26px !important;
            border-radius: 40px !important;
          }
        }
        .swiper-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
}
