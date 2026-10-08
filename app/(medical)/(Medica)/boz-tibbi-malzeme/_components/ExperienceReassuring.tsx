"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface ExperienceItem {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const experienceItems: ExperienceItem[] = [
  {
    icon: "/medical/boz-tibbi-malzeme/e1.webp",
    title: "Our Quality Policy",
    description:
      "We are confident in our products and continue to register our product quality with international certificates.",
    link: "#",
  },
  {
    icon: "/medical/boz-tibbi-malzeme/e2.webp",
    title: "Corporate Responsibility",
    description:
      "We adopt positive changes in the society with our responsible business applications.",
    link: "#",
  },
  {
    icon: "/medical/boz-tibbi-malzeme/e3.webp",
    title: "Job Perfection",
    description:
      "Our aim is to offer high quality products and services under better conditions.",
    link: "#",
  },
  {
    icon: "/medical/boz-tibbi-malzeme/e4.webp",
    title: "Customer Relations",
    description:
      "To keep and maintain customer satisfaction at the highest level, we adopt customer-oriented management approach.",
    link: "#",
  },
  {
    icon: "/medical/boz-tibbi-malzeme/e5.webp",
    title: "Research & Development",
    description:
      "We are following all innovation in this field and constantly improve our manufacturing, system, and processes with technological opportunities.",
    link: "#",
  },
];

export default function ExperienceReassuring() {
  return (
    <section id="experience" className="w-full py-16 sm:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 xl:max-w-[70%] max-w-[90%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="capitalize">
            Experience Is Reassuring
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            Boz Tıbbi Malzeme A.Ş. combines medical device manufacturing experience with quality management, research and development, customer-focused practices, and corporate responsibility. The company continuously improves its products, processes, and services to meet evolving healthcare requirements.
          </Typography>
        </div>

        {/* Cards Slider */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={false}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-boz-bullet"></span>`;
              },
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="w-full !pt-20 sm:!pt-24 min-[1920px]:!pt-32 min-[2500px]:!pt-44 min-[3800px]:!pt-60 !pb-14 min-[2500px]:!pb-20 min-[3800px]:!pb-28 overflow-hidden"
          >
            {experienceItems.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex items-stretch">
                <div className="relative w-full h-full bg-white rounded-[20px] shadow-[0px_3px_8px_rgba(0,0,0,0.18)] border border-gray-100 pt-20 sm:pt-24 min-[1920px]:pt-32 min-[2500px]:pt-44 min-[3800px]:pt-60 pb-8 min-[2500px]:pb-12 min-[3800px]:pb-16 px-5 sm:px-6 min-[2500px]:px-8 min-[3800px]:px-10 flex flex-col items-center text-center justify-between group hover:shadow-lg transition-all duration-300">
                  <div className="absolute -top-12 min-[1920px]:-top-14 min-[2500px]:-top-20 min-[3800px]:-top-28 left-1/2 -translate-x-1/2 w-24 h-24 min-[1920px]:w-28 min-[1920px]:h-28 min-[2500px]:w-40 min-[2500px]:h-40 min-[3800px]:w-56 min-[3800px]:h-56 rounded-full bg-white shadow-[0px_3px_8px_rgba(0,0,0,0.18)] border border-gray-50 flex items-center justify-center p-3 min-[1920px]:p-4 min-[2500px]:p-6 min-[3800px]:p-8 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-16 h-16 min-[1920px]:w-20 min-[1920px]:h-20 min-[2500px]:w-28 min-[2500px]:h-28 min-[3800px]:w-40 min-[3800px]:h-40 object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-3 mt-4 min-[1920px]:mt-6 min-[2500px]:mt-10 min-[3800px]:mt-16 min-[3800px]:gap-6">
                    <Typography
                      variant="h3"
                      color="dark"
                      className="!text-xl min-[1920px]:!text-2xl min-[2500px]:!text-3xl min-[3800px]:!text-4xl !font-semibold capitalize text-center"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="p"
                      color="muted"
                      className="leading-relaxed text-sm sm:text-base min-[2500px]:text-lg min-[3800px]:text-2xl text-[#4A4A4A]"
                    >
                      {item.description}
                    </Typography>
                  </div>

                  <div className="pt-6 min-[1920px]:pt-8 min-[2500px]:pt-10 min-[3800px]:pt-14 mt-auto">
                    <Link
                      href={item.link}
                      className="inline-block font-exo text-[var(--color-primary)] font-semibold text-lg min-[1920px]:text-xl min-[2500px]:text-2xl min-[3800px]:text-4xl underline underline-offset-4 min-[3800px]:underline-offset-8 hover:text-[var(--color-primary-hover)] transition-colors"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        #experience .swiper {
          overflow: hidden !important;
        }
      `}</style>
    </section>
  );
}
