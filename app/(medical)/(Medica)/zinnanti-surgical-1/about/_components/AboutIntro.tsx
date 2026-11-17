"use client";

import React from "react";
import Image from "next/image";
import { FlaskConical } from "lucide-react";
import Typography from "../../_components/Typography";
import Button from "../../_components/Button";
import Badge from "./Badge";

const stats = [
  { value: "9+", label: "Granted & Pending Patents" },
  { value: "Top 50", label: "Academic Hospital Adoption" },
  { value: "5", label: "Core Surgical Specialties" },
];

export default function AboutIntro() {
  return (
    <section id="about" className="w-full py-14 sm:py-16 xl:py-24 min-[2500px]:py-36">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 xl:gap-16 items-center">
        {/* Image + overlay card */}
        <div className="relative pb-10 sm:pb-12" data-aos="fade-right" data-aos-duration="900">
          <div className="relative w-full aspect-[820/634] rounded-2xl overflow-hidden">
            <Image
              src="/medical/zinnanti-surgical-1/about/about.webp"
              alt="Dr. Zinnanti designing a surgical instrument"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
              priority
            />
          </div>

          <div
            className="absolute bottom-0 left-1/2 sm:left-[46%] -translate-x-1/2 sm:translate-x-0 w-[85%] sm:w-[48%]"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <div className="bg-[var(--color-primary-dark)] text-white rounded-lg shadow-xl p-4 sm:p-5 min-[2500px]:p-8">
              <div className="flex items-center gap-1.5 text-[#7fd0f2]">
                <FlaskConical className="w-3.5 h-3.5 min-[2500px]:w-6 min-[2500px]:h-6" />
                <span className="uppercase tracking-wide !text-[0.65rem] min-[2500px]:!text-[1rem]">
                  Physician-Led Engineering
                </span>
              </div>
              <Typography variant="h4" color="white" weight="bold" className="mt-1.5">
                30+ Years Medical Innovation
              </Typography>
              <span className="block mt-1 text-white/80 !text-[0.7rem] min-[2500px]:!text-[1.05rem]">
                9 Granted US &amp; International Patents driving clean-field operative precision.
              </span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-5 xl:gap-6">
          <div data-aos="fade-left" data-aos-duration="800">
            <Badge text="Our Heritage & Mission" />
          </div>

          <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
            <Typography variant="h2" color="none" className="text-[#444444] max-w-[560px] min-[2500px]:max-w-[900px]">
              Where Medical Expertise Meets Surgical Innovation.
            </Typography>
          </div>

          <div data-aos="fade-left" data-aos-delay="150" data-aos-duration="800">
            <Typography variant="p" color="muted">
              Zinnanti Surgical Design Group, Inc. was founded on the belief that the best surgical
              instruments are designed by those who understand the demands of operative care
              firsthand. We bridge clinical practice, biomedical research, and precision
              manufacturing to transform surgical challenges into innovative solutions.
            </Typography>
          </div>

          <div data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
            <Typography variant="p" color="muted">
              We specialize in combined-function surgical instruments that integrate smoke
              evacuation, fluid aspiration, and radiofrequency (RF) electrosurgery into a single
              ergonomic design. Our innovations provide surgeons with greater control, clearer
              operative fields, improved efficiency, and reduced operating room clutter.
            </Typography>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-5 min-[2500px]:gap-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="bg-[var(--color-primary-dark)] text-white rounded-lg p-3 sm:p-4 xl:p-5 min-[2500px]:p-8"
                data-aos="zoom-in"
                data-aos-delay={200 + i * 100}
                data-aos-duration="800"
              >
                <Typography variant="h2" color="white" className="!leading-tight">
                  {s.value}
                </Typography>
                <span className="block mt-1.5 text-white/90 max-w-[120px] min-[2500px]:max-w-[200px]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            <Button text="Request a Sample" href="#contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
