"use client";

import React from "react";
import Typography from "./Typography";

const images = [
  { src: "/tht/section31.webp", alt: "Surgeons performing a procedure" },
  { src: "/tht/section32.webp", alt: "Scanning packaged medical devices" },
];

const Committed = () => {
  return (
    <section id="quality" className="w-full bg-white overflow-hidden py-16 lg:py-20 min-[2500px]:py-32 min-[3800px]:py-44">
      <div className="custom-container flex flex-col gap-8 lg:gap-10 min-[2500px]:gap-16 min-[3800px]:gap-20">
        {/* Heading + Text */}
        <div
          className="flex flex-col gap-3 min-[2500px]:gap-5 min-[3800px]:gap-7 items-center text-center w-full lg:max-w-[80%] xl:max-w-[75%] mx-auto"
          data-aos="fade-up"
        >
          <Typography variant="h1" color="dark">
            Committed To Quality, Safety &amp; Compliance
          </Typography>

          <Typography variant="p" color="muted" className="leading-relaxed">
            THT Bio-Science maintains a strong commitment to quality, safety, and regulatory compliance across the design, development, manufacture, and distribution of its medical devices. The company&apos;s quality management system is certified according to ISO 13485:2016, covering sterile implants and non-sterile instruments for digestive, urological, gynaecological, and orthopaedic surgery.
          </Typography>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="relative w-full aspect-[820/519] overflow-hidden rounded-xl md:rounded-2xl min-[2500px]:rounded-3xl min-[3800px]:rounded-[40px] bg-secondary"
              data-aos="zoom-in"
              data-aos-delay={150 + i * 100}
            >
              <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committed;
