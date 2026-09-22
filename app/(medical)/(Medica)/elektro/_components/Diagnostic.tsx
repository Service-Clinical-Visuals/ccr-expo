"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight } from "lucide-react";

export default function Diagnostic() {

  // Placeholder blog data based on the images
  const blogs = [
    { title: "How To Understand The Working Principles Of Laboratory Hot Plates", img: "/medical/elektro/i1.png" },
    { title: "Tips For Maintaining Hot Air Sterilizers", img: "/medical/elektro/i2.png" },
    { title: "Top 3 Types Of Laboratory Hot Plates: Ceramic, Aluminium, And Stainless Steel", img: "/medical/elektro/i3.png" },
    { title: "Viscometers: Types, Applications, And Measurement Techniques", img: "/medical/elektro/i4.png" },
    { title: "The Comprehensive Guide To Volumetric Flasks: Usage, Types, And Accuracy", img: "/medical/elektro/i5.png" },
    { title: "A Complete Guide To Graduated Cylinders: Types, Usage, And Accuracy", img: "/medical/elektro/i6.png" },
  ];

  return (
    <section id="insights" className="w-full py-16 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-[#0000003D] pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 lg:w-2/3">
            <Typography variant="h2" color="dark" className="font-semibold leading-tight">
              Explore Our Latest Insights
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed max-w-[95%] text-sm md:text-base">
              Discover informative blogs covering laboratory equipment, scientific techniques, medical technologies, and practical applications. Explore useful guides and industry insights to expand your knowledge and stay updated with the latest developments.
            </Typography>
          </div>
          <div className="flex-shrink-0">
            <Button
              text="Explore All Blogs"
              href="#blogs"
              showIcon={true}
              variant="primary"
              icon={<ArrowRight className="w-4 h-4 ml-2" />}
              className="bg-[#173556] hover:bg-[#173556] text-white border-none rounded-sm px-6 py-3"
            />
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="w-full mt-2 relative" data-aos="fade-up" data-aos-delay="200">
          <style dangerouslySetInnerHTML={{
            __html: `
            .insights-swiper {
              padding-bottom: 60px !important;
            }
            .insights-swiper .swiper-pagination {
              bottom: 0px !important;
            }
            .insights-swiper .swiper-pagination-bullet {
              background-color: #D1D5DB; /* gray-300 */
              border-radius: 9999px;
              display: inline-block;
              cursor: pointer;
              transition: all 0.3s ease;
              margin: 0 4px !important;
              width: 24px;
              height: 6px;
              opacity: 1;
            }
            .insights-swiper .swiper-pagination-bullet-active {
              width: 40px;
              background-color: #10253D;
            }
          `}} />
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            className="w-full insights-swiper"
          >
            {blogs.map((blog, idx) => (
              <SwiperSlide key={idx} className="h-auto flex">

                {/* Blog Card with Hover Effect */}
                <div className="relative flex flex-col h-auto w-full bg-gray-100 overflow-hidden group cursor-pointer aspect-video md:aspect-[16/9]">

                  {/* Background Image */}
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Default State / Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10253D]/90 via-[#10253D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">

                    <div className="flex items-end justify-between gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                      <Typography variant="h4" color="white" className="font-semibold text-lg md:text-xl lg:text-2xl max-w-[85%] leading-snug">
                        {blog.title}
                      </Typography>

                      <div className="w-10 h-10 bg-white flex items-center justify-center shrink-0 hover:bg-gray-200 transition-colors">
                        <ArrowRight className="w-5 h-5 text-[#10253D]" />
                      </div>

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
