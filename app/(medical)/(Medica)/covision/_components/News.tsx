"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const News = () => {
  return (
    <section id="news" className="w-full py-16 xl:py-24 min-[3800px]:py-36 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10">
        {/* Header - Deleo xl:max-w-[70%] concept */}
        <div className="flex flex-col items-center gap-3 text-center w-full" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <div className="w-[27px] min-[3800px]:w-14 h-[4px] min-[3800px]:h-2 bg-[#FB8021] rounded-full shrink-0"></div>
            <Typography
              variant="h4"
              color="primary"
              className="!font-bold tracking-wider uppercase"
            >
              NEWS
            </Typography>
          </div>

          <Typography variant="h2" color="dark" className="!font-bold">
            Latest Insights & News
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-center w-full xl:max-w-[70%] mx-auto mt-1"
          >
            Stay up to date with Covision’s latest news, innovations, product developments, and
            industry updates as we continue to advance orthopaedic solutions and expand our global
            presence.
          </Typography>
        </div>

        {/* 2 News Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-4">
          {/* Card 1 */}
          <div
            className="flex flex-col border border-gray-300 rounded-xl p-4 sm:p-5 bg-white shadow-xs hover:shadow-lg transition-all duration-300 group justify-between"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              {/* Image Frame */}
              <div className="w-full aspect-[2.6/1] sm:aspect-[3.1/1] rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
                <img
                  src="/medical/covision/news1.webp"
                  alt="Meet Our New System"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              {/* Title & Desc */}
              <div className="flex flex-col gap-3 pt-5">
                <Typography variant="h3" color="dark" className="!font-bold text-xl md:text-2xl">
                  Meet Our New System
                </Typography>
                <Typography variant="p" color="muted" className="text-sm md:text-base leading-relaxed text-[#4B5563]">
                  We are proud to announce the launch of our latest product systems, expanding our
                  range of advanced orthopaedic solutions.
                </Typography>
              </div>
            </div>

            <div className="flex justify-end pt-6">
              <Link
                href="#news"
                className="text-[#FB8021] hover:text-[var(--color-primary-hover)] text-sm md:text-base font-bold uppercase transition-colors tracking-wide underline underline-offset-4"
              >
                READ MORE
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-col border border-gray-300 rounded-xl p-4 sm:p-5 bg-white shadow-xs hover:shadow-lg transition-all duration-300 group justify-between"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div>
              {/* Image Frame */}
              <div className="w-full aspect-[2.6/1] sm:aspect-[3.1/1] rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
                <img
                  src="/medical/covision/news2.webp"
                  alt="WHX 2026 Dubai"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              {/* Title & Badge */}
              <div className="flex flex-col gap-3 pt-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <Typography variant="h3" color="dark" className="!font-bold text-xl md:text-2xl">
                    WHX 2026 Dubai (9–12 February 2026)
                  </Typography>
                  <span className="bg-[#164160] text-white text-xs font-semibold px-3 py-1 rounded-md shrink-0 w-fit">
                    Comming Event
                  </span>
                </div>
                <Typography variant="p" color="muted" className="text-sm md:text-base leading-relaxed text-[#4B5563]">
                  Covision joins the ABHI UK Pavilion at WHX Dubai 2026, showcasing innovative
                  orthopaedic solutions and connecting with global healthcare leaders.
                </Typography>
              </div>
            </div>

            <div className="flex justify-end pt-6">
              <Link
                href="#news"
                className="text-[#FB8021] hover:text-[var(--color-primary-hover)] text-sm md:text-base font-bold uppercase transition-colors tracking-wide underline underline-offset-4"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
