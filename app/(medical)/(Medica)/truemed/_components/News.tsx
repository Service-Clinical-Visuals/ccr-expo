"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    image: "/truemed/c1.png",
    date: "02/12/2024",
    title: "We are in Moscow!",
    excerpt: "We will be in Moscow from December 2nd to 6th. We welcome all participants to visit us.",
    link: "#",
  },
  {
    id: 2,
    image: "/truemed/c2.png",
    date: "30/10/2024",
    title: "We are in MEDICA 2024!",
    excerpt: "We are at MEDICA! Don't forget to visit us, thank you for your interest.",
    link: "#",
  },
  {
    id: 3,
    image: "/truemed/c3.png",
    date: "28/01/2019",
    title: "Arab Health 2019",
    excerpt: 'We, as Truemed Medikal, invite you to "ARAB HEALTH 2019" between the dates of 28-31 Jan. 2019',
    link: "#",
  },
];

const News = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 xl:gap-14">

        {/* Header Section */}
        <div className="flex flex-col gap-4 w-full items-center text-center max-w-[90%] xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h3" color="secondary" >
            ■ News
          </Typography>

          <Typography variant="h2" color="dark">
            Latest Updates & Global Presence
          </Typography>

          <Typography variant="p" color="muted" className="leading-relaxed mt-2">
            Stay updated with TRUEMED's latest activities, including international exhibitions, medical congress participation, and global industry events, reflecting our continuous growth and commitment to advancing orthopedic solutions worldwide.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8" data-aos="fade-up" data-aos-delay="100">
          {newsItems.map((item) => (
            <div key={item.id} className="flex flex-col h-full bg-white border border-gray-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">

              {/* Image Section */}
              <div className="w-full aspect-[496/400] overflow-hidden p-3 ">
                <img src={item.image} alt={item.title} className="w-full rounded-xl  h-full object-cover" />
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 p-6 min-[3800px]:p-8">
                <Typography variant="span" color="dark" weight="bold" className="mb-1">
                  {item.date}
                </Typography>

                <Typography variant="h3" color="dark" className="mb-3">
                  {item.title}
                </Typography>

                <Typography variant="p" color="muted" className="leading-relaxed">
                  {item.excerpt}
                </Typography>

                {/* Read More Link (pushed to bottom) */}
                <div className="mt-auto pt-6 flex justify-end">
                  <a href={item.link} className="inline-flex items-center gap-2 group text-[var(--color-primary)] hover:opacity-80 transition-opacity">
                    <Typography variant="span" color="primary" weight="semibold">
                      Read More
                    </Typography>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
