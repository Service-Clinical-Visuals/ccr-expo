"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

export default function ScientificBlogs() {
  const blogs = [
    {
      image: "/medical/hipokrat/b1.png",
      title: "Bone & Soft Tissue Tumors – Basic Course",
      description:
        "Sponsored by Hipokrat, a basic course on bone and soft tissue tumors was held in Ankara with the participation of Türkiye's leading orthopedic surgeons.",
      linkText: "Read All",
      href: "#news",
    },
    {
      image: "/medical/hipokrat/b2.png",
      title: "World Arthritis Day Symposium",
      description:
        "The World Arthritis Day Symposium, which we sponsored, was held on October 12, 2019, at Almana General Hospitals Dammam, Saudi Arabia.",
      linkText: "Read All",
      href: "#news",
    },
    {
      image: "/medical/hipokrat/b3.png",
      title: "Commemoration Meeting",
      description:
        "We held a memorial meeting for Dr. Cevdet Alptekin, the founder of the Hippocratic Orthodontics Association and one of Turkey's first orthopedic specialists.",
      linkText: "Read All",
      href: "#news",
    },
  ];

  return (
    <section id="news" className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">
        {/* Section Header */}
        <div
          className="flex flex-col items-center text-center gap-3 w-full xl:max-w-[70%] mx-auto"
          data-aos="fade-up"
        >
          <Typography
            variant="h4"
            className="!text-[#0059A4] text-xs sm:text-sm font-bold tracking-widest uppercase"
          >
            ACADEMIC &amp; SCIENTIFIC COLLABORATION
          </Typography>

          <Typography
            variant="h2"
            color="dark"
            className="text-[#0B1C30] font-extrabold text-2xl sm:text-3xl lg:text-4xl"
          >
            Scientific Blogs &amp; Congresses
          </Typography>

          <p className="text-sm sm:text-base text-[#414752] leading-relaxed mt-1">
            Hipokrat showcases its innovative surgical technologies and orthopedic solutions at
            national and international congresses, symposia, and cadaveric workshops. These events
            provide opportunities to present new developments, share clinical knowledge, demonstrate
            surgical techniques, and engage with orthopedic professionals from around the world.
          </p>
        </div>

        {/* Blogs Flex Container (Horizontally centered for odd cards on tablet) */}
        <div className="flex flex-wrap justify-center gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 mt-2 w-full">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] min-[2500px]:lg:w-[calc(33.333%-2rem)] min-[3800px]:lg:w-[calc(33.333%-2.7rem)] flex flex-col bg-white rounded-2xl min-[2500px]:rounded-3xl border border-gray-100 shadow-[0px_2px_8px_rgba(60,64,67,0.12)] hover:shadow-lg transition-all duration-300 overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Blog Image: Proportionately scaled height for big screens */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-gray-50 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 min-[1920px]:p-8 min-[2500px]:p-12 min-[3800px]:p-16 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl min-[1920px]:text-2xl min-[2500px]:text-3xl min-[3800px]:text-4xl font-bold text-[#0B1C30] leading-snug mb-3 min-[2500px]:mb-5">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base min-[1920px]:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl text-[#414752] leading-relaxed line-clamp-3 mb-6 min-[2500px]:mb-10">
                  {item.description}
                </p>

                {/* Read All Link */}
                <div className="mt-auto pt-2">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-sm sm:text-base min-[1920px]:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl font-bold text-[#0059A4] group-hover:text-[#0082CB] transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Action */}
        <div className="flex justify-end pt-2 min-[2500px]:pt-6" data-aos="fade-up">
          <a
            href="#news"
            className="inline-flex items-center gap-1.5 text-sm sm:text-base min-[1920px]:text-lg min-[2500px]:text-2xl min-[3800px]:text-3xl font-semibold text-[#0059A4] hover:text-[#0082CB] underline underline-offset-4 transition-colors group"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 min-[1920px]:w-5 min-[1920px]:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
}
