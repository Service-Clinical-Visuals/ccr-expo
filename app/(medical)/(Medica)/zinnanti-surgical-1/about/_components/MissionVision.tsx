"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Typography from "../../_components/Typography";

const cards = [
  {
    icon: "/medical/zinnanti-surgical-1/about/icon1.webp",
    eyebrow: "Core Directive",
    title: "Our Mission",
    body: "Zinnanti Surgical Design Group, Inc. transforms clinical insights into innovative surgical instruments. Specializing in combined-function technologies, we integrate smoke evacuation, fluid aspiration, and RF electrosurgery to enhance surgical efficiency, support physicians, improve operating room safety, and advance modern surgical care.",
    link: "Operating Room Safety Standards",
    aos: "fade-right",
  },
  {
    icon: "/medical/zinnanti-surgical-1/about/icon2.webp",
    eyebrow: "Future Horizon",
    title: "Our Vision",
    body: "Our vision is to shape the future of surgical care through physician-led engineering, patented combined-function instrumentation, and continuous innovation. We strive to advance surgical efficiency, enhance patient safety, and deliver precision-driven solutions that improve surgical outcomes and set new standards in modern healthcare worldwide.",
    link: "Clinical Precision Leadership",
    aos: "fade-left",
  },
];

export default function MissionVision() {
  return (
    <section className="w-full bg-[var(--color-primary-dark)] py-12 sm:py-16 xl:py-20 min-[2500px]:py-32">
      <div className="custom-container grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 min-[2500px]:gap-12">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className="bg-white rounded-lg p-6 sm:p-8 xl:p-10 min-[2500px]:p-16 flex flex-col gap-3 min-[2500px]:gap-5"
            data-aos={c.aos}
            data-aos-delay={i * 150}
            data-aos-duration="900"
          >
            <div data-aos="zoom-in" data-aos-delay={200 + i * 150} data-aos-duration="800">
              <Image
                src={c.icon}
                alt=""
                width={50}
                height={50}
                className="w-10 h-10 xl:w-12 xl:h-12 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-md"
              />
            </div>
            <div className="mt-3 flex flex-col" data-aos="fade-up" data-aos-delay={250 + i * 150} data-aos-duration="800">
              <span className="uppercase tracking-wider text-[var(--color-muted)] !text-[0.7rem] min-[2500px]:!text-[1.1rem] min-[3800px]:!text-[1.5rem]">
                {c.eyebrow}
              </span>
              <Typography variant="h2" color="none" className="text-[#0f1f3a]">
                {c.title}
              </Typography>
            </div>
            <div data-aos="fade-up" data-aos-delay={300 + i * 150} data-aos-duration="800">
              <Typography variant="p" color="muted">
                {c.body}
              </Typography>
            </div>
            <span
              className="mt-4 inline-flex items-center gap-2 font-semibold text-[var(--color-primary-dark)]"
              data-aos="fade-up"
              data-aos-delay={350 + i * 150}
              data-aos-duration="800"
            >
              {c.link}
              <ArrowRight className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
