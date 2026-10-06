"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      image: "/medical/remake-soil/b1.png",
      title: "What does Z2 mean? Soil...",
      description: "In this article we explain what Z2 means, when it becomes relevant...",
      link: "#",
    },
    {
      id: 2,
      image: "/medical/remake-soil/b2.png",
      title: "The right formula: Why liquid flooring...",
      description: "Individually planned liquid soil formulations are necessary for optimal results...",
      link: "#",
    },
    {
      id: 3,
      image: "/medical/remake-soil/b3.png",
      title: "What does Z.1.1 mean? Soil...",
      description: "In this article we explain what Z.1.1 means, when it becomes essential...",
      link: "#",
    },
    {
      id: 4,
      image: "/medical/remake-soil/b4.png",
      title: "The 5 biggest mistakes when...",
      description: "In this article, we show the five most common mistakes when processing liquid soil...",
      link: "#",
    },
    {
      id: 5,
      image: "/medical/remake-soil/b5.png",
      title: "When is the use of flowable fill...",
      description: "Below we will go through when it is worthwhile to install flowable fill systems...",
      link: "#",
    },
  ];

  return (
    <section id="blogs" className="w-full py-16 xl:py-24 bg-black overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        <div
          className="flex flex-col items-center gap-3 md:gap-4 w-full xl:max-w-[70%] mx-auto text-center"
          data-aos="fade-up"
        >
          <Typography
            variant="h2"
            color="white"
            className="!font-bold tracking-tight text-center"
          >
            Our Blogs
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="leading-relaxed text-gray-200"
          >
            Explore the latest articles from REMAKE SOIL, covering technical insights, legal developments, construction-site experiences, soil management, and innovative solutions shaping the construction industry while keeping you informed about current
          </Typography>
        </div>

        <div className="w-full mt-4" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={false}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-line-bullet"></span>`;
              },
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="w-full !pb-14"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id} className="!h-auto flex">
                <div className="w-full h-full bg-[#262626] border border-white/50 rounded-[30px] p-5 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] flex flex-col justify-between group hover:border-white transition-all duration-300">
                  

                  <div className="w-full aspect-[16/10] rounded-[25px] overflow-hidden mb-5 bg-[#1a1a1a] shrink-0">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <Typography
                        variant="h4"
                        color="white"
                        className="!font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[23px] xl:text-[24px] min-[1920px]:text-[26px] min-[2500px]:text-[32px] min-[3500px]:text-[38px] min-[3800px]:text-[42px] mb-2 leading-snug line-clamp-1"
                      >
                        {blog.title}
                      </Typography>

                      <Typography
                        variant="p"
                        color="white"
                        className="text-gray-200 text-xs sm:text-sm md:text-[15px] lg:text-[16px] xl:text-[17px] min-[1920px]:text-[18px] min-[2500px]:text-[24px] min-[3500px]:text-[28px] min-[3800px]:text-[32px] leading-relaxed mb-5 line-clamp-2"
                      >
                        {blog.description}
                      </Typography>
                    </div>

                    <div className="mt-auto pt-2">
                      <Link
                        href={blog.link}
                        className="inline-block font-primary font-semibold text-[#155EEF] underline hover:text-[#3b7bf8] transition-colors text-sm sm:text-base md:text-[17px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px] min-[1920px]:text-[22px] min-[2500px]:text-[28px] min-[3500px]:text-[32px] min-[3800px]:text-[36px] cursor-pointer"
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
    </section>
  );
};

export default Blogs;
