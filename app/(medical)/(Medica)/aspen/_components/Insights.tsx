"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Calendar, ArrowUpRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const articles = [
  {
    title: "What You Need To Know About...",
    date: "May 12, 2026",
    image: "/medical/aspen/news1.webp",
  },
  {
    title: "Set-Up Your SPD For Success",
    date: "Recent Post",
    image: "/medical/aspen/news2.webp",
  },
  {
    title: "Dr. John Bookwalter's Legacy",
    date: "Recent Post",
    image: "/medical/aspen/news3.webp",
  },
  {
    title: "Celebrating Innovation and Advocacy...",
    date: "May 30, 2025",
    image: "/medical/aspen/news4.webp",
  },
];

const Insights = () => {
  return (
    <section id="news" className="w-full py-14 sm:py-18 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">

        {/* Centered Header with Deleo's xl:max-w-[70%] mx-auto */}
        <div className="flex flex-col items-center text-center gap-3 w-full xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="!font-bold leading-tight">
            Insights, Innovations &amp; The Aspen Surgical Standard
          </Typography>
          <Typography variant="p" color="muted" className="text-gray-600 text-sm sm:text-base leading-relaxed xl:max-w-[85%] mx-auto">
            Explore the latest insights, industry updates, and expert perspectives from Aspen Surgical. Discover articles covering surgical advancements, healthcare innovations, product solutions, and best practices that support healthcare professionals and improve surgical care.
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".aspen-insights-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1036: { slidesPerView: 3, spaceBetween: 28 },
              2000: { slidesPerView: 3, spaceBetween: 40 },
              2500: { slidesPerView: 3, spaceBetween: 48 },
            }}
            className="w-full"
          >
            {articles.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto pb-4">
                <div className="group cursor-pointer bg-white rounded-[24px] sm:rounded-[28px] min-[2500px]:rounded-[44px] border border-gray-200/90 p-5 sm:p-6 min-[2000px]:p-10 min-[2500px]:p-14 flex flex-col justify-between h-[385px] sm:h-[430px] lg:h-[445px] min-[2000px]:h-[600px] min-[2500px]:h-[720px] min-[3800px]:h-[950px] hover:shadow-lg transition-all duration-300">

                  {/* Article Image with 4K height scaling */}
                  <div className="w-full aspect-[16/10.5] sm:aspect-[16/10] min-[2000px]:h-[320px] min-[2500px]:h-[400px] min-[3800px]:h-[550px] rounded-[18px] sm:rounded-[20px] min-[2500px]:rounded-[32px] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Title */}
                  <div className="pt-4 pb-2 min-[2500px]:pt-6">
                    <Typography
                      variant="h4"
                      color="dark"
                      className="!font-bold text-base sm:text-lg min-[2000px]:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl text-gray-900 group-hover:text-[#0B2F61] transition-colors leading-snug line-clamp-2"
                    >
                      {item.title}
                    </Typography>
                  </div>

                  {/* Footer Meta Row: Date & Action Button */}
                  <div className="flex items-center justify-between pt-2 min-[2500px]:pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 text-gray-400" />
                      <span className="text-xs sm:text-sm min-[2000px]:text-base min-[2500px]:text-xl font-medium text-gray-600">{item.date}</span>
                    </div>

                    <div className="w-9 h-9 sm:w-10 sm:h-10 min-[1920px]:w-14 min-[1920px]:h-14 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-[#0B2F61] text-white flex items-center justify-center shrink-0 group-hover:bg-[#072147] group-hover:scale-110 transition-all shadow-sm">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14 text-white" />
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Container */}
          <div className="aspen-insights-pagination aspen-pagination mt-8 flex justify-center items-center" />
        </div>

      </div>
    </section>
  );
};

export default Insights;
