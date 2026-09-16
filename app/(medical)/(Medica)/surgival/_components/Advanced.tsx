"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const productCards = [
  {
    title: "KNEE",
    description: "Discover All The Solutions In Surgival Knee Systems",
    image: "/medical/surgival/a1.png",
    link: "#knee"
  },
  {
    title: "HIP",
    description: "Discover All The Solutions In Hip Systems From Surgival",
    image: "/medical/surgival/a2.png",
    link: "#hip"
  },
  {
    title: "TRAUMA",
    description: "Discover All The Solutions In Traumatology At Surgival",
    image: "/medical/surgival/a3.png",
    link: "#trauma"
  },
  {
    title: "CEMENTS AND OTHERS",
    description: "Discover The Full Range Of Biomaterials And Cements From Surgival",
    image: "/medical/surgival/a4.png",
    link: "#cements"
  }
];

const Advanced = () => {
  return (
    <section id="advanced" className="w-full py-16 sm:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-8 min-[3800px]:gap-14 items-center">

        {/* Header Content */}
        <div className="flex flex-col gap-2 items-center w-full xl:max-w-[80%] text-center" data-aos="fade-up">
          <div className="flex items-center gap-4 justify-center">
            <Typography variant="h2" color="dark">
              Advanced Solutions For Orthopaedic Care
            </Typography>
            <div className="w-10 sm:w-16 h-1.5 bg-[#0C71C3] rounded-xl"></div>
          </div>

          <Typography variant="p" color="muted" className="leading-relaxed w-full xl:max-w-[80%]">
            Explore Surgival's comprehensive range of orthopaedic solutions, developed to support healthcare professionals across joint replacement, trauma, and biomaterial applications. Combining experience, innovation, and quality, our products are designed to meet diverse clinical needs and help improve patient mobility and quality of life.
          </Typography>
        </div>

        {/* Carousel / Images */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: '.custom-advanced-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full pb-4"
          >
            {productCards.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  className="group relative w-full overflow-hidden flex items-center justify-center shadow-md bg-white cursor-pointer"
                  style={{ aspectRatio: '533/647' }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/medical/surgival/a1.png";
                    }}
                  />

                  {/* Dark overlay that appears on hover */}
                  <div className="absolute inset-0 bg-[#005696]/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                  {/* Content Container positioned at the bottom left */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 xl:p-10 z-10 overflow-hidden">
                    <div className="flex flex-col gap-4 opacity-0 translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">

                      {/* Title */}
                      <div className="flex items-center gap-3">
                        <Typography variant="h3" color="white" className="uppercase tracking-wide font-bold">
                          {card.title}
                        </Typography>
                        <div className="w-10 h-0.5 bg-white"></div>
                      </div>

                      {/* Description and Button */}
                      <div className="flex flex-col gap-4">
                        <Typography variant="p" color="white" className="leading-relaxed text-sm xl:text-base font-medium max-w-[90%]">
                          {card.description}
                        </Typography>

                        <div className="pt-2">
                          <Button href={card.link} variant="secondary" text="See More" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="custom-swiper-pagination w-full flex justify-center mt-3">
            <div className="custom-advanced-pagination flex items-center gap-2"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Advanced;
