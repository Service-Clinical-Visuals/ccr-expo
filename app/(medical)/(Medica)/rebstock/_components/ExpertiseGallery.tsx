"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ExpertiseGallery() {
  const gallery = [
    { image: "/medical/rebstock/e1.jpg", alt: "Rebstock Catalogue & Brochure" },
    { image: "/medical/rebstock/e2.jpg", alt: "Rebstock Facility & Workshop Collage" },
    { image: "/medical/rebstock/e3.jpg", alt: "Rebstock Team EUROPA-PARK Stadium" },
    { image: "/medical/rebstock/e4.jpg", alt: "Rebstock Cranio Implants & Screwdriver Set" },
    { image: "/medical/rebstock/e5.jpg", alt: "Surgical Instruments Display" },
    { image: "/medical/rebstock/e6.jpg", alt: "Precision Titanium Plates" },
    { image: "/medical/rebstock/e7.jpg", alt: "Manufacturing & Quality Control" },
    { image: "/medical/rebstock/e8.jpg", alt: "Spine & Neuro Surgical Kit" },
    { image: "/medical/rebstock/e9.jpg", alt: "Clinical Visuals & Innovations" },
  ];

  return (
    <section id="gallery" className="w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10 sm:gap-12">
        <div
          className="flex flex-col items-center text-center gap-3 sm:gap-4 w-full xl:max-w-[70%] max-w-[90%] mx-auto"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center flex-wrap gap-3">
            <Typography
              variant="h2"
              color="dark"
              className="!font-semibold capitalize leading-snug"
            >
              A Closer Look At Our Expertise
            </Typography>
            <span className="inline-block w-10 sm:w-11 h-1 sm:h-1.5 bg-[#003F77] shrink-0" />
          </div>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-[#4A4A4A]"
          >
            Discover the precision, craftsmanship, and innovation behind Rebstock’s surgical solutions. Our gallery highlights advanced instruments, implants, and specialized systems developed for complex procedures across neurosurgery, spine surgery, cranio-maxillofacial surgery, and microsurgery.
          </Typography>
        </div>

        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".custom-gallery-pagination",
              bulletClass: "gallery-bullet",
              bulletActiveClass: "gallery-bullet-active",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1026: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
              2500: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              3800: {
                slidesPerView: 4,
                spaceBetween: 48,
              },
            }}
            className="w-full !pb-6"
          >
            {gallery.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="group relative w-full aspect-[4/3.8] sm:aspect-[4/4.5] md:aspect-[390/460] rounded-none overflow-hidden bg-gray-100 shadow-sm border border-black/10">
                  {/* Gallery item image */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-gallery-pagination flex items-center justify-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 mt-8 min-[2500px]:mt-14 min-[3800px]:mt-20"></div>
        </div>
      </div>

      <style jsx global>{`
        .gallery-bullet {
          width: 8px;
          height: 8px;
          background-color: #d9d9d9;
          border-radius: 9999px;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .gallery-bullet-active {
          width: 64px;
          height: 8px;
          background-color: #003f77;
          border-radius: 9999px;
        }
        @media (min-width: 640px) {
          .gallery-bullet-active {
            width: 76px;
          }
        }
        @media (min-width: 2500px) {
          .gallery-bullet {
            width: 14px;
            height: 14px;
          }
          .gallery-bullet-active {
            width: 120px;
            height: 14px;
          }
        }
        @media (min-width: 3800px) {
          .gallery-bullet {
            width: 20px;
            height: 20px;
          }
          .gallery-bullet-active {
            width: 170px;
            height: 20px;
          }
        }
      `}</style>
    </section>
  );
}
