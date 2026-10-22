"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Typography from "./Typography";

const news = [
  { title: "Open House 2026", image: "/medical/medical-econet/n1.png", href: "#media" },
  { title: "Donation For Cameroon", image: "/medical/medical-econet/n2.png", href: "#media" },
];

export default function News() {
  return (
    <section id="media" className="w-full py-12 sm:py-16 lg:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center gap-3 2xl:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 mb-8 sm:mb-10 2xl:mb-12 min-[2500px]:mb-16 min-[3800px]:mb-24"
          data-aos="fade-up"
        >
          <Typography variant="h1" color="dark">
            News &amp; Events
          </Typography>
          <Typography variant="p" color="muted" className="max-w-[880px] 2xl:max-w-[1060px] min-[2500px]:max-w-[1480px] min-[3800px]:max-w-[2050px]">
            Stay informed about the latest updates, upcoming exhibitions, company events, and initiatives from
            medical ECONET GmbH. Discover our latest developments, industry participation, and ongoing commitment
            to advancing healthcare through innovative medical solutions while building stronger global
            partnerships and improving patient care worldwide.
          </Typography>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 2xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16">
          {news.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image: rounded top-left and bottom-right */}
              <div className="w-full aspect-[820/515] overflow-hidden border border-[#BDBDBD] rounded-tl-[16px] rounded-br-[16px] sm:rounded-tl-[20px] sm:rounded-br-[20px] min-[2500px]:rounded-tl-[30px] min-[2500px]:rounded-br-[30px] min-[3800px]:rounded-tl-[42px] min-[3800px]:rounded-br-[42px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Title + arrow */}
              <div className="flex items-center justify-between gap-4 mt-4 sm:mt-5 2xl:mt-6 min-[2500px]:mt-9 min-[3800px]:mt-12">
                <Typography variant="h2" color="dark" className="group-hover:text-primary transition-colors">
                  {item.title}
                </Typography>
                <span className="flex items-center justify-center shrink-0 w-9 h-9 sm:w-10 sm:h-10 2xl:w-12 2xl:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-primary text-white group-hover:bg-primary-hover transition-colors">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={2} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
