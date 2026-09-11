"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Calendar } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    title: "PanOxyl Launches \"The Spot,\" A New Community Platform, and Hits the...",
    date: "27 August 2026",
    link: "#",
  },
  {
    title: "Revance and Teoxane Announce the FDA Approval of RHA Redensity®...",
    date: "20 August 2026",
    link: "#",
  },
  {
    title: "The PanOxyl® Brand Strengthens Market Leadership with Expansion...",
    date: "28 July 2026",
    link: "#",
  }
];

const Latest = () => {
  return (
    <section id="latest" className="w-full py-20 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-300 pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 max-w-[60%]">
            <div className="flex items-center gap-4">
              <Typography variant="h2" color="primary">
                Latest News & Updates
              </Typography>
              <div className="w-10 h-1 bg-primary hidden md:block"></div>
            </div>
            <Typography variant="p" color="dark" className="leading-relaxed text-sm">
              Stay Updated With The Latest Revance News, Product Launches, Company Updates, And Industry Developments. Explore Our Press Releases And Discover The Latest Innovations Across Aesthetics, Skincare, And Therapeutics.
            </Typography>
          </div>
          <div className="shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button text="Explore All News" href="#news" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">

          {/* Left Large Image */}
          <div className="w-full h-full min-h-[300px] lg:min-h-[500px] overflow-hidden shadow-md" data-aos="fade-right" data-aos-delay="200">
            {/* Aspect ratio requested 820/581 */}
            <img src="/revance/image.png" alt="Latest News Feature" className="w-full h-full object-cover object-center aspect-[820/581]" />
          </div>

          {/* Right Cards list */}
          <div className="flex flex-col gap-6 justify-between h-full" data-aos="fade-left" data-aos-delay="300">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white p-6 md:p-8 flex flex-col gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <Typography variant="h4" color="primary" className="leading-snug line-clamp-2">
                  {item.title}
                </Typography>

                <div className="flex items-center gap-2 text-black my-1">
                  <Calendar className="w-5 h-5" />
                  <Typography variant="span" className="text-xs text-black/70 font-medium">
                    {item.date}
                  </Typography>
                </div>

                <Link href={item.link} className="mt-2 text-black  w-fit">
                  <Typography variant="span" color="dark" className="font-semibold text-black font-bold underline underline-offset-4">
                    Read More &gt;
                  </Typography>
                </Link>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Latest;
