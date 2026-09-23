"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

interface SpecialtyCard {
  title: string;
  image: string;
  alt: string;
}

const specialtyCards: SpecialtyCard[] = [
  {
    title: "About OEM",
    image: "/medical/hum-gmbh/custom1.png",
    alt: "About OEM specialty manufacturing",
  },
  {
    title: "Industrial",
    image: "/medical/hum-gmbh/custom2.png",
    alt: "Industrial textile and electronic solutions",
  },
  {
    title: "Tactical",
    image: "/medical/hum-gmbh/custom3.png",
    alt: "Tactical equipment and rescue solutions",
  },
];

export default function CustomSpecialtyBags() {
  return (
    <section id="custom-bags" className="w-full py-16 sm:py-24 lg:py-28 min-[2500px]:py-36 min-[3800px]:py-48 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Title & Underline */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 min-[2500px]:mb-12" data-aos="fade-up">
          <Typography
            variant="h2"
            color="dark"
            className="font-['Exo_2'] font-bold"
          >
            Custom-made specialty bags and textile solutions
          </Typography>
          <div className="w-[140px] sm:w-[180px] min-[2500px]:w-[260px] min-[3800px]:w-[340px] h-[4px] sm:h-[5px] min-[2500px]:h-[8px] min-[3800px]:h-[10px] bg-[#A12624] mt-3 sm:mt-4" />
        </div>

        {/* Intro Paragraph */}
        <div className="w-full xl:max-w-[70%] max-w-[90%] mx-auto text-center mb-12 sm:mb-16 min-[2500px]:mb-20" data-aos="fade-up" data-aos-delay="100">
          <Typography variant="p" color="gray" className="leading-relaxed">
            As an Original Equipment Manufacturer (OEM), we are your producer or &ldquo;OEM supplier&rdquo; and manufacture products that we do not market under our own name. We produce custom bags for other brands and develop textile products under your label.
          </Typography>
        </div>

        {/* Specialty Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {specialtyCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col overflow-hidden border border-gray-200 bg-white shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-col items-center text-center p-6 sm:p-8 min-[2500px]:p-12 space-y-4">
                <Typography
                  variant="h3"
                  color="dark"
                  className="font-['Exo_2'] font-bold text-[#212121]"
                >
                  {card.title}
                </Typography>

                <div className="pt-1">
                  <Button
                    text="More Information"
                    variant="primary"
                    showIcon={true}
                    href="#divisions"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
