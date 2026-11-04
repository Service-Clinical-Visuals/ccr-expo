"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const newsItems = [
  {
    image: "/medical/tum-gmbh/news1.webp",
    title: "TUR Isokinetik CUP",
    description: "The Chemnitz Crashers start with the Isokinetik to succeed in the season 2019/20",
    bgClass: "bg-black",
    imgClass: "w-full h-full object-cover",
  },
  {
    image: "/medical/tum-gmbh/news2.webp",
    title: "TUR recently established cooperation ‘ProAnimal life’",
    description:
      "TUR is founding member of the recently established cooperation ‘ProAnimal life’ that internationally networks rehabilitation innovation for veterinary medicine.",
    bgClass: "bg-white",
    imgClass: "w-full h-full object-contain p-6 sm:p-10",
  },
];

const News = () => {
  return (
    <section id="news" className="w-full py-12 sm:py-16 lg:py-24 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Top Header */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-10"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 sm:gap-4 xl:max-w-[70%]">
            <h2 className="capitalize font-semibold text-inherit">
              <span className="text-[#2A2A2A] text-[length:inherit]">Latest </span>
              <span className="text-[var(--color-primary)] text-[length:inherit]">Medical Events</span>
            </h2>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Stay updated with the latest news from TUR and the medical industry. Explore our
              company updates, healthcare developments, and industry insights, and share your
              thoughts or questions about the stories that interest you.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button
              text="View All News"
              href="#news"
              variant="primary"
            />
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-black/20 my-8 sm:my-10 lg:my-12" />

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-[30px] overflow-hidden shadow-[0px_3px_8px_rgba(0,0,0,0.24)] aspect-[16/10.5] group cursor-pointer ${item.bgClass}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`${item.imgClass} transition-transform duration-500 group-hover:scale-105`}
              />

              {/* Hover Overlay with Figma content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#273272]/90 via-[#273272]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-10 text-white text-center">
                <Typography variant="h3" color="white" className="font-bold mb-2">
                  {item.title}
                </Typography>
                <Typography variant="p" color="white" className="text-sm sm:text-base text-white/90 leading-relaxed">
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

