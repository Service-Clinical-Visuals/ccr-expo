"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  image: string;
  title: string;
  href: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    image: "/medical/ctn/b1.png",
    title: "Accessibility in Sports: Recovery Technology For Every Athlete",
    href: "#blog-accessibility-in-sports",
  },
  {
    id: "blog-2",
    image: "/medical/ctn/b2.png",
    title: "CTN Powers Cryotherapy at Policlinic Torreblanca",
    href: "#blog-policlinic-torreblanca",
  },
  {
    id: "blog-3",
    image: "/medical/ctn/b3.png",
    title:
      "Prepare Your Wellness Business for a Profitable Summer Season with CTN tech",
    href: "#blog-profitable-summer-season",
  },
  {
    id: "blog-4",
    image: "/medical/ctn/b4.png",
    title: "How to Refresh Your Wellness Offering with CTN Devices",
    href: "#blog-refresh-wellness-offering",
  },
  {
    id: "blog-5",
    image: "/medical/ctn/b5.png",
    title:
      "5 Reasons Top Athletes Use Mild Hyperbaric Oxygen Therapy for Peak Performance",
    href: "#blog-athletes-hyperbaric-oxygen",
  },
  {
    id: "blog-6",
    image: "/medical/ctn/b6.png",
    title:
      "Beyond Cryotherapy: Combining Recovery Technologies for Maximum Results",
    href: "#blog-beyond-cryotherapy",
  },
  {
    id: "blog-7",
    image: "/medical/ctn/b7.png",
    title: "Why CTN is Your Partner in Recovery & Wellness for 2025",
    href: "#blog-partner-in-recovery-2025",
  },
];

export default function LatestBlogs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Responsive visible count: 1 on mobile (<640px), 2 on tablet & desktop (>=640px)
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else {
        setVisibleCount(2);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, BLOG_POSTS.length - visibleCount);

  // Keep currentIndex within bounds when resizing
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Auto-slide effect every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section className="w-full bg-[#f7f7f7] py-16 md:py-24">
      <div className="custom-container px-2 md:px-10">
        {/* Centered Section Header */}
        <div
          className="flex flex-col items-center text-center max-w-7xl mx-auto mb-10 sm:mb-14"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="section-title font-semibold tracking-tight">
            <span className="text-slate-900">Our </span>
            <span className="text-[#2b7ab7]">Latest Blogs</span>
          </h2>

          <p className="section-text text-slate-600 mt-4 sm:mt-5 max-w-6xl leading-relaxed">
            Explore the latest from CTN™ through expert insights, innovative
            recovery technologies, wellness trends, athlete performance,
            customer stories, and industry developments. Discover how advanced
            recovery solutions help athletes, wellness professionals, clinics,
            and individuals optimise performance, support recovery, and enhance
            well-being. From cutting-edge technology and practical recovery
            strategies to inspiring partnerships, our blog keeps you informed
            about the evolving world of recovery and wellness.
          </p>
        </div>

        {/* Products / Blog Slider Container */}
        <div
          className="relative w-full overflow-hidden select-none py-2"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="150"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}>
          {/* Animated Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out -mx-3 sm:-mx-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}>
            {BLOG_POSTS.map((blog) => (
              <div
                key={blog.id}
                className="flex-shrink-0 px-3 sm:px-4"
                style={{
                  width: `${100 / visibleCount}%`,
                }}>
                <Link
                  href={blog.href}
                  className="group relative block w-full rounded-2xl sm:rounded-3xl overflow-hidden  transition-all duration-300 aspect-[16/11] ">
                  {/* Background Image */}
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    priority={blog.id === "blog-1"}
                  />

                  {/* Dark Overlay with Content on Hover */}
                  <div className="absolute inset-0 bg-[#000000]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-7 md:p-8 z-10">
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      {/* Blog Title */}
                      <h3 className="card-title font-semibold text-white tracking-normal leading-snug line-clamp-3 mb-3 drop-shadow-sm">
                        {blog.title}
                      </h3>

                      {/* Read More Link */}
                      <div className="flex items-center">
                        <span className="btn-text text-white underline underline-offset-4 decoration-white/70 hover:decoration-white transition-all font-medium">
                          Read More &gt;&gt;
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div
          className="flex items-center justify-center gap-2 mt-8 sm:mt-12"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="250"
        >
          {Array.from({ length: maxIndex + 1 }).map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to blog slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full h-2 cursor-pointer ${
                  isActive
                    ? "w-8 sm:w-10 bg-[#2b7ab7]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
