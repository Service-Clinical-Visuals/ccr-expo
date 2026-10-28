"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import Button from "./Button";

const news = [
  { title: "DeepSight Technology Appoints Scott Huennekens to Board of Directors", image: "i1.webp" },
  { title: "Dr. Alyssa Abo, MD Presentation at LSI 2026", image: "i2.webp" },
  { title: "DeepSight™ Technology Unveils its Comprehensive NeedleVue™ Platform at SIR 2026", image: "i3.webp" },
];

export default function News() {
  return (
    <section id="news" className="w-full bg-white py-12 sm:py-16 lg:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 overflow-hidden">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8 2xl:gap-8 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Heading + intro */}
        <div className="lg:col-span-4 xl:col-span-3 flex flex-col items-start" data-aos="fade-right">
          <div className="flex items-center gap-2 min-[2500px]:gap-3 min-[3800px]:gap-4 mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 min-[3800px]:w-3 min-[3800px]:h-3 rounded-full bg-secondary" />
            <Typography variant="h6" color="secondary" className="uppercase">
              Latest News &amp; Insights
            </Typography>
          </div>
          <Typography variant="h2" color="primary" className="mb-5 sm:mb-6 2xl:mb-8 min-[2500px]:mb-11 min-[3800px]:mb-14">
            What&apos;s New at DeepSight
          </Typography>
          <Typography variant="p" color="primary">
            Stay updated with DeepSight Technology&apos;s latest innovations, company news, and industry events shaping
            the future of ultrasound imaging and image-guided procedures.
          </Typography>
          <div className="mt-7 2xl:mt-10 min-[2500px]:mt-14 min-[3800px]:mt-20">
            <Button text="View All" variant="primary" href="#news" />
          </div>
        </div>

        {/* News cards */}
        <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 2xl:gap-8 min-[2500px]:gap-11 min-[3800px]:gap-14">
          {news.map((item, index) => (
            <Link
              key={item.title}
              href="#news"
              className={`group flex flex-col bg-white rounded-[10px] min-[2500px]:rounded-[15px] min-[3800px]:rounded-[20px] border border-[#EEEEEE] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] hover:shadow-[0px_6px_18px_rgba(0,0,0,0.16)] transition-shadow duration-300 p-2.5 2xl:p-2.5 min-[2500px]:p-4 min-[3800px]:p-5 h-full xl:min-h-[356px] 2xl:min-h-[356px] min-[2500px]:min-h-[534px] min-[3800px]:min-h-[712px] ${
                index === 2 ? "sm:col-span-2 xl:col-span-1 sm:max-xl:w-[calc(50%-0.75rem)] sm:max-xl:mx-auto" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full aspect-[364/167] overflow-hidden rounded-[6px] min-[2500px]:rounded-[9px] min-[3800px]:rounded-[12px] border border-[#EEEEEE]">
                <img
                  src={`/(WHX-Dubai-2027)/deepsight/${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>

              <div className="flex-1 flex flex-col px-2 2xl:px-2 min-[2500px]:px-3 min-[3800px]:px-4 pt-5 2xl:pt-6 min-[2500px]:pt-9 min-[3800px]:pt-12 pb-1">
                <Typography variant="h4" color="primary" className="text-center">
                  {item.title}
                </Typography>
                <div className="mt-auto pt-5 2xl:pt-6 min-[2500px]:pt-8 min-[3800px]:pt-12 self-end">
                  <Typography variant="p" color="secondary" className="underline underline-offset-4 group-hover:opacity-80 transition-opacity">
                    Read More
                  </Typography>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
