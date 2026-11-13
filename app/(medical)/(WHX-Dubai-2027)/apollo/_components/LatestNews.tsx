"use client";

import React from "react";
import Link from "next/link";
import Eyebrow from "./Eyebrow";

const NEWS = [
  {
    date: "29th Oct 2026",
    title: "Supplier Demo Day at East Kent Hospitals",
    text: "The Morpheus Air Zero Hybrid Mattress System has been designed for patients considered to be at 'High to Very High Risk' of developing pressure ulcers ...",
    image: "/medical/apollo/i1.webp",
    href: "#",
  },
  {
    date: "25th Sep 2026",
    title: "Apollo is always pleased to support our customers",
    text: "While lots of the team were busy connecting and engaging with everyone at REHACARE 🇩🇪, Stephen, Tracy and the rest of the team were also ...",
    image: "/medical/apollo/i2.webp",
    href: "#",
  },
  {
    date: "23rd Sep 2026",
    title: "🌟 Day 1 at REHACARE! 🇩🇪",
    text: "The Apollo team is excited to kick off an inspiring few days at REHACARE — connecting with healthcare professionals, partners, and innovators ...",
    image: "/medical/apollo/i3.webp",
    href: "#",
  },
];

export default function LatestNews() {
  return (
    <section id="news" className="w-full bg-white py-16 sm:py-20 xl:py-[4.2vw]">
      <div className="custom-container">
        <div className="text-center max-w-[1100px] min-[1921px]:max-w-[60%] mx-auto mb-10 xl:mb-12" data-aos="fade-up">
          <Eyebrow className="mb-4 xl:mb-5">Insights &amp; Updates</Eyebrow>
          <h2 className="section-title font-head font-bold text-[var(--heading)] mb-4">
            Exploring Ideas That Shape Better Patient Care
          </h2>
          <p className="section-text font-inter text-[var(--body)]">
            Stay updated with the latest healthcare insights, innovations, and company news as Apollo Healthcare
            Technologies drives better patient care through collaboration and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-[1.9vw]">
          {NEWS.map((n, i) => (
            <article
              key={n.title}
              className={`group flex flex-col rounded-[6px] border border-[var(--border)] bg-white p-[3.7%] w-full max-w-[520px] mx-auto lg:max-w-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 ${
                i === 2 ? "sm:col-span-2 sm:max-w-[calc(50%-0.75rem)] lg:col-span-1 lg:max-w-none" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="relative w-full aspect-[476/238] rounded-[4px] overflow-hidden mb-5 xl:mb-6">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="news-date absolute right-0 bottom-0 font-head font-medium text-white bg-[var(--primary)] rounded-tl-[6px] px-[0.6em] py-[0.25em]">
                  {n.date}
                </span>
              </div>
              <h3 className="news-title font-head font-bold text-[var(--heading)] mb-4 xl:mb-5">{n.title}</h3>
              <p className="news-text font-inter text-[var(--body)] flex-1 mb-6 xl:mb-7">{n.text}</p>
              <Link
                href={n.href}
                className="btn-text self-start font-head font-bold text-[var(--heading)] underline underline-offset-[0.25em] decoration-[1.5px] hover:text-[var(--primary)] transition-colors"
              >
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
