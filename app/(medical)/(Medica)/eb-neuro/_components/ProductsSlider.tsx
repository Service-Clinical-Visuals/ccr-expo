"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Typography from "./Typography";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const allProducts = [
  // Neurology
  { category: 'Neurology', name: 'BE Plus PRO', badge: 'ROUTINE EEG/vEEG', desc: 'BE Plus PRO is a versatile amplifier for EEG, PSG, ICU/NICU monitoring, EP/ERP, and TMS applications.', image: '/medical/eb-neuro/f11.png' },
  { category: 'Neurology', name: 'NeMus 1', badge: 'ELECTROMYOGRAPHY', desc: 'NeMus 1 is the system designed specifically for electromyography (EMG) and Evoked Potentials (EP).', image: '/medical/eb-neuro/f12.png' },
  { category: 'Neurology', name: 'GALILEO TMS M Series', badge: 'TMS & NEURONAVIGATION', desc: 'A powerful transcranial magnetic stimulator for the treatment of central nervous system and peripheral nerve disorders.', image: '/medical/eb-neuro/f13.png' },

  // Gastroenterology & Urology
  { category: 'Gastroenterology & Urology', name: 'Solar GI Solid State', badge: 'ESOPHAGEAL MANOMETRY', desc: 'Solar GI is an advanced high-resolution manometry system offering all the tools needed for modern manometry', image: '/medical/eb-neuro/f21.png' },
  { category: 'Gastroenterology & Urology', name: 'Flowmaster NS', badge: 'UROFLOMETRY', desc: 'FLOWMASTER is a computer based wireless flowmeter designed for practical, everyday flow studies', image: '/medical/eb-neuro/f22.png' },
  { category: 'Gastroenterology & Urology', name: 'Solar Blue', badge: 'URODYNAMICS', desc: 'The Solar Blue is a modular and wireless urodynamic testing system for assessing lower urinary tract function', image: '/medical/eb-neuro/f23.png' },

  // Cardiology
  { category: 'Cardiology', name: 'Rest ECG Smart', badge: 'ECG', desc: 'Easy ECG Smart transforms your PC into a powerful 12 leads electrocardiograph.', image: '/medical/eb-neuro/f31.png' },
  { category: 'Cardiology', name: 'Easy ECG Holter', badge: 'ECG', desc: 'The LCD display provides an on-demand ECG review of all channels and visual confirmation of patient hook up.', image: '/medical/eb-neuro/f32.png' },
  { category: 'Cardiology', name: 'ABP Blood pressureHolter', badge: 'ECG', desc: 'A simple one-button operation makes the recorder very easy to use.', image: '/medical/eb-neuro/f33.png' },
];

const ProductsSlider = () => {
  const [activeTab, setActiveTab] = useState("Neurology");
  const tabs = ["Neurology", "Gastroenterology & Urology", "Cardiology", "View All"];
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const displayProducts = activeTab === "View All"
    ? allProducts
    : allProducts.filter(p => p.category === activeTab);

  return (
    <section id="products" className="w-full py-16 xl:py-24 bg-[var(--color-background)] overflow-hidden">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-8 mb-12 min-[3800px]:mb-20" data-aos="fade-up">
          <div className="flex flex-col gap-3 xl:max-w-[60%]">
            <Typography variant="h5" color="secondary" className="font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] inline-block"></span> PRODUCTS & SOLUTIONS
            </Typography>

            <Typography variant="h2" color="dark" className="leading-tight">
              Advanced Medical Solutions for Healthcare
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              Explore reliable medical technologies designed to support accurate diagnosis, monitoring, research, and patient care across diverse medical specialties.
            </Typography>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 min-[3800px]:gap-4 bg-white p-2 min-[3800px]:p-4 border border-gray-200 rounded-lg min-[3800px]:rounded-2xl shadow-sm shrink-0 flex-wrap" data-aos="fade-up" data-aos-delay="100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 xl:px-6 min-[3800px]:px-12 py-2 min-[3800px]:py-4 rounded-md min-[3800px]:rounded-xl transition-all duration-300 ${activeTab === tab
                  ? "bg-transparent text-[var(--color-secondary)]"
                  : "bg-transparent text-[#666666] hover:text-[#333333]"
                  }`}
              >
                <Typography variant="h4" className="!text-inherit !mb-0">{tab}</Typography>
              </button>
            ))}
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-full relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            key={activeTab} // Force re-render on tab change for pagination reset
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={false}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="products-swiper pb-16"
          >
            {displayProducts.map((product, idx) => (
              <SwiperSlide key={idx} className="!h-auto pb-4">
                {/* Card Body */}
                <div
                  className={`group relative h-full w-full bg-white rounded-md min-[3800px]:rounded-3xl overflow-hidden flex flex-col items-center cursor-pointer ${activeCard === idx ? "active" : ""
                    }`}
                  onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                >
                  {/* Image Area */}
                  <div className="w-full aspect-[535/450] flex justify-center items-center shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Dark Overlay (Hover / Active) */}
                  <div className={`absolute inset-0 bg-[#5C5C5C]/85 transition-opacity duration-300 flex flex-col justify-end p-8 min-[3800px]:p-12 z-10 
                    ${activeCard === idx ? 'opacity-100' : 'opacity-0 xl:group-hover:opacity-100'}
                  `}>

                    {/* Badge */}
                    <div className="absolute top-6 right-6 min-[3800px]:top-12 min-[3800px]:right-12 bg-[var(--color-secondary)] text-white text-xs min-[3800px]:text-2xl font-bold px-4 py-2 min-[3800px]:px-8 min-[3800px]:py-4 rounded-sm min-[3800px]:rounded-md shadow-md">
                      {product.badge}
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-4">
                      <Typography variant="h4" color="white" className="!font-bold min-[3800px]:text-5xl">
                        {product.name}
                      </Typography>
                      <Typography variant="p" color="white" className="text-sm min-[3800px]:text-3xl opacity-90 leading-relaxed min-[3800px]:mb-10 line-clamp-4">
                        {product.desc}
                      </Typography>

                      <div className="flex w-full justify-end mt-4 min-[3800px]:mt-10">
                        <span className="flex items-center gap-2 text-white group/btn hover:opacity-80 transition-opacity">
                          <Typography variant="span" className="font-semibold text-white text-sm min-[3800px]:text-3xl">Read More</Typography>
                          <FiArrowRight className="text-lg min-[3800px]:text-4xl group-hover:translate-x-1 transition-transform" />
                        </span>
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
};

export default ProductsSlider;
