"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const newsItems = [
  {
    id: 1,
    title: "When Is The Mini-Midline Most...",
    date: "4 September 2026",
    desc: "A mini-Midline may be used when peripheral venous access needs to be more stable and durable than with a short...",
    image: "/medical/delta-med/n1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Delta Midline And Midline Health Line...",
    date: "1 September 2026",
    desc: "The choice of a Midline catheter must take several parameters into account, from the characteristics of the...",
    image: "/medical/delta-med/n2.png",
    link: "#",
  },
  {
    id: 3,
    title: "When To Choose Prefilled Syringes...",
    date: "24 August 2026",
    desc: "Drug preparation is a critical step in the administration process. Any manipulation of the device or solution requires...",
    image: "/medical/delta-med/n3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Urine Output Monitoring With A...",
    date: "18 August 2026",
    desc: "Urine output monitoring makes it possible to collect objective information on the patient's fluid balance and renal...",
    image: "/medical/delta-med/n4.png",
    link: "#",
  },
  {
    id: 5,
    title: "Elastomeric Pumps: Continuity Of...",
    date: "11 August 2026",
    desc: "In recent years, the development of infusion devices has made it possible to deliver certain treatments outside...",
    image: "/medical/delta-med/n5.png",
    link: "#",
  },
  {
    id: 6,
    title: "Amber Syringes: When Light Protection...",
    date: "4 August 2026",
    desc: "In healthcare settings, syringe selection does not depend solely on volume or the method of administration. In some cases, it...",
    image: "/medical/delta-med/n6.png",
    link: "#",
  },
];

const LatestNews = () => {
  return (
    <section id="news" className="w-full py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">

        {/* Top Header Row */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6"
          data-aos="fade-up"
        >
          {/* Left Title & Description */}
          <div className="max-w-3xl flex flex-col gap-2.5">
            <Typography
              variant="h2"
              color="dark"
              className="font-semibold text-2xl sm:text-3xl lg:text-[34px] tracking-tight text-[#121C22] font-outfit"
            >
              Latest News
            </Typography>
            <Typography
              variant="p"
              color="none"
              className="text-[#555962] text-xs sm:text-sm lg:text-[14.5px] leading-relaxed font-outfit"
            >
              With a focus on innovation and the strengthening of a sector that is constantly growing and evolving, NUMANTEC was established—a new biomedical group composed of various entities specialized in healthcare assistance solutions.
            </Typography>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0">
            <Button text="View All News" href="#all-news" variant="outline" />
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full border-b border-gray-200 mb-8 sm:mb-10" />

        {/* News Slider */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".news-custom-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full !pb-4"
          >
            {newsItems.map((item) => (
              <SwiperSlide key={item.id} className="h-auto pb-3">
                <div className="bg-white border border-gray-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-xl rounded-tl-[2.5rem] md:rounded-tl-[3.5rem] rounded-br-[2.5rem] md:rounded-br-[3.5rem] rounded-tr-none rounded-bl-none p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 h-full group">

                  {/* Inner Image Container with matching diagonal corners */}
                  <div className="w-full aspect-[16/11] rounded-tl-[1.8rem] md:rounded-tl-[2.2rem] rounded-br-[1.8rem] md:rounded-br-[2.2rem] rounded-tr-none rounded-bl-none overflow-hidden bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-2 mt-4 flex-1">
                    <h3 className="font-bold text-base sm:text-lg text-[#121C22] tracking-tight font-outfit line-clamp-1 group-hover:text-[#1980AA] transition-colors">
                      {item.title}
                    </h3>

                    {/* Date with Calendar icon */}
                    <div className="flex items-center gap-1.5 text-xs text-[#555962] font-outfit">
                      <Calendar className="w-3.5 h-3.5 text-[#182C4A]" />
                      <span>{item.date}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13.5px] text-[#555962] leading-relaxed line-clamp-2 font-outfit mt-1">
                      {item.desc}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-4 border-t border-transparent">
                    <Link
                      href={item.link}
                      className="text-[#1980AA] hover:text-[#12688b] font-semibold text-xs sm:text-[13.5px] transition-colors font-outfit inline-flex items-center gap-1"
                    >
                      <span>Read More &gt;</span>
                    </Link>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pill Pagination */}
          <div className="news-custom-pagination flex justify-center items-center gap-2 mt-8"></div>
        </div>

      </div>

      <style jsx global>{`
        .news-custom-pagination .swiper-pagination-bullet {
          width: 20px;
          height: 6px;
          border-radius: 9999px;
          background-color: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 4px;
          cursor: pointer;
        }
        .news-custom-pagination .swiper-pagination-bullet-active {
          width: 44px;
          background-color: #1b2a4a;
        }
      `}</style>
    </section>
  );
};

export default LatestNews;
