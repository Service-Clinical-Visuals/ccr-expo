"use client";

import React from "react";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Typography from "./Typography";

const news = [
  {
    date: "9–12 February 2026",
    title: "Riester at WHX Dubai 2026 – Advancing Clinical Excellence",
    text: "Riester is proud to announce our participation at World health expo Dubai 2026 (formerly Arab Health), taking place from 9–12 February at the new Dubai Exhibition Centre (DEC). Visit us at Stand N29.C19 and experience the future of medical diagnostics.",
    image: "news1.webp",
    position: "object-left",
  },
  {
    date: "19 April 2023",
    title: "Rudolf Riester GmbH Celebrates Its 75th Anniversary",
    text: "As Rudolf Riester GmbH celebrates its 75th company anniversary this year, it is a time to reflect on the remarkable journey of Riester and the significant milestones it has achieved through decades of innovation and excellence over the years.",
    image: "news2.webp",
    position: "object-[62%_center]",
  },
];

export default function News() {
  return (
    <section id="news" className="w-full py-12 sm:py-16 lg:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center mb-8 sm:mb-10 2xl:mb-10 min-[2500px]:mb-14 min-[3800px]:mb-20"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-3 2xl:gap-4 min-[2500px]:gap-5 min-[3800px]:gap-7 mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-5 2xl:w-6 min-[2500px]:w-9 min-[3800px]:w-12 h-[3px] min-[2500px]:h-1 min-[3800px]:h-1.5 rounded-full bg-primary" />
            <Typography variant="h4" color="primary" className="uppercase">
              News &amp; Events
            </Typography>
          </div>
          <Typography variant="h2" color="dark" className="mb-4 sm:mb-5 2xl:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
            Stay Connected with Riester
          </Typography>
          <Typography variant="p" color="muted" className="max-w-[960px] 2xl:max-w-[960px] min-[2500px]:max-w-[1400px] min-[3800px]:max-w-[1900px]">
            Discover the latest news, company updates, product developments, exhibitions, and events from Riester.
            Stay informed about the innovations and activities shaping the future of professional healthcare
            diagnostics.
          </Typography>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 2xl:gap-9 min-[2500px]:gap-12 min-[3800px]:gap-16">
          {news.map((item, index) => (
            <article
              key={item.title}
              className="group flex flex-col sm:flex-row bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.1)] overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full sm:w-[43%] shrink-0 aspect-[355/424] sm:aspect-auto sm:min-h-full overflow-hidden">
                <img
                  src={`/medical/rudolf/${item.image}`}
                  alt={item.title}
                  className={`w-full h-full object-cover ${item.position} group-hover:scale-[1.03] transition-transform duration-500`}
                />
              </div>

              <div className="flex-1 flex flex-col p-5 sm:p-6 2xl:p-8 min-[2500px]:p-11 min-[3800px]:p-16">
                <div className="flex items-center gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 mb-4 2xl:mb-5 min-[2500px]:mb-7 min-[3800px]:mb-10">
                  <FaCalendarAlt className="w-5 h-5 2xl:w-6 2xl:h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 text-primary shrink-0" />
                  <Typography variant="span" color="dark">
                    {item.date}
                  </Typography>
                </div>

                <Typography variant="h4" color="dark" className="uppercase leading-[1.9] mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
                  {item.title}
                </Typography>

                <Typography variant="p" color="muted" className="leading-[1.75]">
                  {item.text}
                </Typography>

                <Link
                  href="#news"
                  className="self-end flex items-center gap-2 min-[3800px]:gap-4 mt-6 2xl:mt-8 min-[2500px]:mt-11 min-[3800px]:mt-16 text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  <Typography variant="span" color="primary">
                    Continue Reading
                  </Typography>
                  <FiArrowRight className="w-5 h-5 2xl:w-6 2xl:h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-11 min-[3800px]:h-11 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.25} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
