"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "./Eyebrow";

const PROJECTS = [
  { title: "Micro-Jet-N", image: "/medical/thora/i1.webp", href: "#" },
  { title: "The Monsoon", image: "/medical/thora/i2.webp", href: "#" },
  { title: "Nasalt", image: "/medical/thora/i3.webp", href: "#" },
];

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <Link
      href={project.href}
      aria-label={`${project.title} – Learn More`}
      className="group relative block w-full aspect-[516/450] rounded-[8px] overflow-hidden bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500">
        <span className="eyebrow absolute top-[7%] left-[5%] rounded-full bg-[var(--primary)] text-white font-plex font-semibold px-[1.6em] py-[0.5em] -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {project.title}
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
          <span className="w-[clamp(36px,2.1vw,90px)] aspect-square rounded-full bg-white border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
            <ArrowUpRight className="w-[55%] h-[55%]" />
          </span>
          <span className="btn-text font-inter font-semibold text-white">Learn More</span>
        </div>
      </div>
    </Link>
  );
}

export default function InnovationJourney() {
  return (
    <section id="projects" className="w-full bg-white py-16 sm:py-20 xl:py-[5vw]">
      <div className="custom-container">
        <div className="text-center max-w-[1030px] min-[1921px]:max-w-[55%] mx-auto mb-10 xl:mb-14" data-aos="fade-up">
          <Eyebrow className="mb-5">Our Innovation Journey</Eyebrow>
          <h2 className="section-title font-plex font-semibold text-[var(--heading)] mb-5 xl:mb-8">
            Shaping the Future of Medical Technology
          </h2>
          <p className="section-text font-inter text-[var(--body)]">
            Explore our ongoing projects and innovations focused on advancing medical technology, enhancing clinical
            performance, and delivering smarter healthcare solutions. Through research, engineering excellence, and
            clinical collaboration, we develop reliable medical technologies that address evolving healthcare needs and
            improve patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-[1.9vw]">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className={`w-full max-w-[520px] mx-auto lg:max-w-none ${i === 2 ? "sm:col-span-2 sm:max-w-[calc(50%-0.75rem)] lg:col-span-1 lg:max-w-none" : ""}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
