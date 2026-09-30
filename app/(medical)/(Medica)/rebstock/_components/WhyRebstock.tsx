"use client";

import React from "react";
import Typography from "./Typography";

export default function WhyRebstock() {
  const features = [
    {
      icon: "/medical/rebstock/icon1.png",
      alt: "Brain technology icon",
      title: "Many Years\nOf Experience",
    },
    {
      icon: "/medical/rebstock/icon2.png",
      alt: "Data science precision icon",
      title: "Highest\nPrecision",
    },
    {
      icon: "/medical/rebstock/icon3.png",
      alt: "Certified quality layers icon",
      title: "Certified\nQuality",
    },
  ];

  return (
    <section id="why" className="w-full pt-0 pb-16 sm:pb-20 lg:pb-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10 sm:gap-14">

        {/* Header Block */}
        <div
          className="flex flex-col items-center text-center gap-3 sm:gap-4 w-full xl:max-w-[70%] max-w-[90%] mx-auto"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center flex-wrap gap-3">
            <Typography
              variant="h2"
              color="dark"
              className="!font-semibold capitalize leading-snug"
            >
              Why Rebstock
            </Typography>
            <span className="inline-block w-10 sm:w-11 h-1 sm:h-1.5 bg-[#003F77] rounded-full shrink-0" />
          </div>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed text-[#4A4A4A]"
          >
            With decades of experience, uncompromising precision, and certified quality, Rebstock develops reliable surgical solutions that meet the highest standards of performance, safety, and craftsmanship for surgeons and patients worldwide.
          </Typography>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col min-[1031px]:flex-row justify-between items-stretch gap-8 min-[1031px]:gap-8 xl:gap-10 min-[2500px]:gap-16 min-[3800px]:gap-24 w-full">

          {/* Left Large Team Image */}
          <div
            className="w-full min-[1031px]:w-[68%] xl:w-[70%] 2xl:w-[71%] relative rounded-none sm:rounded-sm overflow-hidden shadow-[0px_4px_16px_rgba(0,0,0,0.12)] group aspect-[16/10] sm:aspect-[1916/821] min-[1031px]:aspect-auto min-[1031px]:min-h-[480px] min-[1920px]:min-h-[560px] min-[2500px]:min-h-[720px] min-[3800px]:min-h-[960px] shrink-0"
            data-aos="fade-right"
          >
            <img
              src="/medical/rebstock/why.png"
              alt="Rebstock Instruments Dedicated Team"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
          </div>

          {/* Features Column: Horizontal flex wrap on mobile/tablet up to 1030px, vertical sidebar for desktop */}
          <div
            className="w-full max-[1030px]:max-w-none min-[1031px]:mx-0 min-[1031px]:ml-auto min-[1031px]:w-[28%] xl:w-[26%] 2xl:w-[25%] flex max-[1030px]:flex-row max-[1030px]:flex-wrap max-[1030px]:justify-around min-[1031px]:flex-col min-[1031px]:justify-between gap-4 sm:gap-6 min-[1031px]:gap-8 xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20 h-full shrink-0"
            data-aos="fade-left"
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col max-[1030px]:items-center max-[1030px]:text-center max-[1030px]:w-[30%] min-[1031px]:flex-row min-[1031px]:items-center min-[1031px]:text-left gap-3 sm:gap-4 min-[1031px]:gap-5 xl:gap-6 min-[1920px]:gap-8 min-[2500px]:gap-10 min-[3800px]:gap-14 group min-[1031px]:justify-between"
              >
                {/* Blue Icon Card */}
                <div className="why-icon-box bg-[#003F77] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] rounded-none sm:rounded-sm flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 p-3 sm:p-2.5 min-[1031px]:p-2.5 min-[2500px]:p-3.5 min-[3800px]:p-5">
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="why-icon-img w-full h-full object-contain filter brightness-0 invert transition-transform duration-300"
                  />
                </div>

                {/* Text Content */}
                <Typography
                  variant="h3"
                  color="dark"
                  className="!font-semibold text-xs sm:text-sm min-[1031px]:text-[22px] xl:text-[24px] 2xl:text-[26px] min-[1920px]:text-[30px] min-[2500px]:text-[38px] min-[3800px]:text-[52px] text-[#2A2A2A] leading-tight whitespace-pre-line flex-1"
                >
                  {item.title}
                </Typography>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}