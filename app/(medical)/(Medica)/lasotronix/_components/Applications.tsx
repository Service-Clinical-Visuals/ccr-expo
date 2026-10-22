"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";

const Applications = () => {
  const applications = [
    {
      title: "Dentistry",
      image: "/medical/lasotronix/app1.webp",
    },
    {
      title: "Vascular Surgery",
      image: "/medical/lasotronix/app2.webp",
    },
    {
      title: "Proctology",
      image: "/medical/lasotronix/app3.webp",
    },
    {
      title: "Neurosurgery",
      image: "/medical/lasotronix/app4.webp",
    },
  ];

  return (
    <section id="applications" className="w-full py-16 xl:py-24 bg-[#272727] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 xl:gap-14">
        {/* Header Block */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-4 max-w-full md:max-w-[75%]">
            <div className="flex items-center gap-4">
              <Typography variant="h2" color="white" className="capitalize tracking-[0.8px]">
                Our Applications
              </Typography>
              <div className="w-[62px] h-[6px] bg-[var(--color-primary)] rounded-full shrink-0"></div>
            </div>

            <Typography variant="p" color="white" className="leading-relaxed font-normal">
              LASOTRONIX develops innovative laser technologies designed to support a broad
              spectrum of medical and dental applications. Combining advanced engineering with
              precision-focused solutions, our systems serve diverse specialties, including
              dentistry, phlebology, proctology, neurosurgery, and dermatology.
            </Typography>
          </div>

          {/* View Applications Action Button */}
          <div className="shrink-0 flex items-center">
            <a
              href="#products"
              className="w-16 h-16 sm:w-20 sm:h-20 min-[3800px]:w-32 min-[3800px]:h-32 rounded-full bg-white/40 hover:bg-[var(--color-primary)] backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-md group cursor-pointer"
              aria-label="View Applications"
            >
              <ArrowUpRight
                className="w-8 h-8 sm:w-10 sm:h-10 min-[3800px]:w-16 min-[3800px]:h-16 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                strokeWidth={2.5}
              />
            </a>
          </div>
        </div>

        {/* 4 Application Cards - Edge-to-edge image, hover gradient overlay + centered text label */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {applications.map((item, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-[20px] overflow-hidden border border-white/70 shadow-lg bg-[#181818] group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              {/* Card Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Dark Gradient Overlay + Centered Text Label matching Figma */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 sm:pb-8 px-4">
                <Typography
                  variant="h3"
                  color="white"
                  className="capitalize text-lg sm:text-xl font-bold tracking-[0.8px] text-center drop-shadow-md transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                >
                  {item.title}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
