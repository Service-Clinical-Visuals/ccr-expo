"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface StoryCard {
  id: string;
  image: string;
  alt: string;
  href: string;
}

const SUCCESS_STORIES: StoryCard[] = [
  {
    id: "story-1",
    image: "/medical/ctn/r1.png",
    alt: "Luxury wellness resort and spa recovery facility",
    href: "#resort-recovery",
  },
  {
    id: "story-2",
    image: "/medical/ctn/r2.png",
    alt: "European medical clinic offering CTN cryotherapy",
    href: "#clinic-partners",
  },
  {
    id: "story-3",
    image: "/medical/ctn/r3.png",
    alt: "Elite athlete UFC champion recovery celebration",
    href: "#athlete-recovery",
  },
];

export default function RealResults() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="custom-container px-2 md:px-10">

        {/* Top Header Row */}
        <div
          className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >

          {/* Left: Heading & Description */}
          <div className="max-w-5xl">
            <h2 className="section-title font-semibold text-slate-900 tracking-tight">
              Real Results &amp; Success Stories
            </h2>

            <p className="section-text text-slate-600 mt-3 sm:mt-4 leading-relaxed">
              Discover how CTN recovery technologies are integrated into the routines of
              elite athletes and professionals. Explore real-world experiences and see how
              advanced recovery solutions support faster recovery, reduced fatigue, improved
              readiness, and peak performance.
            </p>
          </div>

          {/* Right: View All CTA Button */}
          <div className="flex items-center flex-shrink-0">
            <Button href="#success-stories" variant="primary">
              View All
            </Button>
          </div>

        </div>

        {/* Subtle Horizontal Divider */}
        <div className="w-full h-px bg-slate-200/90 mt-6 sm:mt-8 mb-8 sm:mb-12" />

        {/* Cards Grid: 3 Visual Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {SUCCESS_STORIES.map((story, index) => (
            <Link
              key={story.id}
              href={story.href}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={(index + 1) * 100}
              className={`group relative rounded-4xl overflow-hidden transition-all duration-300 block w-full ${
                index === 2
                  ? "md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto xl:col-span-1 xl:w-full xl:mx-0"
                  : ""
              }`}
            >
              <div className="relative w-full h-[260px] sm:h-[300px] md:h-[330px] xl:h-[350px]">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  className="object-cover rounded-4xl transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
