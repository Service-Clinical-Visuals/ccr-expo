"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import Button from "./Button";

const qualityItems = [
  {
    icon: "/medical/tum-gmbh/icon1.webp",
    title: "Physiotherapy and Rehabilitation",
    link: "#",
  },
  {
    icon: "/medical/tum-gmbh/icon2.webp",
    title: "Inhalation therapy",
    link: "#",
  },
  {
    icon: "/medical/tum-gmbh/icon3.webp",
    title: "Medical aesthetic",
    link: "#",
  },
  {
    icon: "/medical/tum-gmbh/icon4.webp",
    title: "Isokinetic therapy",
    link: "#",
  },
  {
    icon: "/medical/tum-gmbh/icon5.webp",
    title: "Software & hardware development",
    link: "#",
  },
  {
    icon: "/medical/tum-gmbh/icon6.webp",
    title: "User interface technology",
    link: "#",
  },
];

const Quality = () => {
  return (
    <section id="quality" className="w-full py-12 sm:py-16 lg:py-24 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Top Header */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-10"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 sm:gap-4 xl:max-w-[70%]">
            <Typography variant="h2" color="dark" className="capitalize !font-semibold">
              Quality, Reliability And Perfection
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Trends, customer needs and markets are constantly changing. To be successful we should
              take active part in the changes reshaping this marketplace, coming up with a steady
              stream of new products, ideas and achievements. We are a part of these changes.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button
              text="Explore Our Quality"
              href="#quality"
              variant="primary"
            />
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-black/20 my-8 sm:my-10 lg:my-12 min-[2500px]:my-16 min-[3800px]:my-24" />

        {/* 6 Cards Grid: matches exact Figma 'Subtract' notch cutout and proportions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 sm:gap-x-5 lg:gap-x-3.5 xl:gap-x-5 min-[2500px]:gap-x-8 min-[3800px]:gap-x-10 gap-y-16 sm:gap-y-16 md:gap-y-20 lg:gap-y-0 pt-6 sm:pt-8 min-[2500px]:pt-12 min-[3800px]:pt-16">
          {qualityItems.map((item, index) => (
            <div
              key={index}
              className="relative w-full max-w-[270px] sm:max-w-none mx-auto h-[252px] min-[2500px]:h-[378px] min-[3800px]:h-[504px] [filter:drop-shadow(0px_3px_8px_rgba(0,0,0,0.2))] transition-all duration-300 hover:-translate-y-1.5 hover:[filter:drop-shadow(0px_6px_14px_rgba(0,0,0,0.24))] group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Notched Card Body matching exact Figma 'Subtract' layer */}
              <div className="absolute top-[39px] min-[2500px]:top-[58px] min-[3800px]:top-[78px] inset-x-0 bottom-0 bg-white rounded-[20px] min-[3800px]:rounded-[36px] card-notch-mask" />

              {/* Overlapping circular badge matching Figma Ellipse 2 (91.8px) & Ellipse 3 (77.3px) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[92px] h-[92px] min-[2500px]:w-[138px] min-[2500px]:h-[138px] min-[3800px]:w-[184px] min-[3800px]:h-[184px] rounded-full bg-white shadow-[0px_3px_8px_rgba(0,0,0,0.22)] flex items-center justify-center z-10">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[84%] h-[84%] object-contain"
                />
              </div>

              {/* Card text content placed within the card body area */}
              <div className="absolute top-[39px] min-[2500px]:top-[58px] min-[3800px]:top-[78px] inset-x-0 bottom-0 flex flex-col items-center justify-between pt-[66px] min-[2500px]:pt-[96px] min-[3800px]:pt-[130px] pb-5 sm:pb-6 min-[2500px]:pb-9 min-[3800px]:pb-12 px-3 sm:px-4 text-center z-20">
                {/* Title */}
                <div className="flex-1 flex items-center justify-center">
                  <h3 className="font-medium text-[#2A2A2A] text-center text-[1rem] sm:text-[1.125rem] lg:text-[1.05rem] xl:text-[1.2rem] min-[2500px]:text-2xl min-[3800px]:text-3xl leading-[1.25]">
                    {item.title}
                  </h3>
                </div>

                {/* View More Link (matching Figma 20px semi-bold with underline) */}
                <div className="pt-1.5">
                  <Link
                    href={item.link}
                    className="inline-block text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-semibold transition-colors"
                  >
                    <span className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-2xl font-semibold underline underline-offset-4">
                      View More
                    </span>
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

export default Quality;
