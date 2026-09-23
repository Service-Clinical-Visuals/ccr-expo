"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const newsItems = [
  {
    image: "/medical/eb-neuro/n1.png",
    title: "EB Neuro S.p.A. Joins Forces with Hanix Group - A New Era of Innovation in Neurology",
    excerpt: "Florence, Italy, March 28, 2024 - Today, the Hanix group has announced its total acquisition of the shares of EB Neuro S.p.A. EB Neuro S.p.A. is an Italian leading manufacturer of medical devices in the neurological field [...]",
    link: "#",
  },
  {
    image: "/medical/eb-neuro/n2.png",
    title: "The EMG System of the Future!",
    excerpt: "NExT is the revolution shaping a new world of electromyography, electroneurography, and evoked potentials, breaking the mold of traditional EMG systems with groundbreaking performance. The future is here, the future is Made in Italy, and the future is NExT—Towards NExT Evolution!",
    link: "#",
  },
];

const News = () => {
  return (
    <section id="news" className="w-full py-20 xl:py-28 bg-white overflow-hidden">
      <div className="custom-container">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 xl:mb-16" data-aos="fade-up">
          <Typography variant="h5" color="secondary" className="font-medium flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)] inline-block"></span> NEWS & EVENTS
          </Typography>

          <Typography variant="h2" color="dark" className="leading-tight mb-2 min-[3800px]:mb-6">
            Latest Insights & News
          </Typography>

          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[70%] min-[3800px]:max-w-5xl">
            Discover the latest news, innovations, product updates, and events from EB Neuro. Stay informed about our latest developments and advancements in neurodiagnostic technology.
          </Typography>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 min-[3800px]:gap-12">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Image */}
              <div className="w-full md:w-2/5 aspect-[4/3] md:aspect-auto shrink-0 bg-gray-50 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 min-[3800px]:p-10 flex-1 justify-between">
                <div className="flex flex-col gap-3 min-[3800px]:gap-6 mb-6 min-[3800px]:mb-10">
                  <Typography variant="h3" color="dark" className="font-bold leading-snug">
                    {item.title}
                  </Typography>

                  <Typography variant="p" color="muted" className="text-sm min-[3800px]:text-xl leading-relaxed line-clamp-4">
                    {item.excerpt}
                  </Typography>
                </div>

                <Link
                  href={item.link}
                  className="group flex items-center gap-2 text-[var(--color-secondary)] hover:opacity-80 transition-opacity w-fit"
                >
                  <Typography variant="span" color="secondary" className="font-semibold  text-sm min-[3800px]:text-xl">Read More</Typography>
                  <FiArrowRight className="text-lg min-[3800px]:text-2xl group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
