"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Typography from "./Typography";

interface NewsItem {
  title: string;
  text: string;
  image: string;
}

const featured: NewsItem = {
  title: "Innovation and growth: our story on Valore Medico",
  text: "We are happy to share that Cardioline was featured in the Valore Medico magazine, published by RCS Corriere della Sera, with an article dedicated to our journey and the innovative solutions we bring to cardiac diagnostics.",
  image: "n1.webp",
};

const news: NewsItem[] = [
  {
    title: "Cardioline Acquires Cardios",
    text: "The strategic combination combines Cardioline’s global reach and proven cardiac technology with Cardios’ expertise in remote cardiac monitoring.",
    image: "n2.webp",
  },
  {
    title: "From Devices to Solutions: Innovating Cardiac Diagnostics",
    text: "Cardioline was featured in Business Focus Magazine, an international magazine, with the article “The Beating Heart of Better Cardiac Care”.",
    image: "n3.webp",
  },
];

const cardClass =
  "group grid grid-cols-1 bg-white border border-[#EEEEEE] shadow-[0px_2px_10px_rgba(0,0,0,0.12)] hover:shadow-[0px_6px_18px_rgba(0,0,0,0.16)] transition-shadow duration-300 overflow-hidden";

function ArrowCircle() {
  return (
    <span className="self-end flex items-center justify-center w-6 h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 rounded-full border border-secondary text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
      <FiArrowRight className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={2} />
    </span>
  );
}

function CardImage({ item }: { item: NewsItem }) {
  return (
    <div className="w-full aspect-[600/471] sm:aspect-auto sm:h-full overflow-hidden">
      <img
        src={`/medical/cardioline/${item.image}`}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
      />
    </div>
  );
}

export default function News() {
  return (
    <section id="news" className="w-full bg-white py-12 sm:py-16  min-[2500px]:py-32 min-[3800px]:py-44 overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10 min-[2500px]:mb-14 min-[3800px]:mb-20" data-aos="fade-up">
          <Typography variant="h5" color="secondary" weight="medium" className="mb-3 min-[2500px]:mb-5 min-[3800px]:mb-7">
            News &amp; Insights
          </Typography>
          <Typography variant="h2" color="dark" className="mb-4 sm:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
            The Latest from Cardioline
          </Typography>
          <Typography variant="p" color="dark" className="xl:max-w-[64%]">
            Stay up to date with Cardioline’s latest innovations, company announcements, product developments, and
            industry events shaping the future of cardiac diagnostics.
          </Typography>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10 min-[2500px]:gap-16 min-[3800px]:gap-20">
          {/* Featured story */}
          <Link href="#news" className={`${cardClass} sm:grid-cols-2`} data-aos="fade-right">
            <CardImage item={featured} />
            <div className="flex flex-col justify-center p-4 sm:p-5 min-[2500px]:p-8 min-[3800px]:p-11">
              <Typography variant="h3" color="dark" weight="semibold" className="mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
                {featured.title}
              </Typography>
              <Typography variant="p" color="dark" className="leading-[1.9] mb-5 min-[2500px]:mb-8 min-[3800px]:mb-11">
                {featured.text}
              </Typography>
              <ArrowCircle />
            </div>
          </Link>

          {/* Two smaller stories */}
          <div className="grid grid-cols-1 xl:grid-rows-2 gap-6 xl:gap-5 min-[2500px]:gap-8 min-[3800px]:gap-11">
            {news.map((item, index) => (
              <Link
                key={item.title}
                href="#news"
                className={`${cardClass} sm:grid-cols-[36%_1fr]`}
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                <CardImage item={item} />
                <div className="flex flex-col justify-center p-4 sm:p-5 min-[2500px]:p-8 min-[3800px]:p-11">
                  <Typography variant="h3" color="dark" weight="semibold" className="mb-3 min-[2500px]:mb-5 min-[3800px]:mb-7">
                    {item.title}
                  </Typography>
                  <Typography variant="p" color="dark" className="line-clamp-2 mb-2 min-[2500px]:mb-4 min-[3800px]:mb-6">
                    {item.text}
                  </Typography>
                  <ArrowCircle />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-8 sm:mt-10 min-[2500px]:mt-16 min-[3800px]:mt-20">
          <Link href="#news">
            <Typography variant="h5" color="secondary" weight="semibold" className="underline underline-offset-4">
              Read All
            </Typography>
          </Link>
        </div>
      </div>
    </section>
  );
}
