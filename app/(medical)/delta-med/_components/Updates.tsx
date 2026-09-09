"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Updates() {
  const newsItems = [
    {
      date: "05/2026",
      title: "TSO069VR1 - ET ENGINETEAM Gasket Kit, cylinder head",
      img: "/moto/et-engine/update1-1.png"
    },
    {
      date: "05/2026",
      title: "TSO069VR4 - ET ENGINETEAM Gasket Kit, cylinder head",
      img: "/moto/et-engine/update1-2.jpg"
    },
    {
      date: "05/2026",
      title: "TSO069VR1 - ET ENGINETEAM Gasket Kit, cylinder head",
      img: "/moto/et-engine/update1-3.jpg"
    },
    {
      date: "04/2026",
      title: "VT0064 - ET ENGINETEAM Camshaft Adjuster, VVT hub",
      img: "/moto/et-engine/update1-4.jpg"
    },
    {
      date: "04/2026",
      title: "SB0033 - ET ENGINETEAM Complete Engine",
      img: "/moto/et-engine/update1-5.jpg"
    },
    {
      date: "04/2026",
      title: "ED0338 - ET ENGINETEAM Manifold, exhaust system",
      img: "/moto/et-engine/update1-6.jpg"
    }
  ];

  return (
    <section className="relative w-full py-16  bg-[#232323] overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/moto/et-engine/bg.png" alt="Background pattern" className="w-full h-full object-cover" />
      </div>

      <div className="custom-container relative z-10 flex flex-col gap-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center  mx-auto" data-aos="fade-up">
          <Typography variant="h1" color="white" className="font-semibold leading-tight mb-4 lg:mb-6">
            Latest Products & Industry Updates
          </Typography>
          <Typography variant="p" color="white" className="max-w-[70%] leading-relaxed">
            Stay informed with the latest product launches, technical updates, and automotive innovations from ET ENGINETEAM. Explore newly introduced engine components, repair kits, and precision-engineered solutions designed to meet the evolving needs of modern vehicles while delivering trusted quality, reliable performance, and comprehensive application coverage.
          </Typography>
        </div>
        <div className="w-full border-b border-white/40 " >
        </div>

        <div className="flex flex-col gap-4 w-full">
          {/* Swiper Block */}
          <div className="w-full relative" data-aos="fade-up" data-aos-delay="100">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              navigation={{
                prevEl: '.updates-prev',
                nextEl: '.updates-next',
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3 },
                1536: { slidesPerView: 3 },
              }}
              className="w-full"
            >
              {newsItems.map((item, idx) => (
                <SwiperSlide key={idx} className="h-auto pb-1">
                  <div className="group relative w-full aspect-[1/0.95] rounded-[2rem] overflow-hidden bg-white shadow-xl cursor-pointer">
                    {/* Image */}
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-[#171717]/85 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 lg:p-8">
                      <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-start gap-3">
                        <Typography variant="p" color="white" className="opacity-70 text-sm font-medium">
                          {item.date}
                        </Typography>
                        <Typography variant="h4" color="white" className="font-semibold text-left line-clamp-2">
                          {item.title}
                        </Typography>
                        <div className="mt-2">
                           <Button text="View Details" href="#" showIcon={true} />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Bottom Row */}
          <div className="flex items-center justify-between w-full mt-1" data-aos="fade-up" data-aos-delay="200">
            <Button text="View All News" href="#" showIcon={true} />
            
            <div className="flex items-center gap-4">
              <button className="updates-prev bg-primary shadow-xl w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full  border-gray-600 hover:border-white hover:bg-white/10 transition-colors text-white disabled:opacity-50 disabled:cursor-not-allowed">
                <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
              </button>
              <button className="updates-next bg-primary shadow-xl w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full  border-gray-600 hover:border-white hover:bg-white/10 transition-colors text-white disabled:opacity-50 disabled:cursor-not-allowed">
                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
