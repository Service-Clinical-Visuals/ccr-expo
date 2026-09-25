"use client";

import React, { useState } from "react";
import Link from "next/link";
import Typography from "./Typography";

export default function News() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      id="news"
      className="w-full py-16 xl:py-24 min-[2500px]:py-36 bg-white overflow-hidden"
    >
      <div className="custom-container">
        {/* Header with deleo xl:max-w-[70%] concept */}
        <div
          className="xl:max-w-[70%] max-w-[90%] mx-auto text-center space-y-4 mb-12 sm:mb-16"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <Typography variant="h2" color="dark">
            Our Latest <span className="text-[#3452A7]">News</span>
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            Discover the latest developments from ERETNA, including new medical technology, product updates, healthcare events, exhibitions, and company news. Stay informed about our ongoing innovations and solutions supporting modern healthcare.
          </Typography>
        </div>

        {/* News Grid with Navigation Controls */}
        <div className="relative w-full">
          {/* Side Floating Navigation Arrows (ONLY shown on desktop xl+, completely hidden on mobile & tablets) */}
          <button
            onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : 0))}
            aria-label="Previous News"
            className="hidden xl:flex absolute left-0 min-[2000px]:left-2 min-[2500px]:left-3 min-[3800px]:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 min-[2000px]:w-12 min-[2000px]:h-12 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-[#3452A7] items-center justify-center text-white hover:bg-[#284189] transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <svg className="w-4 h-4 min-[2000px]:w-5 min-[2000px]:h-5 min-[2500px]:w-6 min-[2500px]:h-6 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={() => setActiveSlide((prev) => prev + 1)}
            aria-label="Next News"
            className="hidden xl:flex absolute right-0 min-[2000px]:right-2 min-[2500px]:right-3 min-[3800px]:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 min-[2000px]:w-12 min-[2000px]:h-12 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-18 min-[3800px]:h-18 rounded-full bg-[#3452A7] items-center justify-center text-white hover:bg-[#284189] transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <svg className="w-4 h-4 min-[2000px]:w-5 min-[2000px]:h-5 min-[2500px]:w-6 min-[2500px]:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container: generous padding on normal desktops, slightly reduced width (92% centered) on 4K screens alone */}
          <div className="w-full xl:px-16 2xl:px-20 min-[2000px]:px-28 min-[2500px]:px-36 min-[3800px]:px-0 min-[3800px]:max-w-[92%] min-[3800px]:mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8 min-[2500px]:gap-12 items-stretch w-full">
              {/* Left Featured News Card (EXPOMED 2026 - Maiden's Tower Image) */}
              <div
                className="xl:col-span-6 bg-white rounded-2xl min-[2500px]:rounded-3xl figma-card-shadow overflow-hidden flex flex-col sm:flex-row group transition-all duration-300 hover:shadow-xl border border-gray-100"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                {/* Card Image on left (50%) */}
                <div className="relative w-full sm:w-[50%] aspect-[16/10] sm:aspect-auto sm:min-h-[444px] min-[2500px]:sm:min-h-[560px] bg-gray-100 shrink-0">
                  <img
                    src="/medical/eretna/news1.png"
                    alt="EXPOMED 2026 - Istanbul Eurasia"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content on right (50%) */}
                <div className="w-full sm:w-[50%] p-6 sm:p-7 min-[2500px]:p-10 flex flex-col justify-between">
                  <div className="space-y-3 min-[2500px]:space-y-5">
                    <div className="flex justify-end">
                      <span className="font-dmsans text-[13px] min-[2500px]:text-[16px] text-[#666666] font-normal">
                        April 18, 2026
                      </span>
                    </div>
                    <Typography variant="h3" color="dark">
                      EXPOMED 2026
                    </Typography>
                    <Typography variant="p" color="muted" className="leading-[1.75]">
                      We have successfully concluded Tüyap Expomed Eurasia 2026. This event, a significant meeting point for the international medical technology world, was extremely valuable for us, providing an opportunity to connect with industry professionals, showcase our innovative and high-tech domestic solutions, and engage in fruitful discussions.
                    </Typography>
                  </div>

                  {/* Diagonal Up-Right Arrow Button (↗) */}
                  <div className="pt-4 flex justify-end">
                    <div className="w-8 h-8 min-[2500px]:w-12 min-[2500px]:h-12 rounded-full border border-[#3452A7] flex items-center justify-center text-[#3452A7] group-hover:bg-[#3452A7] group-hover:text-white transition-colors cursor-pointer">
                      <svg className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Stacked News Cards */}
              <div
                className="xl:col-span-6 flex flex-col gap-6 min-[2500px]:gap-8 justify-between"
                data-aos="fade-left"
                data-aos-duration="900"
              >
                {/* Card 2: 23rd National Intensive Care Congress */}
                <div className="bg-white rounded-2xl min-[2500px]:rounded-3xl figma-card-shadow overflow-hidden flex flex-col sm:flex-row group transition-all duration-300 hover:shadow-xl border border-gray-100 flex-1 min-h-[207px] min-[2500px]:min-h-[270px]">
                  <div className="relative w-full sm:w-[40%] aspect-[16/10] sm:aspect-auto sm:min-h-full shrink-0 bg-[#E8EEF7]">
                    <img
                      src="/medical/eretna/news2.png"
                      alt="23rd National Intensive Care Congress"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 sm:p-6 min-[2500px]:p-8 flex flex-col justify-between flex-grow">
                    <div className="space-y-2 min-[2500px]:space-y-4">
                      <div className="flex justify-end">
                        <span className="font-dmsans text-[13px] min-[2500px]:text-[16px] text-[#666666]">
                          April 5, 2026
                        </span>
                      </div>
                      <Typography variant="h4" color="dark">
                        23rd National Intensive Care Congress
                      </Typography>
                      <Typography variant="p" color="muted" className="leading-[1.6]">
                        We were delighted to participate in the 23rd National Intensive Care Congress. It was a productive event
                      </Typography>
                    </div>

                    {/* Diagonal Up-Right Arrow Button (↗) */}
                    <div className="pt-2 flex justify-end">
                      <div className="w-8 h-8 min-[2500px]:w-12 min-[2500px]:h-12 rounded-full border border-[#3452A7] flex items-center justify-center text-[#3452A7] group-hover:bg-[#3452A7] group-hover:text-white transition-colors cursor-pointer">
                        <svg className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: TASHKON 2026 */}
                <div className="bg-white rounded-2xl min-[2500px]:rounded-3xl figma-card-shadow overflow-hidden flex flex-col sm:flex-row group transition-all duration-300 hover:shadow-xl border border-gray-100 flex-1 min-h-[207px] min-[2500px]:min-h-[270px]">
                  <div className="relative w-full sm:w-[40%] aspect-[16/10] sm:aspect-auto sm:min-h-full shrink-0 bg-gray-100">
                    <img
                      src="/medical/eretna/news3.png"
                      alt="TASHKON 2026 Congress"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 sm:p-6 min-[2500px]:p-8 flex flex-col justify-between flex-grow">
                    <div className="space-y-2 min-[2500px]:space-y-4">
                      <div className="flex justify-end">
                        <span className="font-dmsans text-[13px] min-[2500px]:text-[16px] text-[#666666]">
                          March 28, 2026
                        </span>
                      </div>
                      <Typography variant="h4" color="dark">
                        TASHKON 2026
                      </Typography>
                      <Typography variant="p" color="muted" className="leading-[1.6]">
                        We at Eretna were delighted to participate in the 2nd Turkish Emergency Health Services Congress,
                      </Typography>
                    </div>

                    {/* Diagonal Up-Right Arrow Button (↗) */}
                    <div className="pt-2 flex justify-end">
                      <div className="w-8 h-8 min-[2500px]:w-12 min-[2500px]:h-12 rounded-full border border-[#3452A7] flex items-center justify-center text-[#3452A7] group-hover:bg-[#3452A7] group-hover:text-white transition-colors cursor-pointer">
                        <svg className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View All link at bottom right */}
            <div className="flex justify-end pt-5">
              <Link
                href="#contact"
                className="navbar text-[#3452A7] underline font-medium hover:text-[#284189] transition-colors"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
