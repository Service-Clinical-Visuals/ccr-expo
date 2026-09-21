"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Typography from "./Typography";
import { Calendar } from "lucide-react"; // Or custom SVG if they prefer

const newsItems = [
  {
    title: "Arab Health",
    date: "February 9-12, 2026",
    image: "/adamo/n1.jpg"
  },
  {
    title: "EFC - IX SATELLITE MEETING",
    date: "November 27-28",
    image: "/adamo/n2.jpg"
  },
  {
    title: "62nd National Congress Of The Italian...",
    date: "November 26-29, 2026",
    image: "/adamo/n3.jpg"
  },
  {
    title: "WID - 16th Edition",
    date: "November 21-22, 2025",
    image: "/adamo/n4.jpg"
  },
  {
    title: "Medica 2025, Düsseldorf",
    date: "November 17-20",
    image: "/adamo/n5.jpg"
  },
];

const News = () => {
  return (
    <section id="news" className="w-full py-16 lg:py-24 bg-[#252525] overflow-hidden">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 mb-12" data-aos="fade-up">
          <Typography variant="h2" color="white" className="leading-tight">
            News, Trade Fairs &amp; Conferences
          </Typography>
          <Typography variant="p" color="white" className="text-sm md:text-base leading-relaxed xl:max-w-[70%] mx-auto">
            Stay up to date with the latest news, upcoming trade fairs, conferences, and industry events from Adamo S.r.l. Discover where we are exhibiting, connect with our team, and explore our latest technologies and developments across the healthcare and medical technology industry.
          </Typography>
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
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="news-swiper pb-16"
          >
            {newsItems.map((item, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex">
                <div className="flex flex-col h-full w-full bg-white border border-gray-200 p-4 min-[3800px]:p-8 transition-transform hover:-translate-y-2 duration-300">

                  {/* Image Area */}
                  <div className="w-full aspect-[4/3] min-[3800px]:aspect-video mb-5 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Area */}
                  <div className="flex flex-col flex-grow">
                    <Typography variant="h4" color="dark" className="font-semibold mb-3">
                      {item.title}
                    </Typography>

                    <div className="flex items-center gap-2 mb-6">
                      <Calendar className="w-4 h-4 text-black min-[3800px]:w-8 min-[3800px]:h-8" />
                      <Typography variant="p" className="text-black/60 text-sm min-[3800px]:text-2xl">
                        {item.date}
                      </Typography>
                    </div>

                    {/* Bottom Link, pushed to bottom using mt-auto */}
                    <div className="mt-auto">
                      <Typography variant="h4" className="text-[var(--color-primary)] underline text-sm min-[3800px]:text-2xl font-semibold hover:underline cursor-pointer transition-colors">
                        Read More &gt;
                      </Typography>
                    </div>
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

export default News;
