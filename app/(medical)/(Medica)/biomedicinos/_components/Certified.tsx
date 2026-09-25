"use client";

import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, Users, Handshake } from "lucide-react";
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
          <Typography variant="h2" color="dark" className="mb-4  mx-auto" data-aos="fade-up" data-aos-delay="100">
            Recognized Standards Supporting Safe, Reliable, and Responsible Medical Equipment Development
          </Typography>
          <Typography variant="p" color="dark" className="text-gray-700 max-w-3xl 2xl:max-w-[70%] min-[2500px]:max-w-[50%] mx-auto" data-aos="fade-up" data-aos-delay="200">
            BM Technica presents its Rewards and Certificates as part of its company profile and quality commitment. The About page states that the company meets standards covering the modern and safe design, development, production, and sale of medical equipment, reinforcing its focus on responsible manufacturing and dependable clinical technology.
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-[2500px]:gap-16 w-full items-start">
          {/* Left Grid */}
          <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 min-[2500px]:gap-8">
            {cards.map((card, idx) => (
              <div key={idx} className="flex flex-col p-6 min-[2500px]:p-8 border border-gray-100 shadow-sm rounded-xl bg-white hover:shadow-md transition-shadow" data-aos="fade-up" data-aos-delay={100 + idx * 100}>
                <div className="w-12 h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-20 min-[3800px]:h-20 bg-blue-50 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10" />
                </div>
                <Typography variant="h4" color="primary" className="mb-3">
                  {card.title}
                </Typography>
                <Typography variant="p" color="dark" className="text-gray-700">
                  {card.text}
                </Typography>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 xl:col-span-4 w-full h-full relative min-h-full rounded-xl overflow-hidden  p-2" data-aos="fade-left">
            <Image
              src="/medical/biomedicinos/c1.png"
              alt="Certificate"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
