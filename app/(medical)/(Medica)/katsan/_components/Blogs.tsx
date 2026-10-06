"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface BlogPost {
  id: number;
  title: string;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Best Practices for Using PDO Barbed Sutures",
    image: "/medical/katsan/blog.png",
    link: "#",
  },
  {
    id: 2,
    title: "Innovations in Synthetic Surgical Sutures",
    image: "/medical/katsan/blog.png",
    link: "#",
  },
  {
    id: 3,
    title: "Minimally Invasive Laparoscopic Surgical Techniques",
    image: "/medical/katsan/blog.png",
    link: "#",
  },
  {
    id: 4,
    title: "Tissue Interaction and Non-Absorbable Meshes",
    image: "/medical/katsan/blog.png",
    link: "#",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10">
        

        <div className="flex flex-col items-center text-center gap-3 w-full max-w-[90%] xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-semibold text-2xl sm:text-3xl md:text-4xl">
            Our{" "}
            <span className="!text-[#00425E] font-inherit" style={{ color: "#00425E", fontSize: "inherit", fontWeight: "inherit" }}>
              Latest Blogs
            </span>
          </Typography>
          <Typography variant="p" color="muted" className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed mt-1">
            Stay updated with the latest insights from Katsan, featuring informative articles on surgical sutures, PDO barbed sutures, minimally invasive procedures, tissue interaction, and modern surgical techniques. Explore expert-focused content covering practical applications, product knowledge, and developments across different surgical fields to support informed decisions and professional learning.
          </Typography>
        </div>

        <div className="w-full mt-4" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} katsan-line-bullet"></span>`;
              },
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="w-full !pb-16"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id} className="!h-auto flex">
                <div className="group relative flex-1 w-full bg-white rounded-[20px] overflow-hidden border border-gray-200/70 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] aspect-[16/10] sm:aspect-[16/9.5] cursor-pointer">
                  

                  <div className="absolute inset-0 w-full h-full p-4 sm:p-6 flex items-center justify-center bg-white">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-[#00425E]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-10 z-10">
                    <Typography
                      variant="h3"
                      color="white"
                      className="font-semibold text-lg sm:text-xl lg:text-2xl text-white mb-4 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 max-w-md leading-snug"
                    >
                      {post.title}
                    </Typography>
                    
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      <Link
                        href={post.link}
                        className="text-white hover:text-white/80 font-semibold text-sm sm:text-base underline underline-offset-4 transition-colors"
                      >
                        Read More &gt;&gt;
                      </Link>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <style jsx global>{`
        .katsan-line-bullet {
          width: 10px !important;
          height: 10px !important;
          border-radius: 50% !important;
          background-color: #D9D9D9 !important;
          opacity: 1 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active.katsan-line-bullet {
          width: 50px !important;
          height: 10px !important;
          border-radius: 20px !important;
          background-color: #00425E !important;
        }
        @media (min-width: 2500px) and (max-width: 3799px) {
          .katsan-line-bullet {
            width: 18px !important;
            height: 18px !important;
            margin: 0 8px !important;
          }
          .swiper-pagination-bullet-active.katsan-line-bullet {
            width: 80px !important;
            height: 18px !important;
            border-radius: 30px !important;
          }
        }
        @media (min-width: 3800px) {
          .katsan-line-bullet {
            width: 26px !important;
            height: 26px !important;
            margin: 0 12px !important;
          }
          .swiper-pagination-bullet-active.katsan-line-bullet {
            width: 120px !important;
            height: 26px !important;
            border-radius: 40px !important;
          }
        }
        .swiper-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
}
