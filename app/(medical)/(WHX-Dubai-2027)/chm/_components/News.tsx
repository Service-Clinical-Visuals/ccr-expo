/**
 * News Section for ChM
 *
 * ARCHITECTURAL REFERENCE (from Inogen + Figma Specs):
 * 1. Centered Section Header:
 *    - Title: "Stay Updated with ChM sp. z o.o." (`h2`, Cal Sans).
 *    - Subtitle copy constrained to `xl:max-w-[75%]` for optimal measure.
 * 2. Swiper Carousel of News Cards:
 *    - Card 1: Release 2026.07 highlights (news1.webp)
 *    - Card 2: Memorial of Mikolaj Charkiewicz (news2.webp)
 *    - Card 3: Article: Migration of Subtalar Implants (news3.webp)
 *    - Card 4: Radial nail DRONES in Manual (news4.webp)
 *    - Each card: framed image, title, date, excerpt, and "Read More" button.
 * 3. Pagination Bullets:
 *    - Matching Inogen/ChM standard: active red pill (64px) + inactive dots (9px).
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const newsItems = [
  {
    title: "Release 2026.07 highlights",
    date: "DATE : 02 June 2023",
    excerpt: "Join us for the EXPERT FORUM: Exchange of Experience and Best Practices!",
    image: "/medical/chm/news1.webp",
    link: "#",
  },
  {
    title: "It Is With Great Sadness And Profound Sense Of Loss",
    date: "DATE : 21 October 2025",
    excerpt: "That We Have Learned Of The Death Of Mikolaj Charkiewicz, Founder Of ChM Sp. Z O.O.",
    image: "/medical/chm/news2.webp",
    link: "#",
  },
  {
    title: "Article: Migration Of Subtalar Implants In Paediatric Flatfoot...",
    date: "DATE : 19 May 2022",
    excerpt: "Original article Migration of Subtalar Implants in Paediatric Flatfoot Correction: A...",
    image: "/medical/chm/news3.webp",
    link: "#",
  },
  {
    title: "Radial Nail DRONES Published In Manual",
    date: "DATE : 29 November 2021",
    excerpt: "Our product – radial nail DRONES – has already been published in the “Manual for...",
    image: "/medical/chm/news4.webp",
    link: "#",
  },
];

export default function News() {
  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[75%] mx-auto space-y-3"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="secondary"
            className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide text-[#2A2A2A]"
          >
            Stay Updated with ChM sp. z o.o.
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base leading-relaxed text-[#4A4A4A]"
          >
            Stay up to date with the latest news, events, research, and developments from ChM. Explore company announcements, medical conferences, product achievements, and scientific publications reflecting our continued commitment to orthopedic innovation and medical advancement.
          </Typography>
        </div>

        {/* News Carousel */}
        <div className="w-full mt-10 sm:mt-14" data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} chm-bullet"></span>`;
              },
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 28 },
              1280: { slidesPerView: 2, spaceBetween: 36 },
              2500: { slidesPerView: 2, spaceBetween: 52 },
              3800: { slidesPerView: 2, spaceBetween: 72 },
            }}
            className="w-full !pb-14 2k:!pb-20 4k:!pb-28"
          >
            {newsItems.map((item, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex p-1">
                {/* News Card - Flat sharp corners (rounded-none) */}
                <div className="w-full bg-white rounded-none p-5 sm:p-7 border border-gray-200/90 shadow-[0px_3px_8px_rgba(0,0,0,0.14)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  {/* Image Frame - Flat sharp corners (rounded-none) */}
                  <div className="w-full aspect-[16/9] rounded-none overflow-hidden border border-gray-200 bg-gray-100 mb-5 group-hover:border-[#A41E27]/40 transition-colors cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2.5 flex-1">
                    <Typography
                      variant="h3"
                      color="secondary"
                      className="text-lg sm:text-xl font-normal text-[#2A2A2A] capitalize line-clamp-1"
                    >
                      {item.title}
                    </Typography>

                    <span className="text-xs sm:text-sm text-gray-500 font-medium">
                      {item.date}
                    </span>

                    <Typography
                      variant="p"
                      color="muted"
                      className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed line-clamp-2"
                    >
                      {item.excerpt}
                    </Typography>

                    <div className="pt-4 mt-auto">
                      <Button
                        text="Read More"
                        href={item.link}
                        variant="white"
                        className="text-xs sm:text-sm"
                      />
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
}

