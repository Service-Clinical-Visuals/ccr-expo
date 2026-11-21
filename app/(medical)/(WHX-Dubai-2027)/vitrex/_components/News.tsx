"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

/**
 * News & Insights Section - Vitrex Medical Group
 *
 * ARCHITECTURAL REFERENCE (Inogen):
 * 1. Asymmetrical Two-Column Card Grid:
 *    - Left: Tall primary exhibition card featuring `n1.webp`.
 *    - Right: Dual-card vertical stack featuring `n2.webp` and `n3.webp`.
 * 2. Responsive Adaptations:
 *    - Stacks on smaller screens and expands into proportionate side-by-side on desktop/4K.
 */
const News = () => {
  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-3 sm:space-y-4"
          data-aos="fade-up"
        >
          <Typography
            variant="h4"
            color="primary"
            className="text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.0625rem] min-[2500px]:text-[1.5625rem] min-[3800px]:text-[2.1875rem] font-bold tracking-wide text-[#1B4298]"
          >
            Latest News &amp; Insights
          </Typography>

          <Typography
            variant="h2"
            color="dark"
            className="text-[1.4375rem] sm:text-[1.8125rem] lg:text-[1.4375rem] xl:text-[1.6875rem] min-[2500px]:text-[2.4375rem] min-[3800px]:text-[3.4375rem] font-bold tracking-tight text-[#202020]"
          >
            Updates Shaping Our Progress In Medical Innovation
          </Typography>

          <Typography
            variant="p"
            color="dark"
            className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1.0625rem] min-[2500px]:text-[1.4375rem] min-[3800px]:text-[2.0625rem] leading-relaxed text-[#202020] text-center"
          >
            Stay connected with Vitrex Medical Group for the latest company news, industry events, strategic partnerships, and innovations shaping the future of advanced healthcare solutions worldwide.
          </Typography>
        </div>

        {/* News Grid: 1 Large Left Card + 2 Stacked Right Cards */}
        <div
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch mt-10 sm:mt-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Left Card: Exactly matches the full height of the 2 stacked right cards */}
          <div className="w-full h-full bg-white border border-[#71717A] rounded-[11px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[26px] p-4 sm:p-5 lg:p-5 min-[2500px]:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-5 lg:gap-6 items-center group">
            
            <div className="w-full md:w-[46%] h-[240px] md:h-[350px] lg:h-[370px] min-[2500px]:h-[480px] min-[3800px]:h-[650px] rounded-[8px] overflow-hidden shrink-0 flex items-center justify-center">
              <img
                src="/medical/vitrex/n1.webp"
                alt="Medica-2026 Exhibition Stand"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right contents in the left card: Vertically centered to the left image */}
            <div className="w-full md:w-[54%] flex flex-col justify-center items-start gap-3 py-1 my-auto">
              <div className="space-y-2">
                <Typography
                  variant="h3"
                  color="dark"
                  className="text-[1.0625rem] sm:text-[1.1875rem] lg:text-[1.1875rem] min-[2500px]:text-[1.6875rem] min-[3800px]:text-[2.3125rem] font-semibold text-[#202020]"
                >
                  Medica-2026
                </Typography>

                <Typography
                  variant="p"
                  color="dark"
                  className="text-[0.8125rem] sm:text-[0.9375rem] lg:text-[1rem] min-[2500px]:text-[1.3125rem] min-[3800px]:text-[1.8125rem] leading-relaxed text-[#202020]"
                >
                  Visit us at Stand No. G06 in Hall 6, where we look forward to welcoming you to our brand-new exhibition stand. Meet our team, explore our latest innovations, and discover how Vitrex Medical Group is advancing healthcare solutions through quality, expertise, and innovation.
                </Typography>
              </div>

              <div>
                <Link
                  href="#news"
                  className="para-text inline-block text-[#1B4298] underline underline-offset-4 font-semibold hover:text-[#143376] transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: 2 Stacked Horizontal Cards */}
          <div className="w-full h-full flex flex-col gap-6 sm:gap-8 justify-between">
            
            {/* Right Card 1: HerniaMesh */}
            <div className="w-full bg-white border border-[#71717A] rounded-[11px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[26px] p-4 sm:p-5 min-[2500px]:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center group">
              <div className="w-full sm:w-[45%] h-[160px] sm:h-[180px] min-[2500px]:h-[220px] rounded-[8px] overflow-hidden shrink-0">
                <img
                  src="/medical/vitrex/n2.webp"
                  alt="HerniaMesh Joins Vitrex Group"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between py-1 gap-2.5 w-full">
                <div className="space-y-1.5">
                  <Typography
                    variant="h3"
                    color="dark"
                    className="text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.1875rem] min-[2500px]:text-[1.5625rem] min-[3800px]:text-[2.1875rem] font-semibold text-[#202020]"
                  >
                    HerniaMesh Joins Vitrex Group
                  </Typography>

                  <Typography
                    variant="p"
                    color="dark"
                    className="text-[0.6875rem] sm:text-[0.8125rem] lg:text-[0.9375rem] min-[2500px]:text-[1.1875rem] min-[3800px]:text-[1.6875rem] leading-relaxed text-[#202020]"
                  >
                    HerniaMesh joins Vitrex Medical Group, marking a new chapter in collaboration and growth.
                  </Typography>
                </div>

                <div>
                  <Link
                    href="#news"
                    className="para-text inline-block text-[#1B4298] underline underline-offset-4 font-semibold hover:text-[#143376] transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Card 2: Chirmax Surgical */}
            <div className="w-full bg-white border border-[#71717A] rounded-[11px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[26px] p-4 sm:p-5 min-[2500px]:p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center group">
              <div className="w-full sm:w-[45%] h-[160px] sm:h-[180px] min-[2500px]:h-[220px] rounded-[8px] overflow-hidden shrink-0">
                <img
                  src="/medical/vitrex/n3.webp"
                  alt="Chirmax Surgical Unveils Improved Suture Packaging"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between py-1 gap-2.5 w-full">
                <div className="space-y-1.5">
                  <Typography
                    variant="h3"
                    color="dark"
                    className="text-[0.9375rem] sm:text-[1.0625rem] lg:text-[1.1875rem] min-[2500px]:text-[1.5625rem] min-[3800px]:text-[2.1875rem] font-semibold text-[#202020]"
                  >
                    Chirmax Surgical Unveils Improved Suture Packaging
                  </Typography>

                  <Typography
                    variant="p"
                    color="dark"
                    className="text-[0.6875rem] sm:text-[0.8125rem] lg:text-[0.9375rem] min-[2500px]:text-[1.1875rem] min-[3800px]:text-[1.6875rem] leading-relaxed text-[#202020]"
                  >
                    Chirmax Surgical unveils user-friendly suture packaging for greater convenience.
                  </Typography>
                </div>

                <div>
                  <Link
                    href="#news"
                    className="para-text inline-block text-[#1B4298] underline underline-offset-4 font-semibold hover:text-[#143376] transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default News;

