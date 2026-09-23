"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const News = () => {
  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">

        {/* Header Content */}
        <div className="flex flex-col items-center justify-center text-center mb-10 min-[3800px]:mb-20" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 min-[3800px]:gap-8 mb-4 min-[3800px]:mb-8 w-full">
            <div className="h-[3.5px] min-[3800px]:h-[7px] rounded-full w-[100px] min-[3800px]:w-[200px] bg-[var(--color-primary)]"></div>
            <Typography variant="h2" color="dark" className="whitespace-nowrap">
              Latest News & Events
            </Typography>
            <div className="h-[3.5px] min-[3800px]:h-[7px] rounded-full w-[100px] min-[3800px]:w-[200px] bg-[var(--color-primary)]"></div>
          </div>
          <Typography variant="p" color="dark" className="xl:max-w-[70%] ">
            Stay informed about Progetti Medical's latest innovations, product developments, industry events, international exhibitions, and company updates. Discover how our continued commitment to medical technology and global collaboration is shaping new solutions for healthcare professionals worldwide.
          </Typography>
        </div>

        {/* Slider Layout Wrapper */}
        <div className="flex items-center gap-6 min-[3800px]:gap-12 w-full">

          {/* Left Slider Arrow */}
          <button className="hidden xl:flex w-10 h-10 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#ED1C24] items-center justify-center text-white shrink-0 shadow-md hover:bg-[#ED1C24]/90 transition-colors">
            <FiArrowLeft className="text-xl min-[3800px]:text-4xl" />
          </button>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-[3800px]:gap-12 w-full flex-1">

            {/* Left Card: Large News */}
            <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden h-full" data-aos="fade-right">
              {/* Image side */}
              <div className="w-full md:w-1/2 aspect-[338/444] min-[3800px]:aspect-[338/444] shrink-0">
                <img src="/medical/progetti/news1.png" alt="WHX Nairobi" className="w-full h-full object-cover" />
              </div>
              {/* Text side */}
              <div className="p-6 min-[3800px]:p-12 flex flex-col justify-between w-full">
                <div className="flex flex-col gap-4 min-[3800px]:gap-8">
                  <div className="flex justify-end w-full">
                    <Typography variant="p" color="dark" className="text-xs min-[3800px]:text-2xl opacity-70">
                      19/06/2026
                    </Typography>
                  </div>
                  <Typography variant="h3" color="dark" className="font-bold leading-snug">
                    Visit us at WHX Nairobi 2026
                  </Typography>
                  <Typography variant="p" color="dark" className="text-sm min-[3800px]:text-3xl leading-relaxed opacity-90">
                    We are pleased to announce our participation in WHX Nairobi 2026, taking place from 16 to 18 September 2026 at the Kenyatta International Convention Centre, Nairobi, Kenya. We will be present at Stand H1.C02, where we will have the pleasure of meeting healthcare professionals, distributors, and partners from Kenya and other international markets.
                  </Typography>
                </div>
                <div className="flex justify-end mt-6 min-[3800px]:mt-12">
                  <Link href="#" className="w-8 h-8 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full border border-[#ED1C24] flex items-center justify-center text-[#ED1C24] hover:bg-[#ED1C24] hover:text-white transition-colors">
                    <FiArrowRight className="text-lg min-[3800px]:text-3xl" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Cards: Stacked vertically */}
            <div className="flex flex-col gap-6 min-[3800px]:gap-12 h-full" data-aos="fade-left">

              {/* Top Right Card */}
              <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden flex-1">
                <div className="w-full md:w-2/5 aspect-[246/207] min-[3800px]:aspect-[246/207] shrink-0">
                  <img src="/medical/progetti/news2.png" alt="Rescue SAM 4.0" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 min-[3800px]:p-12 flex flex-col justify-between w-full">
                  <div className="flex flex-col gap-3 min-[3800px]:gap-6">
                    <div className="flex justify-end w-full">
                      <Typography variant="p" color="dark" className="text-xs min-[3800px]:text-2xl opacity-70">
                        27/02/2026
                      </Typography>
                    </div>
                    <Typography variant="h4" color="dark" className="font-bold leading-snug">
                      How the new Rescue SAM 4.0 AED supports the Justin Edinburgh 3 Foundation to improve defibrillator access across the UK.
                    </Typography>
                  </div>
                  <div className="flex justify-end mt-4 min-[3800px]:mt-8">
                    <Link href="#" className="w-8 h-8 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full border border-[#ED1C24] flex items-center justify-center text-[#ED1C24] hover:bg-[#ED1C24] hover:text-white transition-colors">
                      <FiArrowRight className="text-lg min-[3800px]:text-3xl" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom Right Card */}
              <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden flex-1">
                <div className="w-full md:w-2/5 aspect-[246/207] min-[3800px]:aspect-[246/207] shrink-0">
                  <img src="/medical/progetti/news3.png" alt="10 Year Partnership" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 min-[3800px]:p-12 flex flex-col justify-between w-full">
                  <div className="flex flex-col gap-3 min-[3800px]:gap-6">
                    <div className="flex justify-end w-full">
                      <Typography variant="p" color="dark" className="text-xs min-[3800px]:text-2xl opacity-70">
                        24/07/2025
                      </Typography>
                    </div>
                    <Typography variant="h4" color="dark" className="font-bold leading-snug">
                      Progetti Medical and Intermedical (UK) Ltd Celebrate 10-Year UK Partnership with Launch of New Defib Supplies Division
                    </Typography>
                  </div>
                  <div className="flex justify-end mt-4 min-[3800px]:mt-8">
                    <Link href="#" className="w-8 h-8 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full border border-[#ED1C24] flex items-center justify-center text-[#ED1C24] hover:bg-[#ED1C24] hover:text-white transition-colors">
                      <FiArrowRight className="text-lg min-[3800px]:text-3xl" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Slider Arrow */}
          <button className="hidden xl:flex w-10 h-10 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-[#ED1C24] items-center justify-center text-white shrink-0 shadow-md hover:bg-[#ED1C24]/90 transition-colors">
            <FiArrowRight className="text-xl min-[3800px]:text-4xl" />
          </button>

        </div>

        {/* View All Link */}
        <div className="flex justify-end mt-6 min-[3800px]:mt-12 xl:pr-16 min-[3800px]:pr-32" data-aos="fade-up">
          <Link href="#" className="border-b border-[#ED1C24]">
            <Typography variant="p" color="primary" className="text-sm min-[3800px]:text-2xl hover:opacity-80 transition-opacity">
              View All
            </Typography>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default News;
