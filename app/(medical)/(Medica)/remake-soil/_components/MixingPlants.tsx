"use client";

import React, { useState, useEffect, useRef } from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PlantItem {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const plants: PlantItem[] = [
  {
    id: 1,
    image: "/medical/remake-soil/m1.png",
    title: "The New Compact System CM15plus Hybrid",
    description:
      "Ideal for small construction sites or for private construction projects with optimal mobility.",
    link: "#",
  },
  {
    id: 2,
    image: "/medical/remake-soil/m2.png",
    title: "CM30plus Hybrid",
    description:
      "The system is ideal for smaller construction sites without compromise in mixing quality.",
    link: "#",
  },
  {
    id: 3,
    image: "/medical/remake-soil/m3.png",
    title: "CM60plus Hybrid",
    description:
      "High-performance stationary mixing plant with advanced technology and high throughput.",
    link: "#",
  },
  {
    id: 4,
    image: "/medical/remake-soil/m4.png",
    title: "CM90plus Hybrid",
    description:
      "Heavy-duty mixing solution designed for high output and maximum industrial efficiency.",
    link: "#",
  },
];

const MixingPlants = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const slot1Items = [plants[0], plants[1], plants[2], plants[3], plants[0]];
  const slot2Items = [plants[1], plants[2], plants[3], plants[0], plants[1]];
  const slot3Items = [plants[2], plants[3], plants[0], plants[1], plants[2]];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTransitionEnd = () => {
    if (currentIndex >= plants.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    } else if (diff < -50 && currentIndex > 0) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
    touchStartX.current = null;
  };

  const activeBullet = currentIndex % plants.length;

  const renderCardSlot = (
    items: PlantItem[],
    widthClass: string,
    slotKey: string
  ) => {
    return (
      <div
        className={`relative ${widthClass} h-[340px] sm:h-[400px] md:h-[440px] lg:h-[470px] xl:h-[500px] 2xl:h-[520px] min-[2500px]:h-[700px] min-[3500px]:h-[900px] min-[3800px]:h-[980px] rounded-[24px] sm:rounded-[30px] overflow-hidden border border-white/30 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] bg-[#050505] shrink-0 group`}
      >

        <div
          className="flex h-full w-full"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning
              ? "transform 700ms cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
          }}
        >
          {items.map((item, idx) => (
            <div
              key={`${slotKey}-${idx}-${item.id}`}
              className="relative w-full h-full shrink-0 overflow-hidden"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5 sm:p-7 md:p-8 z-10">
                <Typography
                  variant="h4"
                  color="white"
                  className="font-primary !font-bold text-base sm:text-lg lg:text-xl min-[2500px]:text-3xl min-[3500px]:text-4xl min-[3800px]:text-5xl mb-2 leading-snug transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="p"
                  color="white"
                  className="text-gray-200 text-xs sm:text-sm min-[2500px]:text-xl min-[3500px]:text-2xl min-[3800px]:text-3xl line-clamp-3 mb-4 leading-relaxed transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                >
                  {item.description}
                </Typography>

                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 px-4 py-2 min-[2500px]:px-6 min-[2500px]:py-3 min-[3500px]:px-9 min-[3500px]:py-4.5 min-[3800px]:px-10 min-[3800px]:py-5 rounded-[4px] min-[2500px]:rounded-[8px] bg-[#155EEF] hover:bg-[#1048b8] text-white font-primary font-medium text-xs sm:text-sm min-[2500px]:text-lg min-[3500px]:text-2xl min-[3800px]:text-3xl w-fit transition-colors shadow-md"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3500px]:w-7 min-[3500px]:h-7 min-[3800px]:w-8 min-[3800px]:h-8" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="mixing-plants" className="w-full py-16 xl:py-24 bg-black overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="flex flex-col gap-3 w-full xl:max-w-[70%]">
            <Typography variant="h2" color="white" className="!font-bold tracking-tight">
              Our RMS Mixing Plants
            </Typography>
            <Typography
              variant="p"
              color="white"
              className="leading-relaxed text-gray-200"
            >
              Our systems, developed with Simotec A/S, enable precise soil recycling and mixing for flowable fill, soil mortar, concrete, HGT, and other mixtures.
            </Typography>
          </div>

          <div className="shrink-0">
            <Button
              text="Our RMS mixing plants"
              href="#mixing-plants"
              variant="primary"
              showIcon={true}
            />
          </div>
        </div>

        <div
          className="w-full mt-4 flex items-stretch justify-between gap-5 xl:gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {renderCardSlot(
            slot1Items,
            "w-full lg:w-[49%] 2xl:w-[49%]",
            "slot-1"
          )}

          {renderCardSlot(
            slot2Items,
            "hidden lg:flex lg:w-[24%] 2xl:w-[24%]",
            "slot-2"
          )}

          {renderCardSlot(
            slot3Items,
            "hidden lg:flex lg:w-[24%] 2xl:w-[24%]",
            "slot-3"
          )}
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-2.5 xl:gap-3 2xl:gap-3.5 min-[1920px]:gap-4 min-[2500px]:gap-5 min-[3500px]:gap-6 min-[3800px]:gap-7 mt-2 xl:mt-3 min-[1920px]:mt-4 min-[2500px]:mt-5 min-[3500px]:mt-7 min-[3800px]:mt-8">
          {plants.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                i === activeBullet
                  ? "w-11 sm:w-13 lg:w-14 xl:w-16 min-[1920px]:w-20 min-[2500px]:w-24 min-[3800px]:w-32 h-2.5 sm:h-2.5 lg:h-3 xl:h-3 min-[1920px]:h-3.5 min-[2500px]:h-4.5 min-[3800px]:h-6 rounded-full bg-[#155EEF]"
                  : "w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 xl:w-3 xl:h-3 min-[1920px]:w-3.5 min-[1920px]:h-3.5 min-[2500px]:w-4.5 min-[2500px]:h-4.5 min-[3800px]:w-6 min-[3800px]:h-6 rounded-full bg-[#D9D9D9] hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default MixingPlants;
