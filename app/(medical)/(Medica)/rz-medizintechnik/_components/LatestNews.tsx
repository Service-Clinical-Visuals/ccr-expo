"use client";

import React, { useState } from "react";
import Link from "next/link";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

export default function LatestNews() {
  const [activeDot, setActiveDot] = useState(0);

  const newsItems = [
    {
      title: "Traveling together,\ncelebrating together",
      description:
        "Our annual RZ summer party took place last weekend under brilliant sunshine. Together, we hiked from RZ Medizintechnik to the Bumbishütte in Immendingen, where a relaxing day awaited us with good food, lots of conversation, and plenty of fun. The grill offered not only classic barbecue fare but also delicious shish kebabs.",
      image: "/medical/rz-medizintechnik/news1.png",
      href: "#news",
    },
    {
      title: "Licensed packaging – reduced environmental impact.",
      description:
        'RZ Medizintechnik GmbH is registered in the LUCID packaging register and participates in the dual system "Der Grüne Punkt" for its sales packaging subject to mandatory participation. In doing so, we contribute to the legally compliant collection and recycling of packaging in Germany.',
      image: "/medical/rz-medizintechnik/news2.png",
      href: "#news",
    },
  ];

  return (
    <section
      id="news"
      className="w-full bg-white pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-0 overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center">
        <div
          className="xl:max-w-[70%] max-w-[90%] mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-5"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <Typography
            variant="h2"
            color="dark"
            className="font-semibold leading-tight tracking-tight text-center"
          >
            Latest News &amp; Insights
          </Typography>

          <Typography
            variant="p"
            color="secondary"
            className="leading-relaxed text-center"
          >
            From precision instruments to advanced visualization systems, RZ
            Medizintechnik offers a comprehensive portfolio designed to support
            healthcare professionals across a wide range of surgical
            specialties.
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10 w-full mt-12 sm:mt-14 lg:mt-16">
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row bg-white rounded-[8px] overflow-hidden shadow-[0px_1px_2px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] hover:shadow-lg transition-all duration-300 relative group min-h-[370px] sm:min-h-[390px] xl:min-h-[410px] min-[2500px]:min-h-[440px] min-[3800px]:min-h-[480px]"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              data-aos-duration="800"
            >
              <div className="w-full sm:w-[48%] h-[250px] sm:h-auto shrink-0 relative overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="w-full sm:w-[52%] p-6 sm:p-7 xl:p-8 min-[2500px]:p-10 min-[3800px]:p-12 flex flex-col justify-between relative bg-white">
                <div className="absolute top-6 sm:top-8 xl:top-9 right-6 sm:right-7 xl:right-8 min-[2500px]:right-10 min-[3800px]:right-12 w-[3px] h-[100px] sm:h-[120px] min-[2500px]:h-[140px] min-[3800px]:h-[160px] bg-[#0099A1] rounded-full" />

                <div className="space-y-3 sm:space-y-4 pr-5">
                  <h3 className="font-primary font-bold text-[#000000] text-[18px] sm:text-[20px] min-[2500px]:text-[26px] min-[3800px]:text-[32px] leading-[26px] sm:leading-[28px] min-[2500px]:leading-[34px] min-[3800px]:leading-[42px] whitespace-pre-line">
                    {item.title}
                  </h3>

                  <p className="font-primary font-normal text-[#111111] text-[14px] sm:text-[15px] xl:text-[16px] min-[2500px]:text-[20px] min-[3800px]:text-[26px] leading-[22px] sm:leading-[24px] min-[2500px]:leading-[32px] min-[3800px]:leading-[40px]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 sm:pt-7">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 font-['Sora'] font-semibold text-[15px] sm:text-[16px] min-[2500px]:text-[22px] min-[3800px]:text-[28px] leading-[24px] min-[2500px]:leading-[32px] text-[#0099A1] hover:text-[#00828a] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-7 min-[3800px]:h-7" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2.5 mt-10 sm:mt-12">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveDot(dot)}
              className={`w-3 h-3 min-w-3 min-h-3 rounded-full transition-all duration-300 cursor-pointer ${activeDot === dot
                ? "bg-[#0099A1]"
                : "bg-[#D9D9D9]"
                }`}
              aria-label={`Page ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}