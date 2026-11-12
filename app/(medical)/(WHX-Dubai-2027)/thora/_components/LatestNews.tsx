"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

const NEWS = [
  {
    title: "Meet Thora Tech GmbH at World Health Expo 2026 in Dubai",
    image: "/medical/thora/new1.webp",
    href: "#",
  },
  {
    title: "Thora Tech wishes you happy holidays.",
    image: "/medical/thora/new2.webp",
    href: "#",
  },
  {
    title: "Thora Tech has once again been certified according to ISO 13485!",
    image: "/medical/thora/new3.webp",
    href: "#",
  },
];

export default function LatestNews() {
  return (
    <section id="news" className="w-full bg-white py-16 sm:py-20 xl:py-[4.2vw]">
      <div className="custom-container">
        <div className="text-center max-w-[1030px] min-[1921px]:max-w-[55%] mx-auto mb-10 xl:mb-12" data-aos="fade-up">
          <Eyebrow className="mb-5">Latest News &amp; Updates</Eyebrow>
          <h2 className="section-title font-plex font-semibold text-[var(--heading)] mb-5 xl:mb-8">
            Discover What&apos;s New at Thora Tech
          </h2>
          <p className="section-text font-inter text-[var(--body)]">
            Stay informed about Thora Tech&apos;s latest innovations, company milestones, medical technology
            developments and industry events. Explore our updates and discover what drives our continuous progress in
            healthcare innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-[1.9vw] mb-10 xl:mb-9">
          {NEWS.map((n, i) => (
            <article
              key={n.title}
              className={`group flex flex-col rounded-[8px] border border-[var(--border)] bg-white p-[4%] w-full max-w-[520px] mx-auto lg:max-w-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 ${
                i === 2 ? "sm:col-span-2 sm:max-w-[calc(50%-0.75rem)] lg:col-span-1 lg:max-w-none" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-full aspect-[476/346] rounded-[8px] overflow-hidden mb-5 xl:mb-7">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="news-title font-inter font-medium text-[var(--heading)] flex-1 flex items-center min-h-[3em] mb-6 xl:mb-8">
                {n.title}
              </h3>
              <Link
                href={n.href}
                className="btn-text self-start inline-flex items-center gap-[0.6em] hover:gap-[0.9em] font-inter font-medium text-[var(--accent)] hover:text-[var(--accent-hover)] px-[0.6em] transition-all"
              >
                Read More
                <ArrowRight className="w-[1.1em] h-[1.1em]" />
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <Button href="#news">View All</Button>
        </div>
      </div>
    </section>
  );
}
