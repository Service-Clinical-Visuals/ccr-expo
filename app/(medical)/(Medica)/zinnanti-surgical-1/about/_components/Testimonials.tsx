"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Typography from "../../_components/Typography";
import Badge from "./Badge";

const testimonials = [
  {
    img: "/medical/zinnanti-surgical-1/about/v.webp",
    name: "Dr. Lisa Flowers",
    org: "Emory Grady School of Medicine",
    quote:
      "We want to thank Zinnanti Surgical Design Group for the kind donation of a state of the art treatment system for women's health and high resolution anoscopy… the system provides better visualization with less equipment.",
  },
];

const arrowBtn =
  "flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 min-[2500px]:w-14 min-[2500px]:h-14 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full border-2 border-gray-500 text-gray-600 hover:border-[var(--color-primary-dark)] hover:text-[var(--color-primary-dark)] transition-colors cursor-pointer shrink-0";
const arrowIcon = "w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="w-full pb-16 xl:pb-24 min-[2500px]:pb-36">
      <div className="custom-container flex flex-col items-center">
        <div className="flex flex-col items-center text-center gap-4">
          <div data-aos="fade-up" data-aos-duration="800">
            <Badge text="Voices of Trust" className="[&>span:last-child]:normal-case" />
          </div>
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <Typography variant="h2" color="none" className="text-[#444444]">
              Real Experiences That Reflect Our Commitment to Better Healthcare
            </Typography>
          </div>
        </div>

        <div className="mt-8 xl:mt-10 w-full flex items-center gap-3 sm:gap-6">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
            <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)} className={arrowBtn}>
              <ArrowLeft className={arrowIcon} />
            </button>
          </div>

          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="flex items-center gap-4 sm:gap-6">
              <div
                className="relative w-16 h-16 sm:w-20 sm:h-20 xl:w-24 xl:h-24 min-[2500px]:w-36 min-[2500px]:h-36 min-[3800px]:w-48 min-[3800px]:h-48 rounded-full overflow-hidden shrink-0"
                data-aos="zoom-in"
                data-aos-delay="150"
                data-aos-duration="800"
              >
                <Image src={t.img} alt={t.name} fill sizes="150px" className="object-cover" />
              </div>
              <div className="flex flex-col gap-1" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
                <Typography variant="h3" color="none" className="text-[#444444]">
                  {t.name}
                </Typography>
                <Typography variant="p" color="muted">
                  {t.org}
                </Typography>
              </div>
            </div>

            <div
              className="w-full max-w-[420px] min-[2500px]:max-w-[700px] h-px bg-gray-200 my-6"
              data-aos="fade-in"
              data-aos-delay="250"
              data-aos-duration="800"
            />

            <div
              className="flex items-start gap-3 sm:gap-5 max-w-[880px] min-[2500px]:max-w-[1400px]"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="900"
            >
              <span
                aria-hidden
                className="font-serif font-bold leading-none text-[var(--color-primary-dark)] !text-[2.5rem] sm:!text-[3.5rem] min-[2500px]:!text-[5rem] -mt-1"
              >
                &rdquo;
              </span>
              <Typography variant="p" color="muted">
                {t.quote}
              </Typography>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
            <button type="button" aria-label="Next testimonial" onClick={() => go(1)} className={arrowBtn}>
              <ArrowRight className={arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
