"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";

// NOTE: the second article's photo is expected at /medical/hebu/spot2.png;
// until that file is added the card falls back to spot.png.
const FALLBACK_IMAGE = "/medical/hebu/spot.webp";

const NEWS = [
  {
    title: "Crises? Firmly under control",
    date: "June 22, 2024",
    text: "With dominoes, a single push is all it takes – and the row falls. One domino after another, faster and faster, until it seems impossible to stop. But whoever reaches out at the right moment can change the course of events. This metaphor describes the art of crisis preparedness: recognizing potential risks early, anticipating challenges, and taking timely action to prevent small disruptions from escalating into major crises. Effective preparation, proactive planning, and decisive intervention can break the chain reaction, minimize consequences, and ensure stability even in uncertain situations.",
    image: "/medical/hebu/spot.webp",
    href: "#",
  },
  {
    title: "Weilheim kindergarten to receive air purifiers",
    date: "June 22, 2024",
    text: "The Weilheim kindergarten is now equipped with four air purifiers, providing an additional layer of protection and helping create a cleaner and healthier indoor environment for children and staff. Thomas Butsch, managing director of the Tuttlingen-based company Hebu Medical GmbH, generously donated the units to the facility as a contribution to improving indoor air quality and supporting the well-being of the kindergarten community. Using built-in UVC lamps...",
    image: "/medical/hebu/spot2.webp",
    href: "#",
  },
];

const AUTOPLAY_MS = 6000;

export default function Spotlight() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = NEWS.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const arrowCls =
    "flex-shrink-0 w-[42px] h-[42px] xl:w-[2.6vw] xl:h-[2.6vw] rounded-full border-2 border-[var(--heading)] text-[var(--heading)] flex items-center justify-center hover:bg-[var(--heading)] hover:text-white transition-colors cursor-pointer";

  return (
    <section id="news" className="w-full bg-white py-16 sm:py-20 xl:py-[4.6vw]">
      <div className="custom-container">
        <div className="text-center max-w-[1000px] min-[1921px]:max-w-[52%] mx-auto mb-10 xl:mb-[2.6vw]" data-aos="fade-up">
          <Eyebrow className="mb-3 xl:mb-4">In The Spotlight</Eyebrow>
          <h2 className="section-title font-head font-medium text-[var(--heading)] mb-4 xl:mb-6">
            Our Journey Through Media, Milestones and Recognition
          </h2>
          <p className="section-text font-body text-[var(--body)]">
            Explore the latest news, media features and noteworthy achievements of HEBUmedical. Discover how our
            innovations, business developments and commitment to medical technology have shaped our presence and
            earned recognition across the industry.
          </p>
        </div>

        <div
          className="flex items-center gap-4 xl:gap-[4.6vw]"
          data-aos="fade-up"
          data-aos-delay="150"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <button type="button" onClick={prev} aria-label="Previous article" className={`${arrowCls} hidden md:flex`}>
            <ArrowLeft className="w-[55%] h-[55%]" />
          </button>

          {/* Slides */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {NEWS.map((n, i) => (
                <article
                  key={n.title}
                  aria-hidden={i !== index}
                  className="shrink-0 basis-full grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-6 xl:gap-[1.9vw] items-center rounded-[8px] border border-[var(--border)] bg-white p-4 xl:p-[1vw]"
                >
                  <div className="w-full aspect-[496/380] rounded-[6px] overflow-hidden">
                    <img
                      src={n.image}
                      alt={n.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        if (!e.currentTarget.src.endsWith(FALLBACK_IMAGE)) e.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />
                  </div>
                  <div className="xl:pr-[1vw]">
                    <h3 className="news-title font-head font-medium text-[var(--heading)] mb-3 xl:mb-4">{n.title}</h3>
                    <p className="news-date font-head text-[var(--body)] mb-4 xl:mb-5">{n.date}</p>
                    <p className="news-text font-body text-[var(--body)] mb-5 xl:mb-7">{n.text}</p>
                    <Link
                      href={n.href}
                      tabIndex={i === index ? 0 : -1}
                      className="btn-text inline-block ml-[0.5em] font-head font-semibold text-[var(--heading)] underline underline-offset-[0.25em] decoration-[1.5px] hover:text-[var(--primary-hover)] transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button type="button" onClick={next} aria-label="Next article" className={`${arrowCls} hidden md:flex`}>
            <ArrowRight className="w-[55%] h-[55%]" />
          </button>
        </div>

        {/* Dots + mobile arrows */}
        <div className="flex justify-center items-center gap-4 mt-8 xl:mt-9">
          <button type="button" onClick={prev} aria-label="Previous article" className={`${arrowCls} md:hidden`}>
            <ArrowLeft className="w-[55%] h-[55%]" />
          </button>
          <div className="flex items-center gap-2">
            {NEWS.map((n, i) => (
              <button
                key={n.title}
                type="button"
                aria-label={`Go to article ${i + 1}`}
                aria-current={index === i}
                onClick={() => setIndex(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  index === i
                    ? "w-[12px] h-[12px] min-[2560px]:w-[20px] min-[2560px]:h-[20px] bg-[var(--primary)]"
                    : "w-[8px] h-[8px] min-[2560px]:w-[13px] min-[2560px]:h-[13px] bg-[var(--primary)]/40 hover:bg-[var(--primary)]/70"
                }`}
              />
            ))}
          </div>
          <button type="button" onClick={next} aria-label="Next article" className={`${arrowCls} md:hidden`}>
            <ArrowRight className="w-[55%] h-[55%]" />
          </button>
        </div>
      </div>
    </section>
  );
}
