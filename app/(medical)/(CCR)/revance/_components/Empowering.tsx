"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
  { image: "/revance/i1.png", title: "Aesthetics", link: "#" },
  { image: "/revance/i2.png", title: "Consumer skincare", link: "#" },
  { image: "/revance/i3.png", title: "Therapeutics", link: "#" },
];

const Empowering = () => {
  return (
    <section id="empowering" className="w-full py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-200 pb-10" data-aos="fade-up">
          <div className="flex flex-col gap-4 max-w-[60%]">
            <div className="flex items-center gap-4">
              <Typography variant="h2" color="primary">
                Empowering Individuals Across Generations
              </Typography>
              <div className="w-10 h-1 bg-primary hidden md:block"></div>
            </div>
            <Typography variant="p" color="dark" className="leading-relaxed text-sm">
              Our Diverse Portfolio Is Designed To Meet The Unique Needs And Goals Of Individuals Worldwide. We Offer Thoughtfully Developed Solutions That Combine Quality, Innovation, And Versatility.
            </Typography>
          </div>
          <div className="shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button text="Read More" href="#portfolio" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* 3-Column Image Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full aspect-[533/682] overflow-hidden group shadow-md bg-gray-100"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Hover Button (Top Right) */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0 z-10">
                <Link href={card.link} className="flex items-center gap-2 bg-[#111111] text-white px-5 py-2 hover:bg-gray-800 transition-colors">
                  <Typography variant="span" color="white" className="text-sm font-medium">
                    {card.title}
                  </Typography>
                  <ArrowRight className="w-4 h-4" />
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
