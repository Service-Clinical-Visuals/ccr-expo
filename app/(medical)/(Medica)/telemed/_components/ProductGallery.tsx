"use client";

import React, { useState, useEffect } from "react";
import Typography from "./Typography";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "/medical/telemed/gp1.jpg",
    alt: "Telemed MicrUs Handheld Ultrasound Scanner with Laptop and Clinical Reference",
  },
  {
    id: 2,
    src: "/medical/telemed/gp2.jpg",
    alt: "Telemed Array of Multifrequency Diagnostic Ultrasound Probes and Transducers",
  },
  {
    id: 3,
    src: "/medical/telemed/gp3.jpg",
    alt: "Telemed Clinical Ultrasound Imaging Scanner System",
  },
  {
    id: 4,
    src: "/medical/telemed/gp4.jpg",
    alt: "Telemed Point-of-Care Portable Transducer Architecture",
  },
  {
    id: 5,
    src: "/medical/telemed/gp5.jpg",
    alt: "Telemed OEM Ultrasound Digital Beamformer Architecture",
  },
  {
    id: 6,
    src: "/medical/telemed/gp6.jpg",
    alt: "Telemed Advanced Telemedicine Diagnostic Scanner Integration",
  },
  {
    id: 7,
    src: "/medical/telemed/gp7.jpg",
    alt: "Telemed Compact Ultrasound Research & Diagnostic Unit",
  },
];

// 2 images per slide, remaining 1 image on the 4th slide centered
const SLIDE_GROUPS: number[][] = [
  [0, 1], // Slide 0: gp1, gp2
  [2, 3], // Slide 1: gp3, gp4
  [4, 5], // Slide 2: gp5, gp6
  [6],    // Slide 3: gp7 (horizontally centered)
];

export default function ProductGallery() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide rotation with hover pause
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDE_GROUPS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentItemIndices = SLIDE_GROUPS[activeSlide];

  return (
    <section
      id="gallery"
      className="w-full bg-white pt-14 sm:pt-20 xl:pt-24 pb-16 sm:pb-20 xl:pb-24 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="custom-container">
        {/* Section Header */}
        <div
          className="w-full xl:max-w-[70%] min-[3800px]:max-w-[75%] mx-auto text-center flex flex-col items-center min-[3800px]:gap-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Main Title */}
          <Typography
            variant="h2"
            weight="semibold"
            color="dark"
            className="font-['Exo_2'] tracking-tight capitalize"
          >
            Our Ultrasound{" "}
            <span className="text-[#0F3E7B]">Product Gallery</span>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="p"
            color="body"
            className="mt-3.5 sm:mt-4 min-[3800px]:mt-6 leading-relaxed text-center"
          >
            Explore our comprehensive range of ultrasound solutions through our
            product gallery, featuring Point-of-Care smart probes, OEM
            beamformers, and advanced imaging technologies developed for
            medical imaging, telemedicine, research, and system development.
          </Typography>
        </div>

        {/* Gallery Carousel Container */}
        <div
          className="relative w-full mt-9 sm:mt-12 xl:mt-14 min-[3800px]:mt-20"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="150"
        >
          {/* Active Cards Grid */}
          {currentItemIndices.length === 1 ? (
            /* Last slide with remaining 1 image centered horizontally */
            <div className="flex justify-center w-full transition-all duration-500 ease-in-out">
              <div className="w-full md:w-[calc(50%-16px)] max-w-[820px] min-[3800px]:max-w-[1600px]">
                <div className="relative aspect-[820/492] w-full overflow-hidden border border-black/20 shadow-[0px_3px_10px_rgba(0,0,0,0.12)] bg-[#FAFAFA] flex items-center justify-center group">
                  <img
                    src={GALLERY_ITEMS[currentItemIndices[0]].src}
                    alt={GALLERY_ITEMS[currentItemIndices[0]].alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>
          ) : (
            /* Normal 2-image slides */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 xl:gap-8 min-[3800px]:gap-16 w-full transition-all duration-500 ease-in-out">
              {currentItemIndices.map((itemIdx) => {
                const item = GALLERY_ITEMS[itemIdx];
                return (
                  <div
                    key={item.id}
                    className="relative aspect-[820/492] w-full overflow-hidden border border-black/20 shadow-[0px_3px_10px_rgba(0,0,0,0.12)] bg-[#FAFAFA] flex items-center justify-center group"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination Indicators (Pill Dots) */}
          <div className="flex items-center justify-center gap-3 min-[3800px]:gap-6 mt-8 sm:mt-10 min-[3800px]:mt-16">
            {SLIDE_GROUPS.map((_, index) => {
              const isActive = activeSlide === index;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to gallery slide ${index + 1}`}
                  className={`h-[9px] min-[3800px]:h-[16px] rounded-[9px] transition-all duration-300 focus:outline-none cursor-pointer ${
                    isActive
                      ? "w-[78px] min-[3800px]:w-[140px] bg-[#0F3E7B] shadow-sm"
                      : "w-[33px] min-[3800px]:w-[60px] bg-[#DADADA] hover:bg-[#c0c0c0]"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
