"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Button from "./Button";

interface EventItem {
  id: number;
  title: string;
  date: string;
  image: string;
  href?: string;
}

const EVENTS_LIST: EventItem[] = [
  {
    id: 1,
    title: "Africa Health ExCon2023...",
    date: "11 - 14 November 2024",
    image: "/medical/euromed/e1.png",
  },
  {
    id: 2,
    title: "Florida International Medical Expo...",
    date: "October 16, 2022",
    image: "/medical/euromed/e2.png",
  },
  {
    id: 3,
    title: "EGY Medica 2023 5/18/2023...",
    date: "September 14, 2022",
    image: "/medical/euromed/e3.png",
  },
  {
    id: 4,
    title: "Negative Statin Stories Add To...",
    date: "22 Jul",
    image: "/medical/euromed/e4.png",
  },
  {
    id: 5,
    title: "Study Finds Link Between Very...",
    date: "22 Jul",
    image: "/medical/euromed/e5.png",
  },
];

export default function LatestMedicalEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive items visible: 1 on mobile, 2 on tablet, 3 on desktop
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1280) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, EVENTS_LIST.length - visibleCount);
  const totalPages = Math.ceil(EVENTS_LIST.length / visibleCount);

  // Auto-slide effect every 4 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered || maxIndex <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, maxIndex]);

  const currentPage = Math.min(
    totalPages - 1,
    Math.floor(currentIndex / Math.max(1, visibleCount))
  );

  return (
    <section className="w-full bg-[#f5f5f5] py-14 sm:py-20 md:py-24">
      <div className="custom-container px-4 sm:px-6 md:px-8 xl:px-12">
        {/* Top Header Row with Title, Description, and CTA Button */}
        <div
          className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Left: Heading & Description */}
          <div className="max-w-5xl">
            <h2 className="section-title font-semibold tracking-tight font-outfit">
              Latest <span className="text-[#d40708]">Medical Events</span>
            </h2>
            <p className="section-text mt-2 sm:mt-3 leading-relaxed font-outfit">
              Stay updated with the latest news from Euromed and the medical industry.
              Explore our company updates, healthcare developments, and industry insights,
              and share your thoughts or questions about the stories that interest you.
            </p>
          </div>

          {/* Right: View All News CTA Button */}
          <div className="flex-shrink-0">
            <Button href="#news" variant="primary" rounded="sm">
              View All News
            </Button>
          </div>
        </div>

        {/* Subtle Horizontal Divider Line */}
        <div className="w-full h-px bg-slate-200 my-6 sm:my-8" />

        {/* Event Cards Carousel Container */}
        <div
          className="relative px-1 sm:px-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Viewport */}
          <div className="overflow-hidden py-4 -my-4" ref={sliderRef}>
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {EVENTS_LIST.map((event) => (
                <div
                  key={event.id}
                  className="flex-shrink-0 px-2 sm:px-3.5"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  {/* Event Card matching Screenshot */}
                  <div className="bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden group">
                    {/* Event Image Box */}
                    <div className="relative w-full aspect-[16/11] bg-slate-50 overflow-hidden flex items-center justify-center p-3 border-b border-slate-100">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Event Content Details */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
                      <div>
                        {/* Event Title */}
                        <h3 className="card-title font-semibold text-slate-900 font-outfit tracking-tight line-clamp-1">
                          {event.title}
                        </h3>

                        {/* Event Date with Calendar Icon */}
                        <div className="flex items-center gap-2 mt-2.5 text-slate-500">
                          <Calendar className="w-4 h-4 text-[#d40708] flex-shrink-0" />
                          <span className="section-text text-slate-500 font-outfit">
                            {event.date}
                          </span>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <div className="pt-4 mt-4 border-t border-slate-100">
                        <Link
                          href={event.href || "#"}
                          className="footer-link font-semibold text-[#d40708] hover:text-[#b00506] inline-flex items-center gap-1 font-outfit group/link"
                        >
                          <span className="hover:underline underline-offset-2">
                            Read More &gt;
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Indicator Bars */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
            {Array.from({ length: totalPages }).map((_, pageIdx) => {
              const isActive = pageIdx === currentPage;
              return (
                <button
                  key={pageIdx}
                  type="button"
                  onClick={() =>
                    setCurrentIndex(Math.min(maxIndex, pageIdx * visibleCount))
                  }
                  aria-label={`Go to slide page ${pageIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${isActive
                    ? "w-8 sm:w-10 bg-[#d40708]"
                    : "w-4 sm:w-5 bg-slate-300 hover:bg-slate-400"
                    }`}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
