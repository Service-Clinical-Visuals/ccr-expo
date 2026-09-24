"use client";

import React from "react";

export default function QualityManagement() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center max-w-7xl mx-auto mb-12 sm:mb-16" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-title font-semibold tracking-tight font-exo2 text-[#111111] mb-4 sm:mb-6 leading-snug">
            Stay Updated with TEKNO-MEDICAL
          </h2>
          <p className="section-text leading-relaxed font-outfit text-[#111111] max-w-7xl mx-auto font-light">
            Discover the latest news, product developments, trade fairs, exhibitions, and company updates from TEKNO-MEDICAL. Stay informed about our innovations, industry activities, and upcoming events around the world.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-10 lg:mx-10">

          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row bg-white overflow-hidden shadow-[0px_2px_6px_2px_#3C404326,0px_1px_2px_0px_#3C40434D]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            <div className="flex-shrink-0 relative w-full sm:w-auto sm:h-full">
              <img src="/medical/tekno/tekno-medical1.png" alt="Medica 2026" className="w-full sm:w-auto h-[250px] sm:h-full object-cover" />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center relative">
              <div className="absolute top-6 sm:top-8 right-5 w-2 h-1/4 bg-[#D22840] rounded-full"></div>

              <h3 className="font-exo2 font-semibold text-[#111111] card-title leading-snug mb-4">
                Medica 2026
              </h3>

              <p className="font-outfit text-[#111111] section-text leading-relaxed mb-6 font-light">
                Since the first event in 1969, Medica has evolved into an international venue and the world's largest industrial fair for the medical sector. With more than 5,000 exhibitors from 70 countries last year, Medica is the platform of our industrial sector. We are already looking forward to welcoming you to our stand (10A44) in Hall 10.
              </p>

              <div className="mt-auto">
                <a href="#readmore" className="text-[#D22840] section-text font-outfit font-medium flex items-center gap-2 group">
                  <span className="underline group-hover:underline section-text">Read More</span> <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row bg-white overflow-hidden shadow-[0px_2px_6px_2px_#3C404326,0px_1px_2px_0px_#3C40434D]" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <div className="flex-shrink-0 relative w-full sm:w-auto sm:h-full">
              <img src="/medical/tekno/tekno-medical2.png" alt="WHX Dubai" className="w-full sm:w-auto h-[250px] sm:h-full object-cover" />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center relative">
              <div className="absolute top-6 sm:top-8 right-5 w-2 h-1/4 bg-[#D22840] rounded-full"></div>

              <h3 className="font-exo2 font-semibold text-[#111111] card-title leading-snug mb-4">
                WHX Dubai
              </h3>

              <p className="font-outfit text-[#111111] section-text leading-relaxed mb-6 font-light">
                The Arab Health was founded in 1977 and initially took place in a biennial cycle. Since 2001 the trade show has been held annually. Today it is one of the most important trade shows for the medical sector world-wide and its catchment area is a lot bigger than just the UAE and the Arabic peninsula.
              </p>

              <div className="mt-auto">
                <a href="#readmore" className="text-[#D22840] font-outfit font-medium section-text flex items-center gap-2 group">
                  <span className="underline group-hover:underline section-text">Read More</span> <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

