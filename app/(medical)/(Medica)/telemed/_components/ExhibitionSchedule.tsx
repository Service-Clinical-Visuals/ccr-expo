"use client";

import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface Exhibition {
  id: string;
  title: string;
  date: string;
  image: string;
  link: string;
}

const EXHIBITIONS: Exhibition[] = [
  {
    id: "wvc-vegas",
    title: "WVC Vegas 2026, Zomedica Booth...",
    date: "February 15-18",
    image: "/medical/telemed/e1.png",
    link: "#exhibitions",
  },
  {
    id: "ecr-vienna",
    title: "ECR 2026, Expo 5 / 515 (Vienna, Austria)",
    date: "March 4-March 7",
    image: "/medical/telemed/e2.png",
    link: "#exhibitions",
  },
  {
    id: "kimes-seoul",
    title: "KIMES 2026, Booth C643 (Seoul, Korea)",
    date: "March 19-22",
    image: "/medical/telemed/e3.jpg",
    link: "#exhibitions",
  },
  {
    id: "medica-dusseldorf",
    title: "Medica 2026, booth D58 / Hall 9...",
    date: "November 16-19",
    image: "/medical/telemed/e4.png",
    link: "#exhibitions",
  },
  {
    id: "rsna-chicago",
    title: "RSNA 2026, booth 2303 / South Hall A...",
    date: "November 29-December 2",
    image: "/medical/telemed/e5.png",
    link: "#exhibitions",
  },
];

export default function ExhibitionSchedule() {
  return (
    <section
      id="exhibitions"
      className="w-full bg-white pt-14 sm:pt-20 xl:pt-24 pb-16 sm:pb-20 xl:pb-24 overflow-hidden"
    >
      <div className="custom-container">
        {/* Centered Heading & Description matching PROIMPLANT */}
        <div
          className="w-full xl:max-w-[70%] min-[3800px]:max-w-[75%] mx-auto text-center flex flex-col items-center min-[3800px]:gap-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Main Title */}
          <Typography
            variant="h2"
            weight="semibold"
            color="dark"
            className="font-['Exo_2'] tracking-tight capitalize"
          >
            <span className="text-[#0F3E7B]">Exhibition</span> Schedule 2026
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="p"
            color="body"
            className="mt-3.5 sm:mt-4 min-[3800px]:mt-6 leading-relaxed text-center"
          >
            Connect with our team at leading medical and healthcare exhibitions
            worldwide. Discover our latest ultrasound technologies, explore
            innovative imaging solutions, and learn more about our products and
            applications.
          </Typography>
        </div>

        {/* Single Row Swiper Carousel: 1 slide on mobile, 2 slides on tablet up to 1025px, 3 slides on desktop */}
        <div
          className="w-full relative mt-10 sm:mt-12 xl:mt-14 min-[3800px]:mt-20"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1025: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".exhibitions-custom-pagination",
            }}
            className="w-full !pb-4"
          >
            {EXHIBITIONS.map((item) => (
              <SwiperSlide key={item.id} className="h-auto pb-2">
                <div className="w-full h-full bg-white p-5 sm:p-6 xl:p-7 min-[3800px]:p-12 shadow-[0px_3px_8px_rgba(0,0,0,0.18)] border border-black/10 flex flex-col justify-between transition-all duration-500 hover:shadow-[0px_6px_20px_rgba(0,0,0,0.15)] group">
                  {/* Exhibition Image / Logo Box */}
                  <div className="relative w-full aspect-[491/328] overflow-hidden border border-black/15 bg-[#FAFAFA] flex items-center justify-center p-6 mb-5 sm:mb-6 min-[3800px]:mb-10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Exhibition Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-['Exo_2'] font-[600] text-[20px] sm:text-[22px] min-[1025px]:text-[24px] min-[3800px]:text-[40px] text-[#2A2A2A] capitalize leading-[1.3] line-clamp-1">
                        {item.title}
                      </h3>

                      {/* Calendar Date Row */}
                      <div className="flex items-center gap-2 min-[3800px]:gap-4 mt-3 sm:mt-3.5 min-[3800px]:mt-5 text-[#727272]">
                        <Calendar className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 text-[#2A2A2A] shrink-0" />
                        <span className="font-['Outfit'] font-[400] text-[15px] sm:text-[16px] min-[3800px]:text-2xl text-[#727272]">
                          {item.date}
                        </span>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="pt-4 sm:pt-5 min-[3800px]:pt-8">
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1 min-[3800px]:gap-3 font-['Exo_2'] font-[600] text-[18px] sm:text-[20px] min-[3800px]:text-3xl text-[#0F3E7B] underline underline-offset-4 capitalize hover:text-[#0a2d59] transition-colors group/link"
                      >
                        <span>Read More</span>
                        <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
                          &gt;
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pill Pagination Container */}
          <div className="exhibitions-custom-pagination"></div>
        </div>
      </div>
    </section>
  );
}
