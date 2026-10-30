"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import Button from "./Button";

const news = [
  {
    title: "When Quality Counts: Why Your Test Instrument Deserves an OEM Calibration Service Program",
    image: "n1.webp",
  },
  {
    title: "About ISO 17025: Ensuring Competence in Testing and Calibration",
    image: "n2.webp",
  },
  {
    title: "The Importance of Defibrillator Testing",
    image: "n3.webp",
  },
];

const eyebrowLine =
  "block w-[54px] h-[2px] min-[2500px]:w-[80px] min-[2500px]:h-[3px] min-[3800px]:w-[108px] min-[3800px]:h-1 rounded-full bg-secondary shrink-0";

export default function News() {
  return (
    <section id="news" className="w-full py-12 sm:py-16 xl:py-[60px] min-[2500px]:py-28 min-[3800px]:py-40 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">
        {/* Heading */}
        <div
          className="flex flex-col items-center text-center mb-8 sm:mb-9 min-[2500px]:mb-14 min-[3800px]:mb-20"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3 mb-3 sm:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className={eyebrowLine} />
            <Typography variant="h5" color="muted" weight="medium" className="uppercase">
              Latest News &amp; Updates
            </Typography>
            <span className={eyebrowLine} />
          </div>
          <Typography variant="h2" color="dark" className="mb-5 sm:mb-7 min-[2500px]:mb-10 min-[3800px]:mb-14">
            Insights &amp; Innovations in Electrosurgical Testing
          </Typography>
          <Typography variant="p" color="dark" className="xl:max-w-[64%]">
            Stay updated with the latest product developments, testing innovations, industry insights, and company
            announcements shaping the future of electrosurgical technology and biomedical equipment safety.
          </Typography>
        </div>

        {/* News cards (450/396 on desktop; grow with content on smaller screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-[2.4%]">
          {news.map((item, index) => (
            <div
              key={item.title}
              className={`group flex flex-col items-center text-center w-full max-w-[450px] sm:max-w-none mx-auto xl:aspect-[450/396] bg-white border border-[#E5E7EB] rounded-[10px] min-[2500px]:rounded-[15px] min-[3800px]:rounded-[20px] shadow-[0px_2px_8px_rgba(0,0,0,0.12)] hover:shadow-[0px_6px_18px_rgba(0,0,0,0.16)] transition-shadow duration-300 p-3 min-[2500px]:p-[18px] min-[3800px]:p-6 ${
                index === 2 ? "sm:col-span-2 xl:col-span-1 sm:max-xl:w-[calc(50%-0.75rem)] sm:max-xl:mx-auto" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full aspect-[420/190] overflow-hidden rounded-[6px] min-[2500px]:rounded-[9px] min-[3800px]:rounded-[12px] shrink-0">
                <img
                  src={`/medical/fluke/${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>

              <div className="flex-1 flex items-center justify-center px-3 sm:px-6 min-[2500px]:px-9 min-[3800px]:px-12 py-4 min-[2500px]:py-6 min-[3800px]:py-8">
                <Typography variant="h3" color="dark">
                  {item.title}
                </Typography>
              </div>

              <div className="pb-2 min-[2500px]:pb-3 min-[3800px]:pb-4">
                <Button text="Read More" variant="primary" href="#news" showIcon={false} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-10 sm:mt-12 min-[2500px]:mt-20 min-[3800px]:mt-28">
          <Link href="#news">
            <Typography variant="p" color="none" className="text-[#E31B23] underline underline-offset-4 hover:opacity-80 transition-opacity">
              View All News
            </Typography>
          </Link>
        </div>
      </div>
    </section>
  );
}
