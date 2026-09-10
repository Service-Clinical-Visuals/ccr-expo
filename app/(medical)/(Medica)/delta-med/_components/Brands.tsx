"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";

const brandList = [
  { name: "Delta Med", src: "/medical/delta-med/g1.png" },
  { name: "PentaFerte", src: "/medical/delta-med/g2.png" },
  { name: "Adriamed", src: "/medical/delta-med/g3.png" },
  { name: "Securmed", src: "/medical/delta-med/g4.png" },
  { name: "D.B.M.", src: "/medical/delta-med/g5.png" },
  { name: "BEL", src: "/medical/delta-med/g6.png" },
  { name: "PHS Medical", src: "/medical/delta-med/g7.png" },
  { name: "Health Line", src: "/medical/delta-med/g8.png" },
];

const Brands = () => {
  return (
    <section
      id="brands"
      className="relative w-full py-16 md:py-20 lg:py-24 bg overflow-hidden text-white"
    >
      <div className="custom-container relative z-10 flex flex-col gap-10 md:gap-14">

        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center gap-3.5 w-full" data-aos="fade-up">
          <Typography
            variant="h2"
            color="white"
            className="font-semibold text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] tracking-tight text-white font-outfit"
          >
            Brands Of The Group
          </Typography>
          <Typography
            variant="p"
            color="none"
            className="text-white/85 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed max-w-4xl font-outfit"
          >
            Explore the diverse portfolio of brands within the Delta Med Group, each contributing specialised expertise, innovative technologies, and high-quality solutions to the healthcare industry. Together, these brands strengthen the Group&apos;s capabilities across different medical sectors while sharing a common commitment to quality, reliability, innovation, and customer-focused solutions.
          </Typography>
        </div>

        {/* Brands Grid (4x2) */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {brandList.map((brand, index) => (
            <div
              key={index}
              className="group relative rounded-md overflow-hidden  hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 "
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row: Informational Text + CTA Button */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2 sm:pt-4"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Typography
            variant="p"
            color="none"
            className="text-white/85 text-xs sm:text-[13.5px] lg:text-[14px] leading-relaxed max-w-2xl font-outfit"
          >
            From medical devices and healthcare products to specialised technologies and accessories, the Group&apos;s brands work together to meet the evolving needs of healthcare professionals, medical facilities, and end users worldwide.
          </Typography>

          <div className="shrink-0">
            <Button text="Explore Our Brands" href="#explore-brands" variant="white" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Brands;
