"use client";

import React, { useState, useEffect, useRef } from "react";
import Typography from "./Typography";
import Button from "./Button";

const galleryImages = [
  { src: "/medical/airblend/g1.webp", alt: "Airblend manufacturing plant facility" },
  { src: "/medical/airblend/g2.webp", alt: "Cleanroom medical device assembly" },
  { src: "/medical/airblend/g3.webp", alt: "Quality control and warehouse distribution" },
  { src: "/medical/airblend/g4.webp", alt: "Advanced technology research laboratory" },
  { src: "/medical/airblend/g5.webp", alt: "Precision component testing" },
  { src: "/medical/airblend/g6.webp", alt: "Automated logistics packaging line" },
];

/**
 * CardImageScroller:
 * Displays the current image and smoothly slides in the new image with cinematic
 * parallax scaling, brightness shift, and wave-stagger timing.
 */
interface CardImageScrollerProps {
  image: { src: string; alt: string };
  delay?: number;
}

const CardImageScroller = ({ image, delay = 0 }: CardImageScrollerProps) => {
  const [currentImg, setCurrentImg] = useState(image);
  const [prevImg, setPrevImg] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (image.src !== currentImg.src) {
      setPrevImg(currentImg);
      setCurrentImg(image);

      const timer = setTimeout(() => {
        setPrevImg(null);
      }, 950 + delay);

      return () => clearTimeout(timer);
    }
  }, [image, currentImg, delay]);

  const animStyle = delay > 0 ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <div className="relative w-full h-full overflow-hidden select-none group">
      {prevImg && (
        <img
          src={prevImg.src}
          alt={prevImg.alt}
          style={animStyle}
          className="absolute inset-0 w-full h-full object-cover object-center airblend-img-slide-out"
        />
      )}
      <img
        src={currentImg.src}
        alt={currentImg.alt}
        style={animStyle}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 ${
          prevImg ? "airblend-img-slide-in" : ""
        }`}
      />
      {/* Subtle depth vignette overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-black/10 z-10" />
    </div>
  );
};

/**
 * Gallery Section ("A Closer Look At Airblend's Innovation & Excellence") - Airblend
 *
 * LAYOUT SPECIFICATION:
 * 1. Exactly 3 cards visible on desktop (1 | 2 | 3).
 * 2. Fixed Heights:
 *    - Card 1 (Left): 502px height (desktop)
 *    - Card 2 (Center): 575px height (desktop) - visibly taller than 1st and 3rd
 *    - Card 3 (Right): 502px height (desktop)
 *    - Vertically centered alignment (items-center).
 * 3. Smooth circulation:
 *    - The 3 card frames stay fixed in place.
 *    - The images circulate/scroll through them in continuous synchronized order.
 * 4. Interactive controls:
 *    - Auto-advance every 3.5s (pauses on hover).
 *    - Clickable pagination pill bullets.
 *    - Touch swipe gestures for mobile/tablet.
 */
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = galleryImages.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swipe left -> next image
        setCurrentIndex((prev) => (prev + 1) % total);
      } else {
        // Swipe right -> prev image
        setCurrentIndex((prev) => (prev - 1 + total) % total);
      }
    }
    touchStartX.current = null;
  };

  // 3 images displayed across the 3 cards
  const image1 = galleryImages[currentIndex];
  const image2 = galleryImages[(currentIndex + 1) % total];
  const image3 = galleryImages[(currentIndex + 2) % total];

  return (
    <section id="gallery" className="w-full py-16 xl:py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Section Header Row */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-black/20"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-full xl:max-w-[70%]">
            <Typography
              variant="h2"
              color="secondary"
              className="text-2xl sm:text-3xl lg:text-[30px] min-[2500px]:text-[48px] min-[3800px]:text-[64px] font-semibold text-[#2A2A2A]"
            >
              A Closer Look At Airblend's Innovation &amp; Excellence
            </Typography>
            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl leading-relaxed text-[#4A4A4A]"
            >
              Discover Airblend through our gallery, showcasing our innovative products, advanced technologies, manufacturing capabilities, and global presence across diverse healthcare and technology sectors.
            </Typography>
          </div>

          <div className="shrink-0 self-start md:self-center">
            <Button
              text="View Gallery"
              href="#gallery"
              variant="primary"
            />
          </div>
        </div>

        {/* 3 Fixed Cards with Synchronized Image Circulation */}
        <div
          className="w-full mt-8 sm:mt-12"
          data-aos="fade-up"
          data-aos-delay="100"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="airblend-gallery-grid">
            {/* Card 1: Left Card (Fixed 502px height on desktop) */}
            <div className="airblend-gallery-card-frame airblend-gallery-card-side">
              <CardImageScroller image={image1} delay={0} />
            </div>

            {/* Card 2: Center Card (Fixed 575px height on desktop - visibly taller) */}
            <div className="airblend-gallery-card-frame airblend-gallery-card-center hidden md:block">
              <CardImageScroller image={image2} delay={60} />
            </div>

            {/* Card 3: Right Card (Fixed 502px height on desktop) */}
            <div className="airblend-gallery-card-frame airblend-gallery-card-side hidden min-[1036px]:block">
              <CardImageScroller image={image3} delay={120} />
            </div>
          </div>

          {/* Pagination Bullets */}
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {galleryImages.map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`airblend-pill-bullet cursor-pointer transition-all duration-300 ${
                    isActive ? "swiper-pagination-bullet-active !w-16 !bg-[#7BC142]" : "!w-2.5 !bg-[#D9D9D9]"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
