"use client";

import React from "react";
import Image from "next/image";
import { Microscope, PenTool, ShieldCheck, type LucideIcon } from "lucide-react";
import Typography from "../../_components/Typography";
import Badge from "./Badge";

interface Member {
  img: string;
  tag: string;
  name: string;
  role: string;
  bio: string[];
  footerIcon: LucideIcon;
  footer: string;
}

const team: Member[] = [
  {
    img: "/medical/zinnanti-surgical-1/about/p1.webp",
    tag: "Founder & Inventor",
    name: "William Zinnanti MD PhD",
    role: "CEO & President",
    bio: [
      "Dr. Zinnanti graduated from UCLA with a degree in molecular, cell, and developmental biology. He then completed both Medicine and Neuroscience Doctorates at Pennsylvania State College of Medicine, physician scientist training program for both MD & PhD degrees. Dr. Zinnanti participated in post-doctoral studies in neurobiology at Cal Tech.",
      "He then completed an internship in pediatrics at Down State University of New York, Brooklyn and then attended a special research track fellowship in neurology at Stanford University, Lucile Packard Children's Hospital. Dr Zinnanti is a licensed physician and neurometabolic expert with over 30 years of experience in surgical instrument design and development.",
    ],
    footerIcon: Microscope,
    footer: "Neuroscience & Device Architecture",
  },
  {
    img: "/medical/zinnanti-surgical-1/about/p2.webp",
    tag: "Brand & Operation",
    name: "Stacey Boscoe Zinnanti",
    role: "COO & Creative Director",
    bio: [
      "Stacey Boscoe Zinnanti is an award winning Art Director and Graphic Designer with extensive experience in branding and creative strategy. Stacey has over 18 years of combined design agency and corporate in-house experience.",
      "She brings a sophisticated eye and innate design aesthetic to all area's of her work. Stacey received a BFA in Graphic Design from Art Center College of Design in Pasadena, California and a BA in Art & Communications from California State University Sacramento.",
    ],
    footerIcon: PenTool,
    footer: "Industrial Aesthetic & Corporate Identity",
  },
  {
    img: "/medical/zinnanti-surgical-1/about/p3.webp",
    tag: "Quality & Production",
    name: "Colleen Levine",
    role: "General Manager",
    bio: [
      "Colleen Levine began as Zinnanti Surgical Design Group's solo production staff and has grown the company to become the General Manager. As a medical assistant for Zinnanti Institute of Neuroscience, Colleen proved to be adept at juggling patient responsibilities with fulfilling orders for Zinnanti Surgical Design Group.",
      "Her ability to multitask and organize details efficiently earned her the titles of Production Manager and Quality Assurance Manager. Colleen is responsible for overseeing all administrative functions, managing the production team, and directing the production schedule.",
    ],
    footerIcon: ShieldCheck,
    footer: "QA & Device Regulatory Compliance",
  },
];

export default function Team() {
  return (
    <section className="w-full py-14 sm:py-16 xl:py-24 min-[2500px]:py-36">
      <div className="custom-container flex flex-col items-center">
        <div className="flex flex-col items-center text-center gap-4 max-w-[900px] min-[2500px]:max-w-[1500px]">
          <div data-aos="fade-up" data-aos-duration="800">
            <Badge text="The People Behind the Innovation" />
          </div>
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <Typography variant="h2" color="none" className="text-[#444444]">
              Expertise, Creativity, and Commitment to Excellence
            </Typography>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <Typography variant="p" color="muted">
              Meet the experienced professionals behind Zinnanti Surgical Design Group, combining
              medical expertise, creative vision, and innovative thinking to develop surgical
              solutions that improve safety, efficiency, and patient care.
            </Typography>
          </div>
        </div>

        <div className="mt-10 xl:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 min-[2500px]:gap-12 w-full">
          {team.map((m, i) => {
            const Icon = m.footerIcon;
            const base = i * 150;
            return (
              <article
                key={m.name}
                className="bg-[#f1f6fa] rounded-lg p-3 sm:p-4 min-[2500px]:p-6 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={base}
                data-aos-duration="900"
              >
                <div
                  className="relative w-full aspect-[4/3] rounded-md overflow-hidden bg-[#1a1a1a]"
                  data-aos="zoom-in"
                  data-aos-delay={base + 100}
                  data-aos-duration="900"
                >
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                    className="object-cover object-top"
                  />
                  <span
                    className="absolute left-0 bottom-4 min-[2500px]:bottom-6 bg-[var(--color-primary-dark)] text-white uppercase font-semibold tracking-wide px-4 min-[2500px]:px-6 py-1.5 min-[2500px]:py-2.5 rounded-r-md !text-[0.7rem] min-[2500px]:!text-[1.1rem] min-[3800px]:!text-[1.5rem]"
                    data-aos="fade-right"
                    data-aos-delay={base + 300}
                    data-aos-duration="800"
                  >
                    {m.tag}
                  </span>
                </div>

                <div className="flex flex-col flex-1 px-1 sm:px-2 pt-6 pb-2">
                  <div data-aos="fade-up" data-aos-delay={base + 200} data-aos-duration="800">
                    <Typography variant="h2" color="none" className="text-[#444444] !font-semibold">
                      {m.name}
                    </Typography>
                    <Typography variant="h4" color="none" className="text-[var(--color-primary-dark)] mt-1">
                      {m.role}
                    </Typography>
                  </div>

                  <div className="mt-4 flex flex-col gap-4 flex-1">
                    {m.bio.map((para, idx) => (
                      <div
                        key={idx}
                        data-aos="fade-up"
                        data-aos-delay={base + 250 + idx * 100}
                        data-aos-duration="800"
                      >
                        <Typography variant="p" color="muted">
                          {para}
                        </Typography>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-8 flex items-center gap-2 text-[var(--color-muted)]"
                    data-aos="fade-up"
                    data-aos-delay={base + 400}
                    data-aos-duration="800"
                  >
                    <Icon className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 text-[var(--color-primary-dark)]" />
                    <span>{m.footer}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
