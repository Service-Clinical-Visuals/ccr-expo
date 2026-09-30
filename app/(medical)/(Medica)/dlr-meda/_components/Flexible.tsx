"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import SectionBadge from "./SectionBadge";

const features = [
  {
    title: "Multi-Hole Drainage",
    desc: "Multiple drainage openings support continuous internal urinary flow throughout the intended treatment pathway.",
  },
  {
    title: "Dual-End Configurations",
    desc: "Open-open and open-closed configurations provide flexibility for different procedural and clinical requirements.",
  },
  {
    title: "Multiple Sizing Options",
    desc: "Available in 4.7Fr, 6Fr, and 7Fr sizes with various lengths for selection.",
  },
  {
    title: "Adaptable Stent Sets",
    desc: "Guidewire options can be customized according to customer preferences and specific procedural requirements.",
  },
];

export default function Flexible() {
  return (
    <section
      id="ureteral-care"
      className="w-full py-12 md:py-16 lg:py-20 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-[var(--color-primary)] overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-10 md:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center" data-aos="fade-up">
          <SectionBadge text="Ureteral Care" />
          <Typography
            variant="h2"
            color="white"
            className="mt-4 min-[2500px]:mt-6 min-[3800px]:mt-8 leading-[1.4] text-center"
          >
            Flexible Double-J Stent Supporting Efficient Drainage Across Diverse
            Urological Procedures
          </Typography>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-7 min-[2500px]:gap-12 min-[3800px]:gap-16 items-center">
          {/* Left Text Column */}
          <div
            className="lg:col-span-5 flex flex-col items-start order-2 lg:order-1"
            data-aos="fade-right"
          >
            <Typography variant="p" color="white">
              Lubri-soft® Double Pigtail Ureteral Stent and Set is developed to
              support internal urinary drainage in cases involving ureteral
              strictures and post-kidney-stone stenting. Its soft polyurethane
              construction combines flexibility with a multi-hole flow design,
              while different configurations, sizes, lengths, and guidewire
              options provide clinicians with greater procedural adaptability.
            </Typography>

            <ul className="flex flex-col gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 mt-5 min-[2500px]:mt-8 min-[3800px]:mt-10">
              {features.map((item) => (
                <li key={item.title} className="flex items-start gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 text-white">
                  <Typography variant="p" color="white" weight="semibold" className="shrink-0" aria-hidden="true">
                    –
                  </Typography>
                  <Typography variant="p" color="white">
                    <strong className="font-bold">{item.title} — </strong>
                    {item.desc}
                  </Typography>
                </li>
              ))}
            </ul>

            <div className="mt-7 min-[2500px]:mt-10 min-[3800px]:mt-14">
              <Button
                text="Explore Our Solutions"
                href="#products"
                variant="secondary"
                className="px-8 py-2.5 !text-[#0B1340] min-[2500px]:px-14 min-[2500px]:py-5 min-[3800px]:px-20 min-[3800px]:py-7 min-[2500px]:rounded-[8px]"
              />
            </div>
          </div>

          {/* Right Video Column */}
          <div
            className="lg:col-span-7 w-full aspect-video relative rounded-[4px] min-[2500px]:rounded-[8px] min-[3800px]:rounded-[12px] overflow-hidden  order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
