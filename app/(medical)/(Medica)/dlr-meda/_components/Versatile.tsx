"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import SectionBadge from "./SectionBadge";

const features = [
  {
    title: "Polyurethane Construction",
    desc: "Soft polyurethane material provides flexibility while supporting dependable performance during intended urological procedures.",
  },
  {
    title: "Configuration Choices",
    desc: "Open-open and open-closed designs provide options for different clinical and procedural requirements.",
  },
  {
    title: "Extensive Size Selection",
    desc: "Available across multiple French sizes and lengths to support varied placement requirements.",
  },
  {
    title: "Customizable Guidewire Options",
    desc: "Stent kits can incorporate guidewire choices according to individual customer preferences and requirements.",
  },
];

export default function Versatile() {
  return (
    <section
      id="ureteral-access"
      className="w-full py-12 md:py-16 lg:py-20 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-[var(--color-primary)] overflow-hidden"
    >
      <div className="custom-container flex flex-col gap-10 md:gap-12 min-[2500px]:gap-16 min-[3800px]:gap-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center" data-aos="fade-up">
          <SectionBadge text="Flexible Ureteral Access" />
          <Typography
            variant="h2"
            color="white"
            className="mt-4 min-[2500px]:mt-6 min-[3800px]:mt-8 leading-[1.4] text-center"
          >
            Versatile Double-J Stent Configurations Designed for Consistent
            Ureteral Drainage Support
          </Typography>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-7 min-[2500px]:gap-12 min-[3800px]:gap-16 items-center">
          {/* Left Video Column */}
          <div
            className="lg:col-span-7 w-full aspect-video relative rounded-[4px] min-[2500px]:rounded-[8px] min-[3800px]:rounded-[12px] overflow-hidden bg-black/30 shadow-2xl"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Text Column */}
          <div
            className="lg:col-span-5 flex flex-col items-start"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <Typography variant="p" color="white">
              Lubri-soft® Double Pigtail Ureteral Stent and Set provides a
              versatile solution for ureteral strictures and stenting following
              kidney-stone procedures. Its polyurethane construction and
              multi-hole flow design are complemented by open/open and
              open/closed configurations, while varied French sizes, lengths, and
              guidewire options allow the system to accommodate different
              procedural requirements.
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
        </div>
      </div>
    </section>
  );
}
