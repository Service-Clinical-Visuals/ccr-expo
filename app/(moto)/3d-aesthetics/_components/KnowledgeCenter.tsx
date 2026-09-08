"use client";

import React from "react";
import Container from "./Container";
import Button from "./Button";
import { Calendar } from "lucide-react";

const articles = [
  {
    image: "/moto/3d-aesthetics/news1.png",
    date: "December 11, 2023",
    title: "Sally Dynevor and Helen Skelton – the latest celebrities loving 3D EMlift",
    desc: "Sally Dynevor, who plays Sally Webster in Coronation Street and Helen Skelton, Countryfile host, visited One Aesthetics Studio in Alderley Edge, owned by Dr Jonquille,",
  },
  {
    image: "/moto/3d-aesthetics/news2.png",
    date: "May 20, 2024",
    title: "What are the benefits of introducing 3D Vjuve into your business?",
    desc: "CO2 fractional laser skin resurfacing is a cutting-edge treatment that is becoming increasingly popular in the beauty industry. If you own a clinic, this treatment could be a valuable addition to your offering",
  },
];

const KnowledgeCenter = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="news">
      <Container>

        {/* Header Row */}
        <div className="flex items-start justify-between mb-10">
          <div data-aos="fade-right">
            <span className="text-accent font-semibold tracking-wide text-sm uppercase">
              News
            </span>
            <h2 className="heading mt-1">
              News &amp; Press
            </h2>
            <div className="h-[3px] w-14 bg-accent mt-3" />
          </div>
          <Button
            text="View All"
            href="#news"
            variant="secondary"
            className="navlink text-white! shrink-0"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="flex flex-col sm:flex-row gap-6 border border-gray-100 rounded-lg overflow-hidden shadow-sm p-3"
            >
              {/* Image */}
              <div className="w-full sm:w-[42%] shrink-0 overflow-hidden rounded">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col py-2 pr-2">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <Calendar size={16} />
                  <span className="content text-[14px]! leading-none!">{article.date}</span>
                </div>
                <h3 className="subheading font-semibold text-[20px]! leading-[26px]! mb-2">
                  {article.title}
                </h3>
                <p className="content text-[15px]! leading-[22px]! mb-4 flex-1">
                  {article.desc}
                </p>
                <Button
                  text="Read More"
                  href="#news"
                  variant="secondary"
                  className="navlink text-white! self-start"
                />
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default KnowledgeCenter;
