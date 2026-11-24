/**
 * Events & Exhibitions Section (e1, e2)
 * Master Reference: Zinnanti Surgical & Inogen Standards
 * - Scales Calendar icons, diagonal arrows, badge, and cards across viewports up to 4K.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Badge from "./Badge";
import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";

const eventList = [
  {
    image: "/medical/speed-care/e1.webp",
    alt: "Combat Medical Care Conference 2026",
    date: "19th - 20th November 2026",
    title: "Combat Medical Care Conference",
    desc: "The Paris Special Operations Forces - Combat Medical Care Conference returns to the historic École du Val-de-Grâce, the French Military Medical Academy in the heart of Paris.",
    link: "#",
  },
  {
    image: "/medical/speed-care/e2.webp",
    alt: "MEDICA Trade Fair",
    date: "16th - 19th November 2026",
    title: "Speed Care Mineral GmbH",
    desc: "Speed Care Mineral has developed a production process that permanently and safely applies the hemostatic mineral halloysite to a non-woven cellulose matrix, ensuring that no minerals remain in the wound.",
    link: "#",
  },
];

export default function Events() {
  return (
    <section id="events" className="w-full py-16 xl:py-24 2k:py-36 4k:py-48 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4 2k:space-y-6 4k:space-y-8"
          data-aos="fade-up"
        >
          {/* Tag Badge */}
          <Badge text="EVENTS & EXHIBITIONS" />

          <Typography
            variant="h2"
            color="gray"
            className="text-xl sm:text-2xl lg:text-[1.6875rem] 2k:text-4xl 4k:text-6xl font-bold tracking-tight text-[#333333] w-full max-w-full xl:max-w-[70%] mx-auto"
          >
            Connecting Through Industry Events
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl leading-relaxed text-[#4B5563] max-w-4xl 2k:max-w-6xl 4k:max-w-7xl mx-auto"
          >
            Explore the events and exhibitions attended by Speed Care Mineral GmbH. From international medical trade fairs to specialized conferences, we connect with industry professionals, share our expertise, and exchange ideas to advance emergency medical care.
          </Typography>
        </div>

        {/* 2 Event Cards Grid */}
        <div className="w-full grid grid-cols-1 min-[1036px]:grid-cols-2 gap-6 sm:gap-8 2k:gap-12 4k:gap-16 mt-12 sm:mt-16 2k:mt-24 4k:mt-32">
          {eventList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[10px] 2k:rounded-2xl 4k:rounded-3xl border border-[#4B5563]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Event Image Box (Left Half) */}
              <div className="w-full sm:w-[50%] min-h-[220px] sm:min-h-[280px] 2k:min-h-[400px] 4k:min-h-[520px] bg-white border-b sm:border-b-0 sm:border-r border-[#4B5563]/20 p-5 2k:p-8 4k:p-12 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="max-w-full max-h-[240px] 2k:max-h-[360px] 4k:max-h-[480px] w-auto h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Event Details (Right Half) */}
              <div className="w-full sm:w-[50%] p-6 sm:p-7 2k:p-10 4k:p-14 flex flex-col justify-between gap-4 2k:gap-7 4k:gap-10">
                <div className="space-y-3 2k:space-y-5 4k:space-y-7">
                  {/* Date with Calendar Icon (Scales from 16px to 44px) */}
                  <div className="flex items-center gap-2 2k:gap-3.5 4k:gap-5 text-[#E62730] font-heading font-bold text-sm sm:text-base 2k:text-2xl 4k:text-3xl">
                    <Calendar className="w-4 h-4 2k:w-7 2k:h-7 4k:w-11 4k:h-11 shrink-0 text-[#E62730]" />
                    <span>{item.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-base sm:text-lg 2k:text-2xl 4k:text-4xl text-[#333333] leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm sm:text-base lg:text-[1.0625rem] 2k:text-2xl 4k:text-3xl text-[#4B5563] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Read More Link with Scaled Diagonal Arrow */}
                <div className="pt-2 2k:pt-4 4k:pt-6 self-end">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 2k:gap-3 4k:gap-4 text-[#E62730] hover:text-[#c91f27] font-heading font-bold text-xs sm:text-sm 2k:text-xl 4k:text-2xl uppercase tracking-wider transition-colors group/link cursor-pointer"
                  >
                    <span>READ MORE</span>
                    <ArrowUpRight className="w-4 h-4 2k:w-7 2k:h-7 4k:w-11 4k:h-11 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
