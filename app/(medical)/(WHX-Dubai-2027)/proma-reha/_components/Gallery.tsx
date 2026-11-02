"use client";

import React from "react";
import Typography from "./Typography";

interface GalleryItem {
  id: string;
  image: string;
  location: string;
}

const galleryItems: GalleryItem[] = [
  { id: "1", image: "/medical/proma-reha/e1.webp", location: "Kupio" },
  { id: "2", image: "/medical/proma-reha/e2.webp", location: "Ghana" },
  { id: "3", image: "/medical/proma-reha/e3.webp", location: "Malta" },
  { id: "4", image: "/medical/proma-reha/e4.webp", location: "Moldova" },
  { id: "5", image: "/medical/proma-reha/e5.webp", location: "Poland" },
  { id: "6", image: "/medical/proma-reha/e6.webp", location: "Croatia" },
  { id: "7", image: "/medical/proma-reha/e7.webp", location: "Hungary" },
  { id: "8", image: "/medical/proma-reha/e8.webp", location: "Latvia" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-12">
        {/* Header Block - Centered */}
        <div
          className="flex flex-col items-center text-center gap-3.5 max-w-4xl xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 min-[2500px]:w-3.5 min-[2500px]:h-3.5 min-[3800px]:w-5 min-[3800px]:h-5 rounded-full bg-[var(--color-secondary)]"></span>
            <Typography
              variant="h4"
              color="secondary"
              className="uppercase tracking-wider !font-semibold text-base min-[2500px]:text-2xl min-[3800px]:text-3xl"
            >
              OUR PRODUCT IN ACTION
            </Typography>
          </div>

          <Typography
            variant="h2"
            color="dark"
            className="leading-tight !font-semibold text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-6xl"
          >
            Explore DECU PRO in Real Healthcare Environments
          </Typography>

          <Typography
            variant="p"
            color="dark"
            className="text-gray-700 leading-relaxed max-w-3xl xl:max-w-[70%] font-secondary mt-1"
          >
            Discover DECU PRO through our photo gallery, showcasing its thoughtful design,
            practical functionality and integration into modern healthcare settings. Explore
            product details and see how it supports everyday patient care.
          </Typography>
        </div>

        {/* 8 Items 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 w-full mt-2">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={(index % 4) * 100}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`DECU PRO in ${item.location}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Interactive Hover Overlay with Location Tag */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/80 via-[var(--color-secondary)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="px-5 py-2 rounded-full bg-[var(--color-secondary)] text-white font-primary font-semibold text-base shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 border border-white/20">
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
