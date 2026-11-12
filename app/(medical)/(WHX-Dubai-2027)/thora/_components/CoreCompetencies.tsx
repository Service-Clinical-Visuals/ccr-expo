"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Cpu, Headset, SquareMinus } from "lucide-react";
import Eyebrow from "./Eyebrow";

function RobotArm({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 21h9" />
      <path d="M6 21v-3h5v3" />
      <circle cx="8.5" cy="9" r="1.5" />
      <path d="M8.5 18 8.5 10.5" />
      <path d="M9.6 8 14 4.5" />
      <path d="M14 4.5h2.5" />
      <path d="M18 3.5a2 2 0 0 1 0 3" />
      <path d="M20 2.5a3.5 3.5 0 0 1 0 5" />
    </svg>
  );
}

const ITEMS = [
  {
    num: "01",
    label: "Foundation",
    title: "Research",
    color: "#0B5F8C",
    Icon: SquareMinus,
    text: "In close collaboration with international academic partners, we research and develop innovative medical technologies, transforming scientific discoveries into practical clinical applications.",
  },
  {
    num: "02",
    label: "Engineering",
    title: "Development",
    color: "#10B981",
    Icon: Cpu,
    text: "We design and engineer advanced medical systems that meet the highest MDR regulatory standards, combining sophisticated microprocessor technology, real-time firmware, & precision mechanical..",
  },
  {
    num: "03",
    label: "Assembly",
    title: "Production",
    color: "#F59E0B",
    Icon: RobotArm,
    text: "Our specialized in-house production facility in Gießen ensures complete quality control, from assembly and calibration to final testing, under certified cleanroom conditions.",
  },
  {
    num: "04",
    label: "Lifecycle",
    title: "Service & Support",
    color: "#B91C1C",
    Icon: Headset,
    text: "Our staff handle all aspects of service and sales related to our products: clinical consultations, technical training for hospital personnel, maintenance, and the availability of parts for emergency situations.",
  },
];

function CompetencyCard({ item }: { item: (typeof ITEMS)[number] }) {
  const { Icon } = item;
  const style = { "--card": item.color } as React.CSSProperties;

  return (
    <article
      style={style}
      className="group relative h-full rounded-[8px] border border-[var(--border)] hover:border-[var(--card)] bg-white overflow-hidden transition-colors duration-500"
    >
      {/* Default state */}
      <div className="relative h-full flex flex-col items-center text-center px-[5%] pt-5 pb-10 xl:pb-[2.1vw] transition-opacity duration-500 group-hover:opacity-0">
        <span className="w-[clamp(44px,2.5vw,110px)] aspect-square rounded-[6px] bg-[#F1F4F7] flex items-center justify-center mb-6 xl:mb-8">
          <Icon className="w-[50%] h-[50%]" style={{ color: item.color }} />
        </span>
        <p className="card-label font-plex font-semibold mb-2" style={{ color: item.color }}>
          {item.num} / {item.label}
        </p>
        <h3 className="card-title font-plex font-semibold text-[var(--heading)] mb-5 xl:mb-6">{item.title}</h3>
        <p className="card-text font-inter text-[var(--body)] text-left mb-8 flex-1">{item.text}</p>
        <span
          className="btn-text font-inter font-medium rounded-[10px] border px-[1.6em] py-[0.6em]"
          style={{ color: item.color, borderColor: item.color }}
        >
          Learn More
        </span>
      </div>

      {/* Hover state */}
      <div className="absolute inset-0 flex flex-col justify-center px-[5%] py-6 bg-[var(--card)] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span
          aria-hidden
          className="absolute top-[3%] right-[5%] font-plex font-bold leading-none text-white/20 text-[clamp(56px,5vw,220px)] translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
        >
          {item.num}
        </span>
        <span className="w-[clamp(36px,2vw,90px)] aspect-square rounded-[6px] border-2 border-white flex items-center justify-center mb-6">
          <Icon className="w-[55%] h-[55%]" />
        </span>
        <p className="card-label font-plex font-semibold mb-1">{item.label}</p>
        <h3 className="card-title font-plex font-semibold mb-4">{item.title}</h3>
        <p className="card-text font-inter text-white/95 mb-6">{item.text}</p>
        <Link
          href="#"
          className="self-center btn-text inline-flex items-center gap-2 font-inter font-medium rounded-[10px] bg-white px-[1.6em] py-[0.6em] hover:gap-3 transition-all"
          style={{ color: item.color }}
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}

export default function CoreCompetencies() {
  return (
    <section id="service" className="w-full bg-white py-16 sm:py-20 xl:py-[5.2vw]">
      <div className="custom-container">
        <div className="text-center max-w-[1000px] min-[1921px]:max-w-[55%] mx-auto mb-10 xl:mb-14" data-aos="fade-up">
          <Eyebrow className="mb-5">Core Competencies</Eyebrow>
          <h2 className="section-title font-plex font-semibold text-[var(--heading)] mb-5 xl:mb-6">
            End-to-End Medical Engineering
          </h2>
          <p className="section-text font-inter text-[var(--body)]">
            From cutting-edge biotechnological research and innovation to ISO 13485-certified cleanroom manufacturing,
            rigorous quality assurance, and reliable clinical field maintenance, we deliver end-to-end solutions that
            advance medical technology, ensure product excellence, and support better patient outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-[1.9vw]">
          {ITEMS.map((item, i) => (
            <div key={item.num} data-aos="fade-up" data-aos-delay={i * 100}>
              <CompetencyCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
