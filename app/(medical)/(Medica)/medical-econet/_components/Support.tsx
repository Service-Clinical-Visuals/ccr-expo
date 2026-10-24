"use client";

import React from "react";
import Typography from "./Typography";

const images = [
  { src: "/medical/medical-econet/support1.webp", alt: "Online customer support" },
  { src: "/medical/medical-econet/support2.webp", alt: "Secure data and cloud services" },
  { src: "/medical/medical-econet/support3.webp", alt: "Device maintenance and repair" },
];

export default function Support() {
  return (
    <section id="support" className="w-full py-12 sm:py-16 lg:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center gap-3 2xl:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 mb-8 sm:mb-10 2xl:mb-12 min-[2500px]:mb-16 min-[3800px]:mb-24"
          data-aos="fade-up"
        >
          <Typography variant="h1" color="dark">
            Technical Support
          </Typography>
          <Typography variant="p" color="muted" className="max-w-[860px] 2xl:max-w-[1040px] min-[2500px]:max-w-[1450px] min-[3800px]:max-w-[2000px]">
            medical ECONET GmbH offers comprehensive, all-in-one customer service. Our experienced service
            department is here to support you with any questions regarding our medical devices – quickly,
            reliably, and with expert knowledge. Whether it&apos;s technical assistance, maintenance, or general
            inquiries, we&apos;re personally committed to helping you.
          </Typography>
        </div>

        {/* Image cards: rounded top-left and bottom-right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 2xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`w-full aspect-[533/352] overflow-hidden border border-[#BDBDBD] rounded-tl-[16px] rounded-br-[16px] sm:rounded-tl-[20px] sm:rounded-br-[20px] min-[2500px]:rounded-tl-[30px] min-[2500px]:rounded-br-[30px] min-[3800px]:rounded-tl-[42px] min-[3800px]:rounded-br-[42px] group ${
                index === 2 ? "sm:col-span-2 lg:col-span-1 sm:max-lg:w-[calc(50%-0.75rem)] sm:max-lg:mx-auto" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
