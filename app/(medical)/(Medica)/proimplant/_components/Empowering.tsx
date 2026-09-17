"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";

const cards = [
  {
    image: "/medical/proimplant/c1.png",
    title: "Knee Prosthesis",
    description: "Hipknee offers advanced knee prosthesis systems designed to support reliable joint reconstruction and restore mobility.",
    link: "#"
  },
  {
    image: "/medical/proimplant/c2.png",
    title: "Hip Prosthesis",
    description: "Reliable hip prosthesis components designed for stability, mobility, safety, and long-term clinical performance.",
    link: "#"
  },
  {
    image: "/medical/proimplant/c3.png",
    title: "Surgical Instrument Set Manufacturing",
    description: "Precision-manufactured instrument sets designed to support efficient and reliable hip and knee prosthesis procedures.",
    link: "#"
  },
];

const Empowering = () => {
  return (
    <section id="empowering" className="w-full py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="custom-container flex flex-col gap-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-10" data-aos="fade-up">
          <div className="flex flex-col gap-4 xl:max-w-[70%]">
            <Typography variant="h2" color="dark">
              Advanced Solutions For Orthopaedic Care
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Explore Hipknee's range of knee and hip prosthesis systems, along with precision-manufactured surgical instrument sets, designed to support reliable procedures and improved patient mobility.
            </Typography>
          </div>
          <div className="shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button text="Discover Products" href="#products" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col w-full group shadow-md border border-gray-100 bg-white hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              {/* Image with padding */}
              <div className="w-full aspect-[484/314] overflow-hidden p-4  flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <Typography variant="h3" color="dark" className="font-semibold text-lg">
                  {card.title}
                </Typography>
                <Typography variant="p" color="muted" className="text-sm leading-relaxed flex-1">
                  {card.description}
                </Typography>
                <Link href={card.link} className="inline-block mt-4">
                  <Typography variant="span" color="primary" className="font-semibold underline hover:no-underline">
                    Review Products &gt;&gt;
                  </Typography>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Empowering;
