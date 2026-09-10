"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";

const News = () => {
  const newsItems = [
    {
      image: "/medical/deleo/n1.png",
      category: "News",
      title: "Comprehensive facial treatment has...",
      date: "14.07.2026",
      description: "Facial aging is rarely one-dimensional. A single patient often presents with loss of tone, textural irregularities, and dyschromia.",
      link: "#"
    },
    {
      image: "/medical/deleo/n2.png",
      category: "General",
      title: "Cristal Ultra: the cryolipolysis platform that ...",
      date: "29.07.2026",
      description: "the latest addition to the Deleo range: a 3rd generation cryolipolysis device combined with multipolar radiofrequency, all within a clinically validated",
      link: "#"
    },
    {
      image: "/medical/deleo/n3.png",
      category: "General",
      title: "Cryolipolysis vs. Liposuction",
      date: "24.07.2026",
      description: "Cryolipolysis vs. Liposuction: For years, liposuction was the gold standard for removing stubborn fat. But today, non-invasive cryolipolysis, particularly with advanced systems,",
      link: "#"
    }
  ];

  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6" data-aos="fade-up">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-5 bg-black"></div>
              <Typography variant="h4" color="dark" className="!font-bold">
                News :
              </Typography>
            </div>
            <Typography variant="h2" color="dark">
              LATEST INSIGHTS & NEWS
            </Typography>
          </div>
          <div>
            <Button text="View All" variant="primary" href="#news" showIcon={false} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full aspect-[4/3] p-3 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full rounded-lg object-cover hover:scale-101 transition-transform duration-300" />
              </div>
              <div className="flex flex-col p-6 gap-3 flex-1">
                <Typography variant="h5" color="dark" className="font-semibold text-sm ">
                  {item.category}
                </Typography>
                <Typography variant="p" color="dark" className="font-semibold text-lg leading-tight">
                  {item.title}
                </Typography>
                <Typography variant="span" color="primary" className="font-bold text-sm">
                  {item.date}
                </Typography>
                <Typography variant="p" color="muted" className="text-sm line-clamp-4 mt-2">
                  {item.description}
                </Typography>
                <div className="mt-auto pt-4">
                  <Link href={item.link} className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-hover)] text-sm font-medium transition-colors">
                    Read More
                  </Link>
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
