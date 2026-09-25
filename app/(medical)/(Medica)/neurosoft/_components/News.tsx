"use client";

import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Neuro-Audio Study: New Pediatric...",
    date: "15 July 2026",
    image: "/medical/neurosoft/n1.png",
  },
  {
    id: 2,
    title: "Neurosoft In Scientific Collaboration...",
    date: "24 June 2026",
    image: "/medical/neurosoft/n2.png",
  },
  {
    id: 3,
    title: "TMS Course Is Back This Fall...",
    date: "23 April 2026",
    image: "/medical/neurosoft/n3.png",
  },
  {
    id: 4,
    title: "Neurosoft Designated as Official...",
    date: "4 February 2026",
    image: "/medical/neurosoft/n4.png",
  },
  {
    id: 5,
    title: "EMG Workshop in Singapore – Hands...",
    date: "1 December 2025",
    image: "/medical/neurosoft/n5.png",
  },
  {
    id: 6,
    title: "PBSF Unified Data Center: a new...",
    date: "24 November 2025",
    image: "/medical/neurosoft/n6.png",
  },
];

export default function News() {
  return (
    <section id="news" className="w-full py-16 sm:py-20 lg:py-24 min-[2500px]:py-36 bg-[#E9E9E9] overflow-hidden select-none">
      <div className="custom-container">
        <div className="flex flex-col min-[1026px]:flex-row min-[1026px]:items-end min-[1026px]:justify-between gap-6 pb-6" data-aos="fade-up">
          <div className="space-y-3 xl:max-w-[70%]">
            <h2 className="!text-[#2A2A2A] font-baloo font-semibold text-[26px] sm:text-[30px] md:text-[32px] min-[2500px]:text-[48px] min-[3800px]:text-[64px] leading-[150%] capitalize">
              Our Latest News
            </h2>
            <p className="!text-[#4A4A4A] font-baloo font-medium text-[15px] sm:text-[16px] md:text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] leading-[150%]">
              Stay informed with the latest news, research events, courses, and global developments from Neurosoft. Explore updates across neurophysiology, neuromodulation, rehabilitation, and advanced medical technologies.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              text="View All News"
              variant="navy"
              showIcon={true}
              className="text-[17px] min-[2500px]:text-[24px] min-[3800px]:text-[32px] min-[2500px]:!py-4 min-[2500px]:!px-8 min-[3800px]:!py-6 min-[3800px]:!px-12"
            />
          </div>
        </div>

        <div className="w-full h-px bg-black/20 my-6 sm:my-8" />

        <div className="w-full mt-4" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".news-pagination",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1025: { slidesPerView: 2, spaceBetween: 24 },
              1026: { slidesPerView: 3, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 32 },
              2500: { slidesPerView: 3, spaceBetween: 48 },
              3800: { slidesPerView: 4, spaceBetween: 64 },
            }}
            className="w-full"
          >
            {newsData.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex">
                <div className="w-full h-full bg-white rounded-[20px] p-5 sm:p-6 lg:p-7 min-[2500px]:p-12 min-[3800px]:p-16 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-black/5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between group">
                  <div className="news-card-img w-full h-[220px] sm:h-[260px] md:h-[300px] min-[1026px]:h-[340px] rounded-[15px] overflow-hidden bg-gray-100 mb-5 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-col space-y-3 mt-auto">
                    <h3 className="!text-[#2A2A2A] font-baloo font-semibold text-[18px] sm:text-[20px] md:text-[22px] min-[2500px]:text-[32px] min-[3800px]:text-[42px] leading-[140%] capitalize line-clamp-1 min-h-[26px] sm:min-h-[30px] min-[2500px]:min-h-[46px]">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between gap-4 pt-1">
                      <div className="flex items-center gap-2 text-[#727272]">
                        <svg className="news-card-date-icon w-5 h-5 text-[#10253D] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span className="news-card-date font-baloo font-normal text-[15px] sm:text-[17px] !text-[#727272]">
                          {item.date}
                        </span>
                      </div>

                      <button
                        type="button"
                        aria-label={`Read ${item.title}`}
                        className="news-card-arrow-btn w-[42px] h-[42px] sm:w-[46px] sm:h-[46px] rounded-full bg-[#0AADF9] hover:bg-[#0896d8] flex items-center justify-center text-white shrink-0 group-hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
                      >
                        <svg
                          className="news-card-arrow-icon w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="neurosoft-pagination news-pagination" />
        </div>
      </div>
    </section>
  );
}
