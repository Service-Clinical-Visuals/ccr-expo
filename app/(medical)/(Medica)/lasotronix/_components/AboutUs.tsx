"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  const images = [
    { src: "/medical/lasotronix/a1.webp", alt: "Lasotronix Team at Conference" },
    { src: "/medical/lasotronix/a2.webp", alt: "Lasotronix Precision Laser Production" },
    { src: "/medical/lasotronix/a3.webp", alt: "Lasotronix Specialist Staff" },
  ];

  return (
    <section id="about" className="w-full py-16 xl:py-24 bg-[#272727] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 xl:gap-14">
        {/* Top Header Block */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-4 max-w-full lg:max-w-[70%]">
            <div className="flex items-center gap-4">
              <Typography variant="h2" color="white" className="capitalize tracking-[0.8px]">
                About Us
              </Typography>
              <div className="w-[62px] h-[6px] bg-[var(--color-primary)] rounded-full shrink-0"></div>
            </div>

            <Typography variant="p" color="white" className="leading-relaxed font-normal">
              We Are An Innovative Polish Company Specializing In The Design And Production Of
              Technologically Advanced Laser Devices For Medical And Dental Applications. Whatever
              Your Needs, LASOTRONIX Offers Reliable Laser Technology And Service.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button text="Learn More" href="#about" variant="primary" />
          </div>
        </div>

        {/* 3 Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {images.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-[20px] overflow-hidden border border-white/70 shadow-lg group bg-[#1c1c1c] md:last:col-span-2 md:last:w-[calc(50%-12px)] md:last:mx-auto lg:last:w-full lg:last:col-span-1"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
