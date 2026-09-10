"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Strength = () => {
  const strengths = [
    {
      title: "INNOVATIONS",
      description: "The R&D department is composed of a multidisciplinary team of engineers: mechanical design, integrated electronics,",
      image: "/medical/deleo/icon1.png",
    },
    {
      title: "FRENCH PRODUCTION",
      description: "Founded in 2010 in Saint-Raphaël in the Var region, Deleo is the leading producer of aesthetic medicine in France.",
      image: "/medical/deleo/icon2.png",
    },
    {
      title: "CE MEDICAL CERTIFICATION",
      description: "All the technologies we produce have CE medical certification (with the exception of Cristal Skin®) and are intended exclusively for professionals",
      image: "/medical/deleo/icon3.png",
    },
    {
      title: "14 YEARS OF EXPERIENCE",
      description: "With 14 years of experience, Deleo is today a French and European leader that exports its devices to more than 35 countries.",
      image: "/medical/deleo/icon4.png",
    },
    {
      title: "+1 MILLION PATIENTS",
      description: "With over 2000 installations in France and around the world, Deleo devices have been offered to more than 1,000,000 patients.",
      image: "/medical/deleo/icon5.png",
    }
  ];

  return (
    <section id="strength" className="w-full pt-16 xl:pt-24 pb-8 xl:pb-12 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10">

        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-black"></div>
            <Typography variant="h4" color="dark">
              Strength
            </Typography>
          </div>
          <Typography variant="h2" color="dark">
            Our Main Strengths
          </Typography>
        </div>

        {/* Swiper Slider */}
        <div
          className="w-full mt-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-line-bullet"></span>`;
              }
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1280: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            className="w-full !pb-16"
          >
            {strengths.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="flex flex-col h-full border border-gray-200 p-8 rounded-sm bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={item.image} alt={item.title} className="w-9 h-9 min-[3800px]:w-16 min-[3800px]:h-16 object-contain" />
                    <Typography variant="h4" color="dark" className="uppercase !font-semibold">
                      {item.title}
                    </Typography>
                  </div>
                  <Typography variant="p" color="muted" className="leading-relaxed">
                    {item.description}
                  </Typography>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      <style jsx global>{`
        #strength .swiper-wrapper {
          align-items: stretch !important;
        }
        .custom-line-bullet {
          width: 32px !important;
          height: 2px !important;
          border-radius: 0 !important;
          background-color: transparent !important;
          border: 1px solid #000 !important;
          opacity: 0.5 !important;
          display: inline-block;
          margin: 0 4px !important;
          transition: all 0.3s ease;
          position: relative;
        }
        .swiper-pagination-bullet-active.custom-line-bullet {
          background-color: #000 !important;
          opacity: 1 !important;
          border-width: 2px !important;
        }
        .swiper-pagination-bullets {
          bottom: 0px !important;
        }
      `}</style>
    </section>
  );
};

export default Strength;
