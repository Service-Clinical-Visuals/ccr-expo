"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Typography from "./Typography";

const testimonials = [
  {
    quote:
      "We want to thank Zinnanti Surgical Design Group for the kind donation of a state of the art treatment system for women's health and high resolution anoscopy... the system provides better visualization with less equipment.",
    highlight: "Dr. Flowers",
    note: "uses Zinnanti Surgical's innovative treatment electrodes to suction smoke, blood, and fluid simultaneously during procedures.",
    name: "Dr. Lisa Flowers",
    rating: 5,
    image: "/medical/zinnanti-surgical-2/healthcare.webp",
  },
];

/**
 * About page: "Our Testimonials" — rounded blue band holding the heading, with the photo
 * overlapping it on the left and the quote slider below the band on the right.
 */
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="w-full bg-white py-12 sm:py-14 xl:py-20 min-[2500px]:py-32 min-[3800px]:py-44 overflow-hidden">
      <div className="mx-3 sm:mx-5 xl:mx-8 min-[2500px]:mx-12 min-[3800px]:mx-16 grid grid-cols-1 xl:grid-cols-[3.5%_37.5%_2.5%_minmax(0,1fr)_3.5%]">
        {/* Blue band (row 1, full width) */}
        <div
          aria-hidden
          className="row-start-1 col-[1/-1] bg-[url('/medical/zinnanti-surgical-2/bg1.webp')] bg-cover bg-center bg-no-repeat rounded-tl-[2rem] rounded-br-[2rem] sm:rounded-tl-[2.5rem] sm:rounded-br-[2.5rem] xl:rounded-tl-[3.5rem] xl:rounded-br-[3.5rem] min-[2500px]:rounded-tl-[5.5rem] min-[2500px]:rounded-br-[5.5rem]"
        />

        {/* Heading content inside the band */}
        <div
          className="row-start-1 col-start-1 xl:col-start-4 relative z-10 flex flex-col items-start px-6 py-8 sm:px-8 sm:py-10 xl:px-0 xl:py-12 min-[2500px]:py-20 min-[3800px]:py-28"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center gap-2 min-[2500px]:gap-3 rounded-full bg-white/10 border border-white/25 px-3 py-1 sm:px-4 sm:py-1.5 min-[2500px]:px-6 min-[2500px]:py-2.5 text-white">
            <span aria-hidden className="block w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 rounded-full bg-white" />
            Our Testimonials
          </span>
          <Typography variant="h2" color="white" className="leading-snug mt-3 sm:mt-4 min-[2500px]:mt-6">
            What Healthcare Professionals Say About Us
          </Typography>
          <Typography
            variant="p"
            color="white"
            className="!font-normal text-white/90 leading-relaxed mt-3 sm:mt-4 min-[2500px]:mt-6 max-w-2xl min-[2500px]:max-w-[64rem]"
          >
            Discover how healthcare professionals value Zinnanti Surgical&apos;s innovative devices
            for improved visualization, simplified equipment setup, and efficient procedures.
          </Typography>
        </div>

        {/* Photo overlapping the band */}
        <div
          className="row-start-3 xl:row-start-1 xl:row-span-2 col-start-1 xl:col-start-2 relative z-10 mt-8 xl:mt-8 min-[2500px]:mt-14"
          data-aos="fade-right"
        >
          <img
            key={current.image}
            src={current.image}
            alt={`${current.name} with a Zinnanti Surgical treatment system`}
            width={693}
            height={731}
            className="block w-full max-w-[693px] mx-auto xl:max-w-full h-auto object-contain"
          />
        </div>

        {/* Quote + author + controls */}
        <div
          className="row-start-2 xl:row-start-2 col-start-1 xl:col-start-4 flex flex-col pt-8 xl:pt-10 min-[2500px]:pt-16 px-1 xl:px-0"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div key={index}>
            <Typography
              variant="h3"
              color="dark"
              className="leading-snug !text-[1.1rem] sm:!text-[1.25rem] xl:!text-[1.4rem] min-[2500px]:!text-[2.2rem] min-[3800px]:!text-[3rem]"
            >
              &ldquo;{current.quote}&rdquo;
            </Typography>

            <Typography variant="p" color="muted" className="!font-normal leading-relaxed mt-4 sm:mt-5 min-[2500px]:mt-8">
              <strong className="font-semibold text-[#121C22]">{current.highlight}</strong>,{current.note}
            </Typography>
          </div>

          <div className="mt-7 sm:mt-9 min-[2500px]:mt-14 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-[2500px]:gap-5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 min-[2500px]:w-[4.5rem] min-[2500px]:h-[4.5rem] min-[3800px]:w-24 min-[3800px]:h-24 rounded-full overflow-hidden shrink-0 bg-gray-200">
                <img
                  src={current.image}
                  alt=""
                  aria-hidden
                  className="w-full h-full object-cover object-[50%_20%] scale-125"
                />
              </div>
              <div className="flex flex-col gap-1 min-[2500px]:gap-2">
                <span className="font-semibold text-[#121C22]">-{current.name}</span>
                <div className="flex items-center gap-0.5 min-[2500px]:gap-1" aria-label={`${current.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      aria-hidden
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 ${
                        i < current.rating ? "fill-[#F5A623] text-[#F5A623]" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 min-[2500px]:gap-6">
              {[
                { label: "Previous testimonial", onClick: prev, Icon: ArrowLeft },
                { label: "Next testimonial", onClick: next, Icon: ArrowRight },
              ].map(({ label, onClick, Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={onClick}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-20 min-[3800px]:h-20 rounded-md min-[2500px]:rounded-xl bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-white transition-colors active:scale-95 cursor-pointer"
                >
                  <Icon className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
