"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function News() {
  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-12">
        {/* Header Block */}
        <div
          className="flex flex-col items-center text-center gap-3.5 max-w-4xl xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 min-[2500px]:w-3.5 min-[2500px]:h-3.5 min-[3800px]:w-5 min-[3800px]:h-5 rounded-full bg-[var(--color-secondary)]"></span>
            <Typography
              variant="h4"
              color="secondary"
              className="uppercase tracking-wider !font-semibold text-base min-[2500px]:text-2xl min-[3800px]:text-3xl"
            >
              OUR PRODUCT IN ACTION
            </Typography>
          </div>

          <Typography
            variant="h2"
            color="dark"
            className="leading-tight !font-semibold text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-6xl"
          >
            Explore DECU PRO in Real Healthcare Environments
          </Typography>

          <Typography
            variant="p"
            color="dark"
            className="text-gray-700 leading-relaxed max-w-3xl xl:max-w-[70%] font-secondary mt-1"
          >
            Discover DECU PRO through our photo gallery, showcasing its thoughtful design,
            practical functionality and integration into modern healthcare settings. Explore
            product details and see how it supports everyday patient care.
          </Typography>
        </div>

        {/* 1 Large + 2 Stacked News Cards */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-7 w-full mt-2">
          {/* Left Column: Big Featured Card (n1) */}
          <div
            className="w-full lg:w-1/2 rounded-2xl overflow-hidden bg-white border border-gray-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row group"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="w-full sm:w-1/2 aspect-[4/3] sm:aspect-auto overflow-hidden relative bg-slate-100">
              <img
                src="/medical/proma-reha/n1.webp"
                alt="Turkmenistan Exhibition"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-center w-full sm:w-1/2">
              <div className="flex flex-col gap-3">
                <Typography
                  variant="h3"
                  color="dark"
                  className="font-primary !font-semibold text-lg sm:text-xl leading-snug group-hover:text-[var(--color-primary)] transition-colors"
                >
                  PROMA REHA Successfully Presented Its Products in Turkmenistan
                </Typography>

                <Typography
                  variant="p"
                  color="dark"
                  className="text-gray-600 font-secondary text-base leading-relaxed line-clamp-6"
                >
                  PROMA REHA successfully participated in the international exhibition Healthcare,
                  Education and Sport in the Era of the Renaissance of a New Era of a Powerful
                  State, held in Ashgabat from 10 to 12 October 2026.
                </Typography>
              </div>

              <div className="pt-4 flex justify-end">
                <Link
                  href="#news"
                  aria-label="Read more about Turkmenistan presentation"
                  className="w-9 h-9 sm:w-10 sm:h-10 min-[2500px]:w-16 min-[2500px]:h-16 min-[3500px]:w-24 min-[3500px]:h-24 min-[3800px]:w-26 min-[3800px]:h-26 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] flex items-center justify-center transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white shadow-sm group-hover:scale-105"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3500px]:w-12 min-[3500px]:h-12 min-[3800px]:w-14 min-[3800px]:h-14" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Horizontal Cards Stacked (n2 and n3) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Card 2 (n2) */}
            <div
              className="flex-1 rounded-2xl overflow-hidden bg-white border border-gray-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row group"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="w-full sm:w-[38%] aspect-video sm:aspect-auto overflow-hidden relative bg-slate-100">
                <img
                  src="/medical/proma-reha/n2.webp"
                  alt="PROMA REHA at WHX"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col justify-center w-full sm:w-[62%]">
                <Typography
                  variant="h4"
                  color="dark"
                  className="font-primary !font-semibold text-base sm:text-lg leading-snug group-hover:text-[var(--color-primary)] transition-colors"
                >
                  PROMA REHA at WHX 2026: Among Global Healthcare Leaders, Inspiring Meetings and
                  New Business Momentum
                </Typography>

                <div className="pt-3 flex justify-end">
                  <Link
                    href="#news"
                    aria-label="Read more about WHX 2026"
                    className="w-9 h-9 sm:w-10 sm:h-10 min-[2500px]:w-16 min-[2500px]:h-16 min-[3500px]:w-24 min-[3500px]:h-24 min-[3800px]:w-26 min-[3800px]:h-26 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] flex items-center justify-center transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white shadow-sm group-hover:scale-105"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3500px]:w-12 min-[3500px]:h-12 min-[3800px]:w-14 min-[3800px]:h-14" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 (n3) */}
            <div
              className="flex-1 rounded-2xl overflow-hidden bg-white border border-gray-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row group"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="w-full sm:w-[38%] aspect-video sm:aspect-auto overflow-hidden relative bg-slate-100">
                <img
                  src="/medical/proma-reha/n3.webp"
                  alt="Charles University Dissection Table Handover"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col justify-center w-full sm:w-[62%]">
                <Typography
                  variant="h4"
                  color="dark"
                  className="font-primary !font-semibold text-base sm:text-lg leading-snug group-hover:text-[var(--color-primary)] transition-colors"
                >
                  Handover of a New Dissection Table at the Institute of Anatomy, First Faculty of
                  Medicine, Charles University
                </Typography>

                <div className="pt-3 flex justify-end">
                  <Link
                    href="#news"
                    aria-label="Read more about Charles University handover"
                    className="w-9 h-9 sm:w-10 sm:h-10 min-[2500px]:w-16 min-[2500px]:h-16 min-[3500px]:w-24 min-[3500px]:h-24 min-[3800px]:w-26 min-[3800px]:h-26 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] flex items-center justify-center transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white shadow-sm group-hover:scale-105"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3500px]:w-12 min-[3500px]:h-12 min-[3800px]:w-14 min-[3800px]:h-14" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
