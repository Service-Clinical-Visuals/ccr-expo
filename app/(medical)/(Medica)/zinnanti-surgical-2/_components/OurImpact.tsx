"use client";

import React from "react";
import { Check } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

const points = [
  {
    title: "Enhancing Surgical Efficiency",
    text: "Our devices are designed for speed, convenience, and efficiency. Disposable attachments reduce sterilization needs, allowing surgeons to focus on patient care.",
  },
  {
    title: "Ensuring Compliance and Safety",
    text: "With increasing regulations around surgical smoke evacuation, compliance is more important than ever.",
  },
  {
    title: "Cost-Effective Solutions",
    text: "We are committed to offering high-quality, cost-effective solutions.",
  },
  {
    title: "Supporting Leading Medical Institutions",
    text: "We are honored to support several prestigious clients, including Dr. Steve Goldstone, Dr. Naomi Jay, Dr. Joel Palefsky, Dr. Michelle Kahn and Dr. Marc Einstein.",
  },
];

/** About page: "Our Impact" — text + checklist on the left, layered image collage on the right. */
const OurImpact = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 xl:py-24 min-[2500px]:py-36 min-[3800px]:py-48 overflow-hidden">
      <div className="custom-container flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-16 min-[2500px]:gap-24">
        {/* Left: content */}
        <div className="w-full xl:w-1/2 flex flex-col items-start" data-aos="fade-right">
          <span className="inline-flex items-center gap-2 min-[2500px]:gap-3 rounded-full border border-gray-200 bg-white shadow-sm px-3 py-1 sm:px-4 sm:py-1.5 min-[2500px]:px-6 min-[2500px]:py-2.5 text-[#121C22]">
            <span aria-hidden className="block w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 rounded-full bg-[var(--color-secondary)]" />
            Our Impact
          </span>

          <Typography variant="h2" color="dark" className="leading-snug mt-4 sm:mt-5 min-[2500px]:mt-8">
            Innovative Surgical Solutions Designed Around Real Clinical Challenges
          </Typography>

          <Typography variant="p" color="muted" className="!font-normal leading-relaxed mt-4 min-[2500px]:mt-6">
            Dr. Zinnanti has over 25 years of experience in developing and manufacturing surgical
            devices. He currently holds nine issued patents, with several more pending in the
            United States and worldwide.
          </Typography>

          <ul className="mt-6 sm:mt-7 min-[2500px]:mt-10 flex flex-col gap-4 sm:gap-5 min-[2500px]:gap-8">
            {points.map((point, i) => (
              <li
                key={point.title}
                className="flex items-start gap-3 sm:gap-4 min-[2500px]:gap-6"
                data-aos="fade-up"
                data-aos-delay={100 + i * 75}
              >
                <span
                  aria-hidden
                  className="shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 rounded-full bg-[var(--color-secondary)] text-white"
                >
                  <Check strokeWidth={3} className="w-3 h-3 sm:w-3.5 sm:h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" />
                </span>
                <p className="!font-normal leading-relaxed text-[#4A5568]">
                  <strong className="font-semibold text-[#121C22]">{point.title}</strong> – {point.text}
                </p>
              </li>
            ))}
          </ul>

          <Button text="Learn More About Us" href="#" className="mt-8 sm:mt-9 min-[2500px]:mt-14" />
        </div>

        {/* Right: image collage */}
        <div className="w-full xl:w-1/2" data-aos="fade-left" data-aos-delay="150">
          <img
            src="/medical/zinnanti-surgical-2/innovative.webp"
            alt="Clinicians reviewing an X-ray and a digital healthcare innovation concept"
            width={820}
            height={636}
            className="block w-full max-w-[820px] mx-auto xl:max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
