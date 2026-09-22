"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Typography from "./Typography";
import { Calendar } from "lucide-react";

const newsItems = [
  {
    title: "Elektro-Mag To Present Innovative...",
    date: "22.08.2024",
    excerpt: "Dear business partners and sector followers, As Elektro-mag, we proudly announce that we will participate in Turab...",
    image: "/medical/elektro/n1.png"
  },
  {
    title: "Conclusion Of Arab Health 2024...",
    date: "20.02.2024",
    excerpt: "Hello Valued Elektro-mag Community, Arab Health 2024 has come to a close with great enthusiasm...",
    image: "/medical/elektro/n2.png"
  },
  {
    title: "Elektro-Mag To Showcase Innovations At",
    date: "23.11.2023",
    excerpt: "Dear Valued Customers and Business Partners, We are delighted to announce that Elektro-mag...",
    image: "/medical/elektro/n3.png"
  },
  {
    title: "Medica 2023 Reflections: Unveiling...",
    date: "20.10.2023",
    excerpt: "We extend our heartfelt gratitude to everyone who graced our Elektro-mag booth at Medica 2023...",
    image: "/medical/elektro/n4.png"
  },
  {
    title: "Join Us At MEDICA 2023",
    date: "10.10.2023",
    excerpt: "We are excited to announce that Elektro-mag will be participating in MEDICA 2023! The prominent medical...",
    image: "/medical/elektro/n5.png"
  },
  {
    title: "Elektro-Mag To Showcase At Turab Expo...",
    date: "14.01.2023",
    excerpt: "Dear valued partners and sector enthusiasts, We are delighted to announce that Elektro-mag, a renowned...",
    image: "/medical/elektro/n6.png" // reused image for 6th item
  },
];

const News = () => {
  return (
    <section id="news" className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 mb-14" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="leading-tight font-bold">
            Latest News & Updates
          </Typography>
          <Typography variant="p" color="muted" className="text-sm md:text-base leading-relaxed xl:max-w-[70%] mx-auto">
            Stay informed with the latest news, exhibitions, events, and company updates from Elektro-mag. Discover our participation in leading industry events and explore the latest developments across our laboratory, medical, and industrial solutions.
          </Typography>
        </div>

        {/* Slider Section */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="200">
          <style dangerouslySetInnerHTML={{
            __html: `
            .news-swiper {
              padding-bottom: 60px !important;
            }
            .news-swiper .swiper-pagination {
              bottom: 0px !important;
            }
            .news-swiper .swiper-pagination-bullet {
              background-color: #D1D5DB; /* gray-300 */
              border-radius: 9999px;
              display: inline-block;
              cursor: pointer;
              transition: all 0.3s ease;
              margin: 0 4px !important;
              width: 24px;
              height: 6px;
              opacity: 1;
            }
            .news-swiper .swiper-pagination-bullet-active {
              width: 40px;
              background-color: #000000;
            }
          `}} />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              1024: { slidesPerView: 3, slidesPerGroup: 2 },
            }}
            className="news-swiper"
          >
            {newsItems.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto flex">
                <div className="flex flex-col h-full w-full bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 px-5 lg:px-6 pb-5 lg:pb-6 pt-3 lg:pt-1">

                  {/* Image Area */}
                  <div className="w-full aspect-[4/3] relative overflow-hidden mb-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Text Area */}
                  <div className="flex flex-col flex-grow">
                    <Typography variant="h4" color="dark" className="font-semibold text-lg mb-3 leading-snug">
                      {item.title}
                    </Typography>

                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <Typography variant="span" className="text-gray-500 text-xs font-medium">
                        {item.date}
                      </Typography>
                    </div>

                    <Typography variant="p" color="muted" className="text-sm leading-relaxed mb-6">
                      {item.excerpt}
                    </Typography>

                    {/* Bottom Link, pushed to bottom using mt-auto */}
                    <div className="mt-auto">
                      <Typography variant="span" className="text-[#10253D] font-bold text-sm underline hover:text-[#173556] cursor-pointer transition-colors">
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
