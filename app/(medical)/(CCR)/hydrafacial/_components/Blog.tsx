"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Typography from "./Typography";

const posts = [
  {
    image: "/medical/hydrafacial/d2.png",
    title: "Good Hair Days Ahead: The Causes and Treatments for Poor Scalp Health",
    body: "So, what's going on in that head of yours? Or, more to the point, underneath that head of hair? If you've started to notice hair loss and thinning hair, don't worry — you're not alone.",
    href: "#",
  },
  {
    image: "/medical/hydrafacial/d1.png",
    title: "Let's Demystify Dry Skin and Oily Skin",
    body: "Oily. Dry. Dehydrated. When it comes to your skin, what are you working with? It can be complicated to figure out exactly what's going on there, we know. Because each skin type has different needs, it's important to assess and determine your skin.",
    href: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="w-full py-16 md:py-20 bg-white overflow-hidden relative">
      {/* Decorative blobs */}
      <img
        src="/medical/hydrafacial/bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-0 w-64 lg:w-80 max-w-[45%] rotate-180 opacity-70 hidden sm:block"
      />
      <img
        src="/medical/hydrafacial/bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 right-0 w-64 lg:w-80 max-w-[45%] opacity-70 hidden sm:block"
      />

      <div className="custom-container relative z-10 flex flex-col items-center gap-5 px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-wrap items-center justify-center gap-x-2" data-aos="fade-up">
          <Typography variant="h2" color="dark" weight="bold">
            Recent
          </Typography>
          <Typography variant="h2" color="primary" weight="bold">
            Blogs
          </Typography>
        </div>

        {/* Sub-heading */}
        <Typography
          variant="p"
          color="muted"
          className="leading-relaxed xl:max-w-[60%] text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Explore expert skincare tips, treatment insights, beauty trends, and the latest innovations from HydraFacial. Discover helpful advice and learn more about achieving healthier, hydrated, radiant-looking skin.
        </Typography>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-4">
          {posts.map(({ image, title, body, href }, i) => (
            <div
              key={title}
              className="flex flex-col sm:flex-row bg-white border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Card Image — left portion */}
              <div className="w-full sm:w-[45%] lg:w-[42%] aspect-[406/442] shrink-0 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card content — right portion */}
              <div className="flex flex-col w-full sm:w-[55%] lg:w-[58%] justify-center gap-4 p-6 sm:p-8 relative">
                <Typography variant="h3" color="dark" weight="bold" className="text-lg sm:text-xl leading-snug pr-4">
                  {title}
                </Typography>
                <Typography variant="p" color="muted" className="leading-relaxed text-sm">
                  {body}
                </Typography>
                <a
                  href={href}
                  className="inline-flex items-center gap-1.5 group mt-2 w-fit"
                >
                  <span className="text-[#0b81d7] font-semibold text-sm group-hover:opacity-80 transition-opacity">
                    Read More
                  </span>
                  <ArrowRight
                    className="w-4 h-4 text-[#0b81d7] group-hover:translate-x-1 transition-transform duration-200"
                    strokeWidth={2}
                  />
                </a>

                {/* Decorative Vertical Divider — sm+ only */}
                <div className="hidden sm:block absolute top-10 right-6 w-0.5 h-20 bg-[#0b81d7] rounded-full opacity-90" />
              </div>
            </div>
          ))}
        </div>

        {/* View All — right-aligned */}
        <div className="w-full flex justify-end mt-2">
          <a href="#" className="inline-flex items-center gap-1 group">
            <span className="text-[#0b81d7] font-semibold text-sm underline underline-offset-4 decoration-2 group-hover:opacity-80 transition-opacity">
              View All
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Blog;

