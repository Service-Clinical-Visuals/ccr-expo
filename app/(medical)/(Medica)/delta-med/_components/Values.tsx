"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowUpRight } from "lucide-react";

const valuesData = [
  {
    title: "Honesty",
    desc: "SKT prioritizes integrity, transparency, and high business ethics above all else; it expects all parties with whom it does business to act in accordance with these same values.",
    image: "/moto/skt/values1.jpg"
  },
  {
    title: "Possession",
    desc: "SKT aims for shared success by encouraging its employees to participate in business processes with their ideas, fostering stakeholder awareness through teamwork...",
    image: "/moto/skt/values2.jpg"
  },
  {
    title: "Innovator",
    desc: "SKT aims to contribute to the future of the sector by creating a sustainable innovation culture and being open to innovation.",
    image: "/moto/skt/values3.jpg"
  },
  {
    title: "Sustainable",
    desc: "With the motto #todayforthefuture, it demonstrates its commitment to people and nature in every product it manufactures...",
    image: "/moto/skt/values4.jpg"
  },
  {
    title: "Leadership",
    desc: "In shaping the future of SKT, a principle has been adopted to train managers who possess strategic thinking, flexibility, and the ability to adapt to change.",
    image: "/moto/skt/values5.jpg"
  },
  {
    title: "Customer Satisfaction",
    desc: "Every SKT employee works with customer trust and satisfaction as their top priority.",
    image: "/moto/skt/values6.jpg"
  },
  {
    title: "Agility",
    desc: "Every SKT employee, especially managers, strives to make timely decisions and take action, and works in a results-oriented manner.",
    image: "/moto/skt/values7.jpg"
  }
];

const Values = () => {
  return (
    <section id="values" className="w-full py-16 lg:py-24 bg-white overflow-hidden border-t border-gray-200">
      <div className="custom-container flex flex-col gap-12 items-center">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-8 gap-6 w-full" data-aos="fade-up">
          <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col gap-4">
            <Typography variant="h2" color="dark" className="font-bold">
              Our Values
            </Typography>
            <Typography variant="p" color="dark" className="leading-relaxed">
              At SKT, our values guide the way we work, innovate, and build lasting relationships. We are committed to integrity, collaboration, innovation, sustainability, leadership, customer satisfaction, and agility, ensuring that every decision and action creates meaningful value for our customers, employees, partners, and the future.
            </Typography>
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <Button text="Discover Our Values" href="#discover" showIcon={true} iconVariant="dark" />
          </div>
        </div>

        {/* Slider Container */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: '.values-pagination',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
            loop={true}

          >
            {valuesData.map((item, index) => (
              <SwiperSlide key={index} className="h-auto pb-4">
                <div className="group relative w-full aspect-[534/536] overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl shadow-xl cursor-pointer">

                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-[#171717]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Top Right Icon */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="text-[#171717] w-5 h-5" strokeWidth={2.5} />
                  </div>

                  {/* Content (Bottom Left aligned) */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex flex-col gap-3">
                      <Typography variant="h4" color="white" className="font-bold">
                        {item.title}
                      </Typography>
                      <Typography variant="p" color="white" className="text-sm leading-relaxed opacity-90">
                        {item.desc}
                      </Typography>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Container */}
          <div className="values-pagination custom-swiper-pagination flex justify-center mt-4"></div>
        </div>

      </div>
    </section>
  );
};

export default Values;
