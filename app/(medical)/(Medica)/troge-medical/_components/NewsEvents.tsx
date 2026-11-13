"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const newsItems = [
  {
    title: "WHX 9–12 February 2026 // DUBAI",
    date: "February 16, 2026",
    image: "/medical/troge-medical/n1.webp",
    link: "#news",
  },
  {
    title: "TROGE Donation For Vital Moorland...",
    date: "December 8, 2025",
    image: "/medical/troge-medical/n2.webp",
    link: "#news",
  },
  {
    title: "HOSPITALAR 2025 São Paulo, Brazil",
    date: "July 14, 2025",
    image: "/medical/troge-medical/n3.webp",
    link: "#news",
  },
  {
    title: "Arab Health 2025 was a...",
    date: "February 17, 2025",
    image: "/medical/troge-medical/n4.webp",
    link: "#news",
  },
  {
    title: "WHX Miami (formerly FIME) 17–19...",
    date: "June 23, 2026",
    image: "/medical/troge-medical/n5.webp",
    link: "#news",
  },
];

const NewsEvents = () => {
  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 xl:gap-14">
        {/* Top Header Row */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 xl:max-w-[70%] max-w-3xl">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Latest News, Events & Insights
            </Typography>
            <Typography
              variant="p"
              color="muted"
              className="leading-relaxed text-gray-600 font-normal xl:max-w-[85%]"
            >
              Stay updated with the latest news, global healthcare events, and company initiatives from TROGE®. Explore our event highlights, industry developments, and sustainability efforts as we continue supporting healthcare professionals and communities worldwide.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button
              text="Explore All News"
              variant="primary"
              href="#news"
              showIcon={true}
            />
          </div>
        </div>

        {/* Swiper Slider with Exact Figma Card Layout (Group 1000003761: 533x519px) */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 3, slidesPerGroup: 1 },
            }}
            className="w-full !pb-14 custom-pagination"
          >
            {newsItems.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto pb-4">
                <div className="flex flex-col h-full rounded-none bg-white border-2 border-gray-200/80 hover:border-[#A00566] shadow-sm hover:shadow-lg transition-all duration-300 group p-5 sm:p-6">
                  {/* News Image (Rectangle 791 in Figma: 489x376px, aspect-[489/376]) */}
                  <div className="w-full aspect-[489/376] overflow-hidden rounded-none bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* News Content Below Image */}
                  <div className="flex items-center justify-between gap-4 pt-4 pb-1 flex-1">
                    <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                      <Typography
                        variant="p"
                        color="dark"
                        className="font-bold text-base sm:text-lg leading-snug truncate"
                      >
                        {item.title}
                      </Typography>

                      <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm">
                        <Calendar className="w-3.5 h-3.5 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-[#A00566] shrink-0" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    {/* Circular Action Arrow Button */}
                    <Link
                      href={item.link}
                      aria-label={`Read ${item.title}`}
                      className="w-10 h-10 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-22 min-[3800px]:h-22 rounded-full bg-[#A00566] hover:bg-[#860455] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300"
                    >
                      <img
                        src="/medical/troge-medical/white_arrow.webp"
                        alt=""
                        className="w-3.5 h-auto min-[2500px]:w-5.5 min-[3800px]:w-8 -rotate-45 object-contain"
                      />
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

export default NewsEvents;
