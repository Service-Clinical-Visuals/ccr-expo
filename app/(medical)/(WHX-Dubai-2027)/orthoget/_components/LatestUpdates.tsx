/**
 * Latest Updates / News Section - OrthoGet
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Centered Header Pattern:
 *    - Uses optimal desktop measure (`w-full max-w-full xl:max-w-[75%] mx-auto`).
 * 2. 3-Card Responsive Grid Layout:
 *    - 3 columns on desktop (>=1024px), 2 on tablet, 1 on mobile.
 * 3. Exact Design Tokens from Figma:
 *    - Imagery: `l1.webp`, `l2.webp`, `l3.webp` with rounded top corners.
 *    - Date Badge: Positioned at the bottom-right corner of the image card (`bg-[#5166D3]` with `rounded-tl-[10px]`).
 *    - Clean typography hierarchy with prominent "Read More" links in #0624BF with underline.
 */
"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const newsItems = [
  {
    image: "/medical/orthoget/l1.webp",
    date: "March 2023",
    title: "Our interview for Puls Biznesu",
    description:
      "We believe that leg lengthening can be more affordable and significantly more comfortable than before. We will soon begin clinical trials, which we strongly believe will confirm the effectiveness and innovation ...",
    link: "#news",
  },
  {
    image: "/medical/orthoget/l2.webp",
    date: "April 2023",
    title: "We invite you to the podcast June 2023",
    description:
      "ORTHOGET featured on Innowacyjni, highlighting medical innovation, advanced technology, and future healthcare solutions while showcasing its commitment to progress and excellence.",
    link: "#news",
  },
  {
    image: "/medical/orthoget/l3.webp",
    date: "March 2023",
    title: "our achievements in the press",
    description:
      "Orthoget gained media recognition in leading Polish publications, including Forbes and Puls Biznesu, showcasing its innovative limb-lengthening technology and potential to advance orthopedic treatment.",
    link: "#news",
  },
];

const LatestUpdates = () => {
  return (
    <section id="news" className="w-full py-16 xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Centered Section Header */}
        <div
          className="text-center w-full max-w-[90%] xl:max-w-[70%] mx-auto space-y-3 sm:space-y-4"
          data-aos="fade-up"
        >
          <Typography variant="tag" color="primary">
            _ Latest Updates
          </Typography>

          <Typography
            variant="h2"
            color="secondary"
            className="text-[#202020]"
          >
            Discover Our Progress in Orthopedic Innovation
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="font-dmsans leading-relaxed text-[#404040] w-full xl:max-w-[70%] mx-auto"
          >
            Stay connected with OrthoGet as we share the latest company milestones, technological advancements, research developments, patent achievements, and industry events shaping the future of orthopedic care.
          </Typography>
        </div>

        {/* 3 News Cards Grid */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 mt-12 sm:mt-16 min-[2500px]:mt-20 min-[3800px]:mt-28"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[10px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[26px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-200/80 md:last:col-span-2 md:last:w-[calc(50%-1rem)] md:last:mx-auto lg:last:col-span-1 lg:last:w-full lg:last:mx-0"
            >
              {/* Card Image Container with Date Corner Pill */}
              <div className="relative w-full aspect-[516/300] bg-gray-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Date Badge: bottom-right corner */}
                <div className="absolute bottom-0 right-0 bg-[#5166D3] text-white px-3.5 py-1.5 min-[2500px]:px-6 min-[2500px]:py-2.5 min-[3800px]:px-8 min-[3800px]:py-4 rounded-tl-[10px] min-[2500px]:rounded-tl-[16px] min-[3800px]:rounded-tl-[22px] shadow-md flex items-center justify-center">
                  <Typography variant="p" color="white" className="font-exo2 font-semibold !m-0 !p-0 leading-none">
                    {item.date}
                  </Typography>
                </div>
              </div>

              {/* Card Details Content */}
              <div className="p-6 sm:p-7 min-[2500px]:p-10 min-[3800px]:p-14 flex flex-col flex-1 gap-3">
                <Typography variant="h3" color="secondary" className="leading-snug group-hover:text-[#0624BF] transition-colors">
                  {item.title}
                </Typography>

                <Typography variant="p" color="muted" className="flex-1">
                  {item.description}
                </Typography>

                <div className="pt-2">
                  <Link
                    href={item.link}
                    className="button inline-block text-[#0624BF] underline underline-offset-4 hover:text-[#051ca0] transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestUpdates;

