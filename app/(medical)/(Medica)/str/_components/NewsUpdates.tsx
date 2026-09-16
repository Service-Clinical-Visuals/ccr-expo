"use client";

import React from "react";
import Typography from "./Typography";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function NewsUpdates() {
  const newsItems = [
    {
      title: "Platelet-Derived Exosomes vs. Extracellular Vesicles...",
      image: "/medical/str/news1.png",
      alt: "Platelet-Derived Exosomes vs. Extracellular Vesicles",
    },
    {
      title: "Cell Recovery in BMAC: Why Total Cell Yield Matters?",
      image: "/medical/str/news2.png",
      alt: "Cell Recovery in BMAC: Why Total Cell Yield Matters?",
    },
    {
      title: "Orthobiologics Manufacturer: PRP, BMAC, SVF &...",
      image: "/medical/str/news3.png",
      alt: "Orthobiologics Manufacturer: PRP, BMAC, SVF &...",
    },
  ];

  return (
    <section
      id="news"
      className="w-full py-16 lg:py-24 xl:py-28 bg-white overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center">
        {/* Header */}
        <div
          className="w-full text-center flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#F6821F]" />
            <Typography
              variant="h4"
              color="primary"
              className="uppercase tracking-wide font-semibold"
            >
              NEWS &amp; UPDATES
            </Typography>
          </div>

          <Typography
            variant="h2"
            color="dark"
            className="leading-tight"
          >
            Stay Connected With Our Latest Developments and Activities
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed w-full xl:max-w-[70%] mx-auto"
          >
            Explore the latest news, events, achievements, product developments,
            and industry activities from STR Biotechnologies. Stay informed about
            our journey, innovations, partnerships, and presence across the
            global medical technology landscape.
          </Typography>
        </div>

        {/* 3 News Cards — spans full custom container */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className="w-full bg-white border border-[#B8B8B8] rounded-[10px] p-[10px] flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full aspect-[496/300] rounded-[6px] overflow-hidden bg-[#EEEEEE] shrink-0">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-[6px]"
                />
              </div>

              {/* Title & Read More */}
              <div className="flex flex-col justify-between flex-grow pt-4 pb-2 px-2.5">
                <Typography
                  variant="h3"
                  color="muted"
                  className="!font-medium leading-snug tracking-[-0.015em] line-clamp-2"
                >
                  {item.title}
                </Typography>

                <div className="pt-2 sm:pt-3">
                  <Link
                    href="#news"
                    className="inline-flex items-center gap-2 text-[#F6821F] font-primary font-semibold underline underline-offset-4 hover:text-[#e07110] transition-colors group"
                  >
                    <Typography variant="span" color="primary" className="!font-semibold">
                      Read More
                    </Typography>
                    <Plus
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#F6821F] transition-transform duration-200 group-hover:rotate-90"
                      strokeWidth={2.5}
                    />
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
