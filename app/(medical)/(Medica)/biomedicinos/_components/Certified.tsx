"use client";

import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, Users, Handshake, CloudDownload } from "lucide-react";
import Typography from "./Typography";

export default function Certified() {
  const cards = [
    {
      icon: Award,
      title: "Recognized Excellence",
      text: "Acknowledged for our contribution to the medical industry and community, demonstrating dedication, excellence, innovation, service, compassion, leadership, integrity, and meaningful impact.",
    },
    {
      icon: ShieldCheck,
      title: "Certified Quality",
      text: "Complying with international standards for safe and reliable medical equipment, ensuring quality, performance, safety, consistency, durability, and patient confidence.",
    },
    {
      icon: Users,
      title: "Global Participation",
      text: "Engaging in leading exhibitions and forums to build meaningful collaborations, exchange industry insights, showcase innovative solutions, connect with professionals, and explore new opportunities.",
    },
    {
      icon: Handshake,
      title: "Stronger Partnership",
      text: "Working together with industry leaders for a healthier tomorrow, fostering innovation, sharing expertise, advancing healthcare solutions, strengthening partnerships, improving accessibility.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="custom-container flex flex-col items-center">
        <div className="text-center mb-12 min-[2500px]:mb-16">
          <Typography variant="h6" color="primary" className="mb-2" data-aos="fade-up">
            Certified Quality
          </Typography>
          <Typography variant="h2" color="dark" className="mb-4 mx-auto" data-aos="fade-up" data-aos-delay="100">
            Recognized Standards Supporting Safe, Reliable, and Responsible Medical Equipment Development
          </Typography>
          <Typography variant="p" color="dark" className="text-gray-700 max-w-3xl 2xl:max-w-[70%] min-[2500px]:max-w-[50%] mx-auto" data-aos="fade-up" data-aos-delay="200">
            BM Technica presents its Rewards and Certificates as part of its company profile and quality commitment. The About page states that the company meets standards covering the modern and safe design, development, production, and sale of medical equipment, reinforcing its focus on responsible manufacturing and dependable clinical technology.
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-[2500px]:gap-16 w-full items-stretch">
          {/* Left Grid */}
          <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 min-[2500px]:gap-8">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="group flex flex-col p-6 min-[2500px]:p-8 border border-gray-200 shadow-sm rounded-xl bg-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={100 + idx * 100}
              >
                <div className="w-12 h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-20 min-[3800px]:h-20 bg-blue-50 text-[var(--color-primary)] group-hover:bg-white group-hover:text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-sm">
                  <card.icon className="w-6 h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 text-[var(--color-primary)] transition-colors duration-300" />
                </div>
                <Typography
                  variant="h4"
                  color="none"
                  className="text-[var(--color-primary)] group-hover:text-white mb-3 transition-colors duration-300"
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="p"
                  color="none"
                  className="text-gray-700 group-hover:text-white transition-colors duration-300"
                >
                  {card.text}
                </Typography>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div
            className="lg:col-span-5 xl:col-span-3 w-full h-full min-h-[460px] md:min-h-[500px] lg:min-h-0 border border-gray-300 rounded-xl bg-white flex items-center justify-center relative overflow-hidden group hover:shadow-md transition-all duration-300"
            data-aos="fade-left"
          >
            <div className="w-full h-full min-h-[440px] md:min-h-[480px] lg:min-h-0 relative flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/medical/biomedicinos/c1.webp"
                alt="Certificate"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10">
                <a
                  href="/medical/biomedicinos/c1.webp"
                  download="Biomedicinos-Technika-Certificate.webp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white text-white font-medium text-sm md:text-base bg-white/10 hover:bg-primary active:scale-95 transform group-hover:scale-100 scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>Download</span>
                  <CloudDownload className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
