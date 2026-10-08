"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "./Button";

const EVENTS = [
  {
    image: "/medical/herniamesh-srl/e1.webp",
    title: "Congress Of The Italian Society Of Urology – Incontinenza Urinaria E Dintorni",
    date: "January 30-31, 2026",
    href: "",
  },
  {
    image: "/medical/herniamesh-srl/e2.webp",
    title: "WHX Dubai Trade Fair 2026",
    date: "February 9-12, 2026",
    href: "",
  },
  {
    image: "/medical/herniamesh-srl/e3.webp",
    title: "TRAINING COURSE: SIC-ISHAWS SCHOOL Of Hernias And Abdominal Wall Surgery",
    date: "April 13-15, 2026",
    href: "",
  },
  {
    image: "/medical/herniamesh-srl/e6.webp",
    title: "EHS 2026 – 48th Annual International Congress",
    date: "June 3-5, 2026",
    href: "",
  },
  {
    image: "/medical/herniamesh-srl/e4.webp",
    title: "37th Congresso Chirurgia Dell'Apparato Digerente",
    date: "November 12-13, 2026",
    href: "",
  },
  {
    image: "/medical/herniamesh-srl/e5.webp",
    title: "MEDICA 2026 Düsseldorf – Hall 6 / G06",
    date: "November 16-19, 2026",
    href: "",
  },
];

export default function LatestEvents() {
  return (
    <section id="events" className="bg-[#f5f5f5] py-14 sm:py-16 xl:py-20">
      <div className="custom-container xl:px-6 2xl:px-8">
        {/* Top Header Row */}
        <div className="grid grid-cols-12 gap-6 items-center" data-aos="fade-up">
          <div className="col-span-12 min-[1025px]:col-span-9 xl:col-span-8">
            <h2 className="section-title font-semibold text-slate-900">Our Latest Events</h2>
            <p className="section-text mt-3 ">
              Stay informed about Herniamesh®&apos;s upcoming congresses, training courses, trade
              fairs, and professional events across surgery, hernia, urology, and urogynecology.
              Discover where our team will be present and explore opportunities to connect with us.
            </p>
          </div>

          <div className="col-span-12 min-[1025px]:col-span-3 xl:col-span-4 flex min-[1025px]:justify-end">
            <Button href="" variant="primary">
              View All Events
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-300 mt-6 sm:mt-8 mb-6 sm:mb-8" />

        {/* Events Carousel */}
        <div data-aos="fade-up" data-aos-delay="150">
          <Swiper
            modules={[Pagination, Autoplay]}
            className="herniamesh-swiper"
            spaceBetween={20}
            slidesPerView={1}
            slidesPerGroup={1}
            speed={700}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
              1025: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
            }}
          >
            {EVENTS.map((event) => (
              <SwiperSlide key={event.title} className="p-1.5 !h-auto">
                <Link
                  href={event.href}
                  className="group flex flex-col h-full rounded-tl-3xl rounded-br-3xl  bg-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] p-3 sm:p-4 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,85,166,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0055A6]"
                >
                  <div className="relative w-full aspect-[489/376] overflow-hidden rounded-tl-3xl rounded-br-3xl ">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="grid grid-cols-12 items-center gap-3 mt-4 sm:mt-5 px-1 pb-1">
                    <div className="col-span-10 min-w-0">
                      <h3 className="card-title font-semibold text-slate-900 truncate" title={event.title}>
                        {event.title}
                      </h3>
                      <div className="mt-1.5 flex items-center gap-2 ">
                        <CalendarDays className="w-4 h-4 text-[#0055A6] flex-shrink-0" />
                        <span className="card-text">{event.date}</span>
                      </div>
                    </div>

                    <div className="col-span-2 flex justify-end">
                      <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0055A6] text-white flex items-center justify-center shadow-md transition-colors duration-200 group-hover:bg-[#00448a]">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
