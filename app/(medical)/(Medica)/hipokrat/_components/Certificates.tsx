"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

export default function Certificates() {
  const cards = [
    {
      image: "/medical/hipokrat/u1.webp",
      title: "Hipokrat's 50+ Year Journey: Pioneering Domestic Orthopedic Implants",
      description:
        "Founded in 1972 by three visionary orthopedic surgeons and a technician, Hipokrat has transformed an ambitious domestic goal into a globally respected medical engineering enterprise.",
      linkText: "Read Full Story",
      href: "#news",
    },
    {
      image: "/medical/hipokrat/u2.webp",
      title: "Successful Transition to European Union MDR 2017/745 CE Certification",
      description:
        "Our entire orthopedic implant and surgical instrumentation portfolio has achieved full compliance with the European Union Medical Device Regulation (MDR), ensuring top-tier clinical safety.",
      linkText: "Certification Details",
      href: "#news",
    },
    {
      image: "/medical/hipokrat/u3.webp",
      title: "2005 Patent Registration Achievement",
      description:
        "Hipokrat was recognized for its innovation and patent development in biomedical engineering, marking an important milestone in its journey of advancing orthopedic technologies.",
      linkText: "Certification Details",
      href: "#news",
    },
  ];

  return (
    <section id="certificates" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-3 w-full xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography
            variant="h4"
            className="!text-[#0059A4] text-xs sm:text-sm font-bold tracking-widest uppercase"
          >
            LATEST UPDATES &amp; CORPORATE
          </Typography>

          <Typography
            variant="h2"
            color="dark"
            className="text-[#0B1C30] font-extrabold text-2xl sm:text-3xl lg:text-4xl"
          >
            Certificates &amp; International Certifications
          </Typography>

          <p className="text-sm sm:text-base text-[#414752] leading-relaxed mt-1">
            Our journey reflects significant milestones in biomedical regulations, corporate
            growth, and continuous advancements in surgical engineering. We remain committed to
            developing innovative orthopedic solutions that meet evolving clinical needs and support
            precision, quality, and reliability in modern healthcare.
          </p>
        </div>

        {/* Cards Flex Container (Horizontally centered for odd cards on tablet) */}
        <div className="flex flex-wrap justify-center gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 mt-2 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] min-[2500px]:lg:w-[calc(33.333%-2rem)] min-[3800px]:lg:w-[calc(33.333%-2.7rem)] flex flex-col bg-white rounded-2xl min-[2500px]:rounded-3xl border border-gray-100 shadow-[0px_2px_8px_rgba(60,64,67,0.12)] hover:shadow-lg transition-all duration-300 overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Card Image: Proportionately scaled height for big screens */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-gray-50 relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 min-[1920px]:p-8 min-[2500px]:p-12 min-[3800px]:p-16 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl min-[1920px]:text-2xl min-[2500px]:text-3xl min-[3800px]:text-4xl font-bold text-[#0B1C30] leading-snug mb-3 min-[2500px]:mb-5">
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base min-[1920px]:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl text-[#414752] leading-relaxed line-clamp-4 mb-6 min-[2500px]:mb-10">
                  {card.description}
                </p>

                {/* Link Action */}
                <div className="mt-auto pt-2">
                  <a
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base min-[1920px]:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl font-bold text-[#0059A4] group-hover:text-[#0082CB] transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
