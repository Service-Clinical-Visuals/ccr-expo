"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Calendar } from "lucide-react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";

const blogPosts = [
  {
    title: "Global Presence, Real Closeness: This Is...",
    date: "Jul 28, 2026",
    excerpt: "Four destinations. Four different realities. One shared approach to internationalization: being close to the professionals who...",
    image: "/medical/surgival/c1.jpg",
    link: "#"
  },
  {
    title: "Time Makers: Why Arthroplasty Is The...",
    date: "Jul 13, 2026",
    excerpt: "Looking back just a few decades, the image of a 75-year-old was radically different from today's. Aging used to entail...",
    image: "/medical/surgival/c2.jpg",
    link: "#"
  },
  {
    title: "What Does The Karey Primary Stem...",
    date: "June 29, 2026",
    excerpt: "A few days ago, we outlined the key factors for choosing a versatile acetabular system and not failing miserably...",
    image: "/medical/surgival/c3.jpg",
    link: "#"
  },
  {
    title: "First Total Knee Replacement Surgery...",
    date: "June 10, 2026",
    excerpt: "In this era we live in, we sometimes become obsessed with acquiring the latest technology or testing experimental...",
    image: "/medical/surgival/c4.jpg",
    link: "#"
  },
  {
    title: "How To Choose A Versatile Acetabular...",
    date: "May 15, 2026",
    excerpt: "In hip arthroplasty, certain decisions influence the entire procedure. Choosing a versatile acetabular system for hip surgery...",
    image: "/medical/surgival/c5.jpg",
    link: "#"
  }
];

const Latest = () => {
  return (
    <section id="latest" className="w-full py-16  bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8">

        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4" data-aos="fade-up">
          <div className="flex flex-col gap-4 lg:max-w-[70%]">
            <div className="flex items-center gap-4">
              <Typography variant="h2" color="dark">
                Latest Blog Posts
              </Typography>
              <div className="w-10 sm:w-16 h-1.5 bg-[#0C71C3] rounded-xl"></div>
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Stay up to date with the latest news, innovations, and insights from Surgival. Discover expert perspectives, industry developments, clinical advancements, and stories from our global community in orthopaedic care.
            </Typography>
          </div>

          <div className="shrink-0 pt-2 lg:pt-0" data-aos="fade-left">
            <Button href="#news" variant="primary" text="View All News" />
          </div>
        </div>

        <div className="w-full h-px bg-gray-200"></div>

        {/* Carousel / Blog Cards */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: '.custom-latest-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="w-full pb-6"
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="flex flex-col bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.06)] overflow-hidden h-full">
                  {/* Image */}
                  <div className="w-full relative bg-gray-100" style={{ aspectRatio: '491/328' }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/medical/surgival/c1.jpg"; // Fallback
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 p-6 sm:p-8 flex-grow">
                    <Typography variant="h3" color="dark" className="line-clamp-2 leading-snug text-xl sm:text-2xl">
                      {post.title}
                    </Typography>

                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4 min-[3800px]:h-8 min-[3800px]:w-8 text-primary" />
                      <Typography variant="span" color="muted" className="text-sm">
                        {post.date}
                      </Typography>
                    </div>

                    <Typography variant="p" color="muted" className="line-clamp-3 leading-relaxed flex-grow text-sm sm:text-base">
                      {post.excerpt}
                    </Typography>

                    <Typography variant="h4" color="primary" className="underline cursor-pointer">Read More {'>'}</Typography>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="custom-swiper-pagination w-full flex justify-center mt-6 sm:mt-5">
            <div className="custom-latest-pagination flex items-center gap-2"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Latest;
