"use client";

import React from "react";
import Typography from "./Typography";

interface CategoryCard {
  title: string;
  image: string;
  alt: string;
}

const categories: CategoryCard[] = [
  {
    title: "Anesthesia",
    image: "/medical/hum-gmbh/p1.png",
    alt: "Anesthesia Equipment",
  },
  {
    title: "Ventilation",
    image: "/medical/hum-gmbh/p2.png",
    alt: "Emergency Care",
  },
  {
    title: "Intubation",
    image: "/medical/hum-gmbh/p4.png",
    alt: "Airway Management Products",
  },
];

export default function ProductCategories() {
  return (
    <section id="product-categories" className="w-full py-16 sm:py-20 lg:py-28 min-[2500px]:py-36 min-[3800px]:py-48 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Title & Underline */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 min-[2500px]:mb-12" data-aos="fade-up">
          <Typography
            variant="h2"
            color="dark"
            className="font-['Exo_2'] font-bold"
          >
            Product categories
          </Typography>
          <div className="w-[120px] sm:w-[150px] min-[2500px]:w-[220px] min-[3800px]:w-[300px] h-[4px] sm:h-[5px] min-[2500px]:h-[8px] min-[3800px]:h-[10px] bg-[#A12624] mt-3 sm:mt-4" />
        </div>

        {/* Intro Paragraph */}
        <div className="w-full xl:max-w-[70%] max-w-[90%] mx-auto text-center mb-10 sm:mb-14 min-[2500px]:mb-20" data-aos="fade-up" data-aos-delay="100">
          <Typography variant="p" color="gray" className="leading-relaxed">
            Therapeutic treatment of sleep apnea syndrome (SAS) using CPAP technology is largely carried out by the patient at home and therefore requires simple and safe accessories where the effort required for use and maintenance, as well as the costs, remain within a reasonable range. AEROtube® CPAP tubing and tubing systems, along with practical accessories and AEROvent® CPAP filters, meet these requirements without compromising on quality, technology, or patient comfort.
          </Typography>
        </div>

        {/* Category Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative overflow-hidden bg-neutral-100 shadow-sm cursor-pointer aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-[1/1]"
            >
              {/* Product Image */}
              <img
                src={cat.image}
                alt={cat.alt}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Bottom Gradient Blue Design Banner (Appears on Hover) */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#005BAA] via-[#005BAA]/85 to-transparent pt-16 pb-5 px-5 flex items-end opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                <Typography
                  variant="h4"
                  color="white"
                  className="font-['Exo_2'] font-bold tracking-wide !text-white drop-shadow-sm"
                >
                  {cat.title}
                </Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
