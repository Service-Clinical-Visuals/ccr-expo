"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { CalendarDays } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const news = [
  { title: "Famed Żywiec Closes 2025 With A 21% Increase", date: "2026-02-12", image: "/medical/famed/e1.webp" },
  { title: "Reinsberg Group Completes The Acquisition", date: "2026-02-12", image: "/medical/famed/e2.webp" },
  { title: "Famed X Line™ – A New Generation Of Operating Tables", date: "2026-02-05", image: "/medical/famed/e3.webp" },
  { title: "Reinsberg Group At WHX Dubai 2026", date: "2026-01-27", image: "/medical/famed/e4.webp" },
  { title: "BHM Group Expands Reinsberg Group", date: "2025-07-01", image: "/medical/famed/e5.webp" },
  { title: "Hospital ICUs Are In Need Of Specialists", date: "2025-05-25", image: "/medical/famed/e6.webp" },
];

// Inactive bullets are small grey dots; the active one stretches into a blue pill
const paginationClass =
  "famed-news-pagination flex items-center justify-center gap-1.5 min-[2500px]:gap-3 min-[3800px]:gap-4 mt-6 2xl:mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16 " +
  "[&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:!bg-[#D1D5DB] [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 " +
  "[&_.swiper-pagination-bullet]:!w-1.5 [&_.swiper-pagination-bullet]:!h-1.5 min-[2500px]:[&_.swiper-pagination-bullet]:!w-2.5 min-[2500px]:[&_.swiper-pagination-bullet]:!h-2.5 min-[3800px]:[&_.swiper-pagination-bullet]:!w-3.5 min-[3800px]:[&_.swiper-pagination-bullet]:!h-3.5 " +
  "[&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination-bullet-active]:!w-10 min-[2500px]:[&_.swiper-pagination-bullet-active]:!w-16 min-[3800px]:[&_.swiper-pagination-bullet-active]:!w-24";

/** Latest News & Updates: grey section with a 3-up news card slider. */
const News = () => {
  return (
    <section
      id="news"
      className="w-full bg-[#F5F5F5] py-14 sm:py-16 xl:py-20 2xl:py-24 min-[2500px]:py-36 min-[3800px]:py-48"
    >
      <div className="custom-container">
        {/* Heading + intro */}
        <div
          className="flex flex-col items-center text-center gap-3 2xl:gap-4 min-[2500px]:gap-6 max-w-[880px] xl:max-w-[75%] mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-[#1A1A1A]">Latest News &amp; Updates</h2>
          <p className="text-[#4A4A4A]">
            Stay informed with the latest news, company updates, product innovations, industry
            developments, and upcoming events from Famed Żywiec. Explore our milestones,
            partnerships, and advancements shaping the future of healthcare technology.
          </p>
        </div>

        <div className="mt-6 2xl:mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16" data-aos="fade-up" data-aos-delay="100">
          {/* Extra padding + negative margin keeps the card shadows from being clipped */}
          <Swiper
            modules={[Pagination, Autoplay]}
            className="!px-3 !py-4 !-mx-3 min-[2500px]:!px-5 min-[2500px]:!py-6 min-[2500px]:!-mx-5"
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ el: ".famed-news-pagination", clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 28 },
              2500: { slidesPerView: 3, spaceBetween: 44 },
              3800: { slidesPerView: 3, spaceBetween: 60 },
            }}
          >
            {news.map((item) => (
              <SwiperSlide key={item.title} className="!h-auto">
                <article className="group h-full flex flex-col bg-white rounded-[16px] min-[2500px]:rounded-[26px] min-[3800px]:rounded-[36px] shadow-[0_4px_14px_rgba(0,0,0,0.12)] p-4 2xl:p-5 min-[2500px]:p-8 min-[3800px]:p-11">
                  <div className="w-full aspect-[484/314] overflow-hidden border border-[#D9D9D9] rounded-[10px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[24px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={484}
                      height={314}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h4 className="text-[#1A1A1A] mt-5 2xl:mt-6 min-[2500px]:mt-9 truncate" title={item.title}>
                    {item.title}
                  </h4>

                  <div className="flex items-center gap-2 min-[2500px]:gap-3 mt-2 min-[2500px]:mt-3 text-[#5A5A5A]">
                    <CalendarDays
                      aria-hidden
                      strokeWidth={1.75}
                      className="text-primary w-4 h-4 2xl:w-[18px] 2xl:h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9"
                    />
                    <time dateTime={item.date} className="meta">
                      {item.date}
                    </time>
                  </div>

                  <a
                    href="#news"
                    className="link mt-auto pt-4 2xl:pt-5 min-[2500px]:pt-8 self-start text-primary !font-semibold underline underline-offset-4 min-[2500px]:underline-offset-8 hover:text-primary-hover transition-colors"
                  >
                    Read More &gt;
                  </a>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={paginationClass} />
        </div>
      </div>
    </section>
  );
};

export default News;
