"use client";

import React from "react";
import Link from "next/link";
import { Award, Crosshair, ShieldCheck, type LucideIcon } from "lucide-react";
import { CenteredHeading } from "./SectionHeading";

const ITEMS: { num: string; title: string; text: string; Icon: LucideIcon }[] = [
  {
    num: "01",
    title: "Experience",
    text: "For over many years, Winfo has been dedicated to advancing orthopaedic instrumentation through continuous improvement, practical innovation, and quality control.",
    Icon: Award,
  },
  {
    num: "02",
    title: "Focus",
    text: "We specialize in orthopaedic surgical instruments, offering a comprehensive range of spinal instrument sets and minimally invasive solutions.",
    Icon: Crosshair,
  },
  {
    num: "03",
    title: "Quality",
    text: "We specialize in orthopaedic surgical instruments, offering a comprehensive range of spinal instrument sets and minimally invasive solutions.",
    Icon: ShieldCheck,
  },
];

export default function Expertise() {
  return (
    <section className="w-full bg-white section-py">
      <div className="custom-container">
        <CenteredHeading
          eyebrow="Our Expertise"
          title="We Are the Winfo Med"
          text={
            <>
              Delivering Precision, Innovation And Trust Through Thoughtfully Engineered Orthopaedic Solutions That
              Combine Quality Craftsmanship, Advanced Instrumentation And Functional Design. We Are Committed To
              Supporting Modern Surgical Requirements With Reliable Products, Continuous Improvement And A Strong Focus
              On Performance And Accuracy.
            </>
          }
          className="mb-10 xl:mb-[2.8vw]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-[2.1vw]">
          {ITEMS.map(({ num, title, text, Icon }, i) => (
            <article
              key={num}
              className={`group relative overflow-hidden rounded-[6px] bg-white shadow-[0_3px_14px_rgba(0,0,0,0.12)] px-[8%] pt-[7.5%] pb-[6.5%] w-full max-w-[560px] mx-auto md:max-w-none transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] ${
                i === 2 ? "md:col-span-2 md:max-w-[calc(50%-0.75rem)] lg:col-span-1 lg:max-w-none" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              {/* Wave decoration */}
              <svg
                aria-hidden
                viewBox="0 0 400 110"
                preserveAspectRatio="none"
                className="absolute right-0 bottom-0 w-[75%] h-[34%] text-[var(--accent-light)] transition-transform duration-500 group-hover:scale-y-110 origin-bottom"
              >
                <path d="M0 110 C 140 105, 230 60, 400 0 L 400 110 Z" fill="currentColor" />
              </svg>

              <span
                aria-hidden
                className="card-num absolute top-[8%] right-[8%] font-head font-bold text-[#C9C9C9]"
              >
                {num}
              </span>

              <div className="relative flex items-center gap-[1.2em] mb-6 xl:mb-[1.7vw]">
                <span className="flex-shrink-0 w-[clamp(84px,5.75vw,230px)] aspect-square rounded-full bg-[var(--accent-light)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <Icon strokeWidth={1.5} className="w-[42%] h-[42%] text-[var(--accent)]" />
                </span>
                <h3 className="card-title font-head font-semibold text-[var(--heading)]">{title}</h3>
              </div>

              <p className="relative card-text-loose font-body text-[var(--body)] mb-5 xl:mb-[1.2vw]">{text}</p>

              <Link
                href="#about"
                className="relative btn-text font-body font-semibold text-[var(--primary)] underline underline-offset-[0.2em] decoration-[1.5px] hover:text-[var(--primary-hover)] transition-colors"
              >
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
