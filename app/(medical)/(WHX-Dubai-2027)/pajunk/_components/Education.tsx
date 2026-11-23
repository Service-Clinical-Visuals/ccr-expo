/**
 * Education & Clinical Partnership Section - PAJUNK
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Section Header:
 *    - Split layout with header copy and CTA button ("View All Academic Programs").
 * 2. Academic Program Cards:
 *    - Grid of 3 responsive cards (c1.png, c2.png, c3.png).
 *    - Each card features image with dual badge overlay (type pill top-left, format pill bottom-right).
 *    - Date tag in #5D6300, Title, Description, and lower status bar with direct CTA button.
 * 3. Bottom Link:
 *    - "View All Contents" navigation link.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";

const programs = [
  {
    image: "/medical/pajunk/c1.webp",
    typeBadge: "LIVE WEBINAR",
    formatBadge: "1.5 CME Credits",
    date: "MAY 14, 2025",
    title: "Advanced Laparoscopic Techniques in Minimally Invasive Surgery",
    description: "Led by Dr. med. H. Weber focusing on tissue-sparing dissection, energy application rules, ergonomic tool rotation.",
    status: "Interactive Q&A Included",
    ctaText: "Register Free",
  },
  {
    image: "/medical/pajunk/c2.webp",
    typeBadge: "ON-SITE WORKSHOP",
    formatBadge: "Hands-On Lab",
    date: "JUNE 20—21, 2025",
    title: "Hands-On Cadaver Masterclass: Ergonomics & Dissection in MIS",
    description: "Intensive practical anatomical training for intermediate and senior surgeons with individualized faculty tutoring.",
    status: "Limited to 18 Spots",
    ctaText: "Apply for Seat",
  },
  {
    image: "/medical/pajunk/c3.webp",
    typeBadge: "GLOBAL EXHIBITION",
    formatBadge: "In-Person",
    date: "JULY 02—05, 2025",
    title: "Meet PAJUNK at EAES & NYSORA World Congress 2025",
    description: "Live product test stations, expert roundtables, and sneak-peek demonstrations of upcoming smart needle sensor integrations.",
    status: "Booth 424 Hall B",
    ctaText: "Book Booth Tour",
  },
];

const Education = () => {
  return (
    <section id="education" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 sm:gap-16">
        
        {/* Top Header Row */}
        <div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="space-y-3 w-full max-w-full xl:max-w-[70%]">
            <Typography
              variant="tag-badge"
              color="primary"
              className="tracking-widest text-xs sm:text-sm font-semibold !text-[#144835]"
            >
              CONTINUOUS MEDICAL EDUCATION
            </Typography>

            <Typography
              variant="h2"
              color="dark"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#000000]"
            >
              Beyond Products: PAJUNK Education &amp; Clinical Partnership
            </Typography>

            <Typography
              variant="p"
              color="muted"
              className="text-sm sm:text-base leading-relaxed text-[#404944]"
            >
              Hands-on clinical training, accredited cadaver workshops, and global webinars led by key opinion leaders to translate evidence-based technique into safer patient outcomes.
            </Typography>
          </div>

          <div className="shrink-0 self-start lg:self-center">
            <Button
              text="View All Academic Programs"
              variant="primary"
              href="#education"
              showIcon={true}
              className="!py-2.5 !px-5 text-sm font-semibold"
            />
          </div>
        </div>

        {/* 3 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 2k:gap-12 4k:gap-16 items-stretch">
          {programs.map((prog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[6px] 2k:rounded-xl 4k:rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              
              {/* Media Frame with Overlay Badges */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Top-Left Category Badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 2k:top-5 2k:left-5 4k:top-8 4k:left-8 bg-[#144835]/90 backdrop-blur-xs px-2 sm:px-2.5 2k:px-4 4k:px-6 py-0.5 sm:py-1 2k:py-2 4k:py-3 rounded-[4px] 2k:rounded-[8px] 4k:rounded-[12px] shadow-sm">
                  <span className="text-[10px] sm:text-[11px] 2k:text-base 4k:text-xl font-semibold tracking-wider text-[#E1EB52] uppercase">
                    {prog.typeBadge}
                  </span>
                </div>

                {/* Bottom-Right Format Badge */}
                <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 2k:bottom-5 2k:right-5 4k:bottom-8 4k:right-8 bg-black/70 backdrop-blur-xs px-2 sm:px-2.5 2k:px-4 4k:px-6 py-0.5 sm:py-1 2k:py-2 4k:py-3 rounded-[4px] 2k:rounded-[8px] 4k:rounded-[12px] shadow-sm">
                  <span className="text-[11px] sm:text-xs 2k:text-base 4k:text-xl font-normal text-white">
                    {prog.formatBadge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 2k:p-10 4k:p-14 flex flex-col justify-between flex-1 gap-4 sm:gap-6 2k:gap-10 4k:gap-14">
                <div className="space-y-2 sm:space-y-2.5 2k:space-y-5 4k:space-y-7">
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#5D6300] uppercase block">
                    {prog.date}
                  </span>

                  <Typography
                    variant="h3"
                    color="dark"
                    className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-[#000000] leading-snug line-clamp-2"
                  >
                    {prog.title}
                  </Typography>

                  <Typography
                    variant="p"
                    color="muted"
                    className="text-xs sm:text-sm text-[#111111] leading-relaxed line-clamp-3"
                  >
                    {prog.description}
                  </Typography>
                </div>

                {/* Footer Action Row */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 2k:pt-7 4k:pt-10 border-t border-gray-100 gap-2">
                  <span className="text-xs sm:text-sm 2k:text-lg 4k:text-2xl text-[#717973] font-normal">
                    {prog.status}
                  </span>

                  <Button
                    text={prog.ctaText}
                    variant="primary"
                    href="#education"
                    showIcon={true}
                    className="!py-1.5 !px-3 sm:!py-2 sm:!px-4 2k:!py-4 2k:!px-8 4k:!py-6 4k:!px-12 text-xs font-semibold"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="text-right pt-2" data-aos="fade-up">
          <Link
            href="#education"
            className="inline-flex items-center gap-1.5 text-base sm:text-lg font-semibold text-[#144835] hover:text-[#0E3225] underline underline-offset-4 transition-colors"
          >
            View All Contents
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Education;

