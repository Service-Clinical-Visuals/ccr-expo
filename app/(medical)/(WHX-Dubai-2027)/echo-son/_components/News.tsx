"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { CalendarDays } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

interface NewsItem {
  title: string;
  date: string; // ISO, for <time dateTime>
  label: string; // as displayed
  excerpt: string;
  image: string;
  href: string;
}

const news: NewsItem[] = [
  {
    title: "WHX Dubai 2026, ZEA",
    date: "2026-03-30",
    label: "March 30 2026",
    excerpt:
      "We are proud to announce success at one of the world's premier medical events – WHX Dubai 2026...",
    image: "/medical/echo-son/n1.webp",
    href: "#",
  },
  {
    title: "Arab Health 2024 – Dubai, UAE",
    date: "2024-03-08",
    label: "March 08 2024",
    excerpt:
      "Arab Health has firmly established itself as a cornerstone event in the global healthcare calendar, and the 49th edition...",
    image: "/medical/echo-son/n2.webp",
    href: "#",
  },
  {
    title: "MEDICA 2023– Düsseldorf, Germany",
    date: "2023-11-20",
    label: "November 20 2023",
    excerpt:
      "MEDICA 2023 Exhibition and Congress took place from 13-16 November 2023 at the Düsseldorf, Germany.",
    image: "/medical/echo-son/n3.webp",
    href: "#",
  },
  {
    title: "Arab Health 2023 – Dubai, UAE",
    date: "2023-01-30",
    label: "January 30 2023",
    excerpt:
      "Arab Health has become a significant event for the healthcare industry and the 48th edition was no exception.",
    image: "/medical/echo-son/n4.webp",
    href: "#",
  },
  {
    title: "MEDICA 2022 Düsseldorf, Germany",
    date: "2022-11-14",
    label: "November 14 2022",
    excerpt:
      "MEDICA 2022 Exhibition and Congress took place from 14-17 November 2022 at the Düsseldorf, Germany.",
    image: "/medical/echo-son/n5.webp",
    href: "#",
  },
];

// Inactive bullets are small grey dots; the active one stretches into a teal pill
const paginationClass =
  "echoson-news-pagination flex items-center justify-center gap-1.5 min-[2500px]:gap-3 min-[3800px]:gap-4 mt-6 2xl:mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16 " +
  "[&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:!bg-[#D1D5DB] [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 " +
  "[&_.swiper-pagination-bullet]:!w-1.5 [&_.swiper-pagination-bullet]:!h-1.5 min-[2500px]:[&_.swiper-pagination-bullet]:!w-2.5 min-[2500px]:[&_.swiper-pagination-bullet]:!h-2.5 min-[3800px]:[&_.swiper-pagination-bullet]:!w-3.5 min-[3800px]:[&_.swiper-pagination-bullet]:!h-3.5 " +
  "[&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination-bullet-active]:!w-10 min-[2500px]:[&_.swiper-pagination-bullet-active]:!w-16 min-[3800px]:[&_.swiper-pagination-bullet-active]:!w-24";

/**
 * Latest News, Events & Updates: centred heading + intro over a 1 / 2 / 3-up card slider.
 * Cards have a large rounded bottom-right corner; the image shape is part of the file.
 */
const News = () => {
  return (
    <section
      id="news"
      className="relative w-full pb-14 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-36 min-[3800px]:pb-48"
    >
      <div className="custom-container">
        {/* Heading + intro */}
        <div
          className="flex flex-col items-center text-center gap-2 2xl:gap-3 min-[2500px]:gap-5 mx-auto max-w-[900px] 2xl:max-w-[1050px] min-[1920px]:max-w-[1200px] min-[2500px]:max-w-[1700px] min-[3800px]:max-w-[2400px]"
          data-aos="fade-up"
        >
          <h2 className="text-[#1A1A1A]">Latest News, Events &amp; Updates</h2>
          <p className="text-[#4A4A4A]">
            Stay informed about the latest developments at Echo-Son. Explore company
            announcements, international exhibitions, industry events, and informative articles
            covering medical technology, diagnostic innovations, and advancements in ultrasound
            solutions.
          </p>
        </div>

        <div
          className="mt-6 2xl:mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Extra padding + negative margin keeps the card shadows from being clipped */}
          <Swiper
            modules={[Pagination, Autoplay]}
            className="!px-3 !py-4 !-mx-3 min-[2500px]:!px-5 min-[2500px]:!py-6 min-[2500px]:!-mx-5"
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ el: ".echoson-news-pagination", clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
              1920: { slidesPerView: 3, spaceBetween: 32 },
              2500: { slidesPerView: 3, spaceBetween: 44 },
              3800: { slidesPerView: 3, spaceBetween: 60 },
            }}
          >
            {news.map((item) => (
              <SwiperSlide key={item.title} className="!h-auto">
                <article className="group h-full flex flex-col bg-white border border-[#EDEDED] shadow-md rounded-tl-3xl rounnded-br-3xl p-3 2xl:p-4 min-[2500px]:p-6 min-[3800px]:p-8 pb-6 2xl:pb-7 min-[2500px]:pb-10 min-[3800px]:pb-14">
                  <div className="w-full aspect-[491/328] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={491}
                      height={328}
                      loading="lazy"
                      className="block w-full h-full object-cover"
                    />
                  </div>

                  <h4 className="text-[#1A1A1A] mt-4 2xl:mt-5 min-[2500px]:mt-8 truncate" title={item.title}>
                    {item.title}
                  </h4>

                  <div className="flex items-center gap-2 min-[2500px]:gap-3 mt-1.5 min-[2500px]:mt-3 text-[#4A4A4A]">
                    <CalendarDays
                      aria-hidden
                      strokeWidth={1.75}
                      className="text-[#1E2A3B] w-4 h-4 2xl:w-[18px] 2xl:h-[18px] min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9"
                    />
                    <time dateTime={item.date} className="meta">
                      {item.label}
                    </time>
                  </div>

                  <p className="meta mt-3 2xl:mt-4 min-[2500px]:mt-6 text-[#6A6A6A] line-clamp-2">
                    {item.excerpt}
                  </p>

                  <a
                    href={item.href}
                    className="link mt-auto pt-5 2xl:pt-6 min-[2500px]:pt-9 self-start text-[#1E2A3B] underline underline-offset-4 min-[2500px]:underline-offset-8 hover:text-primary transition-colors"
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
