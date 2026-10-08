"use client";

import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface BlogItem {
  title: string;
  date: string;
  image: string;
  link: string;
}

const blogs: BlogItem[] = [
  {
    title: "Let’s Meet At IDEX 2023 Exhibition",
    date: "14/04/2023",
    image: "/medical/boz-tibbi-malzeme/b1.webp",
    link: "#",
  },
  {
    title: "We Were At Medica 2022 Fair",
    date: "05/12/2022",
    image: "/medical/boz-tibbi-malzeme/b2.webp",
    link: "#",
  },
  {
    title: "The Global Dental Sector Gathered...",
    date: "08/06/2022",
    image: "/medical/boz-tibbi-malzeme/b3.webp",
    link: "#",
  },
  {
    title: "22. National Surgical Congress and 17...",
    date: "31/03/2022",
    image: "/medical/boz-tibbi-malzeme/b4.webp",
    link: "#",
  },
  {
    title: "We Were At AEEDC 2022 Exhibition",
    date: "11/02/2022",
    image: "/medical/boz-tibbi-malzeme/b5.webp",
    link: "#",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="w-full py-16 sm:py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="custom-container flex flex-col gap-12 sm:gap-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 xl:max-w-[70%] max-w-[90%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="capitalize">
            Boz Latest Blogs & Insights
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            You can follow ideas and announcements of doctors and technical experts. Research and view new techniques, new problem solving method, and new use methods. Read information about our products, use conditions, renewed regulations, health sector trends and other technical topics.
          </Typography>
        </div>

        {/* Blogs Slider */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            loop={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-boz-bullet"></span>`;
              },
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full !pb-14"
          >
            {blogs.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex items-stretch">
                <div className="w-full h-full bg-white rounded-[20px] shadow-[0px_3px_8px_rgba(0,0,0,0.18)] border border-gray-100 p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-col gap-5">
                    <div className="w-full aspect-[484/314] rounded-[15px] overflow-hidden border border-black/20 bg-gray-50">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <Typography
                      variant="h3"
                      color="dark"
                      className="!text-xl sm:!text-2xl !font-semibold capitalize group-hover:text-[var(--color-primary)] transition-colors line-clamp-2"
                    >
                      {item.title}
                    </Typography>

                    <div className="flex items-center gap-2 text-[#727272]">
                      <Calendar className="w-5 h-5 text-[var(--color-primary)] shrink-0" strokeWidth={2} />
                      <Typography variant="span" color="muted" className="text-[#727272] font-normal text-base">
                        {item.date}
                      </Typography>
                    </div>
                  </div>

                  <div className="pt-6 min-[1920px]:pt-8 min-[2500px]:pt-10 min-[3800px]:pt-14 mt-auto">
                    <Link
                      href={item.link}
                      className="inline-block font-exo text-[var(--color-primary)] font-semibold text-xl min-[1920px]:text-2xl min-[2500px]:text-3xl min-[3800px]:text-4xl underline underline-offset-4 min-[3800px]:underline-offset-8 hover:text-[var(--color-primary-hover)] transition-colors capitalize"
                    >
                      Read More &gt;
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
}
